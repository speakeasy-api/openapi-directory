<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudDialogflowV2HumanAgentAssistantConfig - Defines the Human Agent Assist to connect to a conversation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudDialogflowV2HumanAgentAssistantConfig
{
    /**
     * Detail human agent assistant config.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig $endUserSuggestionConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('endUserSuggestionConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig $endUserSuggestionConfig = null;
    
    /**
     * Detail human agent assistant config.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig $humanAgentSuggestionConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('humanAgentSuggestionConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig $humanAgentSuggestionConfig = null;
    
    /**
     * Configuration for analyses to run on each conversation message.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig $messageAnalysisConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('messageAnalysisConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig $messageAnalysisConfig = null;
    
    /**
     * Defines notification behavior.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2NotificationConfig $notificationConfig
     */
	#[\JMS\Serializer\Annotation\SerializedName('notificationConfig')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2NotificationConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudDialogflowV2NotificationConfig $notificationConfig = null;
    
	public function __construct()
	{
		$this->endUserSuggestionConfig = null;
		$this->humanAgentSuggestionConfig = null;
		$this->messageAnalysisConfig = null;
		$this->notificationConfig = null;
	}
}
