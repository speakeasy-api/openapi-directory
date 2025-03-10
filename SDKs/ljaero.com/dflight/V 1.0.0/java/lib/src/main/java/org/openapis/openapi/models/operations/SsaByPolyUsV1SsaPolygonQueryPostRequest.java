/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SsaByPolyUsV1SsaPolygonQueryPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.SSAByPolygon ssaByPolygon;

    public SsaByPolyUsV1SsaPolygonQueryPostRequest withSSAByPolygon(org.openapis.openapi.models.shared.SSAByPolygon ssaByPolygon) {
        this.ssaByPolygon = ssaByPolygon;
        return this;
    }
    
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;

    public SsaByPolyUsV1SsaPolygonQueryPostRequest withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
    
    public SsaByPolyUsV1SsaPolygonQueryPostRequest(@JsonProperty("SSAByPolygon") org.openapis.openapi.models.shared.SSAByPolygon ssaByPolygon) {
        this.ssaByPolygon = ssaByPolygon;
  }
}
