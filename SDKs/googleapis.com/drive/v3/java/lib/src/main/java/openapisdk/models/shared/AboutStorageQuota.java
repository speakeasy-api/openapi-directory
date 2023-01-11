package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AboutStorageQuota
 * The user's storage quota limits and usage. All fields are measured in bytes.
**/
public class AboutStorageQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public String limit;
    public AboutStorageQuota withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public String usage;
    public AboutStorageQuota withUsage(String usage) {
        this.usage = usage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageInDrive")
    public String usageInDrive;
    public AboutStorageQuota withUsageInDrive(String usageInDrive) {
        this.usageInDrive = usageInDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageInDriveTrash")
    public String usageInDriveTrash;
    public AboutStorageQuota withUsageInDriveTrash(String usageInDriveTrash) {
        this.usageInDriveTrash = usageInDriveTrash;
        return this;
    }
}