import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The number of HTTP calls made to the given domain.
 */
export declare class DomainCalls extends SpeakeasyBase {
    /**
     * The domain name.
     */
    domain?: string;
    /**
     * Number of HTTP calls made to the domain.
     */
    httpCallCount?: number;
}
