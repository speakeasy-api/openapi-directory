package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PayeeDetailResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("acceptTermsAndConditionsTimestamp")
    public OffsetDateTime acceptTermsAndConditionsTimestamp;
    public PayeeDetailResponse2 withAcceptTermsAndConditionsTimestamp(OffsetDateTime acceptTermsAndConditionsTimestamp) {
        this.acceptTermsAndConditionsTimestamp = acceptTermsAndConditionsTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PayeeAddress2 address;
    public PayeeDetailResponse2 withAddress(PayeeAddress2 address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellphoneNumber")
    public String cellphoneNumber;
    public PayeeDetailResponse2 withCellphoneNumber(String cellphoneNumber) {
        this.cellphoneNumber = cellphoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge2 challenge;
    public PayeeDetailResponse2 withChallenge(Challenge2 challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company2 company;
    public PayeeDetailResponse2 withCompany(Company2 company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PayeeDetailResponse2 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public PayeeDetailResponse2 withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public PayeeDetailResponse2 withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledComment")
    public String disabledComment;
    public PayeeDetailResponse2 withDisabledComment(String disabledComment) {
        this.disabledComment = disabledComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("disabledUpdatedTimestamp")
    public OffsetDateTime disabledUpdatedTimestamp;
    public PayeeDetailResponse2 withDisabledUpdatedTimestamp(OffsetDateTime disabledUpdatedTimestamp) {
        this.disabledUpdatedTimestamp = disabledUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PayeeDetailResponse2 withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PayeeDetailResponse2 withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedKycCompleted")
    public Boolean enhancedKycCompleted;
    public PayeeDetailResponse2 withEnhancedKycCompleted(Boolean enhancedKycCompleted) {
        this.enhancedKycCompleted = enhancedKycCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracePeriodEndDate")
    public LocalDate gracePeriodEndDate;
    public PayeeDetailResponse2 withGracePeriodEndDate(LocalDate gracePeriodEndDate) {
        this.gracePeriodEndDate = gracePeriodEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public Individual2 individual;
    public PayeeDetailResponse2 withIndividual(Individual2 individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kycCompletedTimestamp")
    public String kycCompletedTimestamp;
    public PayeeDetailResponse2 withKycCompletedTimestamp(String kycCompletedTimestamp) {
        this.kycCompletedTimestamp = kycCompletedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public PayeeDetailResponse2 withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingOptInDecision")
    public Boolean marketingOptInDecision;
    public PayeeDetailResponse2 withMarketingOptInDecision(Boolean marketingOptInDecision) {
        this.marketingOptInDecision = marketingOptInDecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingOptInTimestamp")
    public String marketingOptInTimestamp;
    public PayeeDetailResponse2 withMarketingOptInTimestamp(String marketingOptInTimestamp) {
        this.marketingOptInTimestamp = marketingOptInTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboardedStatus")
    public OnboardedStatusEnum onboardedStatus;
    public PayeeDetailResponse2 withOnboardedStatus(OnboardedStatusEnum onboardedStatus) {
        this.onboardedStatus = onboardedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pausePayment")
    public Boolean pausePayment;
    public PayeeDetailResponse2 withPausePayment(Boolean pausePayment) {
        this.pausePayment = pausePayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pausePaymentTimestamp")
    public String pausePaymentTimestamp;
    public PayeeDetailResponse2 withPausePaymentTimestamp(String pausePaymentTimestamp) {
        this.pausePaymentTimestamp = pausePaymentTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeId")
    public String payeeId;
    public PayeeDetailResponse2 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public PayeeTypeEnum payeeType;
    public PayeeDetailResponse2 withPayeeType(PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorRefs")
    public PayeePayorRef[] payorRefs;
    public PayeeDetailResponse2 withPayorRefs(PayeePayorRef[] payorRefs) {
        this.payorRefs = payorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistOverrideComment")
    public String watchlistOverrideComment;
    public PayeeDetailResponse2 withWatchlistOverrideComment(String watchlistOverrideComment) {
        this.watchlistOverrideComment = watchlistOverrideComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("watchlistOverrideExpiresAtTimestamp")
    public OffsetDateTime watchlistOverrideExpiresAtTimestamp;
    public PayeeDetailResponse2 withWatchlistOverrideExpiresAtTimestamp(OffsetDateTime watchlistOverrideExpiresAtTimestamp) {
        this.watchlistOverrideExpiresAtTimestamp = watchlistOverrideExpiresAtTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatus")
    public WatchlistStatus2Enum watchlistStatus;
    public PayeeDetailResponse2 withWatchlistStatus(WatchlistStatus2Enum watchlistStatus) {
        this.watchlistStatus = watchlistStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatusUpdatedTimestamp")
    public String watchlistStatusUpdatedTimestamp;
    public PayeeDetailResponse2 withWatchlistStatusUpdatedTimestamp(String watchlistStatusUpdatedTimestamp) {
        this.watchlistStatusUpdatedTimestamp = watchlistStatusUpdatedTimestamp;
        return this;
    }
}