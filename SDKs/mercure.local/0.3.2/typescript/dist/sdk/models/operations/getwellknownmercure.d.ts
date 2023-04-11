import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWellKnownMercureRequest extends SpeakeasyBase {
    /**
     * The last received event id, to retrieve missed events, takes precedence over the query parameter.
     */
    lastEventID?: string;
    /**
     * The last received event id, to retrieve missed events.
     */
    lastEventIDQueryParameter?: string;
    /**
     * The topic to get updates from, can be a URI template (RFC6570).
     */
    topic: string[];
}
export declare class GetWellKnownMercureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
