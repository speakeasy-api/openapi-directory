import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDocumentRequest extends SpeakeasyBase {
    /**
     * If set to *full*, response will include query explanations in addition to the result.
     */
    explain?: string;
    /**
     * Provide the text for an [input document](https://www.openpolicyagent.org/docs/latest/kubernetes-primer/#input-document) in JSON format
     */
    input?: Record<string, any>;
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
     * A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.
     */
    path: string;
    /**
     * If true, response will be in a human-readable format.
     */
    pretty?: boolean;
    /**
     * If true, response will include build and version information in addition to the result.
     */
    provenance?: boolean;
}
export declare class GetDocument200ApplicationJSONExplanationLocalsKey extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocument200ApplicationJSONExplanationLocalsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocument200ApplicationJSONExplanationLocals extends SpeakeasyBase {
    key?: GetDocument200ApplicationJSONExplanationLocalsKey;
    value?: GetDocument200ApplicationJSONExplanationLocalsValue;
}
export declare class GetDocument200ApplicationJSONExplanationNodeTerms extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The AST element associated with the evaluation step.
 *
 * @see {@link https://godoc.org/github.com/open-policy-agent/opa/ast} - AST
 */
export declare class GetDocument200ApplicationJSONExplanationNode extends SpeakeasyBase {
    /**
     * Node number
     */
    index?: number;
    terms?: GetDocument200ApplicationJSONExplanationNodeTerms[];
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
export declare enum GetDocument200ApplicationJSONExplanationOpEnum {
    Enter = "enter",
    Exit = "exit",
    Eval = "eval",
    Fail = "fail",
    Redo = "redo"
}
/**
 * The type of the **node** field
 */
export declare enum GetDocument200ApplicationJSONExplanationTypeEnum {
    Expr = "expr",
    Rule = "rule",
    Body = "body"
}
export declare class GetDocument200ApplicationJSONExplanation extends SpeakeasyBase {
    /**
     * The query's term bindings at the point when the trace event was emitted.
     */
    locals?: GetDocument200ApplicationJSONExplanationLocals[];
    /**
     * The AST element associated with the evaluation step.
     */
    node?: GetDocument200ApplicationJSONExplanationNode;
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
    op?: GetDocument200ApplicationJSONExplanationOpEnum;
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
    type?: GetDocument200ApplicationJSONExplanationTypeEnum;
}
export declare class GetDocument200ApplicationJSONMetrics extends SpeakeasyBase {
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
export declare class GetDocument200ApplicationJSONProvenance extends SpeakeasyBase {
    /**
     * The Git commit id of this OPA build.
     */
    buildCommit?: string;
    /**
     * The hostname where this instance was built.
     */
    buildHostname?: string;
    /**
     * When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime))
     */
    buildTimestamp?: string;
    /**
     * A set of key-value pairs describing each bundle activated on the server.
     */
    bundles?: Record<string, any>;
    /**
     * The version of this OPA instance
     */
    version?: string;
}
/**
 * The type of the path operation
 */
export declare enum GetDocument200ApplicationJSONResultAstPackagePathTypeEnum {
    Import = "import",
    Package = "package"
}
export declare class GetDocument200ApplicationJSONResultAstPackagePath extends SpeakeasyBase {
    /**
     * The type of the path operation
     */
    type?: GetDocument200ApplicationJSONResultAstPackagePathTypeEnum;
    /**
     * The path variable
     */
    value?: string;
}
export declare class GetDocument200ApplicationJSONResultAstPackage extends SpeakeasyBase {
    /**
     * The path to the package
     */
    path?: GetDocument200ApplicationJSONResultAstPackagePath[];
}
export declare class GetDocument200ApplicationJSONResultAstRulesBodyTermsValue extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class GetDocument200ApplicationJSONResultAstRulesBodyTerms extends SpeakeasyBase {
    /**
     * The type of the term variable
     */
    type?: string;
    /**
     * The list of types and values for the term variable
     */
    value?: GetDocument200ApplicationJSONResultAstRulesBodyTermsValue[];
}
export declare class GetDocument200ApplicationJSONResultAstRulesBody extends SpeakeasyBase {
    /**
     * The location of this term in the list (starts at 0)
     */
    index?: number;
    /**
     * The type/value pairing for this term
     */
    terms?: GetDocument200ApplicationJSONResultAstRulesBodyTerms[];
}
/**
 * The type/value pairing for this rule's head
 */
export declare class GetDocument200ApplicationJSONResultAstRulesHeadKey extends SpeakeasyBase {
    /**
     * The type of the head
     */
    type?: string;
    /**
     * The value of the head
     */
    value?: string;
}
export declare class GetDocument200ApplicationJSONResultAstRulesHead extends SpeakeasyBase {
    /**
     * The type/value pairing for this rule's head
     */
    key?: GetDocument200ApplicationJSONResultAstRulesHeadKey;
    /**
     * The head of the rule
     */
    name?: string;
}
export declare class GetDocument200ApplicationJSONResultAstRules extends SpeakeasyBase {
    /**
     * A list of the terms in this rule
     */
    body?: GetDocument200ApplicationJSONResultAstRulesBody[];
    head?: GetDocument200ApplicationJSONResultAstRulesHead;
}
/**
 * The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.
 *
 * @see {@link https://godoc.org/github.com/open-policy-agent/opa/ast} - AST
 */
export declare class GetDocument200ApplicationJSONResultAst extends SpeakeasyBase {
    package?: GetDocument200ApplicationJSONResultAstPackage;
    /**
     * When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)
     */
    rules?: GetDocument200ApplicationJSONResultAstRules[];
}
export declare class GetDocument200ApplicationJSONResult extends SpeakeasyBase {
    /**
     * The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.
     */
    ast?: GetDocument200ApplicationJSONResultAst;
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
export declare class GetDocument200ApplicationJSON extends SpeakeasyBase {
    explanation?: GetDocument200ApplicationJSONExplanation[];
    metrics?: GetDocument200ApplicationJSONMetrics;
    provenance?: GetDocument200ApplicationJSONProvenance;
    result?: GetDocument200ApplicationJSONResult[];
}
export declare class GetDocumentResponse extends SpeakeasyBase {
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
    getDocument200ApplicationJSONObject?: GetDocument200ApplicationJSON;
}
