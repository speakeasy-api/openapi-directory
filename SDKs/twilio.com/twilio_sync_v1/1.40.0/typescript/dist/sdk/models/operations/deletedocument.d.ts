import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDocumentServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteDocumentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDocumentRequest extends SpeakeasyBase {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the Document resource to delete. Can be the Document resource's `sid` or its `unique_name`.
     */
    sid: string;
}
export declare class DeleteDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
