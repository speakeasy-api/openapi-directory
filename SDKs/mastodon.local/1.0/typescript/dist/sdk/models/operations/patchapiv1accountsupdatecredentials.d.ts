import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchApiV1AccountsUpdateCredentialsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PatchApiV1AccountsUpdateCredentialsRequestBodySource extends SpeakeasyBase {
    /**
     * Default language to use for authored statuses. (ISO 6391)
     */
    language?: string;
    /**
     * Default post privacy for authored statuses.
     */
    privacy?: string;
    /**
     * Whether to mark authored statuses as sensitive by default.
     */
    sensitive?: boolean;
}
export declare class PatchApiV1AccountsUpdateCredentialsRequestBody extends SpeakeasyBase {
    /**
     * Avatar image encoded using multipart/form-data
     */
    avatar?: string;
    /**
     * Whether the account has a bot flag.
     */
    bot?: boolean;
    /**
     * Whether the account should be shown in the profile directory.
     */
    discoverable?: string;
    /**
     * The display name to use for the profile.
     */
    displayName?: string;
    /**
     * Profile metadata `name` and `value`. (By default, max 4 fields and 255 characters per property/value)
     */
    fieldsAttributes?: Record<string, any>;
    /**
     * Header image encoded using multipart/form-data
     */
    header?: string;
    /**
     * Whether manual approval of follow requests is required.
     */
    locked?: boolean;
    /**
     * The account bio.
     */
    note?: string;
    source?: PatchApiV1AccountsUpdateCredentialsRequestBodySource;
}
export declare class PatchApiV1AccountsUpdateCredentialsResponse extends SpeakeasyBase {
    /**
     * You should use `accounts/verify_credentials` to first obtain plaintext representations from within the `source` parameter, then allow the user to edit these plaintext representations before submitting them through this API. The server will generate the corresponding HTML.
     */
    account?: shared.Account;
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
