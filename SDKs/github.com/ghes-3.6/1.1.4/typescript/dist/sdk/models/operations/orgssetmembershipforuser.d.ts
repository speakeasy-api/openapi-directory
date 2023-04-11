import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The role to give the user in the organization. Can be one of:
 *
 * @remarks
 *  * `admin` - The user will become an owner of the organization.
 *  * `member` - The user will become a non-owner member of the organization.
 */
export declare enum OrgsSetMembershipForUserRequestBodyRoleEnum {
    Admin = "admin",
    Member = "member"
}
export declare class OrgsSetMembershipForUserRequestBody extends SpeakeasyBase {
    /**
     * The role to give the user in the organization. Can be one of:
     *
     * @remarks
     *  * `admin` - The user will become an owner of the organization.
     *  * `member` - The user will become a non-owner member of the organization.
     */
    role?: OrgsSetMembershipForUserRequestBodyRoleEnum;
}
export declare class OrgsSetMembershipForUserRequest extends SpeakeasyBase {
    requestBody?: OrgsSetMembershipForUserRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class OrgsSetMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    orgMembership?: shared.OrgMembership;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
