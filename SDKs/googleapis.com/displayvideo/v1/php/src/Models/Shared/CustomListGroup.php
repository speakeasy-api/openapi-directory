<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CustomListGroup - Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CustomListGroup
{
    /**
     * Required. All custom list targeting settings in custom list group. Repeated settings with same id will be ignored.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting> $settings
     */
	#[\JMS\Serializer\Annotation\SerializedName('settings')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $settings = null;
    
	public function __construct()
	{
		$this->settings = null;
	}
}
