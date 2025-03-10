<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UserUpdateContent
{
	#[\JMS\Serializer\Annotation\SerializedName('birthday')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $birthday = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('city')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $city = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('country')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $country = null;
    
    /**
     * Optional. User e-mail.
     * 
     * @var ?string $email
     */
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $email = null;
    
    /**
     * Optional. User first name.
     * 
     * @var ?string $firstName
     */
	#[\JMS\Serializer\Annotation\SerializedName('first_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $firstName = null;
    
    /**
     * Optional. ID of the user being updated.
     * 
     * @var ?int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
    /**
     * Optional. User last name.
     * 
     * @var ?string $lastName
     */
	#[\JMS\Serializer\Annotation\SerializedName('last_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lastName = null;
    
    /**
     * Notification settings
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\UserUpdateContentNotifications $notifications
     */
	#[\JMS\Serializer\Annotation\SerializedName('notifications')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\UserUpdateContentNotifications')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UserUpdateContentNotifications $notifications = null;
    
    /**
     * Notify new user account creation with login information and MotaWord introduction.
     * 
     * @var ?bool $notify
     */
	#[\JMS\Serializer\Annotation\SerializedName('notify')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $notify = null;
    
    /**
     * Optional. Vendor paypal e-mail
     * 
     * @var ?string $paypalEmail
     */
	#[\JMS\Serializer\Annotation\SerializedName('paypal_email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $paypalEmail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('phone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phone = null;
    
    /**
     * Optional. Whether this vendor requires 1099 form in US for their earnings.
     * 
     * @var ?bool $require1099
     */
	#[\JMS\Serializer\Annotation\SerializedName('require_1099')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $require1099 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $state = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('street')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $street = null;
    
    /**
     * A list of user group IDs
     * 
     * @var ?array<int> $userGroups
     */
	#[\JMS\Serializer\Annotation\SerializedName('user_groups')]
    #[\JMS\Serializer\Annotation\Type('array<int>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $userGroups = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('zip')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $zip = null;
    
	public function __construct()
	{
		$this->birthday = null;
		$this->city = null;
		$this->country = null;
		$this->email = null;
		$this->firstName = null;
		$this->id = null;
		$this->lastName = null;
		$this->notifications = null;
		$this->notify = null;
		$this->paypalEmail = null;
		$this->phone = null;
		$this->require1099 = null;
		$this->state = null;
		$this->street = null;
		$this->userGroups = null;
		$this->zip = null;
	}
}
