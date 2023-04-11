import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretScanningListAlertsForRepoRequest extends SpeakeasyBase {
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
     * See "[Secret scanning patterns](https://docs.github.com/github-ae@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
     * for a complete list of secret types.
     */
    secretType?: string;
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
