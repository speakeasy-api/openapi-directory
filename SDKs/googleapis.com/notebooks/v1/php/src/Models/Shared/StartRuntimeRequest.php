<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * StartRuntimeRequest - Request for starting a Managed Notebook Runtime.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class StartRuntimeRequest
{
    /**
     * Idempotent request UUID.
     * 
     * @var ?string $requestId
     */
	#[\JMS\Serializer\Annotation\SerializedName('requestId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $requestId = null;
    
	public function __construct()
	{
		$this->requestId = null;
	}
}
