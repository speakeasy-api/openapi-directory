<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDialogflowCxV3TransitionRouteGroup - An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDialogflowCxV3TransitionRouteGroup
{
    /**
     * Required. The human-readable name of the transition route group, unique within the flow. The display name can be no longer than 30 characters.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Transition routes associated with the TransitionRouteGroup.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3TransitionRoute> $transitionRoutes
     */
	#[\JMS\Serializer\Annotation\SerializedName('transitionRoutes')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowCxV3TransitionRoute>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $transitionRoutes = null;
    
	public function __construct()
	{
		$this->displayName = null;
		$this->name = null;
		$this->transitionRoutes = null;
	}
}
