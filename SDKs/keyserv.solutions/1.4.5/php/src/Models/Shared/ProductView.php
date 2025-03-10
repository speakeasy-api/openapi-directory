<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ProductView
{
	#[\JMS\Serializer\Annotation\SerializedName('created')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $created = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('custom')]
    #[\JMS\Serializer\Annotation\Type('mixed')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public mixed $custom = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('serial')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serial = null;
    
    /**
     * $subscriptions
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SubscriptionView> $subscriptions
     */
	#[\JMS\Serializer\Annotation\SerializedName('subscriptions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SubscriptionView>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $subscriptions = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('updated')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $updated = null;
    
	public function __construct()
	{
		$this->created = null;
		$this->custom = null;
		$this->name = null;
		$this->serial = null;
		$this->subscriptions = null;
		$this->updated = null;
	}
}
