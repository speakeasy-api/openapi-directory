<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetOneRecurringPayment200ApplicationJSONResult
{
	#[\JMS\Serializer\Annotation\SerializedName('created_at')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createdAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('expire_date')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $expireDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('is_active')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isActive = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('subscriber')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetOneRecurringPayment200ApplicationJSONResultSubscriber')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetOneRecurringPayment200ApplicationJSONResultSubscriber $subscriber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('subscription_plan_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $subscriptionPlanId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('updated_at')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updatedAt = null;
    
	public function __construct()
	{
		$this->createdAt = null;
		$this->expireDate = null;
		$this->id = null;
		$this->isActive = null;
		$this->status = null;
		$this->subscriber = null;
		$this->subscriptionPlanId = null;
		$this->updatedAt = null;
	}
}
