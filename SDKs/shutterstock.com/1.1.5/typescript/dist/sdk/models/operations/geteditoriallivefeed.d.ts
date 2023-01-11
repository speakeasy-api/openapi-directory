import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialLivefeedPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEditorialLivefeedQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class GetEditorialLivefeedSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialLivefeedRequest extends SpeakeasyBase {
    pathParams: GetEditorialLivefeedPathParams;
    queryParams: GetEditorialLivefeedQueryParams;
    security: GetEditorialLivefeedSecurity;
}
export declare class GetEditorialLivefeedResponse extends SpeakeasyBase {
    contentType: string;
    editorialLivefeed?: shared.EditorialLivefeed;
    statusCode: number;
}
