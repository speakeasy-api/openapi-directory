import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SchemassecretScanningAlertStateEnum } from "./schemassecretscanningalertstateenum";
import { SecretScanningAlertResolutionEnum } from "./secretscanningalertresolutionenum";
import { SimpleRepository } from "./simplerepository";
export declare class OrganizationSecretScanningAlert extends SpeakeasyBase {
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
     * A GitHub repository.
     */
    repository?: SimpleRepository;
    /**
     * **Required when the `state` is `resolved`.** The reason for resolving the alert.
     */
    resolution?: SecretScanningAlertResolutionEnum;
    /**
     * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    resolvedAt?: Date;
    /**
     * A GitHub user.
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
     * User-friendly name for the detected secret, matching the `secret_type`.
     *
     * @remarks
     * For a list of built-in patterns, see "[Secret scanning patterns](https://docs.github.com/enterprise-server@3.5/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)."
     */
    secretTypeDisplayName?: string;
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
