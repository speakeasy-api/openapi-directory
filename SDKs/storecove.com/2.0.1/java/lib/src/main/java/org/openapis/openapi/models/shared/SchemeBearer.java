/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SchemeBearer {
    @SpeakeasyMetadata("security:name=Authorization")public String apiKey;
    public SchemeBearer withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
}
