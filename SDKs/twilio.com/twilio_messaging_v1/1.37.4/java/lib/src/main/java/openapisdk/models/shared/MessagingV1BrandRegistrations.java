package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MessagingV1BrandRegistrations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("a2p_profile_bundle_sid")
    public String a2pProfileBundleSid;
    public MessagingV1BrandRegistrations withA2pProfileBundleSid(String a2pProfileBundleSid) {
        this.a2pProfileBundleSid = a2pProfileBundleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MessagingV1BrandRegistrations withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_feedback")
    public BrandRegistrationsEnumBrandFeedbackEnum[] brandFeedback;
    public MessagingV1BrandRegistrations withBrandFeedback(BrandRegistrationsEnumBrandFeedbackEnum[] brandFeedback) {
        this.brandFeedback = brandFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_score")
    public Long brandScore;
    public MessagingV1BrandRegistrations withBrandScore(Long brandScore) {
        this.brandScore = brandScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_type")
    public String brandType;
    public MessagingV1BrandRegistrations withBrandType(String brandType) {
        this.brandType = brandType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_profile_bundle_sid")
    public String customerProfileBundleSid;
    public MessagingV1BrandRegistrations withCustomerProfileBundleSid(String customerProfileBundleSid) {
        this.customerProfileBundleSid = customerProfileBundleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MessagingV1BrandRegistrations withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MessagingV1BrandRegistrations withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_reason")
    public String failureReason;
    public MessagingV1BrandRegistrations withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("government_entity")
    public Boolean governmentEntity;
    public MessagingV1BrandRegistrations withGovernmentEntity(Boolean governmentEntity) {
        this.governmentEntity = governmentEntity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity_status")
    public BrandRegistrationsEnumIdentityStatusEnum identityStatus;
    public MessagingV1BrandRegistrations withIdentityStatus(BrandRegistrationsEnumIdentityStatusEnum identityStatus) {
        this.identityStatus = identityStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public MessagingV1BrandRegistrations withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public Boolean mock;
    public MessagingV1BrandRegistrations withMock(Boolean mock) {
        this.mock = mock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("russell_3000")
    public Boolean russell3000;
    public MessagingV1BrandRegistrations withRussell3000(Boolean russell3000) {
        this.russell3000 = russell3000;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MessagingV1BrandRegistrations withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_automatic_sec_vet")
    public Boolean skipAutomaticSecVet;
    public MessagingV1BrandRegistrations withSkipAutomaticSecVet(Boolean skipAutomaticSecVet) {
        this.skipAutomaticSecVet = skipAutomaticSecVet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public BrandRegistrationsEnumStatusEnum status;
    public MessagingV1BrandRegistrations withStatus(BrandRegistrationsEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_exempt_status")
    public String taxExemptStatus;
    public MessagingV1BrandRegistrations withTaxExemptStatus(String taxExemptStatus) {
        this.taxExemptStatus = taxExemptStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcr_id")
    public String tcrId;
    public MessagingV1BrandRegistrations withTcrId(String tcrId) {
        this.tcrId = tcrId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MessagingV1BrandRegistrations withUrl(String url) {
        this.url = url;
        return this;
    }
}