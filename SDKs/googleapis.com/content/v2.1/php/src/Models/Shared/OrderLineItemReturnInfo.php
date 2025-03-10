<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class OrderLineItemReturnInfo
{
    /**
     * Required. How many days later the item can be returned.
     * 
     * @var ?int $daysToReturn
     */
	#[\JMS\Serializer\Annotation\SerializedName('daysToReturn')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $daysToReturn = null;
    
    /**
     * Required. Whether the item is returnable.
     * 
     * @var ?bool $isReturnable
     */
	#[\JMS\Serializer\Annotation\SerializedName('isReturnable')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isReturnable = null;
    
    /**
     * Required. URL of the item return policy.
     * 
     * @var ?string $policyUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('policyUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $policyUrl = null;
    
	public function __construct()
	{
		$this->daysToReturn = null;
		$this->isReturnable = null;
		$this->policyUrl = null;
	}
}
