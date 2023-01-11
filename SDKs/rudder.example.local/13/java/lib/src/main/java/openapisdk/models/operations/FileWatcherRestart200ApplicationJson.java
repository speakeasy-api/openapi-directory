package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FileWatcherRestart200ApplicationJson {
    @JsonProperty("action")
    public FileWatcherRestart200ApplicationJsonActionEnum action;
    public FileWatcherRestart200ApplicationJson withAction(FileWatcherRestart200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public FileWatcherRestart200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public FileWatcherRestart200ApplicationJsonResultEnum result;
    public FileWatcherRestart200ApplicationJson withResult(FileWatcherRestart200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}