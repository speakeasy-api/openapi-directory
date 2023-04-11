import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IP addresses of callers that are allowed to use the key.
 */
export declare class V2ServerKeyRestrictions extends SpeakeasyBase {
    /**
     * A list of the caller IP addresses that are allowed to make API calls with this key.
     */
    allowedIps?: string[];
}
