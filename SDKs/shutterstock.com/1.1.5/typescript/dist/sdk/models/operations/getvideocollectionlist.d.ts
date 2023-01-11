import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetVideoCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetVideoCollectionListQueryParams extends SpeakeasyBase {
    embed?: GetVideoCollectionListEmbedEnum[];
    page?: number;
    perPage?: number;
}
export declare class GetVideoCollectionListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetVideoCollectionListRequest extends SpeakeasyBase {
    queryParams: GetVideoCollectionListQueryParams;
    security: GetVideoCollectionListSecurity;
}
export declare class GetVideoCollectionListResponse extends SpeakeasyBase {
    collectionDataList?: any;
    contentType: string;
    statusCode: number;
}
