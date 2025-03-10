/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountAdwordsLink {
    /**
     * Customer ID of the AdWords account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adwordsId")
    public String adwordsId;

    public AccountAdwordsLink withAdwordsId(String adwordsId) {
        this.adwordsId = adwordsId;
        return this;
    }
    
    /**
     * Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;

    public AccountAdwordsLink withStatus(String status) {
        this.status = status;
        return this;
    }
    
    public AccountAdwordsLink(){}
}
