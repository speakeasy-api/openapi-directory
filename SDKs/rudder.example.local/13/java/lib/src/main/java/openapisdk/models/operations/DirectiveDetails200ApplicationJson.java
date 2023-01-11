package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DirectiveDetails200ApplicationJson {
    @JsonProperty("action")
    public DirectiveDetails200ApplicationJsonActionEnum action;
    public DirectiveDetails200ApplicationJson withAction(DirectiveDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DirectiveDetails200ApplicationJsonData data;
    public DirectiveDetails200ApplicationJson withData(DirectiveDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DirectiveDetails200ApplicationJsonResultEnum result;
    public DirectiveDetails200ApplicationJson withResult(DirectiveDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}