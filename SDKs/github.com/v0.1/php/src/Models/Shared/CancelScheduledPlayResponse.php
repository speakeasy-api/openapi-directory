<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CancelScheduledPlayResponse - Response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CancelScheduledPlayResponse
{
    /**
     * Response message
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CancelScheduledPlayResponseMessageEnum $message
     */
	#[\JMS\Serializer\Annotation\SerializedName('Message')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CancelScheduledPlayResponseMessageEnum>')]
    public CancelScheduledPlayResponseMessageEnum $message;
    
    /**
     * Whether the request was successful or not
     * 
     * @var bool $success
     */
	#[\JMS\Serializer\Annotation\SerializedName('Success')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $success;
    
	public function __construct()
	{
		$this->message = \OpenAPI\OpenAPI\Models\Shared\CancelScheduledPlayResponseMessageEnum::SCHEDULED_PLAY_CANCELATION_EXECUTED;
		$this->success = false;
	}
}
