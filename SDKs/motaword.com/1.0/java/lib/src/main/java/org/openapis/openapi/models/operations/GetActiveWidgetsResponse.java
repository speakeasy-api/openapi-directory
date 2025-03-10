/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetActiveWidgetsResponse {
    /**
     * List of widgets
     */
    
    public org.openapis.openapi.models.shared.ActiveWidgetList activeWidgetList;

    public GetActiveWidgetsResponse withActiveWidgetList(org.openapis.openapi.models.shared.ActiveWidgetList activeWidgetList) {
        this.activeWidgetList = activeWidgetList;
        return this;
    }
    
    
    public String contentType;

    public GetActiveWidgetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * ProjectNotFound
     */
    
    public org.openapis.openapi.models.shared.Error error;

    public GetActiveWidgetsResponse withError(org.openapis.openapi.models.shared.Error error) {
        this.error = error;
        return this;
    }
    
    
    public Integer statusCode;

    public GetActiveWidgetsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetActiveWidgetsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetActiveWidgetsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
