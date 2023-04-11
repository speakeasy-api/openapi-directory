import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAttributesValue } from "./guestattributesvalue";
/**
 * A guest attributes.
 */
export declare class GuestAttributes extends SpeakeasyBase {
    /**
     * The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\/') or a specified key ('/\/\')
     */
    queryPath?: string;
    /**
     * Array of guest attribute namespace/key/value tuples.
     */
    queryValue?: GuestAttributesValue;
}
