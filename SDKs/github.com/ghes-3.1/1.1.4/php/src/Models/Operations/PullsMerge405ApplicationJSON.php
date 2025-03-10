<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * PullsMerge405ApplicationJSON - Method Not Allowed if merge cannot be performed
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class PullsMerge405ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('documentation_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $documentationUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $message = null;
    
	public function __construct()
	{
		$this->documentationUrl = null;
		$this->message = null;
	}
}
