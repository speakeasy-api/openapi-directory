package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceTemplateSpec
 * InstanceTemplateSpec describes the data an instance should have when created from a template.
**/
public class InstanceTemplateSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public InstanceSpec spec;
    public InstanceTemplateSpec withSpec(InstanceSpec spec) {
        this.spec = spec;
        return this;
    }
}