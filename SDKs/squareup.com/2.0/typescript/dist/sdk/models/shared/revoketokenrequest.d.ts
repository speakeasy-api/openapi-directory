import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class RevokeTokenRequest extends SpeakeasyBase {
    /**
     * The access token of the merchant whose token you want to revoke.
     *
     * @remarks
     * Do not provide a value for merchant_id if you provide this parameter.
     */
    accessToken?: string;
    /**
     * The Square issued ID for your application, available from the
     *
     * @remarks
     * [developer dashboard](https://developer.squareup.com/apps).
     */
    clientId?: string;
    /**
     * The ID of the merchant whose token you want to revoke.
     *
     * @remarks
     * Do not provide a value for access_token if you provide this parameter.
     */
    merchantId?: string;
    /**
     * If `true`, terminate the given single access token, but do not
     *
     * @remarks
     * terminate the entire authorization.
     * Default: `false`
     */
    revokeOnlyAccessToken?: boolean;
}
