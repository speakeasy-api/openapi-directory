package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTechniqueVersionDirectives200ApplicationJson {
    @JsonProperty("action")
    public ListTechniqueVersionDirectives200ApplicationJsonActionEnum action;
    public ListTechniqueVersionDirectives200ApplicationJson withAction(ListTechniqueVersionDirectives200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ListTechniqueVersionDirectives200ApplicationJsonData data;
    public ListTechniqueVersionDirectives200ApplicationJson withData(ListTechniqueVersionDirectives200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ListTechniqueVersionDirectives200ApplicationJsonResultEnum result;
    public ListTechniqueVersionDirectives200ApplicationJson withResult(ListTechniqueVersionDirectives200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}