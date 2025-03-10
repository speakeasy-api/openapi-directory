/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateCompositionHookRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCompositionHookUpdateCompositionHookRequest requestBody;
    public UpdateCompositionHookRequest withRequestBody(UpdateCompositionHookUpdateCompositionHookRequest requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The SID of the CompositionHook resource to update.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public UpdateCompositionHookRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
    
}
