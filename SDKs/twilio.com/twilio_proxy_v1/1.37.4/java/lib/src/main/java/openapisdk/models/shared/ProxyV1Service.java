package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyV1Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ProxyV1Service withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public ProxyV1Service withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat_instance_sid")
    public String chatInstanceSid;
    public ProxyV1Service withChatInstanceSid(String chatInstanceSid) {
        this.chatInstanceSid = chatInstanceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ProxyV1Service withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public ProxyV1Service withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_ttl")
    public Long defaultTtl;
    public ProxyV1Service withDefaultTtl(Long defaultTtl) {
        this.defaultTtl = defaultTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo_match_level")
    public ServiceEnumGeoMatchLevelEnum geoMatchLevel;
    public ProxyV1Service withGeoMatchLevel(ServiceEnumGeoMatchLevelEnum geoMatchLevel) {
        this.geoMatchLevel = geoMatchLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intercept_callback_url")
    public String interceptCallbackUrl;
    public ProxyV1Service withInterceptCallbackUrl(String interceptCallbackUrl) {
        this.interceptCallbackUrl = interceptCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public ProxyV1Service withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_selection_behavior")
    public ServiceEnumNumberSelectionBehaviorEnum numberSelectionBehavior;
    public ProxyV1Service withNumberSelectionBehavior(ServiceEnumNumberSelectionBehaviorEnum numberSelectionBehavior) {
        this.numberSelectionBehavior = numberSelectionBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("out_of_session_callback_url")
    public String outOfSessionCallbackUrl;
    public ProxyV1Service withOutOfSessionCallbackUrl(String outOfSessionCallbackUrl) {
        this.outOfSessionCallbackUrl = outOfSessionCallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public ProxyV1Service withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public ProxyV1Service withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProxyV1Service withUrl(String url) {
        this.url = url;
        return this;
    }
}