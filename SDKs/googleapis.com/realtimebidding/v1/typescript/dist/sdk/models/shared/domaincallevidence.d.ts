import { SpeakeasyBase } from "../../../internal/utils";
import { DomainCalls } from "./domaincalls";
/**
 * Number of HTTP calls made by a creative, broken down by domain.
 */
export declare class DomainCallEvidence extends SpeakeasyBase {
    /**
     * Breakdown of the most frequent domains called through HTTP by the creative.
     */
    topHttpCallDomains?: DomainCalls[];
    /**
     * The total number of HTTP calls made by the creative, including but not limited to the number of calls in the top_http_call_domains.
     */
    totalHttpCallCount?: number;
}
