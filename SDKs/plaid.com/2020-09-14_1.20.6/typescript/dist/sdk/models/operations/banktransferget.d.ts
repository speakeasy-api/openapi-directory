import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankTransferGetRequest extends SpeakeasyBase {
    request: shared.BankTransferGetRequest;
}
export declare class BankTransferGetResponse extends SpeakeasyBase {
    bankTransferGetResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
