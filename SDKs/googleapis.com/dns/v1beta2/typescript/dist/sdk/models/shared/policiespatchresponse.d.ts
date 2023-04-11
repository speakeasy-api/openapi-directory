import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
import { ResponseHeader } from "./responseheader";
/**
 * Successful response
 */
export declare class PoliciesPatchResponse extends SpeakeasyBase {
    /**
     * Elements common to every response.
     */
    header?: ResponseHeader;
    /**
     * A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
     */
    policy?: Policy;
}
