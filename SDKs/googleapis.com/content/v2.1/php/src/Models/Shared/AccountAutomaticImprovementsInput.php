<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AccountAutomaticImprovementsInput - The automatic improvements of the account can be used to automatically update items, improve images and shipping.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AccountAutomaticImprovementsInput
{
    /**
     * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsInput $imageImprovements
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageImprovements')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccountImageImprovementsInput')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AccountImageImprovementsInput $imageImprovements = null;
    
    /**
     * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesInput $itemUpdates
     */
	#[\JMS\Serializer\Annotation\SerializedName('itemUpdates')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccountItemUpdatesInput')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AccountItemUpdatesInput $itemUpdates = null;
    
    /**
     * Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AccountShippingImprovements $shippingImprovements
     */
	#[\JMS\Serializer\Annotation\SerializedName('shippingImprovements')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AccountShippingImprovements')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AccountShippingImprovements $shippingImprovements = null;
    
	public function __construct()
	{
		$this->imageImprovements = null;
		$this->itemUpdates = null;
		$this->shippingImprovements = null;
	}
}
