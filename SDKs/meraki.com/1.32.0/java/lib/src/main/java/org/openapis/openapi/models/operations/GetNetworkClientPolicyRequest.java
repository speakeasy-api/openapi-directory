/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetNetworkClientPolicyRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;

    public GetNetworkClientPolicyRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;

    public GetNetworkClientPolicyRequest withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
    public GetNetworkClientPolicyRequest(@JsonProperty("clientId") String clientId, @JsonProperty("networkId") String networkId) {
        this.clientId = clientId;
        this.networkId = networkId;
  }
}
