<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest - The request message for ConversationProfiles.ClearFeature.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest
{
    /**
     * Required. The participant role to remove the suggestion feature config. Only HUMAN_AGENT or END_USER can be used.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum $participantRole
     */
	#[\JMS\Serializer\Annotation\SerializedName('participantRole')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum $participantRole = null;
    
    /**
     * Required. The type of the suggestion feature to remove.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum $suggestionFeatureType
     */
	#[\JMS\Serializer\Annotation\SerializedName('suggestionFeatureType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum $suggestionFeatureType = null;
    
	public function __construct()
	{
		$this->participantRole = null;
		$this->suggestionFeatureType = null;
	}
}
