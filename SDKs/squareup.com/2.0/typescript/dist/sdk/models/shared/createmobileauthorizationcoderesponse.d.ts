import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * Defines the fields that are included in the response body of
 *
 * @remarks
 * a request to the __CreateMobileAuthorizationCode__ endpoint.
 */
export declare class CreateMobileAuthorizationCodeResponse extends SpeakeasyBase {
    /**
     * Generated authorization code that connects a mobile application instance
     *
     * @remarks
     * to a Square account.
     */
    authorizationCode?: string;
    /**
     * Represents an error encountered during a request to the Connect API.
     *
     * @remarks
     *
     * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
     */
    error?: ErrorT;
    /**
     * The timestamp when `authorization_code` expires in
     *
     * @remarks
     * [RFC 3339](https://tools.ietf.org/html/rfc3339) format, e.g., "2016-09-04T23:59:33.123Z".
     */
    expiresAt?: string;
}
