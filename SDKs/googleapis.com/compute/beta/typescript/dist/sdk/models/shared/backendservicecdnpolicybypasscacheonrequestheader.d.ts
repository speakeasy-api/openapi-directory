import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bypass the cache when the specified request headers are present, e.g. Pragma or Authorization headers. Values are case insensitive. The presence of such a header overrides the cache_mode setting.
 */
export declare class BackendServiceCdnPolicyBypassCacheOnRequestHeader extends SpeakeasyBase {
    /**
     * The header field name to match on when bypassing cache. Values are case-insensitive.
     */
    headerName?: string;
}
