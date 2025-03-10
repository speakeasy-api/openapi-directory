/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CodeScanningUpdateAlertRequestBody {
    /**
     * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissed_reason")
    public org.openapis.openapi.models.shared.CodeScanningAlertDismissedReasonEnum dismissedReason;

    public CodeScanningUpdateAlertRequestBody withDismissedReason(org.openapis.openapi.models.shared.CodeScanningAlertDismissedReasonEnum dismissedReason) {
        this.dismissedReason = dismissedReason;
        return this;
    }
    
    /**
     * Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`.
     */
    @JsonProperty("state")
    public org.openapis.openapi.models.shared.CodeScanningAlertSetStateEnum state;

    public CodeScanningUpdateAlertRequestBody withState(org.openapis.openapi.models.shared.CodeScanningAlertSetStateEnum state) {
        this.state = state;
        return this;
    }
    
    public CodeScanningUpdateAlertRequestBody(@JsonProperty("state") org.openapis.openapi.models.shared.CodeScanningAlertSetStateEnum state) {
        this.state = state;
  }
}
