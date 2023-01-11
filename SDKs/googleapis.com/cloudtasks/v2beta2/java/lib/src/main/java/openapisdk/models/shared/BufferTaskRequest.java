package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BufferTaskRequest
 * Request message for BufferTask.
**/
public class BufferTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public HttpBody body;
    public BufferTaskRequest withBody(HttpBody body) {
        this.body = body;
        return this;
    }
}