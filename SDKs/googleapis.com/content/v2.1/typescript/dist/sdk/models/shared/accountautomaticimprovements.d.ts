import { SpeakeasyBase } from "../../../internal/utils";
import { AccountImageImprovements, AccountImageImprovementsInput } from "./accountimageimprovements";
import { AccountItemUpdates, AccountItemUpdatesInput } from "./accountitemupdates";
import { AccountShippingImprovements } from "./accountshippingimprovements";
/**
 * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
 */
export declare class AccountAutomaticImprovementsInput extends SpeakeasyBase {
    /**
     * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
     */
    imageImprovements?: AccountImageImprovementsInput;
    /**
     * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
     */
    itemUpdates?: AccountItemUpdatesInput;
    /**
     * Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data
     */
    shippingImprovements?: AccountShippingImprovements;
}
/**
 * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
 */
export declare class AccountAutomaticImprovements extends SpeakeasyBase {
    /**
     * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
     */
    imageImprovements?: AccountImageImprovements;
    /**
     * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
     */
    itemUpdates?: AccountItemUpdates;
    /**
     * Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data
     */
    shippingImprovements?: AccountShippingImprovements;
}
