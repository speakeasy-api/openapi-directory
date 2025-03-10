<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListCatalogResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListCatalogResponse
{
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * 
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     * 
     * @var ?string $cursor
     */
	#[\JMS\Serializer\Annotation\SerializedName('cursor')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cursor = null;
    
    /**
     * Any errors that occurred during the request.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Error> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Error>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errors = null;
    
    /**
     * The CatalogObjects returned.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CatalogObject> $objects
     */
	#[\JMS\Serializer\Annotation\SerializedName('objects')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CatalogObject>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $objects = null;
    
	public function __construct()
	{
		$this->cursor = null;
		$this->errors = null;
		$this->objects = null;
	}
}
