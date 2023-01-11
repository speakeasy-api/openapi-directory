package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceInput
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
public class SourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aws")
    public AwsSourceDetailsInput aws;
    public SourceInput withAws(AwsSourceDetailsInput aws) {
        this.aws = aws;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SourceInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public SourceInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public SourceInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmware")
    public VmwareSourceDetails vmware;
    public SourceInput withVmware(VmwareSourceDetails vmware) {
        this.vmware = vmware;
        return this;
    }
}