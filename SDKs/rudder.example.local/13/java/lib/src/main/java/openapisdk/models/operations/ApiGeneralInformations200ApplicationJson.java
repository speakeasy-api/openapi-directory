package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiGeneralInformations200ApplicationJson {
    @JsonProperty("action")
    public ApiGeneralInformations200ApplicationJsonActionEnum action;
    public ApiGeneralInformations200ApplicationJson withAction(ApiGeneralInformations200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ApiGeneralInformations200ApplicationJsonData data;
    public ApiGeneralInformations200ApplicationJson withData(ApiGeneralInformations200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ApiGeneralInformations200ApplicationJsonResultEnum result;
    public ApiGeneralInformations200ApplicationJson withResult(ApiGeneralInformations200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}