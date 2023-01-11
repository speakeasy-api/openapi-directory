package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Project
 * Contains properties of a Planning project.
**/
public class Project {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Project withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public Project withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceAgeGroup")
    public ProjectAudienceAgeGroupEnum audienceAgeGroup;
    public Project withAudienceAgeGroup(ProjectAudienceAgeGroupEnum audienceAgeGroup) {
        this.audienceAgeGroup = audienceAgeGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceGender")
    public ProjectAudienceGenderEnum audienceGender;
    public Project withAudienceGender(ProjectAudienceGenderEnum audienceGender) {
        this.audienceGender = audienceGender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budget")
    public String budget;
    public Project withBudget(String budget) {
        this.budget = budget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientBillingCode")
    public String clientBillingCode;
    public Project withClientBillingCode(String clientBillingCode) {
        this.clientBillingCode = clientBillingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientName")
    public String clientName;
    public Project withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public Project withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Project withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Project withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedInfo")
    public LastModifiedInfo lastModifiedInfo;
    public Project withLastModifiedInfo(LastModifiedInfo lastModifiedInfo) {
        this.lastModifiedInfo = lastModifiedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Project withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public String overview;
    public Project withOverview(String overview) {
        this.overview = overview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public Project withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccountId")
    public String subaccountId;
    public Project withSubaccountId(String subaccountId) {
        this.subaccountId = subaccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetClicks")
    public String targetClicks;
    public Project withTargetClicks(String targetClicks) {
        this.targetClicks = targetClicks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetConversions")
    public String targetConversions;
    public Project withTargetConversions(String targetConversions) {
        this.targetConversions = targetConversions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCpaNanos")
    public String targetCpaNanos;
    public Project withTargetCpaNanos(String targetCpaNanos) {
        this.targetCpaNanos = targetCpaNanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCpcNanos")
    public String targetCpcNanos;
    public Project withTargetCpcNanos(String targetCpcNanos) {
        this.targetCpcNanos = targetCpcNanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCpmActiveViewNanos")
    public String targetCpmActiveViewNanos;
    public Project withTargetCpmActiveViewNanos(String targetCpmActiveViewNanos) {
        this.targetCpmActiveViewNanos = targetCpmActiveViewNanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCpmNanos")
    public String targetCpmNanos;
    public Project withTargetCpmNanos(String targetCpmNanos) {
        this.targetCpmNanos = targetCpmNanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetImpressions")
    public String targetImpressions;
    public Project withTargetImpressions(String targetImpressions) {
        this.targetImpressions = targetImpressions;
        return this;
    }
}