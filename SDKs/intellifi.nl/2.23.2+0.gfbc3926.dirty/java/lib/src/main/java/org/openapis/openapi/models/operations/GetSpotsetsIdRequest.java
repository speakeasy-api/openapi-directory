/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetSpotsetsIdRequest {
    /**
     * Unique identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSpotsetsIdRequest withId(String id) {
        this.id = id;
        return this;
    }
    
}
