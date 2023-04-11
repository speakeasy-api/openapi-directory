import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
import { Principal } from "./principal";
export declare class RbacPolicy extends SpeakeasyBase {
    /**
     * Name of the RbacPolicy.
     */
    name?: string;
    /**
     * The list of permissions.
     */
    permissions?: Permission[];
    /**
     * The list of principals.
     */
    principals?: Principal[];
}
