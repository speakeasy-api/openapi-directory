<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDialogflowCxV3beta1SessionEntityType - Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDialogflowCxV3beta1SessionEntityType
{
    /**
     * Required. The collection of entities to override or supplement the custom entity type.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EntityTypeEntity> $entities
     */
	#[\JMS\Serializer\Annotation\SerializedName('entities')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1EntityTypeEntity>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $entities = null;
    
    /**
     * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum $entityOverrideMode
     */
	#[\JMS\Serializer\Annotation\SerializedName('entityOverrideMode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum $entityOverrideMode = null;
    
    /**
     * Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->entities = null;
		$this->entityOverrideMode = null;
		$this->name = null;
	}
}
