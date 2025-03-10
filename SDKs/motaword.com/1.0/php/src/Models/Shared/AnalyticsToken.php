<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AnalyticsToken - JWT token result
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AnalyticsToken
{
	#[\JMS\Serializer\Annotation\SerializedName('jwt')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $jwt = null;
    
	public function __construct()
	{
		$this->jwt = null;
	}
}
