<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateCustomerProfileCreateCustomerProfileRequest
{
    /**
     * The email address that will receive updates when the Customer-Profile resource changes status.
     * 
     * @var string $email
     */
	#[SpeakeasyMetadata('form:name=Email')]
    public string $email;
    
    /**
     * The string that you assigned to describe the resource.
     * 
     * @var string $friendlyName
     */
	#[SpeakeasyMetadata('form:name=FriendlyName')]
    public string $friendlyName;
    
    /**
     * The unique string of a policy that is associated to the Customer-Profile resource.
     * 
     * @var string $policySid
     */
	#[SpeakeasyMetadata('form:name=PolicySid')]
    public string $policySid;
    
    /**
     * The URL we call to inform your application of status changes.
     * 
     * @var ?string $statusCallback
     */
	#[SpeakeasyMetadata('form:name=StatusCallback')]
    public ?string $statusCallback = null;
    
	public function __construct()
	{
		$this->email = "";
		$this->friendlyName = "";
		$this->policySid = "";
		$this->statusCallback = null;
	}
}
