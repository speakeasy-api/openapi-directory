package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutopilotV1AssistantDialogue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public AutopilotV1AssistantDialogue withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistant_sid")
    public String assistantSid;
    public AutopilotV1AssistantDialogue withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public AutopilotV1AssistantDialogue withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public AutopilotV1AssistantDialogue withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AutopilotV1AssistantDialogue withUrl(String url) {
        this.url = url;
        return this;
    }
}