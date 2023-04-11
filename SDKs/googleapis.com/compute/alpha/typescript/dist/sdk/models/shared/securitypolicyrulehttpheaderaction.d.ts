import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyRuleHttpHeaderActionHttpHeaderOption } from "./securitypolicyrulehttpheaderactionhttpheaderoption";
export declare class SecurityPolicyRuleHttpHeaderAction extends SpeakeasyBase {
    /**
     * The list of request headers to add or overwrite if they're already present.
     */
    requestHeadersToAdds?: SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[];
}
