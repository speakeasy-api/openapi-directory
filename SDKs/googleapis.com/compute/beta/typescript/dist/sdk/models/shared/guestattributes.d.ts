import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAttributesValue } from "./guestattributesvalue";
/**
 * A guest attributes entry.
 */
export declare class GuestAttributes extends SpeakeasyBase {
    /**
     * [Output Only] Type of the resource. Always compute#guestAttributes for guest attributes entry.
     */
    kind?: string;
    /**
     * The path to be queried. This can be the default namespace ('') or a nested namespace ('\/') or a specified key ('\/\').
     */
    queryPath?: string;
    /**
     * Array of guest attribute namespace/key/value tuples.
     */
    queryValue?: GuestAttributesValue;
    /**
     * [Output Only] Server-defined URL for this resource.
     */
    selfLink?: string;
    /**
     * The key to search for.
     */
    variableKey?: string;
    /**
     * [Output Only] The value found for the requested key.
     */
    variableValue?: string;
}
