package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTechniques200ApplicationJson {
    @JsonProperty("action")
    public ListTechniques200ApplicationJsonActionEnum action;
    public ListTechniques200ApplicationJson withAction(ListTechniques200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListTechniques200ApplicationJsonData data;
    public ListTechniques200ApplicationJson withData(ListTechniques200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListTechniques200ApplicationJsonResultEnum result;
    public ListTechniques200ApplicationJson withResult(ListTechniques200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}