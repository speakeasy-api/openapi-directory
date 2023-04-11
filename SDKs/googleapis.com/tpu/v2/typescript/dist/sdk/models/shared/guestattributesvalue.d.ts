import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAttributesEntry } from "./guestattributesentry";
/**
 * Array of guest attribute namespace/key/value tuples.
 */
export declare class GuestAttributesValue extends SpeakeasyBase {
    /**
     * The list of guest attributes entries.
     */
    items?: GuestAttributesEntry[];
}
