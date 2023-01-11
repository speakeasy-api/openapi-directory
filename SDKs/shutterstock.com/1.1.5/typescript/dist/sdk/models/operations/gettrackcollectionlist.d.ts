import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTrackCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetTrackCollectionListQueryParams extends SpeakeasyBase {
    embed?: GetTrackCollectionListEmbedEnum[];
    page?: number;
    perPage?: number;
}
export declare class GetTrackCollectionListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetTrackCollectionListRequest extends SpeakeasyBase {
    queryParams: GetTrackCollectionListQueryParams;
    security: GetTrackCollectionListSecurity;
}
export declare class GetTrackCollectionListResponse extends SpeakeasyBase {
    collectionDataList?: any;
    contentType: string;
    statusCode: number;
}
