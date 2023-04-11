import { SpeakeasyBase } from "../../../internal/utils";
import { GSuitePrincipal } from "./gsuiteprincipal";
/**
 * Reference to a user, group, or domain.
 */
export declare class Principal extends SpeakeasyBase {
    /**
     * This principal is a group identified using an external identity. The name field must specify the group resource name with this format: identitysources/{source_id}/groups/{ID}
     */
    groupResourceName?: string;
    gsuitePrincipal?: GSuitePrincipal;
    /**
     * This principal is a user identified using an external identity. The name field must specify the user resource name with this format: identitysources/{source_id}/users/{ID}
     */
    userResourceName?: string;
}
