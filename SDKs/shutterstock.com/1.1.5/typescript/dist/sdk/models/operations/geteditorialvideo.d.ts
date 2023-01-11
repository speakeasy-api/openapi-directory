import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialVideoPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEditorialVideoQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class GetEditorialVideoSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialVideoRequest extends SpeakeasyBase {
    pathParams: GetEditorialVideoPathParams;
    queryParams: GetEditorialVideoQueryParams;
    security: GetEditorialVideoSecurity;
}
export declare class GetEditorialVideoResponse extends SpeakeasyBase {
    contentType: string;
    editorialVideoContent?: shared.EditorialVideoContent;
    statusCode: number;
}
