import { SpeakeasyBase } from "../../../internal/utils";
import { ItemInput } from "./item";
import { Location } from "./location";
/**
 * Update an item in a form.
 */
export declare class UpdateItemRequestInput extends SpeakeasyBase {
    /**
     * A single item of the form. `kind` defines which kind of item it is.
     */
    item?: ItemInput;
    /**
     * A specific location in a form.
     */
    location?: Location;
    /**
     * Required. Only values named in this mask are changed.
     */
    updateMask?: string;
}
