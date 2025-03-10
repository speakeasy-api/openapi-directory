/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GistsGetComment403ApplicationJSONBlock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;

    public GistsGetComment403ApplicationJSONBlock withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;

    public GistsGetComment403ApplicationJSONBlock withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;

    public GistsGetComment403ApplicationJSONBlock withReason(String reason) {
        this.reason = reason;
        return this;
    }
    
    public GistsGetComment403ApplicationJSONBlock(){}
}
