import { SpeakeasyBase } from "../../../internal/utils";
import { PlusAclentryResource } from "./plusaclentryresource";
export declare class Acl extends SpeakeasyBase {
    /**
     * Description of the access granted, suitable for display.
     */
    description?: string;
    /**
     * The list of access entries.
     */
    items?: PlusAclentryResource[];
    /**
     * Identifies this resource as a collection of access controls. Value: "plus#acl".
     */
    kind?: string;
}
