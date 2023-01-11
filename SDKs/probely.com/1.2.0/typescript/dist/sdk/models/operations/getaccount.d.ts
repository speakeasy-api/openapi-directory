import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccount401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    getAccount401ApplicationJSONObject?: GetAccount401ApplicationJson;
}
