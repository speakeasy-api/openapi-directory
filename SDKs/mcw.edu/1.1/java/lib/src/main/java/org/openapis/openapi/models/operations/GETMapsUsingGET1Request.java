/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETMapsUsingGET1Request {
    /**
     * RGD term acc
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;

    public GETMapsUsingGET1Request withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    
    public GETMapsUsingGET1Request(@JsonProperty("accId") String accId) {
        this.accId = accId;
  }
}
