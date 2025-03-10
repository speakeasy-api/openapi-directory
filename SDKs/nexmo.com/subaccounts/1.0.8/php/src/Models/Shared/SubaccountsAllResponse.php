<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SubaccountsAllResponse - Subaccounts response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SubaccountsAllResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('_embedded')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SubaccountsAllResponseEmbedded')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SubaccountsAllResponseEmbedded $embedded = null;
    
	public function __construct()
	{
		$this->embedded = null;
	}
}
