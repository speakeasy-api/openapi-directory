import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAccessControl } from "./objectaccesscontrol";
/**
 * An access-control list.
 */
export declare class ObjectAccessControls extends SpeakeasyBase {
    /**
     * The list of items.
     */
    items?: ObjectAccessControl[];
    /**
     * The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
     */
    kind?: string;
}
