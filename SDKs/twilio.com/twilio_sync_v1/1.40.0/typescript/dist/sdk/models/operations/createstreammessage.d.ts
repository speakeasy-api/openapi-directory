import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateStreamMessageServerList: readonly ["https://sync.twilio.com"];
export declare class CreateStreamMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateStreamMessageCreateStreamMessageRequest extends SpeakeasyBase {
    /**
     * A JSON string that represents an arbitrary, schema-less object that makes up the Stream Message body. Can be up to 4 KiB in length.
     */
    data: any;
}
export declare class CreateStreamMessageRequest extends SpeakeasyBase {
    requestBody?: CreateStreamMessageCreateStreamMessageRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new Stream Message in.
     */
    serviceSid: string;
    /**
     * The SID of the Sync Stream to create the new Stream Message resource for.
     */
    streamSid: string;
}
export declare class CreateStreamMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    syncV1ServiceSyncStreamStreamMessage?: shared.SyncV1ServiceSyncStreamStreamMessage;
}
