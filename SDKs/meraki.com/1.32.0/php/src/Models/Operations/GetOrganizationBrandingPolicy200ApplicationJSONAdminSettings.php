<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetOrganizationBrandingPolicy200ApplicationJSONAdminSettings - Settings for describing which kinds of admins this policy applies to.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetOrganizationBrandingPolicy200ApplicationJSONAdminSettings
{
    /**
     * Which kinds of admins this policy applies to. Can be one of 'All organization admins', 'All enterprise admins', 'All network admins', 'All admins of networks...', 'All admins of networks tagged...', 'Specific admins...', 'All admins' or 'All SAML admins'.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPolicy200ApplicationJSONAdminSettingsAppliesToEnum $appliesTo
     */
	#[\JMS\Serializer\Annotation\SerializedName('appliesTo')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\GetOrganizationBrandingPolicy200ApplicationJSONAdminSettingsAppliesToEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetOrganizationBrandingPolicy200ApplicationJSONAdminSettingsAppliesToEnum $appliesTo = null;
    
    /**
     *       If 'appliesTo' is set to one of 'Specific admins...', 'All admins of networks...' or 'All admins of networks tagged...', then you must specify this 'values' property to provide the set of
     * 
     *       entities to apply the branding policy to. For 'Specific admins...', specify an array of admin IDs. For 'All admins of
     *       networks...', specify an array of network IDs and/or configuration template IDs. For 'All admins of networks tagged...',
     *       specify an array of tag names.
     * 
     * 
     * @var ?array<string> $values
     */
	#[\JMS\Serializer\Annotation\SerializedName('values')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $values = null;
    
	public function __construct()
	{
		$this->appliesTo = null;
		$this->values = null;
	}
}
