import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountsGetRequest extends SpeakeasyBase {
    request: shared.AccountsGetRequest;
}
export declare class AccountsGetResponse extends SpeakeasyBase {
    accountsGetResponse?: Record<string, any>;
    contentType: string;
    error?: Record<string, any>;
    statusCode: number;
}
