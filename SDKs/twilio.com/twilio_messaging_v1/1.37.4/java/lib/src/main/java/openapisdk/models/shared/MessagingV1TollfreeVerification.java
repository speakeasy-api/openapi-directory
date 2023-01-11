package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MessagingV1TollfreeVerification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public MessagingV1TollfreeVerification withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_information")
    public String additionalInformation;
    public MessagingV1TollfreeVerification withAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_city")
    public String businessCity;
    public MessagingV1TollfreeVerification withBusinessCity(String businessCity) {
        this.businessCity = businessCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_contact_email")
    public String businessContactEmail;
    public MessagingV1TollfreeVerification withBusinessContactEmail(String businessContactEmail) {
        this.businessContactEmail = businessContactEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_contact_first_name")
    public String businessContactFirstName;
    public MessagingV1TollfreeVerification withBusinessContactFirstName(String businessContactFirstName) {
        this.businessContactFirstName = businessContactFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_contact_last_name")
    public String businessContactLastName;
    public MessagingV1TollfreeVerification withBusinessContactLastName(String businessContactLastName) {
        this.businessContactLastName = businessContactLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_contact_phone")
    public String businessContactPhone;
    public MessagingV1TollfreeVerification withBusinessContactPhone(String businessContactPhone) {
        this.businessContactPhone = businessContactPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_country")
    public String businessCountry;
    public MessagingV1TollfreeVerification withBusinessCountry(String businessCountry) {
        this.businessCountry = businessCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_name")
    public String businessName;
    public MessagingV1TollfreeVerification withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_postal_code")
    public String businessPostalCode;
    public MessagingV1TollfreeVerification withBusinessPostalCode(String businessPostalCode) {
        this.businessPostalCode = businessPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_state_province_region")
    public String businessStateProvinceRegion;
    public MessagingV1TollfreeVerification withBusinessStateProvinceRegion(String businessStateProvinceRegion) {
        this.businessStateProvinceRegion = businessStateProvinceRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_street_address")
    public String businessStreetAddress;
    public MessagingV1TollfreeVerification withBusinessStreetAddress(String businessStreetAddress) {
        this.businessStreetAddress = businessStreetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_street_address2")
    public String businessStreetAddress2;
    public MessagingV1TollfreeVerification withBusinessStreetAddress2(String businessStreetAddress2) {
        this.businessStreetAddress2 = businessStreetAddress2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_website")
    public String businessWebsite;
    public MessagingV1TollfreeVerification withBusinessWebsite(String businessWebsite) {
        this.businessWebsite = businessWebsite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_profile_sid")
    public String customerProfileSid;
    public MessagingV1TollfreeVerification withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public MessagingV1TollfreeVerification withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public MessagingV1TollfreeVerification withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message_volume")
    public String messageVolume;
    public MessagingV1TollfreeVerification withMessageVolume(String messageVolume) {
        this.messageVolume = messageVolume;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification_email")
    public String notificationEmail;
    public MessagingV1TollfreeVerification withNotificationEmail(String notificationEmail) {
        this.notificationEmail = notificationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_in_image_urls")
    public String[] optInImageUrls;
    public MessagingV1TollfreeVerification withOptInImageUrls(String[] optInImageUrls) {
        this.optInImageUrls = optInImageUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opt_in_type")
    public TollfreeVerificationEnumOptInTypeEnum optInType;
    public MessagingV1TollfreeVerification withOptInType(TollfreeVerificationEnumOptInTypeEnum optInType) {
        this.optInType = optInType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("production_message_sample")
    public String productionMessageSample;
    public MessagingV1TollfreeVerification withProductionMessageSample(String productionMessageSample) {
        this.productionMessageSample = productionMessageSample;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regulated_item_sid")
    public String regulatedItemSid;
    public MessagingV1TollfreeVerification withRegulatedItemSid(String regulatedItemSid) {
        this.regulatedItemSid = regulatedItemSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_links")
    public Object resourceLinks;
    public MessagingV1TollfreeVerification withResourceLinks(Object resourceLinks) {
        this.resourceLinks = resourceLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public MessagingV1TollfreeVerification withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TollfreeVerificationEnumStatusEnum status;
    public MessagingV1TollfreeVerification withStatus(TollfreeVerificationEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tollfree_phone_number_sid")
    public String tollfreePhoneNumberSid;
    public MessagingV1TollfreeVerification withTollfreePhoneNumberSid(String tollfreePhoneNumberSid) {
        this.tollfreePhoneNumberSid = tollfreePhoneNumberSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trust_product_sid")
    public String trustProductSid;
    public MessagingV1TollfreeVerification withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MessagingV1TollfreeVerification withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_case_categories")
    public String[] useCaseCategories;
    public MessagingV1TollfreeVerification withUseCaseCategories(String[] useCaseCategories) {
        this.useCaseCategories = useCaseCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_case_summary")
    public String useCaseSummary;
    public MessagingV1TollfreeVerification withUseCaseSummary(String useCaseSummary) {
        this.useCaseSummary = useCaseSummary;
        return this;
    }
}