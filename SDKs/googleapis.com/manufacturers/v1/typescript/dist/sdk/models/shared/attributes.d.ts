import { SpeakeasyBase } from "../../../internal/utils";
import { Capacity } from "./capacity";
import { Count } from "./count";
import { FeatureDescription } from "./featuredescription";
import { Grocery } from "./grocery";
import { Image } from "./image";
import { Nutrition } from "./nutrition";
import { Price } from "./price";
import { ProductDetail } from "./productdetail";
/**
 * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
 */
export declare class Attributes extends SpeakeasyBase {
    /**
     * The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage.
     */
    additionalImageLink?: Image[];
    /**
     * The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup.
     */
    ageGroup?: string;
    /**
     * The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand.
     */
    brand?: string;
    /**
     * The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
     */
    capacity?: Capacity;
    /**
     * The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color.
     */
    color?: string;
    /**
     * The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
     */
    count?: Count;
    /**
     * The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description.
     */
    description?: string;
    /**
     * The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure.
     */
    disclosureDate?: string;
    /**
     * A list of excluded destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550
     */
    excludedDestination?: string[];
    /**
     * The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
     */
    featureDescription?: FeatureDescription[];
    /**
     * The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor.
     */
    flavor?: string;
    /**
     * The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format.
     */
    format?: string;
    /**
     * The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender.
     */
    gender?: string;
    grocery?: Grocery;
    /**
     * The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin.
     */
    gtin?: string[];
    /**
     * An image.
     */
    imageLink?: Image;
    /**
     * A list of included destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550
     */
    includedDestination?: string[];
    /**
     * The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid.
     */
    itemGroupId?: string;
    /**
     * The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material.
     */
    material?: string;
    /**
     * The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn.
     */
    mpn?: string;
    nutrition?: Nutrition;
    /**
     * The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern.
     */
    pattern?: string;
    /**
     * The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
     */
    productDetail?: ProductDetail[];
    /**
     * The product highlights. For more information, see https://support.google.com/manufacturers/answer/10066942
     */
    productHighlight?: string[];
    /**
     * The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline.
     */
    productLine?: string;
    /**
     * The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname.
     */
    productName?: string;
    /**
     * The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage.
     */
    productPageUrl?: string;
    /**
     * The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype.
     */
    productType?: string[];
    /**
     * The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release.
     */
    releaseDate?: string;
    /**
     * Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865
     */
    richProductContent?: string[];
    /**
     * The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent.
     */
    scent?: string;
    /**
     * The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size.
     */
    size?: string;
    /**
     * The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem.
     */
    sizeSystem?: string;
    /**
     * The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype.
     */
    sizeType?: string[];
    /**
     * A price.
     */
    suggestedRetailPrice?: Price;
    /**
     * The target client id. Should only be used in the accounts of the data partners. For more information, see https://support.google.com/manufacturers/answer/10857344
     */
    targetClientId?: string;
    /**
     * The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme.
     */
    theme?: string;
    /**
     * The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title.
     */
    title?: string;
    /**
     * The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video.
     */
    videoLink?: string[];
}
