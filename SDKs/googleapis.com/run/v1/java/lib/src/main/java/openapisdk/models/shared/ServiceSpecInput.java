package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceSpecInput
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
**/
public class ServiceSpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public RevisionTemplate template;
    public ServiceSpecInput withTemplate(RevisionTemplate template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public TrafficTargetInput[] traffic;
    public ServiceSpecInput withTraffic(TrafficTargetInput[] traffic) {
        this.traffic = traffic;
        return this;
    }
}