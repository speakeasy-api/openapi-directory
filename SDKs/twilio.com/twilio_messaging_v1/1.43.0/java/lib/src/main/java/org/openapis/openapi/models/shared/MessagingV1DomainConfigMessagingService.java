/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * MessagingV1DomainConfigMessagingService - OK
 */
public class MessagingV1DomainConfigMessagingService {
    /**
     * URL to receive click events to your webhook whenever the recipients click on the shortened links.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;

    public MessagingV1DomainConfigMessagingService withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    
    /**
     * The unique string that we created to identify the Domain config (prefix ZK).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_sid")
    public String configSid;

    public MessagingV1DomainConfigMessagingService withConfigSid(String configSid) {
        this.configSid = configSid;
        return this;
    }
    
    /**
     * Date this Domain Config was created.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;

    public MessagingV1DomainConfigMessagingService withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    
    /**
     * Date that this Domain Config was last updated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;

    public MessagingV1DomainConfigMessagingService withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    
    /**
     * The unique string that we created to identify the Domain resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_sid")
    public String domainSid;

    public MessagingV1DomainConfigMessagingService withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
    
    /**
     * Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback_url")
    public String fallbackUrl;

    public MessagingV1DomainConfigMessagingService withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    
    /**
     * The unique string that identifies the messaging service
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_service_sid")
    public String messagingServiceSid;

    public MessagingV1DomainConfigMessagingService withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public MessagingV1DomainConfigMessagingService withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public MessagingV1DomainConfigMessagingService(){}
}
