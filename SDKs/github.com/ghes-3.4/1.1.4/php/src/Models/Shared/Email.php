<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Email - Email
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Email
{
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $email;
    
	#[\JMS\Serializer\Annotation\SerializedName('primary')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $primary;
    
	#[\JMS\Serializer\Annotation\SerializedName('verified')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $verified;
    
	#[\JMS\Serializer\Annotation\SerializedName('visibility')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $visibility;
    
	public function __construct()
	{
		$this->email = "";
		$this->primary = false;
		$this->verified = false;
		$this->visibility = "";
	}
}
