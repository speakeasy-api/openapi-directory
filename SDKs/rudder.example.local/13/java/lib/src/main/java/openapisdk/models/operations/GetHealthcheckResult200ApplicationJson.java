package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetHealthcheckResult200ApplicationJson {
    @JsonProperty("action")
    public GetHealthcheckResult200ApplicationJsonActionEnum action;
    public GetHealthcheckResult200ApplicationJson withAction(GetHealthcheckResult200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public openapisdk.models.shared.Check[] data;
    public GetHealthcheckResult200ApplicationJson withData(openapisdk.models.shared.Check[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetHealthcheckResult200ApplicationJsonResultEnum result;
    public GetHealthcheckResult200ApplicationJson withResult(GetHealthcheckResult200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}