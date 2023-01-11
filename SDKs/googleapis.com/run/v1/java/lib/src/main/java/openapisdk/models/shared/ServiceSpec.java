package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceSpec
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
**/
public class ServiceSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public RevisionTemplate template;
    public ServiceSpec withTemplate(RevisionTemplate template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public TrafficTarget[] traffic;
    public ServiceSpec withTraffic(TrafficTarget[] traffic) {
        this.traffic = traffic;
        return this;
    }
}