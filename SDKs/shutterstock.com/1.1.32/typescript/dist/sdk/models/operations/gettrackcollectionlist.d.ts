import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackCollectionListSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare enum GetTrackCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetTrackCollectionListRequest extends SpeakeasyBase {
    /**
     * Which sharing information to include in the response, such as a URL to the collection
     */
    embed?: GetTrackCollectionListEmbedEnum[];
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
}
export declare class GetTrackCollectionListResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionDataList?: shared.CollectionDataList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
