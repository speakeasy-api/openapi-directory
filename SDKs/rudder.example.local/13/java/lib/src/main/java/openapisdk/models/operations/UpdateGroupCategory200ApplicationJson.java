package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGroupCategory200ApplicationJson {
    @JsonProperty("action")
    public UpdateGroupCategory200ApplicationJsonActionEnum action;
    public UpdateGroupCategory200ApplicationJson withAction(UpdateGroupCategory200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateGroupCategory200ApplicationJsonData data;
    public UpdateGroupCategory200ApplicationJson withData(UpdateGroupCategory200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateGroupCategory200ApplicationJsonResultEnum result;
    public UpdateGroupCategory200ApplicationJson withResult(UpdateGroupCategory200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}