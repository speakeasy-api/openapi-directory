import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSchemaServerList: readonly ["https://events.twilio.com"];
export declare class FetchSchemaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FetchSchemaSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSchemaRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSchemaPathParams;
    security: FetchSchemaSecurity;
}
export declare class FetchSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1Schema?: shared.EventsV1Schema;
}
