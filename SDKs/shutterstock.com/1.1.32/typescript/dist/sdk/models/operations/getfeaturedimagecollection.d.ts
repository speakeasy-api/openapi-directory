import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeaturedImageCollectionSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Cover image size
 */
export declare enum GetFeaturedImageCollectionAssetHintEnum {
    Onex = "1x",
    Twox = "2x"
}
/**
 * Which sharing information to include in the response, such as a URL to the collection
 */
export declare enum GetFeaturedImageCollectionEmbedEnum {
    ShareUrl = "share_url"
}
export declare class GetFeaturedImageCollectionRequest extends SpeakeasyBase {
    /**
     * Cover image size
     */
    assetHint?: GetFeaturedImageCollectionAssetHintEnum;
    /**
     * Which sharing information to include in the response, such as a URL to the collection
     */
    embed?: GetFeaturedImageCollectionEmbedEnum;
    /**
     * Collection ID
     */
    id: string;
}
export declare class GetFeaturedImageCollectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    featuredCollection?: shared.FeaturedCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
