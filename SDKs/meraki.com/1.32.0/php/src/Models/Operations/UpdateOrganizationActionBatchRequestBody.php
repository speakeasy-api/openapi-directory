<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateOrganizationActionBatchRequestBody
{
    /**
     * A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true.
     * 
     * @var ?bool $confirmed
     */
	#[\JMS\Serializer\Annotation\SerializedName('confirmed')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $confirmed = null;
    
    /**
     * Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch.
     * 
     * @var ?bool $synchronous
     */
	#[\JMS\Serializer\Annotation\SerializedName('synchronous')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $synchronous = null;
    
	public function __construct()
	{
		$this->confirmed = null;
		$this->synchronous = null;
	}
}
