import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferListRequest extends SpeakeasyBase {
    request: shared.BankTransferListRequest;
}
export declare class BankTransferListResponse extends SpeakeasyBase {
    bankTransferListResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
