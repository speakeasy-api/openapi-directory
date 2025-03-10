/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CapacityCommitmentInput - Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
 */
public class CapacityCommitmentInput {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureStatus")
    public Status failureStatus;

    public CapacityCommitmentInput withFailureStatus(Status failureStatus) {
        this.failureStatus = failureStatus;
        return this;
    }
    
    /**
     * Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization's default region.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiRegionAuxiliary")
    public Boolean multiRegionAuxiliary;

    public CapacityCommitmentInput withMultiRegionAuxiliary(Boolean multiRegionAuxiliary) {
        this.multiRegionAuxiliary = multiRegionAuxiliary;
        return this;
    }
    
    /**
     * Capacity commitment commitment plan.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public CapacityCommitmentPlanEnum plan;

    public CapacityCommitmentInput withPlan(CapacityCommitmentPlanEnum plan) {
        this.plan = plan;
        return this;
    }
    
    /**
     * The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalPlan")
    public CapacityCommitmentRenewalPlanEnum renewalPlan;

    public CapacityCommitmentInput withRenewalPlan(CapacityCommitmentRenewalPlanEnum renewalPlan) {
        this.renewalPlan = renewalPlan;
        return this;
    }
    
    /**
     * Number of slots in this commitment.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotCount")
    public String slotCount;

    public CapacityCommitmentInput withSlotCount(String slotCount) {
        this.slotCount = slotCount;
        return this;
    }
    
    public CapacityCommitmentInput(){}
}
