package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistributionsResponseResultElementsHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromEmail")
    public Object fromEmail;
    public DistributionsResponseResultElementsHeaders withFromEmail(Object fromEmail) {
        this.fromEmail = fromEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromName")
    public Object fromName;
    public DistributionsResponseResultElementsHeaders withFromName(Object fromName) {
        this.fromName = fromName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmail")
    public Object replyToEmail;
    public DistributionsResponseResultElementsHeaders withReplyToEmail(Object replyToEmail) {
        this.replyToEmail = replyToEmail;
        return this;
    }
}