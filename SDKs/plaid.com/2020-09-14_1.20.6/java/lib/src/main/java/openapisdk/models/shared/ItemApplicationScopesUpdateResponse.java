package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ItemApplicationScopesUpdateResponse
 * ItemApplicationScopesUpdateResponse defines the response schema for `/item/application/scopes/update`
**/
public class ItemApplicationScopesUpdateResponse {
    @JsonProperty("request_id")
    public String requestId;
    public ItemApplicationScopesUpdateResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}