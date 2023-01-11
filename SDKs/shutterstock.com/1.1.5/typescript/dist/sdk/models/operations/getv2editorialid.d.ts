import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV2EditorialIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetV2EditorialIdQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class GetV2EditorialIdSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetV2EditorialIdRequest extends SpeakeasyBase {
    pathParams: GetV2EditorialIdPathParams;
    queryParams: GetV2EditorialIdQueryParams;
    security: GetV2EditorialIdSecurity;
}
export declare class GetV2EditorialIdResponse extends SpeakeasyBase {
    contentType: string;
    editorialContent?: shared.EditorialContent;
    statusCode: number;
}
