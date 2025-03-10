/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PutUserFollowsNetworksNetworkIdRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=network_id")
    public Long networkId;

    public PutUserFollowsNetworksNetworkIdRequest withNetworkId(Long networkId) {
        this.networkId = networkId;
        return this;
    }
    
    public PutUserFollowsNetworksNetworkIdRequest(@JsonProperty("network_id") Long networkId) {
        this.networkId = networkId;
  }
}
