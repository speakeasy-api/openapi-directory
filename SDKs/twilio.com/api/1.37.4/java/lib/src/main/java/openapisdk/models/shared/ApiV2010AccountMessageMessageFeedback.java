package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountMessageMessageFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountMessageMessageFeedback withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountMessageMessageFeedback withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountMessageMessageFeedback withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_sid")
    public String messageSid;
    public ApiV2010AccountMessageMessageFeedback withMessageSid(String messageSid) {
        this.messageSid = messageSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome")
    public MessageFeedbackEnumOutcomeEnum outcome;
    public ApiV2010AccountMessageMessageFeedback withOutcome(MessageFeedbackEnumOutcomeEnum outcome) {
        this.outcome = outcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountMessageMessageFeedback withUri(String uri) {
        this.uri = uri;
        return this;
    }
}