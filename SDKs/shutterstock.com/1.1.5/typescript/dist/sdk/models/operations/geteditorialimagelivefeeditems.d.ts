import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialImageLivefeedItemsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEditorialImageLivefeedItemsQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class GetEditorialImageLivefeedItemsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialImageLivefeedItemsRequest extends SpeakeasyBase {
    pathParams: GetEditorialImageLivefeedItemsPathParams;
    queryParams: GetEditorialImageLivefeedItemsQueryParams;
    security: GetEditorialImageLivefeedItemsSecurity;
}
export declare class GetEditorialImageLivefeedItemsResponse extends SpeakeasyBase {
    contentType: string;
    editorialImageContentDataList?: any;
    statusCode: number;
}
