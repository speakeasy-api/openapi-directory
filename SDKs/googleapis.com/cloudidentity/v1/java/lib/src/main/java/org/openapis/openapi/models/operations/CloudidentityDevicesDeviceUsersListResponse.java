/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class CloudidentityDevicesDeviceUsersListResponse {
    
    public String contentType;

    public CloudidentityDevicesDeviceUsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse googleAppsCloudidentityDevicesV1ListDeviceUsersResponse;

    public CloudidentityDevicesDeviceUsersListResponse withGoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse(org.openapis.openapi.models.shared.GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse googleAppsCloudidentityDevicesV1ListDeviceUsersResponse) {
        this.googleAppsCloudidentityDevicesV1ListDeviceUsersResponse = googleAppsCloudidentityDevicesV1ListDeviceUsersResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public CloudidentityDevicesDeviceUsersListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public CloudidentityDevicesDeviceUsersListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public CloudidentityDevicesDeviceUsersListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
