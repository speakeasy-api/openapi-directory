import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferMigrateAccountRequest extends SpeakeasyBase {
    request: shared.BankTransferMigrateAccountRequest;
}
export declare class BankTransferMigrateAccountResponse extends SpeakeasyBase {
    bankTransferMigrateAccountResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
