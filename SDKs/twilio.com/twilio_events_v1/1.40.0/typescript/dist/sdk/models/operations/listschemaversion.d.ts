import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSchemaVersionServerList: readonly ["https://events.twilio.com"];
export declare class ListSchemaVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSchemaVersionRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
     */
    id: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListSchemaVersionListSchemaVersionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListSchemaVersionListSchemaVersionResponse extends SpeakeasyBase {
    meta?: ListSchemaVersionListSchemaVersionResponseMeta;
    schemaVersions?: shared.EventsV1SchemaSchemaVersion[];
}
export declare class ListSchemaVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSchemaVersionResponse?: ListSchemaVersionListSchemaVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
