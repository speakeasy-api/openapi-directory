package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MessagingV1BrandRegistrationsBrandVetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MessagingV1BrandRegistrationsBrandVetting withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_sid")
    public String brandSid;
    public MessagingV1BrandRegistrationsBrandVetting withBrandSid(String brandSid) {
        this.brandSid = brandSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand_vetting_sid")
    public String brandVettingSid;
    public MessagingV1BrandRegistrationsBrandVetting withBrandVettingSid(String brandVettingSid) {
        this.brandVettingSid = brandVettingSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MessagingV1BrandRegistrationsBrandVetting withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MessagingV1BrandRegistrationsBrandVetting withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MessagingV1BrandRegistrationsBrandVetting withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vetting_class")
    public String vettingClass;
    public MessagingV1BrandRegistrationsBrandVetting withVettingClass(String vettingClass) {
        this.vettingClass = vettingClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vetting_id")
    public String vettingId;
    public MessagingV1BrandRegistrationsBrandVetting withVettingId(String vettingId) {
        this.vettingId = vettingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vetting_provider")
    public BrandVettingEnumVettingProviderEnum vettingProvider;
    public MessagingV1BrandRegistrationsBrandVetting withVettingProvider(BrandVettingEnumVettingProviderEnum vettingProvider) {
        this.vettingProvider = vettingProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vetting_status")
    public String vettingStatus;
    public MessagingV1BrandRegistrationsBrandVetting withVettingStatus(String vettingStatus) {
        this.vettingStatus = vettingStatus;
        return this;
    }
}