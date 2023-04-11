import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetEventByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the event
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
