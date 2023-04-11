import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1ResolvedPolicy } from "./googlechromepolicyversionsv1resolvedpolicy";
/**
 * Response message for getting the resolved policy value for a specific target.
 */
export declare class GoogleChromePolicyVersionsV1ResolveResponse extends SpeakeasyBase {
    /**
     * The page token used to get the next set of resolved policies found by the request.
     */
    nextPageToken?: string;
    /**
     * The list of resolved policies found by the resolve request.
     */
    resolvedPolicies?: GoogleChromePolicyVersionsV1ResolvedPolicy[];
}
