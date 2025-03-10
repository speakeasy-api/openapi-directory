/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MessagingV1LinkshorteningMessagingService - Created
 */
public class MessagingV1LinkshorteningMessagingService {
    /**
     * The unique string identifies the domain resource
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_sid")
    public String domainSid;
    public MessagingV1LinkshorteningMessagingService withDomainSid(String domainSid) {
        this.domainSid = domainSid;
        return this;
    }
    
    /**
     * The unique string that identifies the messaging service
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messaging_service_sid")
    public String messagingServiceSid;
    public MessagingV1LinkshorteningMessagingService withMessagingServiceSid(String messagingServiceSid) {
        this.messagingServiceSid = messagingServiceSid;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MessagingV1LinkshorteningMessagingService withUrl(String url) {
        this.url = url;
        return this;
    }
    
}
