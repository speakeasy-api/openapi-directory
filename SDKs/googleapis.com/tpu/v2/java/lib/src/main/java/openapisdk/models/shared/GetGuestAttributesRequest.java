package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetGuestAttributesRequest
 * Request for GetGuestAttributes.
**/
public class GetGuestAttributesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryPath")
    public String queryPath;
    public GetGuestAttributesRequest withQueryPath(String queryPath) {
        this.queryPath = queryPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerIds")
    public String[] workerIds;
    public GetGuestAttributesRequest withWorkerIds(String[] workerIds) {
        this.workerIds = workerIds;
        return this;
    }
}