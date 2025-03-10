/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAccountLabelsResponse - Response message for the `ListAccountLabels` method.
 */
public class ListAccountLabelsResponse {
    /**
     * The labels from the specified account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountLabels")
    public AccountLabel[] accountLabels;

    public ListAccountLabelsResponse withAccountLabels(AccountLabel[] accountLabels) {
        this.accountLabels = accountLabels;
        return this;
    }
    
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListAccountLabelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    public ListAccountLabelsResponse(){}
}
