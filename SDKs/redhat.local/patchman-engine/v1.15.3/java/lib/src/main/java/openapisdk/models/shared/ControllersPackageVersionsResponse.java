package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersPackageVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ControllersPackageVersionItem[] data;
    public ControllersPackageVersionsResponse withData(ControllersPackageVersionItem[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ControllersLinks links;
    public ControllersPackageVersionsResponse withLinks(ControllersLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ControllersListMeta meta;
    public ControllersPackageVersionsResponse withMeta(ControllersListMeta meta) {
        this.meta = meta;
        return this;
    }
}