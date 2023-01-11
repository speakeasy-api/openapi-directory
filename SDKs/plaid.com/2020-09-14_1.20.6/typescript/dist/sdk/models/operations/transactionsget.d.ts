import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TransactionsGetRequest extends SpeakeasyBase {
    request: shared.TransactionsGetRequest;
}
export declare class TransactionsGetResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
    transactionsGetResponse?: Record<string, any>;
}
