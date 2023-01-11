package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDirective200ApplicationJson {
    @JsonProperty("action")
    public DeleteDirective200ApplicationJsonActionEnum action;
    public DeleteDirective200ApplicationJson withAction(DeleteDirective200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteDirective200ApplicationJsonData data;
    public DeleteDirective200ApplicationJson withData(DeleteDirective200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteDirective200ApplicationJsonResultEnum result;
    public DeleteDirective200ApplicationJson withResult(DeleteDirective200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}