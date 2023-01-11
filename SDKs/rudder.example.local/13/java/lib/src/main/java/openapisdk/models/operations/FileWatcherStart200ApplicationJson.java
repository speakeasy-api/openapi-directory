package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FileWatcherStart200ApplicationJson {
    @JsonProperty("action")
    public FileWatcherStart200ApplicationJsonActionEnum action;
    public FileWatcherStart200ApplicationJson withAction(FileWatcherStart200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public String data;
    public FileWatcherStart200ApplicationJson withData(String data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public FileWatcherStart200ApplicationJsonResultEnum result;
    public FileWatcherStart200ApplicationJson withResult(FileWatcherStart200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}