package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FindingBulkRetest {
    @JsonProperty("ids")
    public String[] ids;
    public FindingBulkRetest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan_profile")
    public ScanProfileEnum scanProfile;
    public FindingBulkRetest withScanProfile(ScanProfileEnum scanProfile) {
        this.scanProfile = scanProfile;
        return this;
    }
}