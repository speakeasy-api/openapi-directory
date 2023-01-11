package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FileWatcherStop200ApplicationJson {
    @JsonProperty("action")
    public FileWatcherStop200ApplicationJsonActionEnum action;
    public FileWatcherStop200ApplicationJson withAction(FileWatcherStop200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public FileWatcherStop200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public FileWatcherStop200ApplicationJsonResultEnum result;
    public FileWatcherStop200ApplicationJson withResult(FileWatcherStop200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}