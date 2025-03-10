<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetClassifications200ApplicationJSON - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetClassifications200ApplicationJSON
{
    /**
     * $classifications
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ClassificationV1> $classifications
     */
	#[\JMS\Serializer\Annotation\SerializedName('classifications')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ClassificationV1>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $classifications = null;
    
	public function __construct()
	{
		$this->classifications = null;
	}
}
