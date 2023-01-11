package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1Violation
 * Workload monitoring Violation.
**/
public class GoogleCloudAssuredworkloadsV1Violation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledged")
    public Boolean acknowledged;
    public GoogleCloudAssuredworkloadsV1Violation withAcknowledged(Boolean acknowledged) {
        this.acknowledged = acknowledged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgementTime")
    public String acknowledgementTime;
    public GoogleCloudAssuredworkloadsV1Violation withAcknowledgementTime(String acknowledgementTime) {
        this.acknowledgementTime = acknowledgementTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditLogLink")
    public String auditLogLink;
    public GoogleCloudAssuredworkloadsV1Violation withAuditLogLink(String auditLogLink) {
        this.auditLogLink = auditLogLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginTime")
    public String beginTime;
    public GoogleCloudAssuredworkloadsV1Violation withBeginTime(String beginTime) {
        this.beginTime = beginTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public GoogleCloudAssuredworkloadsV1Violation withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudAssuredworkloadsV1Violation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exceptionAuditLogLink")
    public String exceptionAuditLogLink;
    public GoogleCloudAssuredworkloadsV1Violation withExceptionAuditLogLink(String exceptionAuditLogLink) {
        this.exceptionAuditLogLink = exceptionAuditLogLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudAssuredworkloadsV1Violation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonCompliantOrgPolicy")
    public String nonCompliantOrgPolicy;
    public GoogleCloudAssuredworkloadsV1Violation withNonCompliantOrgPolicy(String nonCompliantOrgPolicy) {
        this.nonCompliantOrgPolicy = nonCompliantOrgPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgPolicyConstraint")
    public String orgPolicyConstraint;
    public GoogleCloudAssuredworkloadsV1Violation withOrgPolicyConstraint(String orgPolicyConstraint) {
        this.orgPolicyConstraint = orgPolicyConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remediation")
    public GoogleCloudAssuredworkloadsV1ViolationRemediation remediation;
    public GoogleCloudAssuredworkloadsV1Violation withRemediation(GoogleCloudAssuredworkloadsV1ViolationRemediation remediation) {
        this.remediation = remediation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolveTime")
    public String resolveTime;
    public GoogleCloudAssuredworkloadsV1Violation withResolveTime(String resolveTime) {
        this.resolveTime = resolveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudAssuredworkloadsV1ViolationStateEnum state;
    public GoogleCloudAssuredworkloadsV1Violation withState(GoogleCloudAssuredworkloadsV1ViolationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudAssuredworkloadsV1Violation withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}