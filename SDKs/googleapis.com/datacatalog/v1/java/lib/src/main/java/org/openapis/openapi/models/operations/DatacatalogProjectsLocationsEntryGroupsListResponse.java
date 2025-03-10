/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DatacatalogProjectsLocationsEntryGroupsListResponse {
    
    public String contentType;

    public DatacatalogProjectsLocationsEntryGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ListEntryGroupsResponse googleCloudDatacatalogV1ListEntryGroupsResponse;

    public DatacatalogProjectsLocationsEntryGroupsListResponse withGoogleCloudDatacatalogV1ListEntryGroupsResponse(org.openapis.openapi.models.shared.GoogleCloudDatacatalogV1ListEntryGroupsResponse googleCloudDatacatalogV1ListEntryGroupsResponse) {
        this.googleCloudDatacatalogV1ListEntryGroupsResponse = googleCloudDatacatalogV1ListEntryGroupsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public DatacatalogProjectsLocationsEntryGroupsListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DatacatalogProjectsLocationsEntryGroupsListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DatacatalogProjectsLocationsEntryGroupsListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
