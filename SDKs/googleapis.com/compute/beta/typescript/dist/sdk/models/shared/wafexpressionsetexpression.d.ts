import { SpeakeasyBase } from "../../../internal/utils";
export declare class WafExpressionSetExpression extends SpeakeasyBase {
    /**
     * Expression ID should uniquely identify the origin of the expression. E.g. owasp-crs-v020901-id973337 identifies Owasp core rule set version 2.9.1 rule id 973337. The ID could be used to determine the individual attack definition that has been detected. It could also be used to exclude it from the policy in case of false positive. required
     */
    id?: string;
    /**
     * The sensitivity value associated with the WAF rule ID. This corresponds to the ModSecurity paranoia level, ranging from 1 to 4. 0 is reserved for opt-in only rules.
     */
    sensitivity?: number;
}
