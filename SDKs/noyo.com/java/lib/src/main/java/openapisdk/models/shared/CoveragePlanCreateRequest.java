package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CoveragePlanCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefit_details")
    public String[] benefitDetails;
    public CoveragePlanCreateRequest withBenefitDetails(String[] benefitDetails) {
        this.benefitDetails = benefitDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cobra_rules")
    public CoveragePlanCreateRequestCobraRules cobraRules;
    public CoveragePlanCreateRequest withCobraRules(CoveragePlanCreateRequestCobraRules cobraRules) {
        this.cobraRules = cobraRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CoveragePlanCreateRequest withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contribution_details")
    public ContributionDetails[] contributionDetails;
    public CoveragePlanCreateRequest withContributionDetails(ContributionDetails[] contributionDetails) {
        this.contributionDetails = contributionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_details")
    public CoverageDetails coverageDetails;
    public CoveragePlanCreateRequest withCoverageDetails(CoverageDetails coverageDetails) {
        this.coverageDetails = coverageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing_plan")
    public Boolean existingPlan;
    public CoveragePlanCreateRequest withExistingPlan(Boolean existingPlan) {
        this.existingPlan = existingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public CoveragePlanCreateRequest withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CoveragePlanCreateRequest withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("plan_name")
    public String planName;
    public CoveragePlanCreateRequest withPlanName(String planName) {
        this.planName = planName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_type")
    public String planType;
    public CoveragePlanCreateRequest withPlanType(String planType) {
        this.planType = planType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public String productType;
    public CoveragePlanCreateRequest withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_details")
    public RateModel[] rateDetails;
    public CoveragePlanCreateRequest withRateDetails(RateModel[] rateDetails) {
        this.rateDetails = rateDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termination_policy")
    public String terminationPolicy;
    public CoveragePlanCreateRequest withTerminationPolicy(String terminationPolicy) {
        this.terminationPolicy = terminationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_rules")
    public String volumeRules;
    public CoveragePlanCreateRequest withVolumeRules(String volumeRules) {
        this.volumeRules = volumeRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_period_rules")
    public String[] waitingPeriodRules;
    public CoveragePlanCreateRequest withWaitingPeriodRules(String[] waitingPeriodRules) {
        this.waitingPeriodRules = waitingPeriodRules;
        return this;
    }
}