package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestInput
 * The kinds of update requests that can be made.
**/
public class RequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createItem")
    public CreateItemRequestInput createItem;
    public RequestInput withCreateItem(CreateItemRequestInput createItem) {
        this.createItem = createItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteItem")
    public DeleteItemRequest deleteItem;
    public RequestInput withDeleteItem(DeleteItemRequest deleteItem) {
        this.deleteItem = deleteItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moveItem")
    public MoveItemRequest moveItem;
    public RequestInput withMoveItem(MoveItemRequest moveItem) {
        this.moveItem = moveItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateFormInfo")
    public UpdateFormInfoRequestInput updateFormInfo;
    public RequestInput withUpdateFormInfo(UpdateFormInfoRequestInput updateFormInfo) {
        this.updateFormInfo = updateFormInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateItem")
    public UpdateItemRequestInput updateItem;
    public RequestInput withUpdateItem(UpdateItemRequestInput updateItem) {
        this.updateItem = updateItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateSettings")
    public UpdateSettingsRequest updateSettings;
    public RequestInput withUpdateSettings(UpdateSettingsRequest updateSettings) {
        this.updateSettings = updateSettings;
        return this;
    }
}