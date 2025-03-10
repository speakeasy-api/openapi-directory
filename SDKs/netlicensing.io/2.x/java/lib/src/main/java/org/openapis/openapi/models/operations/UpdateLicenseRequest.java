/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateLicenseRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateLicenseRequestBody requestBody;

    public UpdateLicenseRequest withRequestBody(UpdateLicenseRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseNumber")
    public String licenseNumber;

    public UpdateLicenseRequest withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
    
    public UpdateLicenseRequest(@JsonProperty("licenseNumber") String licenseNumber) {
        this.licenseNumber = licenseNumber;
  }
}
