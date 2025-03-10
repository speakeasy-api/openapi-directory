<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ResourceUpdateError - Output only. If errors are generated during update of the resource, this field will be populated.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ResourceUpdateError
{
    /**
     * [Output Only] The array of errors encountered while processing this operation.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ResourceUpdateErrorErrors> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ResourceUpdateErrorErrors>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errors = null;
    
	public function __construct()
	{
		$this->errors = null;
	}
}
