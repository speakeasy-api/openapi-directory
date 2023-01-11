package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MessagingV1ServiceAlphaSender {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MessagingV1ServiceAlphaSender withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alpha_sender")
    public String alphaSender;
    public MessagingV1ServiceAlphaSender withAlphaSender(String alphaSender) {
        this.alphaSender = alphaSender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public String[] capabilities;
    public MessagingV1ServiceAlphaSender withCapabilities(String[] capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MessagingV1ServiceAlphaSender withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MessagingV1ServiceAlphaSender withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public MessagingV1ServiceAlphaSender withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MessagingV1ServiceAlphaSender withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MessagingV1ServiceAlphaSender withUrl(String url) {
        this.url = url;
        return this;
    }
}