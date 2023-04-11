import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretScanningListAlertsForEnterpriseRequest extends SpeakeasyBase {
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
     */
    after?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
     */
    before?: string;
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
     */
    resolution?: string;
    /**
     * A comma-separated list of secret types to return. By default all secret types are returned.
     *
     * @remarks
     * See "[Secret scanning patterns](https://docs.github.com/enterprise-server@3.6/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
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
export declare class SecretScanningListAlertsForEnterprise503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SecretScanningListAlertsForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    organizationSecretScanningAlerts?: shared.OrganizationSecretScanningAlert[];
    /**
     * Service unavailable
     */
    secretScanningListAlertsForEnterprise503ApplicationJSONObject?: SecretScanningListAlertsForEnterprise503ApplicationJSON;
}
