/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class StopPointArrivalsRequest {
    /**
     * A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public StopPointArrivalsRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    public StopPointArrivalsRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}
