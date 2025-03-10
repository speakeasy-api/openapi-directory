/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum - Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse.
 */
public enum GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum {
    ACCESS_STATE_UNSPECIFIED("ACCESS_STATE_UNSPECIFIED"),
    GRANTED("GRANTED"),
    NOT_GRANTED("NOT_GRANTED"),
    UNKNOWN_CONDITIONAL("UNKNOWN_CONDITIONAL"),
    UNKNOWN_INFO_DENIED("UNKNOWN_INFO_DENIED");

    @JsonValue
    public final String value;

    private GoogleCloudPolicysimulatorV1ExplainedPolicyAccessEnum(String value) {
        this.value = value;
    }
}
