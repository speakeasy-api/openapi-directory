import { SpeakeasyBase } from "../../../internal/utils";
import { CreateItemRequestInput } from "./createitemrequest";
import { DeleteItemRequest } from "./deleteitemrequest";
import { MoveItemRequest } from "./moveitemrequest";
import { UpdateFormInfoRequestInput } from "./updateforminforequest";
import { UpdateItemRequestInput } from "./updateitemrequest";
import { UpdateSettingsRequest } from "./updatesettingsrequest";
/**
 * The kinds of update requests that can be made.
 */
export declare class RequestInput extends SpeakeasyBase {
    /**
     * Create an item in a form.
     */
    createItem?: CreateItemRequestInput;
    /**
     * Delete an item in a form.
     */
    deleteItem?: DeleteItemRequest;
    /**
     * Move an item in a form.
     */
    moveItem?: MoveItemRequest;
    /**
     * Update Form's Info.
     */
    updateFormInfo?: UpdateFormInfoRequestInput;
    /**
     * Update an item in a form.
     */
    updateItem?: UpdateItemRequestInput;
    /**
     * Update Form's FormSettings.
     */
    updateSettings?: UpdateSettingsRequest;
}
