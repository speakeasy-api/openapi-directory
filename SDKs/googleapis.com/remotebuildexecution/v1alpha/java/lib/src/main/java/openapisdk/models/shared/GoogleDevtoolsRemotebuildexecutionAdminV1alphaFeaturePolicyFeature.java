package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
 * Defines whether a feature can be used or what values are accepted.
**/
public class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedValues")
    public String[] allowedValues;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum policy;
    public GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature withPolicy(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeaturePolicyEnum policy) {
        this.policy = policy;
        return this;
    }
}