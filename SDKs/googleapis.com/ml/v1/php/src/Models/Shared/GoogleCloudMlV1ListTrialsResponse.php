<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudMlV1ListTrialsResponse - The response message for the ListTrials method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudMlV1ListTrialsResponse
{
    /**
     * The trials associated with the study.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1Trial> $trials
     */
	#[\JMS\Serializer\Annotation\SerializedName('trials')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GoogleCloudMlV1Trial>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $trials = null;
    
	public function __construct()
	{
		$this->trials = null;
	}
}
