<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SensitiveDataEthnicityEthnicRacialIdentities - The ethnic racial identity model
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SensitiveDataEthnicityEthnicRacialIdentities
{
    /**
     * Employee's preferred or chosen ethnicity or race.<br  />Max length: 40.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	public function __construct()
	{
		$this->description = null;
	}
}
