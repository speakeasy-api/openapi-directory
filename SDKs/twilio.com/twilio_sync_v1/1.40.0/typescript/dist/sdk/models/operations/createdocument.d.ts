import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDocumentServerList: readonly ["https://sync.twilio.com"];
export declare class CreateDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDocumentCreateDocumentRequest extends SpeakeasyBase {
    /**
     * A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length.
     */
    data?: any;
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (the Sync Document's time-to-live).
     */
    ttl?: number;
    /**
     * An application-defined string that uniquely identifies the Sync Document
     */
    uniqueName?: string;
}
export declare class CreateDocumentRequest extends SpeakeasyBase {
    requestBody?: CreateDocumentCreateDocumentRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new Document resource in.
     */
    serviceSid: string;
}
export declare class CreateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    syncV1ServiceDocument?: shared.SyncV1ServiceDocument;
}
