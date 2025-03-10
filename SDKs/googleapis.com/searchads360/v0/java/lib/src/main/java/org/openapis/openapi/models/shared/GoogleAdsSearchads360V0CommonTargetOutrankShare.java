/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleAdsSearchads360V0CommonTargetOutrankShare - An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated.
 */
public class GoogleAdsSearchads360V0CommonTargetOutrankShare {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpcBidCeilingMicros")
    public String cpcBidCeilingMicros;

    public GoogleAdsSearchads360V0CommonTargetOutrankShare withCpcBidCeilingMicros(String cpcBidCeilingMicros) {
        this.cpcBidCeilingMicros = cpcBidCeilingMicros;
        return this;
    }
    
    public GoogleAdsSearchads360V0CommonTargetOutrankShare(){}
}
