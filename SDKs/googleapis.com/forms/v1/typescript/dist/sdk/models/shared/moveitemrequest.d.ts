import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Move an item in a form.
 */
export declare class MoveItemRequest extends SpeakeasyBase {
    /**
     * A specific location in a form.
     */
    newLocation?: Location;
    /**
     * A specific location in a form.
     */
    originalLocation?: Location;
}
