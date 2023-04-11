import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeaturedVideoCollectionSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * What information to include in the response, such as a URL to the collection
 */
export declare enum GetFeaturedVideoCollectionEmbedEnum {
    ShareUrl = "share_url"
}
export declare class GetFeaturedVideoCollectionRequest extends SpeakeasyBase {
    /**
     * What information to include in the response, such as a URL to the collection
     */
    embed?: GetFeaturedVideoCollectionEmbedEnum;
    /**
     * Collection ID
     */
    id: string;
}
export declare class GetFeaturedVideoCollectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    featuredCollection?: shared.FeaturedCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
