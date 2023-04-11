import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchCatalogSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare enum SearchCatalogAssetTypeEnum {
    Image = "image",
    Video = "video",
    Audio = "audio",
    Elements = "elements",
    EditorialImage = "editorial-image",
    EditorialVideo = "editorial-video"
}
/**
 * Sort by
 */
export declare enum SearchCatalogSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class SearchCatalogRequest extends SpeakeasyBase {
    /**
     * Filter by asset type
     */
    assetType?: SearchCatalogAssetTypeEnum[];
    /**
     * Filter by collection id
     */
    collectionId?: string[];
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * One or more search terms separated by spaces
     */
    query?: string;
    /**
     * Sort by
     */
    sort?: SearchCatalogSortEnum;
}
export declare class SearchCatalogResponse extends SpeakeasyBase {
    /**
     * OK
     */
    catalogCollectionItemDataList?: shared.CatalogCollectionItemDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
