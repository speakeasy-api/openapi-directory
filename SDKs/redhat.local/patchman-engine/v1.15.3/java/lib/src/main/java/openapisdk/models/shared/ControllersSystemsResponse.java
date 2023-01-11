package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersSystemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ControllersSystemItem[] data;
    public ControllersSystemsResponse withData(ControllersSystemItem[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ControllersLinks links;
    public ControllersSystemsResponse withLinks(ControllersLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ControllersListMeta meta;
    public ControllersSystemsResponse withMeta(ControllersListMeta meta) {
        this.meta = meta;
        return this;
    }
}