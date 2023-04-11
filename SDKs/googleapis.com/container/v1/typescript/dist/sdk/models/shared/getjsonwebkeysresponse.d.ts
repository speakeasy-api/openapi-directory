import { SpeakeasyBase } from "../../../internal/utils";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";
import { Jwk } from "./jwk";
/**
 * GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
 */
export declare class GetJSONWebKeysResponse extends SpeakeasyBase {
    /**
     * RFC-2616: cache control support
     */
    cacheHeader?: HttpCacheControlResponseHeader;
    /**
     * The public component of the keys used by the cluster to sign token requests.
     */
    keys?: Jwk[];
}
