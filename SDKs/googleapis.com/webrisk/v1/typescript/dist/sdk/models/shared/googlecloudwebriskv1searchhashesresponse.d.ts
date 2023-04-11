import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1SearchHashesResponseThreatHash } from "./googlecloudwebriskv1searchhashesresponsethreathash";
/**
 * Successful response
 */
export declare class GoogleCloudWebriskV1SearchHashesResponse extends SpeakeasyBase {
    /**
     * For requested entities that did not match the threat list, how long to cache the response until.
     */
    negativeExpireTime?: string;
    /**
     * The full hashes that matched the requested prefixes. The hash will be populated in the key.
     */
    threats?: GoogleCloudWebriskV1SearchHashesResponseThreatHash[];
}
