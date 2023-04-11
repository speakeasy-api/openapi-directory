import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Temporary Redirect
 */
export declare class MessagingV1Deactivation extends SpeakeasyBase {
    /**
     * Returns an authenticated url that redirects to a file containing the deactivated numbers for the requested day. This url is valid for up to two minutes.
     */
    redirectTo?: string;
}
