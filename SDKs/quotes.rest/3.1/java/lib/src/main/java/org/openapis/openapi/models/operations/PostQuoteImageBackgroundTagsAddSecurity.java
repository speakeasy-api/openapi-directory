/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PostQuoteImageBackgroundTagsAddSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header,name=X-TheySaidSo-Api-Secret")
    public String xTheySaidSoApiSecret;
    public PostQuoteImageBackgroundTagsAddSecurity withXTheySaidSoApiSecret(String xTheySaidSoApiSecret) {
        this.xTheySaidSoApiSecret = xTheySaidSoApiSecret;
        return this;
    }
    
}
