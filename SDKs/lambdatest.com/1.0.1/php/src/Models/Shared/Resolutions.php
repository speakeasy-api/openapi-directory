<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Resolutions - successful operation
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Resolutions
{
    /**
     * $macRes
     * 
     * @var ?array<string> $macRes
     */
	#[\JMS\Serializer\Annotation\SerializedName('mac_res')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $macRes = null;
    
    /**
     * $winRes
     * 
     * @var ?array<string> $winRes
     */
	#[\JMS\Serializer\Annotation\SerializedName('win_res')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $winRes = null;
    
	public function __construct()
	{
		$this->macRes = null;
		$this->winRes = null;
	}
}
