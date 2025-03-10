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
 * ConversationsV1ServiceServiceUser - Created
 */
public class ConversationsV1ServiceServiceUser {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the User resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;

    public ConversationsV1ServiceServiceUser withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The JSON Object string that stores application-specific data. If attributes have not been set, `{}` is returned.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public String attributes;

    public ConversationsV1ServiceServiceUser withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the User resource is associated with.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_service_sid")
    public String chatServiceSid;

    public ConversationsV1ServiceServiceUser withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;

    public ConversationsV1ServiceServiceUser withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;

    public ConversationsV1ServiceServiceUser withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    
    /**
     * The string that you assigned to describe the resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;

    public ConversationsV1ServiceServiceUser withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    
    /**
     * The application-defined string that uniquely identifies the resource's User within the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). This value is often a username or an email address, and is case-sensitive.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;

    public ConversationsV1ServiceServiceUser withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    
    /**
     * Whether the User has a potentially valid Push Notification registration (APN or GCM) for this Conversations Service. If at least one registration exists, `true`; otherwise `false`. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, and if the User has never had a notification registration, even if the Service's `reachability_enabled` is `true`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_notifiable")
    public Boolean isNotifiable;

    public ConversationsV1ServiceServiceUser withIsNotifiable(Boolean isNotifiable) {
        this.isNotifiable = isNotifiable;
        return this;
    }
    
    /**
     * Whether the User is actively connected to this Conversations Service and online. This value is only returned by Fetch actions that return a single resource and `null` is always returned by a Read action. This value is `null` if the Service's `reachability_enabled` is `false`, if the User has never been online for this Conversations Service, even if the Service's `reachability_enabled` is `true`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_online")
    public Boolean isOnline;

    public ConversationsV1ServiceServiceUser withIsOnline(Boolean isOnline) {
        this.isOnline = isOnline;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;

    public ConversationsV1ServiceServiceUser withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    
    /**
     * The SID of a service-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) assigned to the user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role_sid")
    public String roleSid;

    public ConversationsV1ServiceServiceUser withRoleSid(String roleSid) {
        this.roleSid = roleSid;
        return this;
    }
    
    /**
     * The unique string that we created to identify the User resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;

    public ConversationsV1ServiceServiceUser withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
    /**
     * An absolute API resource URL for this user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public ConversationsV1ServiceServiceUser withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public ConversationsV1ServiceServiceUser(){}
}
