/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class LandlordControllerGetTenancyRequest {
    /**
     * The unique client short-name
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;

    public LandlordControllerGetTenancyRequest withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    
    /**
     * The Tenancy ID
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tenancyID")
    public String tenancyID;

    public LandlordControllerGetTenancyRequest withTenancyID(String tenancyID) {
        this.tenancyID = tenancyID;
        return this;
    }
    
    /**
     * The login token returned from the /session POST call
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;

    public LandlordControllerGetTenancyRequest withToken(String token) {
        this.token = token;
        return this;
    }
    
    public LandlordControllerGetTenancyRequest(@JsonProperty("shortName") String shortName, @JsonProperty("tenancyID") String tenancyID, @JsonProperty("token") String token) {
        this.shortName = shortName;
        this.tenancyID = tenancyID;
        this.token = token;
  }
}
