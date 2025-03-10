/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetAssetsHistoryResponse - Batch get assets history response.
 */
public class BatchGetAssetsHistoryResponse {
    /**
     * A list of assets with valid time windows.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public TemporalAsset[] assets;

    public BatchGetAssetsHistoryResponse withAssets(TemporalAsset[] assets) {
        this.assets = assets;
        return this;
    }
    
    public BatchGetAssetsHistoryResponse(){}
}
