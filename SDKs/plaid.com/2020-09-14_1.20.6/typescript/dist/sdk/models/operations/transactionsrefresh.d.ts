import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransactionsRefreshRequest extends SpeakeasyBase {
    request: shared.TransactionsRefreshRequest;
}
export declare class TransactionsRefreshResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
    transactionsRefreshResponse?: shared.TransactionsRefreshResponse;
}
