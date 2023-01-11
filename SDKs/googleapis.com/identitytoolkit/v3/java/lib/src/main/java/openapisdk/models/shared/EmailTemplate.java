package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailTemplate
 * Template for an email template.
**/
public class EmailTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public EmailTemplate withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public EmailTemplate withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public EmailTemplate withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromDisplayName")
    public String fromDisplayName;
    public EmailTemplate withFromDisplayName(String fromDisplayName) {
        this.fromDisplayName = fromDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyTo")
    public String replyTo;
    public EmailTemplate withReplyTo(String replyTo) {
        this.replyTo = replyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public EmailTemplate withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}