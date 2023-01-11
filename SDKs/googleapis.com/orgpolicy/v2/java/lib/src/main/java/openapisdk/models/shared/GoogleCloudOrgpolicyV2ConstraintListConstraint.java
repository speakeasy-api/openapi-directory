package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2ConstraintListConstraint
 * A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
**/
public class GoogleCloudOrgpolicyV2ConstraintListConstraint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsIn")
    public Boolean supportsIn;
    public GoogleCloudOrgpolicyV2ConstraintListConstraint withSupportsIn(Boolean supportsIn) {
        this.supportsIn = supportsIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsUnder")
    public Boolean supportsUnder;
    public GoogleCloudOrgpolicyV2ConstraintListConstraint withSupportsUnder(Boolean supportsUnder) {
        this.supportsUnder = supportsUnder;
        return this;
    }
}