<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudPaymentsResellerSubscriptionV1Extension - Describes the details of an extension request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudPaymentsResellerSubscriptionV1Extension
{
    /**
     * Describes the length of a period of a time.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Duration $duration
     */
	#[\JMS\Serializer\Annotation\SerializedName('duration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Duration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudPaymentsResellerSubscriptionV1Duration $duration = null;
    
    /**
     * Required. Identifier of the end-user in partner’s system.
     * 
     * @var ?string $partnerUserToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('partnerUserToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $partnerUserToken = null;
    
	public function __construct()
	{
		$this->duration = null;
		$this->partnerUserToken = null;
	}
}
