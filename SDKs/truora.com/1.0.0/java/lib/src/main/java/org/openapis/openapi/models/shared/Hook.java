/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Hook - Represents a hook configuration
 */
public class Hook {
    /**
     * Actions you want to be notified. Possible inputs are created, started, and finished or any combination of those three
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public String[] actions;

    public Hook withActions(String[] actions) {
        this.actions = actions;
        return this;
    }
    
    /**
     * Entity events you want to be notified. If all is selected, there is no need to enter actions
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type")
    public HookEventTypeEnum eventType;

    public Hook withEventType(HookEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    
    /**
     * Secret random hexadecimal key used to sign the event and confirm its legitimacy. Signing keys are used to decode the JWT you get as payload from events
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signing_key")
    public String signingKey;

    public Hook withSigningKey(String signingKey) {
        this.signingKey = signingKey;
        return this;
    }
    
    /**
     * indicates whether the hook is active or not. enabled by default
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public HookStatusEnum status;

    public Hook withStatus(HookStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * Platform with an endpoint ready to process the information. Only web is supported currently
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriber_type")
    public String subscriberType;

    public Hook withSubscriberType(String subscriberType) {
        this.subscriberType = subscriberType;
        return this;
    }
    
    /**
     * Link where notification requests will be sent, required when subscriber_type is web
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriber_url")
    public String subscriberUrl;

    public Hook withSubscriberUrl(String subscriberUrl) {
        this.subscriberUrl = subscriberUrl;
        return this;
    }
    
    public Hook(){}
}
