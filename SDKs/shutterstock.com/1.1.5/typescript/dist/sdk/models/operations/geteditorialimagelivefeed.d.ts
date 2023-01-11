import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialImageLivefeedPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEditorialImageLivefeedQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class GetEditorialImageLivefeedSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialImageLivefeedRequest extends SpeakeasyBase {
    pathParams: GetEditorialImageLivefeedPathParams;
    queryParams: GetEditorialImageLivefeedQueryParams;
    security: GetEditorialImageLivefeedSecurity;
}
export declare class GetEditorialImageLivefeedResponse extends SpeakeasyBase {
    contentType: string;
    editorialImageLivefeed?: shared.EditorialImageLivefeed;
    statusCode: number;
}
