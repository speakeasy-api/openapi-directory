import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretScanningUpdateAlertRequestBody extends SpeakeasyBase {
    /**
     * **Required when the `state` is `resolved`.** The reason for resolving the alert.
     */
    resolution?: shared.SecretScanningAlertResolutionEnum;
    /**
     * An optional comment when closing an alert. Cannot be updated or deleted. Must be `null` when changing `state` to `open`.
     */
    resolutionComment?: string;
    /**
     * Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.
     */
    state: shared.SchemassecretScanningAlertStateEnum;
}
export declare class SecretScanningUpdateAlertRequest extends SpeakeasyBase {
    requestBody: SecretScanningUpdateAlertRequestBody;
    /**
     * The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
     */
    alertNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Service unavailable
 */
export declare class SecretScanningUpdateAlert503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class SecretScanningUpdateAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    secretScanningAlert?: shared.SecretScanningAlert;
    /**
     * Service unavailable
     */
    secretScanningUpdateAlert503ApplicationJSONObject?: SecretScanningUpdateAlert503ApplicationJSON;
}
