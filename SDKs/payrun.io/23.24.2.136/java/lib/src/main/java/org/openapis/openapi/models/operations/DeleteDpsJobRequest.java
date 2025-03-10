/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteDpsJobRequest {
    /**
     * The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;

    public DeleteDpsJobRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;

    public DeleteDpsJobRequest withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    
    /**
     * The job unique identifier.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=JobId")
    public String jobId;

    public DeleteDpsJobRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    
    public DeleteDpsJobRequest(@JsonProperty("Api-Version") String apiVersion, @JsonProperty("Authorization") String authorization, @JsonProperty("JobId") String jobId) {
        this.apiVersion = apiVersion;
        this.authorization = authorization;
        this.jobId = jobId;
  }
}
