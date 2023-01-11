package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2PolicySpecPolicyRule
 * A rule used to express this policy.
**/
public class GoogleCloudOrgpolicyV2PolicySpecPolicyRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowAll")
    public Boolean allowAll;
    public GoogleCloudOrgpolicyV2PolicySpecPolicyRule withAllowAll(Boolean allowAll) {
        this.allowAll = allowAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public GoogleTypeExpr condition;
    public GoogleCloudOrgpolicyV2PolicySpecPolicyRule withCondition(GoogleTypeExpr condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denyAll")
    public Boolean denyAll;
    public GoogleCloudOrgpolicyV2PolicySpecPolicyRule withDenyAll(Boolean denyAll) {
        this.denyAll = denyAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce")
    public Boolean enforce;
    public GoogleCloudOrgpolicyV2PolicySpecPolicyRule withEnforce(Boolean enforce) {
        this.enforce = enforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues values;
    public GoogleCloudOrgpolicyV2PolicySpecPolicyRule withValues(GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues values) {
        this.values = values;
        return this;
    }
}