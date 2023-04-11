import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSchemaServerList: readonly ["https://events.twilio.com"];
export declare class FetchSchemaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSchemaRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
     */
    id: string;
}
export declare class FetchSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1Schema?: shared.EventsV1Schema;
}
