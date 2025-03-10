<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * FilterSearchAndReplaceDetails - Details for the filter of the type SEARCH_AND_REPLACE.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class FilterSearchAndReplaceDetails
{
    /**
     * Determines if the filter is case sensitive.
     * 
     * @var ?bool $caseSensitive
     */
	#[\JMS\Serializer\Annotation\SerializedName('caseSensitive')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $caseSensitive = null;
    
    /**
     * Field to use in the filter.
     * 
     * @var ?string $field
     */
	#[\JMS\Serializer\Annotation\SerializedName('field')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $field = null;
    
    /**
     * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
     * 
     * @var ?int $fieldIndex
     */
	#[\JMS\Serializer\Annotation\SerializedName('fieldIndex')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $fieldIndex = null;
    
    /**
     * Term to replace the search term with.
     * 
     * @var ?string $replaceString
     */
	#[\JMS\Serializer\Annotation\SerializedName('replaceString')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $replaceString = null;
    
    /**
     * Term to search.
     * 
     * @var ?string $searchString
     */
	#[\JMS\Serializer\Annotation\SerializedName('searchString')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $searchString = null;
    
	public function __construct()
	{
		$this->caseSensitive = null;
		$this->field = null;
		$this->fieldIndex = null;
		$this->replaceString = null;
		$this->searchString = null;
	}
}
