<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PassThrough - Strategy where only signature and field values are verified
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PassThrough
{
    /**
     * String with value PassThrough
     * 
     * @var string $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $type;
    
    /**
     * Settings to verify the value of JWT token fields
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\VerificationSettings $verificationSettings
     */
	#[\JMS\Serializer\Annotation\SerializedName('verificationSettings')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\VerificationSettings')]
    public VerificationSettings $verificationSettings;
    
	public function __construct()
	{
		$this->type = "";
		$this->verificationSettings = new \OpenAPI\OpenAPI\Models\Shared\VerificationSettings();
	}
}
