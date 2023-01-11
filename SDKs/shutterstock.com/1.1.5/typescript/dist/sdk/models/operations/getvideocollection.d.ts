import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetVideoCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetVideoCollectionQueryParams extends SpeakeasyBase {
    embed?: GetVideoCollectionEmbedEnum[];
    shareCode?: string;
}
export declare class GetVideoCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetVideoCollectionRequest extends SpeakeasyBase {
    pathParams: GetVideoCollectionPathParams;
    queryParams: GetVideoCollectionQueryParams;
    security: GetVideoCollectionSecurity;
}
export declare class GetVideoCollectionResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
}
