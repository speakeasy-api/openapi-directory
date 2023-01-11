package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiError {
    @JsonProperty("apiError")
    public Integer apiError;
    public ApiError withApiError(Integer apiError) {
        this.apiError = apiError;
        return this;
    }
    @JsonProperty("apiErrorMsg")
    public String apiErrorMsg;
    public ApiError withApiErrorMsg(String apiErrorMsg) {
        this.apiErrorMsg = apiErrorMsg;
        return this;
    }
}