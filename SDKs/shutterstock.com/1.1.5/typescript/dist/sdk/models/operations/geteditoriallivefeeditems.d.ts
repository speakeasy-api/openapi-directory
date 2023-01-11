import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialLivefeedItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEditorialLivefeedItemsQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class GetEditorialLivefeedItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialLivefeedItemsRequest extends SpeakeasyBase {
    pathParams: GetEditorialLivefeedItemsPathParams;
    queryParams: GetEditorialLivefeedItemsQueryParams;
    security: GetEditorialLivefeedItemsSecurity;
}
export declare class GetEditorialLivefeedItemsResponse extends SpeakeasyBase {
    contentType: string;
    editorialContentDataList?: any;
    statusCode: number;
}
