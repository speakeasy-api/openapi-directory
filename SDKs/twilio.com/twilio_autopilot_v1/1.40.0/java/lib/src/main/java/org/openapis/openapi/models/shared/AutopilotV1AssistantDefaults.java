/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AutopilotV1AssistantDefaults - OK
 */
public class AutopilotV1AssistantDefaults {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Defaults resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public AutopilotV1AssistantDefaults withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistant_sid")
    public String assistantSid;
    public AutopilotV1AssistantDefaults withAssistantSid(String assistantSid) {
        this.assistantSid = assistantSid;
        return this;
    }
    
    /**
     * The JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public AutopilotV1AssistantDefaults withData(Object data) {
        this.data = data;
        return this;
    }
    
    /**
     * The absolute URL of the Defaults resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AutopilotV1AssistantDefaults withUrl(String url) {
        this.url = url;
        return this;
    }
    
}
