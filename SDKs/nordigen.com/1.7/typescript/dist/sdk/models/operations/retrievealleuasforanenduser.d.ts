import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveAllEuAsForAnEndUserQueryParams extends SpeakeasyBase {
    enduserId: string;
    limit?: number;
    offset?: number;
}
export declare class RetrieveAllEuAsForAnEndUserRequest extends SpeakeasyBase {
    queryParams: RetrieveAllEuAsForAnEndUserQueryParams;
}
export declare class RetrieveAllEuAsForAnEndUserResponse extends SpeakeasyBase {
    contentType: string;
    paginatedEndUserAgreementList?: shared.PaginatedEndUserAgreementList;
    statusCode: number;
}
