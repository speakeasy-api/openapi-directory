package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShareInput
 * A Filestore share.
**/
public class ShareInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityGb")
    public String capacityGb;
    public ShareInput withCapacityGb(String capacityGb) {
        this.capacityGb = capacityGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ShareInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ShareInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountName")
    public String mountName;
    public ShareInput withMountName(String mountName) {
        this.mountName = mountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsExportOptions")
    public NfsExportOptions[] nfsExportOptions;
    public ShareInput withNfsExportOptions(NfsExportOptions[] nfsExportOptions) {
        this.nfsExportOptions = nfsExportOptions;
        return this;
    }
}