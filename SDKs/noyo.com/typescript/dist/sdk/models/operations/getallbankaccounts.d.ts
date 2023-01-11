import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllBankAccountsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetAllBankAccountsRequest extends SpeakeasyBase {
    pathParams: GetAllBankAccountsPathParams;
}
export declare class GetAllBankAccountsResponse extends SpeakeasyBase {
    bankAccountPaginatedResult?: shared.BankAccountPaginatedResult;
    contentType: string;
    statusCode: number;
}
