package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SyncV1ServiceSyncStreamStreamMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public SyncV1ServiceSyncStreamStreamMessage withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public SyncV1ServiceSyncStreamStreamMessage withSid(String sid) {
        this.sid = sid;
        return this;
    }
}