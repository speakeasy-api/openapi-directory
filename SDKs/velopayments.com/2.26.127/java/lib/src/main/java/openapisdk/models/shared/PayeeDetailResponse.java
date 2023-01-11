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

public class PayeeDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("acceptTermsAndConditionsTimestamp")
    public OffsetDateTime acceptTermsAndConditionsTimestamp;
    public PayeeDetailResponse withAcceptTermsAndConditionsTimestamp(OffsetDateTime acceptTermsAndConditionsTimestamp) {
        this.acceptTermsAndConditionsTimestamp = acceptTermsAndConditionsTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PayeeAddress address;
    public PayeeDetailResponse withAddress(PayeeAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cellphoneNumber")
    public String cellphoneNumber;
    public PayeeDetailResponse withCellphoneNumber(String cellphoneNumber) {
        this.cellphoneNumber = cellphoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge")
    public Challenge challenge;
    public PayeeDetailResponse withChallenge(Challenge challenge) {
        this.challenge = challenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public Company company;
    public PayeeDetailResponse withCompany(Company company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PayeeDetailResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public PayeeDetailResponse withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public PayeeDetailResponse withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledComment")
    public String disabledComment;
    public PayeeDetailResponse withDisabledComment(String disabledComment) {
        this.disabledComment = disabledComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("disabledUpdatedTimestamp")
    public OffsetDateTime disabledUpdatedTimestamp;
    public PayeeDetailResponse withDisabledUpdatedTimestamp(OffsetDateTime disabledUpdatedTimestamp) {
        this.disabledUpdatedTimestamp = disabledUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PayeeDetailResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PayeeDetailResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enhancedKycCompleted")
    public Boolean enhancedKycCompleted;
    public PayeeDetailResponse withEnhancedKycCompleted(Boolean enhancedKycCompleted) {
        this.enhancedKycCompleted = enhancedKycCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracePeriodEndDate")
    public LocalDate gracePeriodEndDate;
    public PayeeDetailResponse withGracePeriodEndDate(LocalDate gracePeriodEndDate) {
        this.gracePeriodEndDate = gracePeriodEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public Individual individual;
    public PayeeDetailResponse withIndividual(Individual individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kycCompletedTimestamp")
    public String kycCompletedTimestamp;
    public PayeeDetailResponse withKycCompletedTimestamp(String kycCompletedTimestamp) {
        this.kycCompletedTimestamp = kycCompletedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public PayeeDetailResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingOptInDecision")
    public Boolean marketingOptInDecision;
    public PayeeDetailResponse withMarketingOptInDecision(Boolean marketingOptInDecision) {
        this.marketingOptInDecision = marketingOptInDecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingOptInTimestamp")
    public String marketingOptInTimestamp;
    public PayeeDetailResponse withMarketingOptInTimestamp(String marketingOptInTimestamp) {
        this.marketingOptInTimestamp = marketingOptInTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboardedStatus")
    public OnboardedStatus2Enum onboardedStatus;
    public PayeeDetailResponse withOnboardedStatus(OnboardedStatus2Enum onboardedStatus) {
        this.onboardedStatus = onboardedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pausePayment")
    public Boolean pausePayment;
    public PayeeDetailResponse withPausePayment(Boolean pausePayment) {
        this.pausePayment = pausePayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pausePaymentTimestamp")
    public String pausePaymentTimestamp;
    public PayeeDetailResponse withPausePaymentTimestamp(String pausePaymentTimestamp) {
        this.pausePaymentTimestamp = pausePaymentTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeId")
    public String payeeId;
    public PayeeDetailResponse withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public PayeeTypeEnum payeeType;
    public PayeeDetailResponse withPayeeType(PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorRefs")
    public PayeePayorRefV3[] payorRefs;
    public PayeeDetailResponse withPayorRefs(PayeePayorRefV3[] payorRefs) {
        this.payorRefs = payorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistOverrideComment")
    public String watchlistOverrideComment;
    public PayeeDetailResponse withWatchlistOverrideComment(String watchlistOverrideComment) {
        this.watchlistOverrideComment = watchlistOverrideComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("watchlistOverrideExpiresAtTimestamp")
    public OffsetDateTime watchlistOverrideExpiresAtTimestamp;
    public PayeeDetailResponse withWatchlistOverrideExpiresAtTimestamp(OffsetDateTime watchlistOverrideExpiresAtTimestamp) {
        this.watchlistOverrideExpiresAtTimestamp = watchlistOverrideExpiresAtTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatus")
    public WatchlistStatusEnum watchlistStatus;
    public PayeeDetailResponse withWatchlistStatus(WatchlistStatusEnum watchlistStatus) {
        this.watchlistStatus = watchlistStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatusUpdatedTimestamp")
    public String watchlistStatusUpdatedTimestamp;
    public PayeeDetailResponse withWatchlistStatusUpdatedTimestamp(String watchlistStatusUpdatedTimestamp) {
        this.watchlistStatusUpdatedTimestamp = watchlistStatusUpdatedTimestamp;
        return this;
    }
}