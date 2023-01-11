package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSyncResponse
 * Object containing node sync status
**/
public class GetSyncResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockChainHeight")
    public Double blockChainHeight;
    public GetSyncResponse withBlockChainHeight(Double blockChainHeight) {
        this.blockChainHeight = blockChainHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public GetSyncResponse withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public GetSyncResponse withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetSyncResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncPercentage")
    public Double syncPercentage;
    public GetSyncResponse withSyncPercentage(Double syncPercentage) {
        this.syncPercentage = syncPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetSyncResponse withType(String type) {
        this.type = type;
        return this;
    }
}