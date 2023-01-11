import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialImageLivefeedListQueryParams extends SpeakeasyBase {
    country: string;
    page?: number;
    perPage?: number;
}
export declare class GetEditorialImageLivefeedListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialImageLivefeedListRequest extends SpeakeasyBase {
    queryParams: GetEditorialImageLivefeedListQueryParams;
    security: GetEditorialImageLivefeedListSecurity;
}
export declare class GetEditorialImageLivefeedListResponse extends SpeakeasyBase {
    contentType: string;
    editorialImageLivefeedList?: shared.EditorialImageLivefeedList;
    statusCode: number;
}
