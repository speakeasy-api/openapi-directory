import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { UserEmailsResponse } from "./useremailsresponse";
import { UserNameResponse } from "./usernameresponse";
import { UserRole } from "./userrole";
export declare class ScimEnterpriseUserResponseGroups extends SpeakeasyBase {
    dollarRef?: string;
    display?: string;
    value?: string;
}
export declare enum ScimEnterpriseUserResponseSchemasEnum {
    UrnIetfParamsScimSchemasCore20User = "urn:ietf:params:scim:schemas:core:2.0:User"
}
/**
 * User has been created
 */
export declare class ScimEnterpriseUserResponse extends SpeakeasyBase {
    /**
     * Whether the user active in the IdP.
     */
    active: boolean;
    /**
     * A human-readable name for the user.
     */
    displayName?: string;
    /**
     * The emails for the user.
     */
    emails: UserEmailsResponse[];
    /**
     * A unique identifier for the resource as defined by the provisioning client.
     */
    externalId?: string;
    /**
     * Provisioned SCIM groups that the user is a member of.
     */
    groups?: ScimEnterpriseUserResponseGroups[];
    /**
     * The internally generated id for the user object.
     */
    id: string;
    /**
     * The metadata associated with the creation/updates to the user.
     */
    meta: Meta;
    name?: UserNameResponse;
    /**
     * The roles assigned to the user.
     */
    roles?: UserRole[];
    /**
     * The URIs that are used to indicate the namespaces of the SCIM schemas.
     */
    schemas: ScimEnterpriseUserResponseSchemasEnum[];
    /**
     * The username for the user.
     */
    userName?: string;
}
