import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBankAccountPathParams extends SpeakeasyBase {
    applicationId: string;
    bankAccountId: string;
}
export declare class GetBankAccountRequest extends SpeakeasyBase {
    pathParams: GetBankAccountPathParams;
}
export declare class GetBankAccountResponse extends SpeakeasyBase {
    bankAccountResult?: shared.BankAccountResult;
    contentType: string;
    statusCode: number;
}
