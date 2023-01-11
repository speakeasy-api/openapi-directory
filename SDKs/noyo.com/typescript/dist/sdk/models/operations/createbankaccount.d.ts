import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBankAccountPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateBankAccountRequest extends SpeakeasyBase {
    pathParams: CreateBankAccountPathParams;
    request: shared.BankAccountCreateRequest;
}
export declare class CreateBankAccountResponse extends SpeakeasyBase {
    bankAccountResult?: shared.BankAccountResult;
    contentType: string;
    statusCode: number;
}
