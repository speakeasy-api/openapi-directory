/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse {
    
    public String contentType;

    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
