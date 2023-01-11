package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetArticlesearchJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public GetArticlesearchJson200ApplicationJsonResponse response;
    public GetArticlesearchJson200ApplicationJson withResponse(GetArticlesearchJson200ApplicationJsonResponse response) {
        this.response = response;
        return this;
    }
}