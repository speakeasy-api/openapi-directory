package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class IpMessagingV2ServiceUserUserBinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public IpMessagingV2ServiceUserUserBinding withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binding_type")
    public UserBindingEnumBindingTypeEnum bindingType;
    public IpMessagingV2ServiceUserUserBinding withBindingType(UserBindingEnumBindingTypeEnum bindingType) {
        this.bindingType = bindingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential_sid")
    public String credentialSid;
    public IpMessagingV2ServiceUserUserBinding withCredentialSid(String credentialSid) {
        this.credentialSid = credentialSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public IpMessagingV2ServiceUserUserBinding withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public IpMessagingV2ServiceUserUserBinding withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public IpMessagingV2ServiceUserUserBinding withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public IpMessagingV2ServiceUserUserBinding withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_types")
    public String[] messageTypes;
    public IpMessagingV2ServiceUserUserBinding withMessageTypes(String[] messageTypes) {
        this.messageTypes = messageTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public IpMessagingV2ServiceUserUserBinding withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public IpMessagingV2ServiceUserUserBinding withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public IpMessagingV2ServiceUserUserBinding withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_sid")
    public String userSid;
    public IpMessagingV2ServiceUserUserBinding withUserSid(String userSid) {
        this.userSid = userSid;
        return this;
    }
}