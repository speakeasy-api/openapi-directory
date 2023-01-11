import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferEventListRequest extends SpeakeasyBase {
    request: shared.BankTransferEventListRequest;
}
export declare class BankTransferEventListResponse extends SpeakeasyBase {
    bankTransferEventListResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
