<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * LocationStateInput - Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class LocationStateInput
{
    /**
     * Output only. Indicates whether the location can be deleted using the Google My Business API.
     * 
     * @var ?bool $canDelete
     */
	#[\JMS\Serializer\Annotation\SerializedName('canDelete')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $canDelete = null;
    
    /**
     * Output only. Indicates whether the location can be updated.
     * 
     * @var ?bool $canUpdate
     */
	#[\JMS\Serializer\Annotation\SerializedName('canUpdate')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $canUpdate = null;
    
    /**
     * Output only. Indicates whether any of this Location's properties are in the edit pending state.
     * 
     * @var ?bool $hasPendingEdits
     */
	#[\JMS\Serializer\Annotation\SerializedName('hasPendingEdits')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $hasPendingEdits = null;
    
    /**
     * Output only. Indicates whether the location has pending verification requests.
     * 
     * @var ?bool $hasPendingVerification
     */
	#[\JMS\Serializer\Annotation\SerializedName('hasPendingVerification')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $hasPendingVerification = null;
    
    /**
     * Output only. Indicates whether the location is disabled.
     * 
     * @var ?bool $isDisabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('isDisabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isDisabled = null;
    
    /**
     * Output only. Indicates whether the location is disconnected from a place on Google Maps.
     * 
     * @var ?bool $isDisconnected
     */
	#[\JMS\Serializer\Annotation\SerializedName('isDisconnected')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isDisconnected = null;
    
    /**
     * Output only. Indicates whether the location is a duplicate of another location.
     * 
     * @var ?bool $isDuplicate
     */
	#[\JMS\Serializer\Annotation\SerializedName('isDuplicate')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isDuplicate = null;
    
    /**
     * Output only. Indicates whether the place ID associated with this location has updates.
     * 
     * @var ?bool $isGoogleUpdated
     */
	#[\JMS\Serializer\Annotation\SerializedName('isGoogleUpdated')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isGoogleUpdated = null;
    
    /**
     * Output only. Indicates whether [accounts.locations.localPosts](/my-business/reference/rest/v4/accounts.locations.localPosts) is disabled for this location.
     * 
     * @var ?bool $isLocalPostApiDisabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('isLocalPostApiDisabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isLocalPostApiDisabled = null;
    
    /**
     * Output only. Indicates whether the review of the location is pending.
     * 
     * @var ?bool $isPendingReview
     */
	#[\JMS\Serializer\Annotation\SerializedName('isPendingReview')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isPendingReview = null;
    
    /**
     * Output only. Indicates whether the location is published.
     * 
     * @var ?bool $isPublished
     */
	#[\JMS\Serializer\Annotation\SerializedName('isPublished')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isPublished = null;
    
    /**
     * Output only. Indicates whether the location is suspended. Suspended locations are not visible to end users in Google products. If you believe this was a mistake, see the [help center article] (https://support.google.com/business/answer/4569145).
     * 
     * @var ?bool $isSuspended
     */
	#[\JMS\Serializer\Annotation\SerializedName('isSuspended')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isSuspended = null;
    
    /**
     * Output only. Indicates whether the location is verified.
     * 
     * @var ?bool $isVerified
     */
	#[\JMS\Serializer\Annotation\SerializedName('isVerified')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isVerified = null;
    
    /**
     * Output only. Indicates whether the location requires reverification.
     * 
     * @var ?bool $needsReverification
     */
	#[\JMS\Serializer\Annotation\SerializedName('needsReverification')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $needsReverification = null;
    
	public function __construct()
	{
		$this->canDelete = null;
		$this->canUpdate = null;
		$this->hasPendingEdits = null;
		$this->hasPendingVerification = null;
		$this->isDisabled = null;
		$this->isDisconnected = null;
		$this->isDuplicate = null;
		$this->isGoogleUpdated = null;
		$this->isLocalPostApiDisabled = null;
		$this->isPendingReview = null;
		$this->isPublished = null;
		$this->isSuspended = null;
		$this->isVerified = null;
		$this->needsReverification = null;
	}
}
