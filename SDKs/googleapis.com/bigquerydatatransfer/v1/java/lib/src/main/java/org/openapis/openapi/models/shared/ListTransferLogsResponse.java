/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListTransferLogsResponse - The returned list transfer run messages.
 */
public class ListTransferLogsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ListTransferLogsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    /**
     * Output only. The stored pipeline transfer messages.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferMessages")
    public TransferMessage[] transferMessages;

    public ListTransferLogsResponse withTransferMessages(TransferMessage[] transferMessages) {
        this.transferMessages = transferMessages;
        return this;
    }
    
    public ListTransferLogsResponse(){}
}
