/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class LanguageDetectionsListSecurityOption2 {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2,name=Authorization")
    public String oauth2;

    public LanguageDetectionsListSecurityOption2 withOauth2(String oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    
    @SpeakeasyMetadata("security:scheme=true,type=oauth2,name=Authorization")
    public String oauth2c;

    public LanguageDetectionsListSecurityOption2 withOauth2c(String oauth2c) {
        this.oauth2c = oauth2c;
        return this;
    }
    
    public LanguageDetectionsListSecurityOption2(@JsonProperty("Oauth2") String oauth2, @JsonProperty("Oauth2c") String oauth2c) {
        this.oauth2 = oauth2;
        this.oauth2c = oauth2c;
  }
}
