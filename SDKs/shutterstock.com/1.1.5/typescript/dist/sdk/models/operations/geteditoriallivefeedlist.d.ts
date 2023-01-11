import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEditorialLivefeedListQueryParams extends SpeakeasyBase {
    country: string;
    page?: number;
    perPage?: number;
}
export declare class GetEditorialLivefeedListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetEditorialLivefeedListRequest extends SpeakeasyBase {
    queryParams: GetEditorialLivefeedListQueryParams;
    security: GetEditorialLivefeedListSecurity;
}
export declare class GetEditorialLivefeedListResponse extends SpeakeasyBase {
    contentType: string;
    editorialLivefeedList?: shared.EditorialLivefeedList;
    statusCode: number;
}
