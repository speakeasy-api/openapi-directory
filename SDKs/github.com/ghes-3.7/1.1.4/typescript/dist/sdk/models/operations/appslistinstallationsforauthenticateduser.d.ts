import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsListInstallationsForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
/**
 * You can find the permissions for the installation under the `permissions` key.
 */
export declare class AppsListInstallationsForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    installations: shared.Installation[];
    totalCount: number;
}
export declare class AppsListInstallationsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You can find the permissions for the installation under the `permissions` key.
     */
    appsListInstallationsForAuthenticatedUser200ApplicationJSONObject?: AppsListInstallationsForAuthenticatedUser200ApplicationJSON;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
