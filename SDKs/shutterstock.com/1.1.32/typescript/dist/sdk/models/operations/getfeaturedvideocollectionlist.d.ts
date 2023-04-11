import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeaturedVideoCollectionListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * What information to include in the response, such as a URL to the collection
 */
export declare enum GetFeaturedVideoCollectionListEmbedEnum {
    ShareUrl = "share_url"
}
export declare class GetFeaturedVideoCollectionListRequest extends SpeakeasyBase {
    /**
     * What information to include in the response, such as a URL to the collection
     */
    embed?: GetFeaturedVideoCollectionListEmbedEnum;
}
export declare class GetFeaturedVideoCollectionListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    featuredCollectionDataList?: shared.FeaturedCollectionDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
