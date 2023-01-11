package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Destination
 * Represents a target of an invocation over HTTP.
**/
public class Destination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudFunction")
    public String cloudFunction;
    public Destination withCloudFunction(String cloudFunction) {
        this.cloudFunction = cloudFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRun")
    public CloudRun cloudRun;
    public Destination withCloudRun(CloudRun cloudRun) {
        this.cloudRun = cloudRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gke")
    public Gke gke;
    public Destination withGke(Gke gke) {
        this.gke = gke;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow")
    public String workflow;
    public Destination withWorkflow(String workflow) {
        this.workflow = workflow;
        return this;
    }
}