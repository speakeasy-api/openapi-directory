<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CorrectAnswer - A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CorrectAnswer
{
    /**
     * Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted.
     * 
     * @var ?string $value
     */
	#[\JMS\Serializer\Annotation\SerializedName('value')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $value = null;
    
	public function __construct()
	{
		$this->value = null;
	}
}
