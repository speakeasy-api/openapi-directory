import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBankAccountPathParams extends SpeakeasyBase {
    applicationId: string;
    bankAccountId: string;
    version: string;
}
export declare class DeleteBankAccountRequest extends SpeakeasyBase {
    pathParams: DeleteBankAccountPathParams;
}
export declare class DeleteBankAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
