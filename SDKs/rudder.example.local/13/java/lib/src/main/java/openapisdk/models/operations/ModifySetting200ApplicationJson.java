package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifySetting200ApplicationJson {
    @JsonProperty("action")
    public ModifySetting200ApplicationJsonActionEnum action;
    public ModifySetting200ApplicationJson withAction(ModifySetting200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ModifySetting200ApplicationJsonData data;
    public ModifySetting200ApplicationJson withData(ModifySetting200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ModifySetting200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public ModifySetting200ApplicationJsonResultEnum result;
    public ModifySetting200ApplicationJson withResult(ModifySetting200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}