package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageEvent
 * An event describing a message sent/received between Spans.
**/
public class MessageEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compressedSizeBytes")
    public String compressedSizeBytes;
    public MessageEvent withCompressedSizeBytes(String compressedSizeBytes) {
        this.compressedSizeBytes = compressedSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MessageEvent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MessageEventTypeEnum type;
    public MessageEvent withType(MessageEventTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uncompressedSizeBytes")
    public String uncompressedSizeBytes;
    public MessageEvent withUncompressedSizeBytes(String uncompressedSizeBytes) {
        this.uncompressedSizeBytes = uncompressedSizeBytes;
        return this;
    }
}