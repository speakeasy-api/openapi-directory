import { SpeakeasyBase } from "../../../internal/utils";
/**
 * success
 */
export declare class GroupRepresentation extends SpeakeasyBase {
    access?: Record<string, any>;
    attributes?: Record<string, any>;
    clientRoles?: Record<string, any>;
    id?: string;
    name?: string;
    path?: string;
    realmRoles?: string[];
    subGroups?: GroupRepresentation[];
}
