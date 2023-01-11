package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestoreArchive200ApplicationJson {
    @JsonProperty("action")
    public RestoreArchive200ApplicationJsonActionEnum action;
    public RestoreArchive200ApplicationJson withAction(RestoreArchive200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public RestoreArchive200ApplicationJsonData data;
    public RestoreArchive200ApplicationJson withData(RestoreArchive200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public RestoreArchive200ApplicationJsonResultEnum result;
    public RestoreArchive200ApplicationJson withResult(RestoreArchive200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}