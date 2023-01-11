import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferCancelRequest extends SpeakeasyBase {
    request: shared.BankTransferCancelRequest;
}
export declare class BankTransferCancelResponse extends SpeakeasyBase {
    bankTransferCancelResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
