package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAppListAppResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public openapisdk.models.shared.MicrovisorV1App[] apps;
    public ListAppListAppResponse withApps(openapisdk.models.shared.MicrovisorV1App[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAppListAppResponseMeta meta;
    public ListAppListAppResponse withMeta(ListAppListAppResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}