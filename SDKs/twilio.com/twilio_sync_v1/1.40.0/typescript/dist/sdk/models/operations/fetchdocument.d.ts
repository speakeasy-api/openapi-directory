import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDocumentServerList: readonly ["https://sync.twilio.com"];
export declare class FetchDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDocumentRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the Document resource to fetch. Can be the Document resource's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class FetchDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
