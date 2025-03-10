<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetAliasesModel - returns Array of aliases with lastId
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetAliasesModel
{
    /**
     * $aliases
     * 
     * @var ?array<string> $aliases
     */
	#[\JMS\Serializer\Annotation\SerializedName('aliases')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $aliases = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('lastId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lastId = null;
    
	public function __construct()
	{
		$this->aliases = null;
		$this->lastId = null;
	}
}
