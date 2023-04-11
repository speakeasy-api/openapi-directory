import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
