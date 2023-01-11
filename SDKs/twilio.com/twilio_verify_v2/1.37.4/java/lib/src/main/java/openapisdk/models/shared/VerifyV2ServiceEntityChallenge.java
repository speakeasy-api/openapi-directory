package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class VerifyV2ServiceEntityChallenge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public VerifyV2ServiceEntityChallenge withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public VerifyV2ServiceEntityChallenge withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_responded")
    public OffsetDateTime dateResponded;
    public VerifyV2ServiceEntityChallenge withDateResponded(OffsetDateTime dateResponded) {
        this.dateResponded = dateResponded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public VerifyV2ServiceEntityChallenge withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public Object details;
    public VerifyV2ServiceEntityChallenge withDetails(Object details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_sid")
    public String entitySid;
    public VerifyV2ServiceEntityChallenge withEntitySid(String entitySid) {
        this.entitySid = entitySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiration_date")
    public OffsetDateTime expirationDate;
    public VerifyV2ServiceEntityChallenge withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("factor_sid")
    public String factorSid;
    public VerifyV2ServiceEntityChallenge withFactorSid(String factorSid) {
        this.factorSid = factorSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("factor_type")
    public ChallengeEnumFactorTypesEnum factorType;
    public VerifyV2ServiceEntityChallenge withFactorType(ChallengeEnumFactorTypesEnum factorType) {
        this.factorType = factorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden_details")
    public Object hiddenDetails;
    public VerifyV2ServiceEntityChallenge withHiddenDetails(Object hiddenDetails) {
        this.hiddenDetails = hiddenDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public VerifyV2ServiceEntityChallenge withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public VerifyV2ServiceEntityChallenge withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public Object metadata;
    public VerifyV2ServiceEntityChallenge withMetadata(Object metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responded_reason")
    public ChallengeEnumChallengeReasonsEnum respondedReason;
    public VerifyV2ServiceEntityChallenge withRespondedReason(ChallengeEnumChallengeReasonsEnum respondedReason) {
        this.respondedReason = respondedReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_sid")
    public String serviceSid;
    public VerifyV2ServiceEntityChallenge withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public VerifyV2ServiceEntityChallenge withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChallengeEnumChallengeStatusesEnum status;
    public VerifyV2ServiceEntityChallenge withStatus(ChallengeEnumChallengeStatusesEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VerifyV2ServiceEntityChallenge withUrl(String url) {
        this.url = url;
        return this;
    }
}