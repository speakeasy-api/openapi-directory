<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ContactSettings - Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ContactSettings
{
    /**
     * Details required for a contact associated with a `Registration`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Contact $adminContact
     */
	#[\JMS\Serializer\Annotation\SerializedName('adminContact')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Contact')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Contact $adminContact = null;
    
    /**
     * Required. Privacy setting for the contacts associated with the `Registration`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ContactSettingsPrivacyEnum $privacy
     */
	#[\JMS\Serializer\Annotation\SerializedName('privacy')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ContactSettingsPrivacyEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ContactSettingsPrivacyEnum $privacy = null;
    
    /**
     * Details required for a contact associated with a `Registration`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Contact $registrantContact
     */
	#[\JMS\Serializer\Annotation\SerializedName('registrantContact')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Contact')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Contact $registrantContact = null;
    
    /**
     * Details required for a contact associated with a `Registration`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Contact $technicalContact
     */
	#[\JMS\Serializer\Annotation\SerializedName('technicalContact')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Contact')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Contact $technicalContact = null;
    
	public function __construct()
	{
		$this->adminContact = null;
		$this->privacy = null;
		$this->registrantContact = null;
		$this->technicalContact = null;
	}
}
