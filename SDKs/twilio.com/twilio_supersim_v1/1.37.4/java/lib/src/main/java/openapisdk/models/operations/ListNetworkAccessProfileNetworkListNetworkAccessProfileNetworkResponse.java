package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta meta;
    public ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse withMeta(ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork[] networks;
    public ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse withNetworks(openapisdk.models.shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork[] networks) {
        this.networks = networks;
        return this;
    }
}