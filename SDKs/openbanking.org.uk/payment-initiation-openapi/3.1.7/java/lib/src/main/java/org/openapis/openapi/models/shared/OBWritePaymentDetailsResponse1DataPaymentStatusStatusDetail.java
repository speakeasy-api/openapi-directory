/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail - Payment status details as per underlying Payment Rail.
 */
public class OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail {
    /**
     * User community specific instrument.
     * Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;

    public OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    
    /**
     * Status of a transfer, as assigned by the transaction administrator.
     */
    @JsonProperty("Status")
    public String status;

    public OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withStatus(String status) {
        this.status = status;
        return this;
    }
    
    /**
     * Reason Code provided for the status of a transfer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum statusReason;

    public OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withStatusReason(OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    
    /**
     * Reason provided for the status of a transfer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReasonDescription")
    public String statusReasonDescription;

    public OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withStatusReasonDescription(String statusReasonDescription) {
        this.statusReasonDescription = statusReasonDescription;
        return this;
    }
    
    public OBWritePaymentDetailsResponse1DataPaymentStatusStatusDetail(@JsonProperty("Status") String status) {
        this.status = status;
  }
}
