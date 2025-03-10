<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
/**
 * ProjectInput - Represents a project
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ProjectInput
{
    /**
     * Gets or sets the description of the project
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=Description')]
    public ?string $description = null;
    
    /**
     * Gets or sets the name of the project
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=Name')]
    public ?string $name = null;
    
    /**
     * Represents settings associated with a project
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ProjectSettings $settings
     */
	#[\JMS\Serializer\Annotation\SerializedName('Settings')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ProjectSettings')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    #[SpeakeasyMetadata('form:name=Settings,json=true')]
    public ?ProjectSettings $settings = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->name = null;
		$this->settings = null;
	}
}
