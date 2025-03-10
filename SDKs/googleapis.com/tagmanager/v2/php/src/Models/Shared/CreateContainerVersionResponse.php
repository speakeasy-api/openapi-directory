<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateContainerVersionResponse - Create container versions response.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateContainerVersionResponse
{
    /**
     * Compiler errors or not.
     * 
     * @var ?bool $compilerError
     */
	#[\JMS\Serializer\Annotation\SerializedName('compilerError')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $compilerError = null;
    
    /**
     * Represents a Google Tag Manager Container Version.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ContainerVersion $containerVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('containerVersion')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ContainerVersion')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ContainerVersion $containerVersion = null;
    
    /**
     * Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.
     * 
     * @var ?string $newWorkspacePath
     */
	#[\JMS\Serializer\Annotation\SerializedName('newWorkspacePath')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $newWorkspacePath = null;
    
    /**
     * The status of a workspace after synchronization.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SyncStatus $syncStatus
     */
	#[\JMS\Serializer\Annotation\SerializedName('syncStatus')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SyncStatus')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SyncStatus $syncStatus = null;
    
	public function __construct()
	{
		$this->compilerError = null;
		$this->containerVersion = null;
		$this->newWorkspacePath = null;
		$this->syncStatus = null;
	}
}
