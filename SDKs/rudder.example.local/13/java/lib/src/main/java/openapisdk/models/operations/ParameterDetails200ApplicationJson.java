package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ParameterDetails200ApplicationJson {
    @JsonProperty("action")
    public ParameterDetails200ApplicationJsonActionEnum action;
    public ParameterDetails200ApplicationJson withAction(ParameterDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ParameterDetails200ApplicationJsonData data;
    public ParameterDetails200ApplicationJson withData(ParameterDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ParameterDetails200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public ParameterDetails200ApplicationJsonResultEnum result;
    public ParameterDetails200ApplicationJson withResult(ParameterDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}