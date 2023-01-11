package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AsyncOperationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public AsyncOperationStatus withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public AsyncOperationStatus withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public java.util.Map<String, Object> message;
    public AsyncOperationStatus withMessage(java.util.Map<String, Object> message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AsyncOperationStatusEnumEnum status;
    public AsyncOperationStatus withStatus(AsyncOperationStatusEnumEnum status) {
        this.status = status;
        return this;
    }
}