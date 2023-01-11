package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersAdvisoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ControllersAdvisoryItem[] data;
    public ControllersAdvisoriesResponse withData(ControllersAdvisoryItem[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ControllersLinks links;
    public ControllersAdvisoriesResponse withLinks(ControllersLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ControllersListMeta meta;
    public ControllersAdvisoriesResponse withMeta(ControllersListMeta meta) {
        this.meta = meta;
        return this;
    }
}