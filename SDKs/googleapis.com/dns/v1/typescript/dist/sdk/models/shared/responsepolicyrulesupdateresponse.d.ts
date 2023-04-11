import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicyRule } from "./responsepolicyrule";
/**
 * Successful response
 */
export declare class ResponsePolicyRulesUpdateResponse extends SpeakeasyBase {
    /**
     * Elements common to every response.
     */
    header?: ResponseHeader;
    /**
     * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
     */
    responsePolicyRule?: ResponsePolicyRule;
}
