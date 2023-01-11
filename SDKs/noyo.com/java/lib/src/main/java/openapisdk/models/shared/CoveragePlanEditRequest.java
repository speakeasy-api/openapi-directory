package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CoveragePlanEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefit_details")
    public String[] benefitDetails;
    public CoveragePlanEditRequest withBenefitDetails(String[] benefitDetails) {
        this.benefitDetails = benefitDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cobra_rules")
    public CoveragePlanEditRequestCobraRules cobraRules;
    public CoveragePlanEditRequest withCobraRules(CoveragePlanEditRequestCobraRules cobraRules) {
        this.cobraRules = cobraRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CoveragePlanEditRequest withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_details")
    public ContributionDetails[] contributionDetails;
    public CoveragePlanEditRequest withContributionDetails(ContributionDetails[] contributionDetails) {
        this.contributionDetails = contributionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_details")
    public CoverageDetails coverageDetails;
    public CoveragePlanEditRequest withCoverageDetails(CoverageDetails coverageDetails) {
        this.coverageDetails = coverageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing_plan")
    public Boolean existingPlan;
    public CoveragePlanEditRequest withExistingPlan(Boolean existingPlan) {
        this.existingPlan = existingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public CoveragePlanEditRequest withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CoveragePlanEditRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_name")
    public String planName;
    public CoveragePlanEditRequest withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_type")
    public String planType;
    public CoveragePlanEditRequest withPlanType(String planType) {
        this.planType = planType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public String productType;
    public CoveragePlanEditRequest withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_details")
    public RateModel[] rateDetails;
    public CoveragePlanEditRequest withRateDetails(RateModel[] rateDetails) {
        this.rateDetails = rateDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termination_policy")
    public String terminationPolicy;
    public CoveragePlanEditRequest withTerminationPolicy(String terminationPolicy) {
        this.terminationPolicy = terminationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_rules")
    public String volumeRules;
    public CoveragePlanEditRequest withVolumeRules(String volumeRules) {
        this.volumeRules = volumeRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_period_rules")
    public String[] waitingPeriodRules;
    public CoveragePlanEditRequest withWaitingPeriodRules(String[] waitingPeriodRules) {
        this.waitingPeriodRules = waitingPeriodRules;
        return this;
    }
}