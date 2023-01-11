package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersPackageSystemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ControllersPackageSystemItem[] data;
    public ControllersPackageSystemsResponse withData(ControllersPackageSystemItem[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ControllersLinks links;
    public ControllersPackageSystemsResponse withLinks(ControllersLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ControllersListMeta meta;
    public ControllersPackageSystemsResponse withMeta(ControllersListMeta meta) {
        this.meta = meta;
        return this;
    }
}