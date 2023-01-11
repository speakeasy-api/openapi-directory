package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * QueueInformation200ApplicationJsonData
 * Information about the service
**/
public class QueueInformation200ApplicationJsonData {
    @JsonProperty("queueMaxSize")
    public Long queueMaxSize;
    public QueueInformation200ApplicationJsonData withQueueMaxSize(Long queueMaxSize) {
        this.queueMaxSize = queueMaxSize;
        return this;
    }
    @JsonProperty("queueSaturated")
    public Boolean queueSaturated;
    public QueueInformation200ApplicationJsonData withQueueSaturated(Boolean queueSaturated) {
        this.queueSaturated = queueSaturated;
        return this;
    }
}