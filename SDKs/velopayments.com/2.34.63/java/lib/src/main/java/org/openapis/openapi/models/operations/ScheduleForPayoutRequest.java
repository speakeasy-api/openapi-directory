/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ScheduleForPayoutRequest {
    /**
     * schedule payout parameters
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.SchedulePayoutRequestV3 schedulePayoutRequestV3;
    public ScheduleForPayoutRequest withSchedulePayoutRequestV3(org.openapis.openapi.models.shared.SchedulePayoutRequestV3 schedulePayoutRequestV3) {
        this.schedulePayoutRequestV3 = schedulePayoutRequestV3;
        return this;
    }
    
    /**
     * Id of the payout
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payoutId")
    public String payoutId;
    public ScheduleForPayoutRequest withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    
}
