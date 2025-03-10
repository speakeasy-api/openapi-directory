<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * OrganizationInfo - Additional Info stored for an organization.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class OrganizationInfo
{
    /**
     * The contact number for the organization.
     * 
     * @var ?string $phoneNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('phoneNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phoneNumber = null;
    
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PostalAddress $postalAddress
     */
	#[\JMS\Serializer\Annotation\SerializedName('postalAddress')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PostalAddress')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PostalAddress $postalAddress = null;
    
    /**
     * The registered domain for the account.
     * 
     * @var ?string $registeredDomain
     */
	#[\JMS\Serializer\Annotation\SerializedName('registeredDomain')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $registeredDomain = null;
    
	public function __construct()
	{
		$this->phoneNumber = null;
		$this->postalAddress = null;
		$this->registeredDomain = null;
	}
}
