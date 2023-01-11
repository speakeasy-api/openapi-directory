package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetApiV2ListMarkets200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetApiV2ListMarkets200ApplicationJsonData data;
    public GetApiV2ListMarkets200ApplicationJson withData(GetApiV2ListMarkets200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
}