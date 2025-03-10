<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PayCode - The pay code object.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PayCode
{
	#[\JMS\Serializer\Annotation\SerializedName('PayCode')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PayCodePayCode')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PayCodePayCode $payCode = null;
    
	public function __construct()
	{
		$this->payCode = null;
	}
}
