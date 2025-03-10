<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * NFSMount - Configuration for an `NFSMount` to be attached to the VM.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class NFSMount
{
    /**
     * A target NFS mount. The target must be specified as `address:/mount".
     * 
     * @var ?string $target
     */
	#[\JMS\Serializer\Annotation\SerializedName('target')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $target = null;
    
	public function __construct()
	{
		$this->target = null;
	}
}
