import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAssets } from "./videoassets";
import { Category } from "./category";
import { Contributor } from "./contributor";
import { Model } from "./model";
/**
 * Information about a video
**/
export declare class Video extends SpeakeasyBase {
    addedDate?: Date;
    affiliateUrl?: string;
    aspect?: number;
    aspectRatio?: string;
    assets?: VideoAssets;
    categories?: Category[];
    contributor: Contributor;
    description?: string;
    duration?: number;
    hasModelRelease?: boolean;
    hasPropertyRelease?: boolean;
    id: string;
    isAdult?: boolean;
    isEditorial?: boolean;
    keywords?: string[];
    mediaType: string;
    models?: Model[];
    url?: string;
}
