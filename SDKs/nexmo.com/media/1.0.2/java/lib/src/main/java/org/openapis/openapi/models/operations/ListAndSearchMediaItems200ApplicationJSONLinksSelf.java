/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAndSearchMediaItems200ApplicationJSONLinksSelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;

    public ListAndSearchMediaItems200ApplicationJSONLinksSelf withHref(String href) {
        this.href = href;
        return this;
    }
    
    public ListAndSearchMediaItems200ApplicationJSONLinksSelf(){}
}
