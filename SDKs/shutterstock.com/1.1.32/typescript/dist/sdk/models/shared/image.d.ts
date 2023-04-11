import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Contributor } from "./contributor";
import { ImageAssets } from "./imageassets";
import { Model } from "./model";
import { ModelRelease } from "./modelrelease";
/**
 * AI-powered insights about how the asset will perform for the objective and audience
 */
export declare class ImageInsights extends SpeakeasyBase {
    labels?: string[];
}
/**
 * Information about an image
 */
export declare class Image extends SpeakeasyBase {
    /**
     * Date that the image was added by the contributor
     */
    addedDate?: Date;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     */
    affiliateUrl?: string;
    /**
     * Aspect ratio of the image in decimal format, such as 0.6667
     */
    aspect?: number;
    /**
     * Information about the assets that are part of an image
     */
    assets?: ImageAssets;
    /**
     * Categories that this image is a part of
     */
    categories?: Category[];
    /**
     * Information about a contributor
     */
    contributor: Contributor;
    /**
     * Detailed description of the image
     */
    description?: string;
    /**
     * Indicates whether there are model releases for the image
     */
    hasModelRelease?: boolean;
    /**
     * Indicates whether there are property releases for the image
     */
    hasPropertyRelease?: boolean;
    /**
     * Image ID
     */
    id: string;
    /**
     * Type of image
     */
    imageType?: string;
    /**
     * AI-powered insights about how the asset will perform for the objective and audience
     */
    insights?: ImageInsights;
    /**
     * Whether or not this image contains adult content
     */
    isAdult?: boolean;
    /**
     * Whether or not this image is editorial content
     */
    isEditorial?: boolean;
    /**
     * Whether or not this image is an illustration
     */
    isIllustration?: boolean;
    /**
     * Keywords associated with the content of this image
     */
    keywords?: string[];
    /**
     * Media type of this image, should always be "image"
     */
    mediaType: string;
    /**
     * List of model releases
     */
    modelReleases?: ModelRelease[];
    /**
     * List of models
     */
    models?: Model[];
    /**
     * List of all releases of this image
     */
    releases?: string[];
    /**
     * Link to image information page; included only for certain accounts
     */
    url?: string;
}
