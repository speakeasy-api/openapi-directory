import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecurityPolicyAdvancedOptionsConfigJsonCustomConfig extends SpeakeasyBase {
    /**
     * A list of custom Content-Type header values to apply the JSON parsing. As per RFC 1341, a Content-Type header value has the following format: Content-Type := type "/" subtype *[";" parameter] When configuring a custom Content-Type header value, only the type/subtype needs to be specified, and the parameters should be excluded.
     */
    contentTypes?: string[];
}
