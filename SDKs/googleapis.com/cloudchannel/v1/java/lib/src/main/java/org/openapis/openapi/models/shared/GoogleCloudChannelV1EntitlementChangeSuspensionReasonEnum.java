/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleCloudChannelV1EntitlementChangeSuspensionReasonEnum - Suspension reason for the Entitlement.
 */
public enum GoogleCloudChannelV1EntitlementChangeSuspensionReasonEnum {
    SUSPENSION_REASON_UNSPECIFIED("SUSPENSION_REASON_UNSPECIFIED"),
    RESELLER_INITIATED("RESELLER_INITIATED"),
    TRIAL_ENDED("TRIAL_ENDED"),
    RENEWAL_WITH_TYPE_CANCEL("RENEWAL_WITH_TYPE_CANCEL"),
    PENDING_TOS_ACCEPTANCE("PENDING_TOS_ACCEPTANCE"),
    OTHER("OTHER");

    @JsonValue
    public final String value;

    private GoogleCloudChannelV1EntitlementChangeSuspensionReasonEnum(String value) {
        this.value = value;
    }
}
