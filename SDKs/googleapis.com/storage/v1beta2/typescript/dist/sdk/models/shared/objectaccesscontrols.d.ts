import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An access-control list.
 */
export declare class ObjectAccessControls extends SpeakeasyBase {
    /**
     * The list of items.
     */
    items?: any[];
    /**
     * The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
     */
    kind?: string;
}
