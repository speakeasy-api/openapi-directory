package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetPayeeListResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public GetPayeeListResponseCompany2 company;
    public GetPayeeListResponse2 withCompany(GetPayeeListResponseCompany2 company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetPayeeListResponse2 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public GetPayeeListResponse2 withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GetPayeeListResponse2 withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledComment")
    public String disabledComment;
    public GetPayeeListResponse2 withDisabledComment(String disabledComment) {
        this.disabledComment = disabledComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("disabledUpdatedTimestamp")
    public OffsetDateTime disabledUpdatedTimestamp;
    public GetPayeeListResponse2 withDisabledUpdatedTimestamp(OffsetDateTime disabledUpdatedTimestamp) {
        this.disabledUpdatedTimestamp = disabledUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GetPayeeListResponse2 withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetPayeeListResponse2 withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public GetPayeeListResponseIndividual2 individual;
    public GetPayeeListResponse2 withIndividual(GetPayeeListResponseIndividual2 individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public GetPayeeListResponse2 withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboardedStatus")
    public OnboardedStatusEnum onboardedStatus;
    public GetPayeeListResponse2 withOnboardedStatus(OnboardedStatusEnum onboardedStatus) {
        this.onboardedStatus = onboardedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeId")
    public String payeeId;
    public GetPayeeListResponse2 withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public PayeeTypeEnum payeeType;
    public GetPayeeListResponse2 withPayeeType(PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorRefs")
    public PayeePayorRef[] payorRefs;
    public GetPayeeListResponse2 withPayorRefs(PayeePayorRef[] payorRefs) {
        this.payorRefs = payorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistOverrideComment")
    public String watchlistOverrideComment;
    public GetPayeeListResponse2 withWatchlistOverrideComment(String watchlistOverrideComment) {
        this.watchlistOverrideComment = watchlistOverrideComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatus")
    public WatchlistStatus2Enum watchlistStatus;
    public GetPayeeListResponse2 withWatchlistStatus(WatchlistStatus2Enum watchlistStatus) {
        this.watchlistStatus = watchlistStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatusUpdatedTimestamp")
    public String watchlistStatusUpdatedTimestamp;
    public GetPayeeListResponse2 withWatchlistStatusUpdatedTimestamp(String watchlistStatusUpdatedTimestamp) {
        this.watchlistStatusUpdatedTimestamp = watchlistStatusUpdatedTimestamp;
        return this;
    }
}