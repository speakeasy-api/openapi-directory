package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetailedErrorResponse {
    @JsonProperty("error")
    public DetailedErrorResponseError error;
    public DetailedErrorResponse withError(DetailedErrorResponseError error) {
        this.error = error;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public DetailedErrorResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}