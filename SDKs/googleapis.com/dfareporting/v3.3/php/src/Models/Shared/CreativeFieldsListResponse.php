<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreativeFieldsListResponse - Creative Field List Response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreativeFieldsListResponse
{
    /**
     * Creative field collection.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CreativeField> $creativeFields
     */
	#[\JMS\Serializer\Annotation\SerializedName('creativeFields')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CreativeField>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $creativeFields = null;
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * Pagination token to be used for the next list operation.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
	public function __construct()
	{
		$this->creativeFields = null;
		$this->kind = null;
		$this->nextPageToken = null;
	}
}
