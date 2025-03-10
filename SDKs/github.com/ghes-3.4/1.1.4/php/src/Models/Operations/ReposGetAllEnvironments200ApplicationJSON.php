<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ReposGetAllEnvironments200ApplicationJSON - Response
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ReposGetAllEnvironments200ApplicationJSON
{
    /**
     * $environments
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Environment> $environments
     */
	#[\JMS\Serializer\Annotation\SerializedName('environments')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Environment>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $environments = null;
    
    /**
     * The number of environments in this repository
     * 
     * @var ?int $totalCount
     */
	#[\JMS\Serializer\Annotation\SerializedName('total_count')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $totalCount = null;
    
	public function __construct()
	{
		$this->environments = null;
		$this->totalCount = null;
	}
}
