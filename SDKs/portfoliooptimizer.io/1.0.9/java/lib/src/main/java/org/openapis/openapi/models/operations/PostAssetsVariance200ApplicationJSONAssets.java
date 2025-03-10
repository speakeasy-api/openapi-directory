/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAssetsVariance200ApplicationJSONAssets {
    /**
     * The variance of the asset
     */
    @JsonProperty("assetVariance")
    public Double assetVariance;

    public PostAssetsVariance200ApplicationJSONAssets withAssetVariance(Double assetVariance) {
        this.assetVariance = assetVariance;
        return this;
    }
    
    public PostAssetsVariance200ApplicationJSONAssets(@JsonProperty("assetVariance") Double assetVariance) {
        this.assetVariance = assetVariance;
  }
}
