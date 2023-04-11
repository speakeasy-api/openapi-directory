import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQueryResponseRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The query object to be executed against the application data.
     */
    query: shared.Query;
}
export declare class GetQueryResponseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The result of the query execution
     */
    getQueryResponse200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
