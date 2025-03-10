<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class EnterpriseCrmEventbusProtoSuspensionExpiration
{
    /**
     * Milliseconds after which the suspension expires, if no action taken.
     * 
     * @var ?int $expireAfterMs
     */
	#[\JMS\Serializer\Annotation\SerializedName('expireAfterMs')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $expireAfterMs = null;
    
    /**
     * Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior.
     * 
     * @var ?bool $liftWhenExpired
     */
	#[\JMS\Serializer\Annotation\SerializedName('liftWhenExpired')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $liftWhenExpired = null;
    
    /**
     * Milliseconds after which the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.
     * 
     * @var ?int $remindAfterMs
     */
	#[\JMS\Serializer\Annotation\SerializedName('remindAfterMs')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $remindAfterMs = null;
    
	public function __construct()
	{
		$this->expireAfterMs = null;
		$this->liftWhenExpired = null;
		$this->remindAfterMs = null;
	}
}
