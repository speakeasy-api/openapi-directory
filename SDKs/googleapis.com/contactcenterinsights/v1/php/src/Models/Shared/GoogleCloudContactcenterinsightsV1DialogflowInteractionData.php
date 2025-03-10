<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudContactcenterinsightsV1DialogflowInteractionData - Dialogflow interaction data.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudContactcenterinsightsV1DialogflowInteractionData
{
    /**
     * The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     * 
     * @var ?float $confidence
     */
	#[\JMS\Serializer\Annotation\SerializedName('confidence')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $confidence = null;
    
    /**
     * The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent}
     * 
     * @var ?string $dialogflowIntentId
     */
	#[\JMS\Serializer\Annotation\SerializedName('dialogflowIntentId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dialogflowIntentId = null;
    
	public function __construct()
	{
		$this->confidence = null;
		$this->dialogflowIntentId = null;
	}
}
