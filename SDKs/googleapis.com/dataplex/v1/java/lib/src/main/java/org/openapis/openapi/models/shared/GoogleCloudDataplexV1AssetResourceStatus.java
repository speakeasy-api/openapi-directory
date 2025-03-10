/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDataplexV1AssetResourceStatus - Status of the resource referenced by an asset.
 */
public class GoogleCloudDataplexV1AssetResourceStatus {
    /**
     * Output only. Service account associated with the BigQuery Connection.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedAccessIdentity")
    public String managedAccessIdentity;

    public GoogleCloudDataplexV1AssetResourceStatus withManagedAccessIdentity(String managedAccessIdentity) {
        this.managedAccessIdentity = managedAccessIdentity;
        return this;
    }
    
    /**
     * Additional information about the current state.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public GoogleCloudDataplexV1AssetResourceStatus withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * The current state of the managed resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudDataplexV1AssetResourceStatusStateEnum state;

    public GoogleCloudDataplexV1AssetResourceStatus withState(GoogleCloudDataplexV1AssetResourceStatusStateEnum state) {
        this.state = state;
        return this;
    }
    
    /**
     * Last update time of the status.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;

    public GoogleCloudDataplexV1AssetResourceStatus withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    public GoogleCloudDataplexV1AssetResourceStatus(){}
}
