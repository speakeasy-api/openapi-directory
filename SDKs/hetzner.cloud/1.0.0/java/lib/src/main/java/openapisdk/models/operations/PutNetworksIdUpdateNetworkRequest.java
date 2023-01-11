package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutNetworksIdUpdateNetworkRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public PutNetworksIdUpdateNetworkRequestLabels labels;
    public PutNetworksIdUpdateNetworkRequest withLabels(PutNetworksIdUpdateNetworkRequestLabels labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PutNetworksIdUpdateNetworkRequest withName(String name) {
        this.name = name;
        return this;
    }
}