package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGroupCategory200ApplicationJson {
    @JsonProperty("action")
    public CreateGroupCategory200ApplicationJsonActionEnum action;
    public CreateGroupCategory200ApplicationJson withAction(CreateGroupCategory200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateGroupCategory200ApplicationJsonData data;
    public CreateGroupCategory200ApplicationJson withData(CreateGroupCategory200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateGroupCategory200ApplicationJsonResultEnum result;
    public CreateGroupCategory200ApplicationJson withResult(CreateGroupCategory200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}