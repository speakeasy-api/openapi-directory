/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetNetworkSmDeviceCellularUsageHistoryRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public GetNetworkSmDeviceCellularUsageHistoryRequest withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSmDeviceCellularUsageHistoryRequest withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    
}
