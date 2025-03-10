/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=api-key")
    public String apiKey;
    public Security withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=user-id")
    public String userId;
    public Security withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    
}
