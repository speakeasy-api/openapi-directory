import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the path operation
 */
export declare enum TwoHundredResultResultAstPackagePathTypeEnum {
    Import = "import",
    Package = "package"
}
export declare class TwoHundredResultResultAstPackagePath extends SpeakeasyBase {
    /**
     * The type of the path operation
     */
    type?: TwoHundredResultResultAstPackagePathTypeEnum;
    /**
     * The path variable
     */
    value?: string;
}
export declare class TwoHundredResultResultAstPackage extends SpeakeasyBase {
    /**
     * The path to the package
     */
    path?: TwoHundredResultResultAstPackagePath[];
}
export declare class TwoHundredResultResultAstRulesBodyTermsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class TwoHundredResultResultAstRulesBodyTerms extends SpeakeasyBase {
    /**
     * The type of the term variable
     */
    type?: string;
    /**
     * The list of types and values for the term variable
     */
    value?: TwoHundredResultResultAstRulesBodyTermsValue[];
}
export declare class TwoHundredResultResultAstRulesBody extends SpeakeasyBase {
    /**
     * The location of this term in the list (starts at 0)
     */
    index?: number;
    /**
     * The type/value pairing for this term
     */
    terms?: TwoHundredResultResultAstRulesBodyTerms[];
}
/**
 * The type/value pairing for this rule's head
 */
export declare class TwoHundredResultResultAstRulesHeadKey extends SpeakeasyBase {
    /**
     * The type of the head
     */
    type?: string;
    /**
     * The value of the head
     */
    value?: string;
}
export declare class TwoHundredResultResultAstRulesHead extends SpeakeasyBase {
    /**
     * The type/value pairing for this rule's head
     */
    key?: TwoHundredResultResultAstRulesHeadKey;
    /**
     * The head of the rule
     */
    name?: string;
}
export declare class TwoHundredResultResultAstRules extends SpeakeasyBase {
    /**
     * A list of the terms in this rule
     */
    body?: TwoHundredResultResultAstRulesBody[];
    head?: TwoHundredResultResultAstRulesHead;
}
/**
 * The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.
 *
 * @see {@link https://godoc.org/github.com/open-policy-agent/opa/ast} - AST
 */
export declare class TwoHundredResultResultAst extends SpeakeasyBase {
    package?: TwoHundredResultResultAstPackage;
    /**
     * When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)
     */
    rules?: TwoHundredResultResultAstRules[];
}
export declare class TwoHundredResultResult extends SpeakeasyBase {
    /**
     * The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.
     */
    ast?: TwoHundredResultResultAst;
    /**
     * The name of a policy module
     */
    id?: string;
    /**
     * A string representation of the full Rego policy
     */
    raw?: string;
}
/**
 * Success
 */
export declare class TwoHundredResult extends SpeakeasyBase {
    result?: TwoHundredResultResult[];
}
