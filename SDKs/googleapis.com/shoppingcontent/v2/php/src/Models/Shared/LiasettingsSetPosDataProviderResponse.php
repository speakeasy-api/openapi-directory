<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LiasettingsSetPosDataProviderResponse - Successful response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LiasettingsSetPosDataProviderResponse
{
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetPosDataProviderResponse".
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
	public function __construct()
	{
		$this->kind = null;
	}
}
