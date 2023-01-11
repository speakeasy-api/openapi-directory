package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalDiskInitializeParams
 * Input only. Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot disks or local SSDs attached to the new runtime. This property is mutually exclusive with the source property; you can only define one or the other, but not both.
**/
public class LocalDiskInitializeParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LocalDiskInitializeParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskName")
    public String diskName;
    public LocalDiskInitializeParams withDiskName(String diskName) {
        this.diskName = diskName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeGb")
    public String diskSizeGb;
    public LocalDiskInitializeParams withDiskSizeGb(String diskSizeGb) {
        this.diskSizeGb = diskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public LocalDiskInitializeParamsDiskTypeEnum diskType;
    public LocalDiskInitializeParams withDiskType(LocalDiskInitializeParamsDiskTypeEnum diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public LocalDiskInitializeParams withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}