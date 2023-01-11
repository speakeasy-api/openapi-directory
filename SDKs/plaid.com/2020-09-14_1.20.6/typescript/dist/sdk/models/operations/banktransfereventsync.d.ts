import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferEventSyncRequest extends SpeakeasyBase {
    request: shared.BankTransferEventSyncRequest;
}
export declare class BankTransferEventSyncResponse extends SpeakeasyBase {
    bankTransferEventSyncResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
