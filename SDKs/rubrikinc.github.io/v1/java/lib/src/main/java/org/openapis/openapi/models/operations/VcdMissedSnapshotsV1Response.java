/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class VcdMissedSnapshotsV1Response {
    
    public String contentType;

    public VcdMissedSnapshotsV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Details for missed snapshots for a vApp.
     */
    
    public org.openapis.openapi.models.shared.MissedSnapshotListResponse missedSnapshotListResponse;

    public VcdMissedSnapshotsV1Response withMissedSnapshotListResponse(org.openapis.openapi.models.shared.MissedSnapshotListResponse missedSnapshotListResponse) {
        this.missedSnapshotListResponse = missedSnapshotListResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public VcdMissedSnapshotsV1Response withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public VcdMissedSnapshotsV1Response withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public VcdMissedSnapshotsV1Response(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
