<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ReposAddStatusCheckContextsRequestBody1
{
    /**
     * The name of the status checks
     * 
     * @var array<string> $contexts
     */
	#[\JMS\Serializer\Annotation\SerializedName('contexts')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    public array $contexts;
    
	public function __construct()
	{
		$this->contexts = [];
	}
}
