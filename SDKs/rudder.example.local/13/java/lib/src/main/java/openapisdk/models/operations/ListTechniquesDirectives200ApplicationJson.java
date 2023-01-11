package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTechniquesDirectives200ApplicationJson {
    @JsonProperty("action")
    public ListTechniquesDirectives200ApplicationJsonActionEnum action;
    public ListTechniquesDirectives200ApplicationJson withAction(ListTechniquesDirectives200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListTechniquesDirectives200ApplicationJsonData data;
    public ListTechniquesDirectives200ApplicationJson withData(ListTechniquesDirectives200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListTechniquesDirectives200ApplicationJsonResultEnum result;
    public ListTechniquesDirectives200ApplicationJson withResult(ListTechniquesDirectives200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}