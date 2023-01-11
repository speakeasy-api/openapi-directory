package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCarriersResponseBody
 * An error response body
**/
public class GetCarriersResponseBody {
    @JsonProperty("carriers")
    public GetCarriersResponseBodyCarrier[] carriers;
    public GetCarriersResponseBody withCarriers(GetCarriersResponseBodyCarrier[] carriers) {
        this.carriers = carriers;
        return this;
    }
    @JsonProperty("errors")
    public Error[] errors;
    public GetCarriersResponseBody withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("request_id")
    public String requestId;
    public GetCarriersResponseBody withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}