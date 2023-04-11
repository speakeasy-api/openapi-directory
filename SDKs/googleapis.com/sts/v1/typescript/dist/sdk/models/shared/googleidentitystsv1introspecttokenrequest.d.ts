import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for IntrospectToken.
 */
export declare class GoogleIdentityStsV1IntrospectTokenRequest extends SpeakeasyBase {
    /**
     * Required. The OAuth 2.0 security token issued by the Security Token Service API.
     */
    token?: string;
    /**
     * Optional. The type of the given token. Supported values are `urn:ietf:params:oauth:token-type:access_token` and `access_token`.
     */
    tokenTypeHint?: string;
}
