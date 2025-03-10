/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PayorGetBrandingRequest {
    /**
     * The Payor Id
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;

    public PayorGetBrandingRequest withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    
    public PayorGetBrandingRequest(@JsonProperty("payorId") String payorId) {
        this.payorId = payorId;
  }
}
