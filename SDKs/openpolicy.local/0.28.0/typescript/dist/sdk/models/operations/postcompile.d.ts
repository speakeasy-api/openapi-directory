import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompileRequest extends SpeakeasyBase {
    /**
     * The query (in JSON format)
     */
    requestBody?: Record<string, any>;
    /**
     * If set to *full*, response will include query explanations in addition to the result.
     */
    explain?: string;
    /**
     * If true, response will return additional performance metrics in addition to the result and the standard metrics.
     *
     * @remarks
     *
     * **Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.
     */
    instrument?: boolean;
    /**
     * If true, compiler performance metrics will be returned in the response.
     */
    metrics?: boolean;
    /**
     * If true, response will be in a human-readable format.
     */
    pretty?: boolean;
}
export declare class PostCompile200ApplicationJSONExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PostCompile200ApplicationJSONExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PostCompile200ApplicationJSONExplanationLocals extends SpeakeasyBase {
    key?: PostCompile200ApplicationJSONExplanationLocalsKey;
    value?: PostCompile200ApplicationJSONExplanationLocalsValue;
}
export declare class PostCompile200ApplicationJSONExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 *
 * @see {@link https://godoc.org/github.com/open-policy-agent/opa/ast} - AST
 */
export declare class PostCompile200ApplicationJSONExplanationNode extends SpeakeasyBase {
    /**
     * Node number
     */
    index?: number;
    terms?: PostCompile200ApplicationJSONExplanationNodeTerms[];
}
/**
 * The kind of *trace event*
 *
 * @remarks
 *
 * Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:
 * - enter - before a body or rule is evaluated
 * - exit - after a body or rule has evaluated successfully
 * - eval - before an expression is evaluated
 * - fail - after an expression has evaluated to false.
 * - redo - before evaluation restarts from a body, rule, or expression.
 *
 * By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.
 */
export declare enum PostCompile200ApplicationJSONExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
/**
 * The type of the **node** field
 */
export declare enum PostCompile200ApplicationJSONExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class PostCompile200ApplicationJSONExplanation extends SpeakeasyBase {
    /**
     * The query's term bindings at the point when the trace event was emitted.
     */
    locals?: PostCompile200ApplicationJSONExplanationLocals[];
    /**
     * The AST element associated with the evaluation step.
     */
    node?: PostCompile200ApplicationJSONExplanationNode;
    /**
     * The kind of *trace event*
     *
     * @remarks
     *
     * Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:
     * - enter - before a body or rule is evaluated
     * - exit - after a body or rule has evaluated successfully
     * - eval - before an expression is evaluated
     * - fail - after an expression has evaluated to false.
     * - redo - before evaluation restarts from a body, rule, or expression.
     *
     * By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.
     */
    op?: PostCompile200ApplicationJSONExplanationOpEnum;
    /**
     * The parent query. Use this field to identify trace events from related queries.
     *
     * @remarks
     *
     * For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.
     */
    parentId?: number;
    /**
     * The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.
     */
    queryId?: number;
    /**
     * The type of the **node** field
     */
    type?: PostCompile200ApplicationJSONExplanationTypeEnum;
}
export declare class PostCompile200ApplicationJSONMetrics extends SpeakeasyBase {
    /**
     * *Description is forthcoming*
     */
    counterServerQueryCacheHit?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageBuildComprehensionIndexNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageCheckSafetyNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageCheckTypesNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageCheckUndefinedFuncsNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageCheckUnsafeBuiltinsNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageResolveRefsNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageRewriteComprehensionTermsNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageRewriteDynamicTermsNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageRewriteExprTermsNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageRewriteLocalVarsNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageRewriteToCaptureValueNs?: number;
    /**
     * (Only returned if `instrument` is true.) *Description is forthcoming*
     */
    timerQueryCompileStageRewriteWithValuesNs?: number;
    /**
     * Time taken (in nanonseconds) to parse the input
     */
    timerRegoInputParseNs?: number;
    /**
     * Time taken (in nanonseconds) to compile the loaded policy modules
     */
    timerRegoModuleCompileNs?: number;
    /**
     * Time taken (in nanoseconds) to parse the input policy module
     */
    timerRegoModuleParseNs?: number;
    /**
     * Time taken (in nanoseconds) to compile the query
     */
    timerRegoQueryCompileNs?: number;
    /**
     * Time taken (in nanonseconds) to evaluate the query
     */
    timerRegoQueryEvalNs?: number;
    /**
     * Time taken (in nanoseconds) to parse the query
     */
    timerRegoQueryParseNs?: number;
    /**
     * Time taken (in nanoseconds) to handle the API request
     */
    timerServerHandlerNs?: number;
    /**
     * *Description is forthcoming*
     */
    timerServerReadBytesNs?: number;
}
/**
 * The type of the path operation
 */
export declare enum PostCompile200ApplicationJSONResultAstPackagePathTypeEnum {
    Import = "import",
    Package = "package"
}
export declare class PostCompile200ApplicationJSONResultAstPackagePath extends SpeakeasyBase {
    /**
     * The type of the path operation
     */
    type?: PostCompile200ApplicationJSONResultAstPackagePathTypeEnum;
    /**
     * The path variable
     */
    value?: string;
}
export declare class PostCompile200ApplicationJSONResultAstPackage extends SpeakeasyBase {
    /**
     * The path to the package
     */
    path?: PostCompile200ApplicationJSONResultAstPackagePath[];
}
export declare class PostCompile200ApplicationJSONResultAstRulesBodyTermsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PostCompile200ApplicationJSONResultAstRulesBodyTerms extends SpeakeasyBase {
    /**
     * The type of the term variable
     */
    type?: string;
    /**
     * The list of types and values for the term variable
     */
    value?: PostCompile200ApplicationJSONResultAstRulesBodyTermsValue[];
}
export declare class PostCompile200ApplicationJSONResultAstRulesBody extends SpeakeasyBase {
    /**
     * The location of this term in the list (starts at 0)
     */
    index?: number;
    /**
     * The type/value pairing for this term
     */
    terms?: PostCompile200ApplicationJSONResultAstRulesBodyTerms[];
}
/**
 * The type/value pairing for this rule's head
 */
export declare class PostCompile200ApplicationJSONResultAstRulesHeadKey extends SpeakeasyBase {
    /**
     * The type of the head
     */
    type?: string;
    /**
     * The value of the head
     */
    value?: string;
}
export declare class PostCompile200ApplicationJSONResultAstRulesHead extends SpeakeasyBase {
    /**
     * The type/value pairing for this rule's head
     */
    key?: PostCompile200ApplicationJSONResultAstRulesHeadKey;
    /**
     * The head of the rule
     */
    name?: string;
}
export declare class PostCompile200ApplicationJSONResultAstRules extends SpeakeasyBase {
    /**
     * A list of the terms in this rule
     */
    body?: PostCompile200ApplicationJSONResultAstRulesBody[];
    head?: PostCompile200ApplicationJSONResultAstRulesHead;
}
/**
 * The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.
 *
 * @see {@link https://godoc.org/github.com/open-policy-agent/opa/ast} - AST
 */
export declare class PostCompile200ApplicationJSONResultAst extends SpeakeasyBase {
    package?: PostCompile200ApplicationJSONResultAstPackage;
    /**
     * When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)
     */
    rules?: PostCompile200ApplicationJSONResultAstRules[];
}
export declare class PostCompile200ApplicationJSONResult extends SpeakeasyBase {
    /**
     * The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.
     */
    ast?: PostCompile200ApplicationJSONResultAst;
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
export declare class PostCompile200ApplicationJSON extends SpeakeasyBase {
    explanation?: PostCompile200ApplicationJSONExplanation[];
    metrics?: PostCompile200ApplicationJSONMetrics;
    result?: PostCompile200ApplicationJSONResult[];
}
export declare class PostCompileResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postCompile200ApplicationJSONObject?: PostCompile200ApplicationJSON;
}
