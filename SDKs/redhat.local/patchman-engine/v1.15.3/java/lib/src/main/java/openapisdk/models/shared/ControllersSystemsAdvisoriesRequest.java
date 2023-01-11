package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemsAdvisoriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advisories")
    public String[] advisories;
    public ControllersSystemsAdvisoriesRequest withAdvisories(String[] advisories) {
        this.advisories = advisories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systems")
    public String[] systems;
    public ControllersSystemsAdvisoriesRequest withSystems(String[] systems) {
        this.systems = systems;
        return this;
    }
}