import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferBalanceGetRequest extends SpeakeasyBase {
    request: shared.BankTransferBalanceGetRequest;
}
export declare class BankTransferBalanceGetResponse extends SpeakeasyBase {
    bankTransferBalanceGetResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
