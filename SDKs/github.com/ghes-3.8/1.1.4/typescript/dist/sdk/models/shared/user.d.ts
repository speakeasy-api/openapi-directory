import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmails } from "./useremails";
import { UserName } from "./username";
import { UserRole } from "./userrole";
export declare enum UserSchemasEnum {
    UrnIetfParamsScimSchemasCore20User = "urn:ietf:params:scim:schemas:core:2.0:User"
}
export declare class User extends SpeakeasyBase {
    /**
     * Whether the user active in the IdP.
     */
    active: boolean;
    /**
     * A human-readable name for the user.
     */
    displayName: string;
    /**
     * The emails for the user.
     */
    emails: UserEmails[];
    /**
     * A unique identifier for the resource as defined by the provisioning client.
     */
    externalId: string;
    name?: UserName;
    /**
     * The roles assigned to the user.
     */
    roles?: UserRole[];
    /**
     * The URIs that are used to indicate the namespaces of the SCIM schemas.
     */
    schemas: UserSchemasEnum[];
    /**
     * The username for the user.
     */
    userName: string;
}
