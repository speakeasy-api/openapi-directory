import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class RenewTokenResponse extends SpeakeasyBase {
    /**
     * The renewed access token.
     *
     * @remarks
     * This value might be different from the `access_token` you provided in your request.
     * You provide this token in a header with every request to Connect API endpoints.
     * See [Request and response headers](https://developer.squareup.com/docs/api/connect/v2/#requestandresponseheaders) for the format of this header.
     */
    accessToken?: string;
    /**
     * The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
     */
    expiresAt?: string;
    /**
     * The ID of the authorizing merchant's business.
     */
    merchantId?: string;
    /**
     * __LEGACY FIELD__. The ID of the subscription plan the merchant signed
     *
     * @remarks
     * up for. Only present if the merchant signed up for a subscription during
     * authorization.
     */
    planId?: string;
    /**
     * __LEGACY FIELD__. The ID of the merchant subscription associated with
     *
     * @remarks
     * the authorization. Only present if the merchant signed up for a subscription
     * during authorization..
     */
    subscriptionId?: string;
    /**
     * This value is always _bearer_.
     */
    tokenType?: string;
}
