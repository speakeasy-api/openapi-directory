/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GETMostemailedSectionTimePeriodJsonSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query,name=api-key")
    public String apiKey;

    public GETMostemailedSectionTimePeriodJsonSecurity withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    public GETMostemailedSectionTimePeriodJsonSecurity(@JsonProperty("api-key") String apiKey) {
        this.apiKey = apiKey;
  }
}
