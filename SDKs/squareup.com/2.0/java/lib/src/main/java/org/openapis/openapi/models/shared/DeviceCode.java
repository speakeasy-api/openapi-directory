/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceCode {
    /**
     * The unique code that can be used to login.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;

    public DeviceCode withCode(String code) {
        this.code = code;
        return this;
    }
    
    /**
     * When this DeviceCode was created. Timestamp in RFC 3339 format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;

    public DeviceCode withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * The unique id of the device that used this code. Populated when the device is paired up.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_id")
    public String deviceId;

    public DeviceCode withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    
    /**
     * The unique id for this device code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public DeviceCode withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The location assigned to this code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;

    public DeviceCode withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    
    /**
     * An optional user-defined name for the device code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public DeviceCode withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pair_by")
    public String pairBy;

    public DeviceCode withPairBy(String pairBy) {
        this.pairBy = pairBy;
        return this;
    }
    
    /**
     * When this DeviceCode was paired. Timestamp in RFC 3339 format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paired_at")
    public String pairedAt;

    public DeviceCode withPairedAt(String pairedAt) {
        this.pairedAt = pairedAt;
        return this;
    }
    
    /**
     * The targeting product type of the device code.
     */
    @JsonProperty("product_type")
    public String productType;

    public DeviceCode withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    
    /**
     * The pairing status of the device code.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;

    public DeviceCode withStatus(String status) {
        this.status = status;
        return this;
    }
    
    /**
     * When this DeviceCode's status was last changed. Timestamp in RFC 3339 format.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_changed_at")
    public String statusChangedAt;

    public DeviceCode withStatusChangedAt(String statusChangedAt) {
        this.statusChangedAt = statusChangedAt;
        return this;
    }
    
    public DeviceCode(@JsonProperty("product_type") String productType) {
        this.productType = productType;
  }
}
