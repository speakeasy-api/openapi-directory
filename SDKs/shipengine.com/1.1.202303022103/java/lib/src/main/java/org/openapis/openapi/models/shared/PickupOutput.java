/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * PickupOutput - The information necessary to schedule a package pickup
 * 
 */
public class PickupOutput {
    /**
     * The date and time that the pickup was cancelled in ShipEngine.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("cancelled_at")
    public OffsetDateTime cancelledAt;
    public PickupOutput withCancelledAt(OffsetDateTime cancelledAt) {
        this.cancelledAt = cancelledAt;
        return this;
    }
    
    /**
     * The carrier_id associated with the pickup
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public String carrierId;
    public PickupOutput withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    
    /**
     * The carrier confirmation number for the scheduled pickup.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmation_number")
    public String confirmationNumber;
    public PickupOutput withConfirmationNumber(String confirmationNumber) {
        this.confirmationNumber = confirmationNumber;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact_details")
    public ContactDetails contactDetails;
    public PickupOutput withContactDetails(ContactDetails contactDetails) {
        this.contactDetails = contactDetails;
        return this;
    }
    
    /**
     * The date and time that the pickup was created in ShipEngine.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PickupOutput withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * Label IDs that will be included in the pickup request
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_ids")
    public String[] labelIds;
    public PickupOutput withLabelIds(String[] labelIds) {
        this.labelIds = labelIds;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_address")
    public PickupPartialAddress pickupAddress;
    public PickupOutput withPickupAddress(PickupPartialAddress pickupAddress) {
        this.pickupAddress = pickupAddress;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_id")
    public String pickupId;
    public PickupOutput withPickupId(String pickupId) {
        this.pickupId = pickupId;
        return this;
    }
    
    /**
     * Used by some carriers to give special instructions for a package pickup
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_notes")
    public String pickupNotes;
    public PickupOutput withPickupNotes(String pickupNotes) {
        this.pickupNotes = pickupNotes;
        return this;
    }
    
    /**
     * An array of available pickup windows. Carriers can return multiple times that they will pickup packages.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_windows")
    public PickupWindows[] pickupWindows;
    public PickupOutput withPickupWindows(PickupWindows[] pickupWindows) {
        this.pickupWindows = pickupWindows;
        return this;
    }
    
    /**
     * The warehouse_id associated with the pickup
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse_id")
    public String warehouseId;
    public PickupOutput withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
    
}
