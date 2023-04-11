import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsScopeTokenRequestBody extends SpeakeasyBase {
    /**
     * The OAuth access token used to authenticate to the GitHub API.
     */
    accessToken: string;
    /**
     * The permissions granted to the user-to-server access token.
     */
    permissions?: shared.AppPermissions;
    /**
     * The list of repository names to scope the user-to-server access token to. `repositories` may not be specified if `repository_ids` is specified.
     */
    repositories?: string[];
    /**
     * The list of repository IDs to scope the user-to-server access token to. `repository_ids` may not be specified if `repositories` is specified.
     */
    repositoryIds?: number[];
    /**
     * The name of the user or organization to scope the user-to-server access token to. **Required** unless `target_id` is specified.
     */
    target?: string;
    /**
     * The ID of the user or organization to scope the user-to-server access token to. **Required** unless `target` is specified.
     */
    targetId?: number;
}
export declare class AppsScopeTokenRequest extends SpeakeasyBase {
    requestBody: AppsScopeTokenRequestBody;
    /**
     * The client ID of the GitHub app.
     */
    clientId: string;
}
export declare class AppsScopeTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    authorization?: shared.Authorization;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
