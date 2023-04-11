import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SchemassecretScanningAlertStateEnum } from "./schemassecretscanningalertstateenum";
import { SecretScanningAlertResolutionEnum } from "./secretscanningalertresolutionenum";
/**
 * Response
 */
export declare class SecretScanningAlert extends SpeakeasyBase {
    /**
     * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    createdAt?: Date;
    /**
     * The GitHub URL of the alert resource.
     */
    htmlUrl?: string;
    /**
     * The REST API URL of the code locations for this alert.
     */
    locationsUrl?: string;
    /**
     * The security alert number.
     */
    number?: number;
    /**
     * **Required when the `state` is `resolved`.** The reason for resolving the alert.
     */
    resolution?: SecretScanningAlertResolutionEnum;
    /**
     * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    resolvedAt?: Date;
    /**
     * Simple User
     */
    resolvedBy?: NullableSimpleUser;
    /**
     * The secret that was detected.
     */
    secret?: string;
    /**
     * The type of secret that secret scanning detected.
     */
    secretType?: string;
    /**
     * Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.
     */
    state?: SchemassecretScanningAlertStateEnum;
    /**
     * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    updatedAt?: Date;
    /**
     * The REST API URL of the alert resource.
     */
    url?: string;
}
