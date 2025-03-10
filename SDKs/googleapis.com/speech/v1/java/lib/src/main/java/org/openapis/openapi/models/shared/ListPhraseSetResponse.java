/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListPhraseSetResponse - Message returned to the client by the `ListPhraseSet` method.
 */
public class ListPhraseSetResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListPhraseSetResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * The phrase set.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseSets")
    public PhraseSet[] phraseSets;

    public ListPhraseSetResponse withPhraseSets(PhraseSet[] phraseSets) {
        this.phraseSets = phraseSets;
        return this;
    }
    
    public ListPhraseSetResponse(){}
}
