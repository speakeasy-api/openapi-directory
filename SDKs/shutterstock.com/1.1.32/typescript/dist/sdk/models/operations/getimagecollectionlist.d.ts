import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImageCollectionListSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare enum GetImageCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetImageCollectionListRequest extends SpeakeasyBase {
    /**
     * Which sharing information to include in the response, such as a URL to the collection
     */
    embed?: GetImageCollectionListEmbedEnum[];
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
}
export declare class GetImageCollectionListResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionDataList?: shared.CollectionDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
