/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * InventorySourceStatusSellerStatusEnum - Output only. The status set by the seller for the inventory source. Only applicable for inventory sources synced directly from the publishers. Acceptable values are `ENTITY_STATUS_ACTIVE` and `ENTITY_STATUS_PAUSED`.
 */
public enum InventorySourceStatusSellerStatusEnum {
    ENTITY_STATUS_UNSPECIFIED("ENTITY_STATUS_UNSPECIFIED"),
    ENTITY_STATUS_ACTIVE("ENTITY_STATUS_ACTIVE"),
    ENTITY_STATUS_ARCHIVED("ENTITY_STATUS_ARCHIVED"),
    ENTITY_STATUS_DRAFT("ENTITY_STATUS_DRAFT"),
    ENTITY_STATUS_PAUSED("ENTITY_STATUS_PAUSED"),
    ENTITY_STATUS_SCHEDULED_FOR_DELETION("ENTITY_STATUS_SCHEDULED_FOR_DELETION");

    @JsonValue
    public final String value;

    private InventorySourceStatusSellerStatusEnum(String value) {
        this.value = value;
    }
}
