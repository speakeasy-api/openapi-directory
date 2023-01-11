import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrackCollectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetTrackCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}
export declare class GetTrackCollectionQueryParams extends SpeakeasyBase {
    embed?: GetTrackCollectionEmbedEnum[];
    shareCode?: string;
}
export declare class GetTrackCollectionSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetTrackCollectionRequest extends SpeakeasyBase {
    pathParams: GetTrackCollectionPathParams;
    queryParams: GetTrackCollectionQueryParams;
    security: GetTrackCollectionSecurity;
}
export declare class GetTrackCollectionResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
}
