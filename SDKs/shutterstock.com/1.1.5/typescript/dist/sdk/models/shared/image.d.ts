import { SpeakeasyBase } from "../../../internal/utils";
import { ImageAssets } from "./imageassets";
import { Category } from "./category";
import { Contributor } from "./contributor";
import { ModelRelease } from "./modelrelease";
import { Model } from "./model";
/**
 * Information about an image
**/
export declare class Image extends SpeakeasyBase {
    addedDate?: Date;
    affiliateUrl?: string;
    aspect?: number;
    assets?: ImageAssets;
    categories?: Category[];
    contributor: Contributor;
    description?: string;
    hasModelRelease?: boolean;
    hasPropertyRelease?: boolean;
    id: string;
    imageType?: string;
    isAdult?: boolean;
    isEditorial?: boolean;
    isIllustration?: boolean;
    keywords?: string[];
    mediaType: string;
    modelReleases?: ModelRelease[];
    models?: Model[];
    releases?: string[];
    url?: string;
}
