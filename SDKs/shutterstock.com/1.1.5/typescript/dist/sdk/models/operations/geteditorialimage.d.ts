import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialImagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEditorialImageQueryParams extends SpeakeasyBase {
    country: string;
}
export declare class GetEditorialImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialImageRequest extends SpeakeasyBase {
    pathParams: GetEditorialImagePathParams;
    queryParams: GetEditorialImageQueryParams;
    security: GetEditorialImageSecurity;
}
export declare class GetEditorialImageResponse extends SpeakeasyBase {
    contentType: string;
    editorialContent?: shared.EditorialContent;
    statusCode: number;
}
