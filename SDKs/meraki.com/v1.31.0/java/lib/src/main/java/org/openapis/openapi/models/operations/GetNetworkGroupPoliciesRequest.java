/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetNetworkGroupPoliciesRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkGroupPoliciesRequest withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
}
