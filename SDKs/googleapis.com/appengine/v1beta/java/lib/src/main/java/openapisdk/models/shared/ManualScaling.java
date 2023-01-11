package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManualScaling
 * A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
**/
public class ManualScaling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public Integer instances;
    public ManualScaling withInstances(Integer instances) {
        this.instances = instances;
        return this;
    }
}