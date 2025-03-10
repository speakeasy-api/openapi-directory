/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SecurityOption2 {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query,name=api_key")
    public String apiKey;
    public SecurityOption2 withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=Stream-Auth-Type")
    public String streamAuthType;
    public SecurityOption2 withStreamAuthType(String streamAuthType) {
        this.streamAuthType = streamAuthType;
        return this;
    }
    
}
