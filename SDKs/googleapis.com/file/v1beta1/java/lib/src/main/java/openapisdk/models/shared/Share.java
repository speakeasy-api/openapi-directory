package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Share
 * A Filestore share.
**/
public class Share {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityGb")
    public String capacityGb;
    public Share withCapacityGb(String capacityGb) {
        this.capacityGb = capacityGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Share withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Share withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Share withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountName")
    public String mountName;
    public Share withMountName(String mountName) {
        this.mountName = mountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Share withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsExportOptions")
    public NfsExportOptions[] nfsExportOptions;
    public Share withNfsExportOptions(NfsExportOptions[] nfsExportOptions) {
        this.nfsExportOptions = nfsExportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ShareStateEnum state;
    public Share withState(ShareStateEnum state) {
        this.state = state;
        return this;
    }
}