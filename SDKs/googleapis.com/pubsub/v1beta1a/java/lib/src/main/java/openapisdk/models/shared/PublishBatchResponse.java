package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublishBatchResponse
 * Response for the PublishBatch method.
**/
public class PublishBatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageIds")
    public String[] messageIds;
    public PublishBatchResponse withMessageIds(String[] messageIds) {
        this.messageIds = messageIds;
        return this;
    }
}