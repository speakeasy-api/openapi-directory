<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DnsCacheConfig - Configuration for NodeLocal DNSCache
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DnsCacheConfig
{
    /**
     * Whether NodeLocal DNSCache is enabled for this cluster.
     * 
     * @var ?bool $enabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('enabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enabled = null;
    
	public function __construct()
	{
		$this->enabled = null;
	}
}
