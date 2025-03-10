<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BulkEditNegativeKeywordsResponse - Response message for NegativeKeywordService.BulkEditNegativeKeywords.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BulkEditNegativeKeywordsResponse
{
    /**
     * The list of negative keywords that have been successfully created. This list will be absent if empty.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\NegativeKeyword> $negativeKeywords
     */
	#[\JMS\Serializer\Annotation\SerializedName('negativeKeywords')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\NegativeKeyword>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $negativeKeywords = null;
    
	public function __construct()
	{
		$this->negativeKeywords = null;
	}
}
