package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemAdvisoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ControllersSystemAdvisoryItem[] data;
    public ControllersSystemAdvisoriesResponse withData(ControllersSystemAdvisoryItem[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ControllersLinks links;
    public ControllersSystemAdvisoriesResponse withLinks(ControllersLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ControllersListMeta meta;
    public ControllersSystemAdvisoriesResponse withMeta(ControllersListMeta meta) {
        this.meta = meta;
        return this;
    }
}