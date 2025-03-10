<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ResetAdminPasswordResponse - Response message for ResetAdminPassword
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ResetAdminPasswordResponse
{
    /**
     * A random password. See admin for more information.
     * 
     * @var ?string $password
     */
	#[\JMS\Serializer\Annotation\SerializedName('password')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $password = null;
    
	public function __construct()
	{
		$this->password = null;
	}
}
