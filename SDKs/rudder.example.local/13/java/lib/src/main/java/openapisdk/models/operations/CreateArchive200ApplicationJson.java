package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateArchive200ApplicationJson {
    @JsonProperty("action")
    public CreateArchive200ApplicationJsonActionEnum action;
    public CreateArchive200ApplicationJson withAction(CreateArchive200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateArchive200ApplicationJsonData data;
    public CreateArchive200ApplicationJson withData(CreateArchive200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateArchive200ApplicationJsonResultEnum result;
    public CreateArchive200ApplicationJson withResult(CreateArchive200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}