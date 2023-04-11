import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the body parameters that can be provided in a request to the
 *
 * @remarks
 * __CreateMobileAuthorizationCode__ endpoint.
 */
export declare class CreateMobileAuthorizationCodeRequest extends SpeakeasyBase {
    /**
     * The Square location ID the authorization code should be tied to.
     */
    locationId?: string;
}
