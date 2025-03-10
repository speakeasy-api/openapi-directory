/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PutTransactionAccountsIdResponse {
    
    public String contentType;

    public PutTransactionAccountsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Not Allowed
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public PutTransactionAccountsIdResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public Integer statusCode;

    public PutTransactionAccountsIdResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PutTransactionAccountsIdResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.TransactionAccount transactionAccount;

    public PutTransactionAccountsIdResponse withTransactionAccount(org.openapis.openapi.models.shared.TransactionAccount transactionAccount) {
        this.transactionAccount = transactionAccount;
        return this;
    }
    
    public PutTransactionAccountsIdResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
