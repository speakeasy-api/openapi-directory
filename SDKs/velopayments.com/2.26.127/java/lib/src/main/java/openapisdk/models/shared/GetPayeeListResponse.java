package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetPayeeListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public GetPayeeListResponseCompany company;
    public GetPayeeListResponse withCompany(GetPayeeListResponseCompany company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetPayeeListResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public GetPayeeListResponse withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GetPayeeListResponse withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabledComment")
    public String disabledComment;
    public GetPayeeListResponse withDisabledComment(String disabledComment) {
        this.disabledComment = disabledComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("disabledUpdatedTimestamp")
    public OffsetDateTime disabledUpdatedTimestamp;
    public GetPayeeListResponse withDisabledUpdatedTimestamp(OffsetDateTime disabledUpdatedTimestamp) {
        this.disabledUpdatedTimestamp = disabledUpdatedTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GetPayeeListResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetPayeeListResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individual")
    public GetPayeeListResponseIndividual individual;
    public GetPayeeListResponse withIndividual(GetPayeeListResponseIndividual individual) {
        this.individual = individual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public GetPayeeListResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onboardedStatus")
    public OnboardedStatus2Enum onboardedStatus;
    public GetPayeeListResponse withOnboardedStatus(OnboardedStatus2Enum onboardedStatus) {
        this.onboardedStatus = onboardedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeId")
    public String payeeId;
    public GetPayeeListResponse withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payeeType")
    public PayeeTypeEnum payeeType;
    public GetPayeeListResponse withPayeeType(PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorRefs")
    public PayeePayorRefV3[] payorRefs;
    public GetPayeeListResponse withPayorRefs(PayeePayorRefV3[] payorRefs) {
        this.payorRefs = payorRefs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistOverrideComment")
    public String watchlistOverrideComment;
    public GetPayeeListResponse withWatchlistOverrideComment(String watchlistOverrideComment) {
        this.watchlistOverrideComment = watchlistOverrideComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatus")
    public WatchlistStatusEnum watchlistStatus;
    public GetPayeeListResponse withWatchlistStatus(WatchlistStatusEnum watchlistStatus) {
        this.watchlistStatus = watchlistStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watchlistStatusUpdatedTimestamp")
    public String watchlistStatusUpdatedTimestamp;
    public GetPayeeListResponse withWatchlistStatusUpdatedTimestamp(String watchlistStatusUpdatedTimestamp) {
        this.watchlistStatusUpdatedTimestamp = watchlistStatusUpdatedTimestamp;
        return this;
    }
}