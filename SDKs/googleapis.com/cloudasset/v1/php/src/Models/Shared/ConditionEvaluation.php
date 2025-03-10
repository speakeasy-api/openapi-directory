<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ConditionEvaluation - The Condition evaluation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ConditionEvaluation
{
    /**
     * The evaluation result.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ConditionEvaluationEvaluationValueEnum $evaluationValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('evaluationValue')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ConditionEvaluationEvaluationValueEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ConditionEvaluationEvaluationValueEnum $evaluationValue = null;
    
	public function __construct()
	{
		$this->evaluationValue = null;
	}
}
