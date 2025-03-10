<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListVariablesResponse - List Variables Response.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListVariablesResponse
{
    /**
     * All GTM Variables of a GTM Container.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Variable> $variables
     */
	#[\JMS\Serializer\Annotation\SerializedName('variables')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Variable>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $variables = null;
    
	public function __construct()
	{
		$this->variables = null;
	}
}
