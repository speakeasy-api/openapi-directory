import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicy } from "./responsepolicy";
/**
 * Successful response
 */
export declare class ResponsePoliciesPatchResponse extends SpeakeasyBase {
    /**
     * Elements common to every response.
     */
    header?: ResponseHeader;
    /**
     * A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
     */
    responsePolicy?: ResponsePolicy;
}
