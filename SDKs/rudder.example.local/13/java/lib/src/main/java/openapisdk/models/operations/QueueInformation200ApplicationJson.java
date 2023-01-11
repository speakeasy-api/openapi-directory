package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class QueueInformation200ApplicationJson {
    @JsonProperty("action")
    public QueueInformation200ApplicationJsonActionEnum action;
    public QueueInformation200ApplicationJson withAction(QueueInformation200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public QueueInformation200ApplicationJsonData data;
    public QueueInformation200ApplicationJson withData(QueueInformation200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public QueueInformation200ApplicationJsonResultEnum result;
    public QueueInformation200ApplicationJson withResult(QueueInformation200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}