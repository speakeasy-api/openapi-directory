<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Transform - Strategy where signature and field values are verified, trasnformed and then token si re-signed
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Transform
{
	#[\JMS\Serializer\Annotation\SerializedName('algoSettings')]
    #[\JMS\Serializer\Annotation\Type('mixed')]
    public mixed $algoSettings;
    
    /**
     * Settings to transform a JWT token and its location
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TransformSettings $transformSettings
     */
	#[\JMS\Serializer\Annotation\SerializedName('transformSettings')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TransformSettings')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TransformSettings $transformSettings = null;
    
    /**
     * String with value Transform
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
		$this->algoSettings = null;
		$this->transformSettings = null;
		$this->type = "";
		$this->verificationSettings = new \OpenAPI\OpenAPI\Models\Shared\VerificationSettings();
	}
}
