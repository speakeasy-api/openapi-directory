import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretScanningListAlertsForRepoRequest extends SpeakeasyBase {
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.
     */
    after?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.7/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.
     */
    before?: string;
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
     */
    resolution?: string;
    /**
     * A comma-separated list of secret types to return. By default all secret types are returned.
     *
     * @remarks
     * See "[Secret scanning patterns](https://docs.github.com/enterprise-server@3.7/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
     * for a complete list of secret types.
     */
    secretType?: string;
    /**
     * The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
     */
    sort?: shared.SecretScanningAlertSortEnum;
    /**
     * Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
     */
    state?: shared.SecretScanningAlertStateEnum;
}
/**
 * Service unavailable
 */
export declare class SecretScanningListAlertsForRepo503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SecretScanningListAlertsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    secretScanningAlerts?: shared.SecretScanningAlert[];
    /**
     * Service unavailable
     */
    secretScanningListAlertsForRepo503ApplicationJSONObject?: SecretScanningListAlertsForRepo503ApplicationJSON;
}
