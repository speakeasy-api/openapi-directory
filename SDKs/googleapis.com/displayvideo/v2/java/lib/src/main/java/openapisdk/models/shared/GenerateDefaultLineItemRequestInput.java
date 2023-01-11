package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateDefaultLineItemRequestInput
 * Request message for LineItemService.GenerateDefaultLineItem.
**/
public class GenerateDefaultLineItemRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GenerateDefaultLineItemRequestInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrderId")
    public String insertionOrderId;
    public GenerateDefaultLineItemRequestInput withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemType")
    public GenerateDefaultLineItemRequestLineItemTypeEnum lineItemType;
    public GenerateDefaultLineItemRequestInput withLineItemType(GenerateDefaultLineItemRequestLineItemTypeEnum lineItemType) {
        this.lineItemType = lineItemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApp")
    public MobileAppInput mobileApp;
    public GenerateDefaultLineItemRequestInput withMobileApp(MobileAppInput mobileApp) {
        this.mobileApp = mobileApp;
        return this;
    }
}