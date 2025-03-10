import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
import { SecurityPolicyRuleMatcherConfig } from "./securitypolicyrulematcherconfig";
/**
 * Preconfigured versioned expression. If this field is specified, config must also be specified. Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding src_ip_range field in config.
 */
export declare enum SecurityPolicyRuleMatcherVersionedExprEnum {
    Firewall = "FIREWALL",
    SrcIpsV1 = "SRC_IPS_V1"
}
/**
 * Represents a match condition that incoming traffic is evaluated against. Exactly one field must be specified.
 */
export declare class SecurityPolicyRuleMatcher extends SpeakeasyBase {
    config?: SecurityPolicyRuleMatcherConfig;
    /**
     * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
     */
    expr?: Expr;
    /**
     * Preconfigured versioned expression. If this field is specified, config must also be specified. Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding src_ip_range field in config.
     */
    versionedExpr?: SecurityPolicyRuleMatcherVersionedExprEnum;
}
