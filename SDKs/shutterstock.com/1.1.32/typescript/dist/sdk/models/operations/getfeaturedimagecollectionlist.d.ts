import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeaturedImageCollectionListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Cover image size
 */
export declare enum GetFeaturedImageCollectionListAssetHintEnum {
    Onex = "1x",
    Twox = "2x"
}
/**
 * Which sharing information to include in the response, such as a URL to the collection
 */
export declare enum GetFeaturedImageCollectionListEmbedEnum {
    ShareUrl = "share_url"
}
export declare enum GetFeaturedImageCollectionListTypeEnum {
    Photo = "photo",
    Editorial = "editorial",
    Vector = "vector"
}
export declare class GetFeaturedImageCollectionListRequest extends SpeakeasyBase {
    /**
     * Cover image size
     */
    assetHint?: GetFeaturedImageCollectionListAssetHintEnum;
    /**
     * Which sharing information to include in the response, such as a URL to the collection
     */
    embed?: GetFeaturedImageCollectionListEmbedEnum;
    /**
     * The types of collections to return
     */
    type?: GetFeaturedImageCollectionListTypeEnum[];
}
export declare class GetFeaturedImageCollectionListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    featuredCollectionDataList?: shared.FeaturedCollectionDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
