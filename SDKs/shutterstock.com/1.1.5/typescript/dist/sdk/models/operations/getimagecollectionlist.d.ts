import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetImageCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetImageCollectionListQueryParams extends SpeakeasyBase {
    embed?: GetImageCollectionListEmbedEnum[];
    page?: number;
    perPage?: number;
}
export declare class GetImageCollectionListSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetImageCollectionListRequest extends SpeakeasyBase {
    queryParams: GetImageCollectionListQueryParams;
    security: GetImageCollectionListSecurity;
}
export declare class GetImageCollectionListResponse extends SpeakeasyBase {
    collectionDataList?: any;
    contentType: string;
    statusCode: number;
}
