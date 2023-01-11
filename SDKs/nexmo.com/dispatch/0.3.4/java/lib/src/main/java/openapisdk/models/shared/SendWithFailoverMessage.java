package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendWithFailoverMessage
 * Send With Failover Message
**/
public class SendWithFailoverMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failover")
    public FailoverProperty failover;
    public SendWithFailoverMessage withFailover(FailoverProperty failover) {
        this.failover = failover;
        return this;
    }
    @JsonProperty("from")
    public FromProperty from;
    public SendWithFailoverMessage withFrom(FromProperty from) {
        this.from = from;
        return this;
    }
    @JsonProperty("message")
    public MessageProperty message;
    public SendWithFailoverMessage withMessage(MessageProperty message) {
        this.message = message;
        return this;
    }
    @JsonProperty("to")
    public ToProperty to;
    public SendWithFailoverMessage withTo(ToProperty to) {
        this.to = to;
        return this;
    }
}