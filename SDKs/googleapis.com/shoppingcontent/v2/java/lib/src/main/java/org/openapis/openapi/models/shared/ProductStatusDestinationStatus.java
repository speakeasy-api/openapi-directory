/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ProductStatusDestinationStatus {
    /**
     * Whether the approval status might change due to further processing.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalPending")
    public Boolean approvalPending;

    public ProductStatusDestinationStatus withApprovalPending(Boolean approvalPending) {
        this.approvalPending = approvalPending;
        return this;
    }
    
    /**
     * The destination's approval status. Acceptable values are: - "`approved`" - "`disapproved`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalStatus")
    public String approvalStatus;

    public ProductStatusDestinationStatus withApprovalStatus(String approvalStatus) {
        this.approvalStatus = approvalStatus;
        return this;
    }
    
    /**
     * The name of the destination
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;

    public ProductStatusDestinationStatus withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    
    /**
     * Provided for backward compatibility only. Always set to "required". Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intention")
    public String intention;

    public ProductStatusDestinationStatus withIntention(String intention) {
        this.intention = intention;
        return this;
    }
    
    public ProductStatusDestinationStatus(){}
}
