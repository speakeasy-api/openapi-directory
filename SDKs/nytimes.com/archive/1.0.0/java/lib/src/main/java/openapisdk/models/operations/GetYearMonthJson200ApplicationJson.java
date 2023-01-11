package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetYearMonthJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public GetYearMonthJson200ApplicationJsonResponse response;
    public GetYearMonthJson200ApplicationJson withResponse(GetYearMonthJson200ApplicationJsonResponse response) {
        this.response = response;
        return this;
    }
}