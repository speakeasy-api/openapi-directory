/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DuplicateLineItemRequest - Request message for LineItemService.DuplicateLineItem.
 */
public class DuplicateLineItemRequest {
    /**
     * The display name of the new line item. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDisplayName")
    public String targetDisplayName;

    public DuplicateLineItemRequest withTargetDisplayName(String targetDisplayName) {
        this.targetDisplayName = targetDisplayName;
        return this;
    }
    
    public DuplicateLineItemRequest(){}
}
