import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSyncStreamServerList: readonly ["https://sync.twilio.com"];
export declare class CreateSyncStreamSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSyncStreamCreateSyncStreamRequest extends SpeakeasyBase {
    /**
     * How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Stream expires and is deleted (time-to-live).
     */
    ttl?: number;
    /**
     * An application-defined string that uniquely identifies the resource. This value must be unique within its Service and it can be up to 320 characters long. The `unique_name` value can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
}
export declare class CreateSyncStreamRequest extends SpeakeasyBase {
    requestBody?: CreateSyncStreamCreateSyncStreamRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new Stream in.
     */
    serviceSid: string;
}
export declare class CreateSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    syncV1ServiceSyncStream?: shared.SyncV1ServiceSyncStream;
}
