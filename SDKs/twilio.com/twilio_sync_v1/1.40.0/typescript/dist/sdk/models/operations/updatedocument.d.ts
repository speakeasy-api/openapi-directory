import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDocumentServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDocumentUpdateDocumentRequest extends SpeakeasyBase {
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length.
     */
    data?: any;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (time-to-live).
     */
    ttl?: number;
}
export declare class UpdateDocumentRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    requestBody?: UpdateDocumentUpdateDocumentRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Document resource to update. Can be the Document resource's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class UpdateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
