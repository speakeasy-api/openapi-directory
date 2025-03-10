/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateHealthIdByDemoAuthUsingPOSTRequest {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;

    public CreateHealthIdByDemoAuthUsingPOSTRequest withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    
    /**
     * createHIdDemoAuthRequest
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.CreateHIdDemoAuthRequest createHIdDemoAuthRequest;

    public CreateHealthIdByDemoAuthUsingPOSTRequest withCreateHIdDemoAuthRequest(org.openapis.openapi.models.shared.CreateHIdDemoAuthRequest createHIdDemoAuthRequest) {
        this.createHIdDemoAuthRequest = createHIdDemoAuthRequest;
        return this;
    }
    
    public CreateHealthIdByDemoAuthUsingPOSTRequest(@JsonProperty("CreateHIdDemoAuthRequest") org.openapis.openapi.models.shared.CreateHIdDemoAuthRequest createHIdDemoAuthRequest) {
        this.createHIdDemoAuthRequest = createHIdDemoAuthRequest;
  }
}
