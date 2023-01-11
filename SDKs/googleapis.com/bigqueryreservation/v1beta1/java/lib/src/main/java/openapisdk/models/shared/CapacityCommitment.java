package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CapacityCommitment
 * Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
**/
public class CapacityCommitment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentEndTime")
    public String commitmentEndTime;
    public CapacityCommitment withCommitmentEndTime(String commitmentEndTime) {
        this.commitmentEndTime = commitmentEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentStartTime")
    public String commitmentStartTime;
    public CapacityCommitment withCommitmentStartTime(String commitmentStartTime) {
        this.commitmentStartTime = commitmentStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureStatus")
    public Status failureStatus;
    public CapacityCommitment withFailureStatus(Status failureStatus) {
        this.failureStatus = failureStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiRegionAuxiliary")
    public Boolean multiRegionAuxiliary;
    public CapacityCommitment withMultiRegionAuxiliary(Boolean multiRegionAuxiliary) {
        this.multiRegionAuxiliary = multiRegionAuxiliary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CapacityCommitment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public CapacityCommitmentPlanEnum plan;
    public CapacityCommitment withPlan(CapacityCommitmentPlanEnum plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalPlan")
    public CapacityCommitmentRenewalPlanEnum renewalPlan;
    public CapacityCommitment withRenewalPlan(CapacityCommitmentRenewalPlanEnum renewalPlan) {
        this.renewalPlan = renewalPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotCount")
    public String slotCount;
    public CapacityCommitment withSlotCount(String slotCount) {
        this.slotCount = slotCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CapacityCommitmentStateEnum state;
    public CapacityCommitment withState(CapacityCommitmentStateEnum state) {
        this.state = state;
        return this;
    }
}