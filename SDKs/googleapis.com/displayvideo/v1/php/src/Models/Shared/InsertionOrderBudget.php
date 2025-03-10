<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InsertionOrderBudget - Settings that control how insertion order budget is allocated.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InsertionOrderBudget
{
    /**
     * The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to `INSERTION_ORDER_AUTOMATION_TYPE_NONE`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetAutomationTypeEnum $automationType
     */
	#[\JMS\Serializer\Annotation\SerializedName('automationType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetAutomationTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InsertionOrderBudgetAutomationTypeEnum $automationType = null;
    
    /**
     * Required. The list of budget segments. Use a budget segment to specify a specific budget for a given period of time an insertion order is running.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetSegment> $budgetSegments
     */
	#[\JMS\Serializer\Annotation\SerializedName('budgetSegments')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetSegment>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $budgetSegments = null;
    
    /**
     * Required. Immutable. The budget unit specifies whether the budget is currency based or impression based.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetBudgetUnitEnum $budgetUnit
     */
	#[\JMS\Serializer\Annotation\SerializedName('budgetUnit')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetBudgetUnitEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InsertionOrderBudgetBudgetUnitEnum $budgetUnit = null;
    
	public function __construct()
	{
		$this->automationType = null;
		$this->budgetSegments = null;
		$this->budgetUnit = null;
	}
}
