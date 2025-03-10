/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevices {
    /**
     * The product type of the related device
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productType")
    public GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevicesProductTypeEnum productType;
    public GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevices withProductType(GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevicesProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    
    /**
     * The serial of the related device
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public GetDeviceSensorRelationships200ApplicationJSONLivestreamRelatedDevices withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    
}
