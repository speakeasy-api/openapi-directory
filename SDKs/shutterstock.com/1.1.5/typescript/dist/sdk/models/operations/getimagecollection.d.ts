import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetImageCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetImageCollectionQueryParams extends SpeakeasyBase {
    embed?: GetImageCollectionEmbedEnum[];
    shareCode?: string;
}
export declare class GetImageCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetImageCollectionRequest extends SpeakeasyBase {
    pathParams: GetImageCollectionPathParams;
    queryParams: GetImageCollectionQueryParams;
    security: GetImageCollectionSecurity;
}
export declare class GetImageCollectionResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
}
