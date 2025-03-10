/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetDiscoveryV2ClassificationsIdRequest {
    /**
     * ID of the segment, genre, or sub-genre
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public GetDiscoveryV2ClassificationsIdRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * True if you want to display licensed content
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLicensedContent")
    public GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum includeLicensedContent;

    public GetDiscoveryV2ClassificationsIdRequest withIncludeLicensedContent(GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum includeLicensedContent) {
        this.includeLicensedContent = includeLicensedContent;
        return this;
    }
    
    /**
     * The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;

    public GetDiscoveryV2ClassificationsIdRequest withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    
    public GetDiscoveryV2ClassificationsIdRequest(@JsonProperty("id") String id) {
        this.id = id;
  }
}
