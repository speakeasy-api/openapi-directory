import { SpeakeasyBase } from "../../../internal/utils";
export declare class CacheInvalidationRule extends SpeakeasyBase {
    /**
     * If set, this invalidation rule will only apply to requests with a Host header matching host.
     */
    host?: string;
    path?: string;
}
