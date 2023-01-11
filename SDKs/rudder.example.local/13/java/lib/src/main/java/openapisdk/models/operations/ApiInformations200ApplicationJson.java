package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiInformations200ApplicationJson {
    @JsonProperty("action")
    public ApiInformations200ApplicationJsonActionEnum action;
    public ApiInformations200ApplicationJson withAction(ApiInformations200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ApiInformations200ApplicationJsonData data;
    public ApiInformations200ApplicationJson withData(ApiInformations200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ApiInformations200ApplicationJsonResultEnum result;
    public ApiInformations200ApplicationJson withResult(ApiInformations200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}