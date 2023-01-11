import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchRendersQueryParams extends SpeakeasyBase {
    id: string[];
}
export declare class FetchRendersSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class FetchRendersRequest extends SpeakeasyBase {
    queryParams: FetchRendersQueryParams;
    security: FetchRendersSecurity;
}
export declare class FetchRendersResponse extends SpeakeasyBase {
    audioRendersListResults?: any;
    contentType: string;
    statusCode: number;
}
