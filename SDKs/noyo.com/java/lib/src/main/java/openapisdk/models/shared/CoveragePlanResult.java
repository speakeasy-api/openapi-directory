package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CoveragePlanResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefit_details")
    public String[] benefitDetails;
    public CoveragePlanResult withBenefitDetails(String[] benefitDetails) {
        this.benefitDetails = benefitDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cobra_rules")
    public CoveragePlanResultCobraRules cobraRules;
    public CoveragePlanResult withCobraRules(CoveragePlanResultCobraRules cobraRules) {
        this.cobraRules = cobraRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CoveragePlanResult withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_details")
    public ContributionDetails[] contributionDetails;
    public CoveragePlanResult withContributionDetails(ContributionDetails[] contributionDetails) {
        this.contributionDetails = contributionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_details")
    public CoverageDetails coverageDetails;
    public CoveragePlanResult withCoverageDetails(CoverageDetails coverageDetails) {
        this.coverageDetails = coverageDetails;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public CoveragePlanResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing_plan")
    public Boolean existingPlan;
    public CoveragePlanResult withExistingPlan(Boolean existingPlan) {
        this.existingPlan = existingPlan;
        return this;
    }
    @JsonProperty("group_coverage_id")
    public String groupCoverageId;
    public CoveragePlanResult withGroupCoverageId(String groupCoverageId) {
        this.groupCoverageId = groupCoverageId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CoveragePlanResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public CoveragePlanResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public CoveragePlanResult withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CoveragePlanResult withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("plan_name")
    public String planName;
    public CoveragePlanResult withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_type")
    public String planType;
    public CoveragePlanResult withPlanType(String planType) {
        this.planType = planType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public String productType;
    public CoveragePlanResult withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_details")
    public RateModel[] rateDetails;
    public CoveragePlanResult withRateDetails(RateModel[] rateDetails) {
        this.rateDetails = rateDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termination_policy")
    public String terminationPolicy;
    public CoveragePlanResult withTerminationPolicy(String terminationPolicy) {
        this.terminationPolicy = terminationPolicy;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public CoveragePlanResult withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_rules")
    public String volumeRules;
    public CoveragePlanResult withVolumeRules(String volumeRules) {
        this.volumeRules = volumeRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_period_rules")
    public String[] waitingPeriodRules;
    public CoveragePlanResult withWaitingPeriodRules(String[] waitingPeriodRules) {
        this.waitingPeriodRules = waitingPeriodRules;
        return this;
    }
}