import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permission to grant the team on this repository. Can be one of:
 *
 * @remarks
 * \* `pull` - team members can pull, but not push to or administer this repository.
 * \* `push` - team members can pull and push, but not administer this repository.
 * \* `admin` - team members can pull, push and administer this repository.
 *
 * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
 */
export declare enum TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the team on this repository. Can be one of:
     *
     * @remarks
     * \* `pull` - team members can pull, but not push to or administer this repository.
     * \* `push` - team members can pull and push, but not administer this repository.
     * \* `admin` - team members can pull, push and administer this repository.
     *
     * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
     */
    permission?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
