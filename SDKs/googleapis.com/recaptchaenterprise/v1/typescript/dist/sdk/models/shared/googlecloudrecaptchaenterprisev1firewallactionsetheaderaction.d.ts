import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A set header action sets a header and forwards the request to the backend. This can be used to trigger custom protection implemented on the backend.
 */
export declare class GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction extends SpeakeasyBase {
    /**
     * The header key to set in the request to the backend server.
     */
    key?: string;
    /**
     * The header value to set in the request to the backend server.
     */
    value?: string;
}
