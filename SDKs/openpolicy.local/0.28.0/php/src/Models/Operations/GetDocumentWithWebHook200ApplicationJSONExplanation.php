<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetDocumentWithWebHook200ApplicationJSONExplanation
{
    /**
     * The query's term bindings at the point when the trace event was emitted.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationLocals> $locals
     */
	#[\JMS\Serializer\Annotation\SerializedName('locals')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationLocals>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $locals = null;
    
    /**
     * The AST element associated with the evaluation step.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationNode $node
     */
	#[\JMS\Serializer\Annotation\SerializedName('node')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationNode')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetDocumentWithWebHook200ApplicationJSONExplanationNode $node = null;
    
    /**
     * The kind of *trace event*
     * 
     * 
     * Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:
     * - enter - before a body or rule is evaluated
     * - exit - after a body or rule has evaluated successfully
     * - eval - before an expression is evaluated
     * - fail - after an expression has evaluated to false.
     * - redo - before evaluation restarts from a body, rule, or expression.
     * 
     * By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum $op
     */
	#[\JMS\Serializer\Annotation\SerializedName('op')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetDocumentWithWebHook200ApplicationJSONExplanationOpEnum $op = null;
    
    /**
     * The parent query. Use this field to identify trace events from related queries.
     * 
     * 
     * For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.
     * 
     * @var ?float $parentId
     */
	#[\JMS\Serializer\Annotation\SerializedName('parent_id')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $parentId = null;
    
    /**
     * The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.
     * 
     * @var ?float $queryId
     */
	#[\JMS\Serializer\Annotation\SerializedName('query_id')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $queryId = null;
    
    /**
     * The type of the **node** field
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetDocumentWithWebHook200ApplicationJSONExplanationTypeEnum $type = null;
    
	public function __construct()
	{
		$this->locals = null;
		$this->node = null;
		$this->op = null;
		$this->parentId = null;
		$this->queryId = null;
		$this->type = null;
	}
}
