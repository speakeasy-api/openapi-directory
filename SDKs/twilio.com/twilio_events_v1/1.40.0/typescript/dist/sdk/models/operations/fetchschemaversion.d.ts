import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSchemaVersionServerList: readonly ["https://events.twilio.com"];
export declare class FetchSchemaVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSchemaVersionRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
     */
    id: string;
    /**
     * The version of the schema
     */
    schemaVersion: number;
}
export declare class FetchSchemaVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1SchemaSchemaVersion?: shared.EventsV1SchemaSchemaVersion;
}
