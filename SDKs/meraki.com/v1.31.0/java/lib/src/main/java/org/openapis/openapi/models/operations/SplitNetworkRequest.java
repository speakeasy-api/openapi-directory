/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SplitNetworkRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public SplitNetworkRequest withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
}
