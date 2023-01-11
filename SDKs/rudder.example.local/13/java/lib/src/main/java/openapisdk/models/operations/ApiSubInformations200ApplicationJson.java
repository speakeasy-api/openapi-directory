package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiSubInformations200ApplicationJson {
    @JsonProperty("action")
    public ApiSubInformations200ApplicationJsonActionEnum action;
    public ApiSubInformations200ApplicationJson withAction(ApiSubInformations200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ApiSubInformations200ApplicationJsonData data;
    public ApiSubInformations200ApplicationJson withData(ApiSubInformations200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ApiSubInformations200ApplicationJsonResultEnum result;
    public ApiSubInformations200ApplicationJson withResult(ApiSubInformations200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}