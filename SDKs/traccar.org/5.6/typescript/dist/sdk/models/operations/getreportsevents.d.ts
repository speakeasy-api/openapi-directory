import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportsEventsRequest extends SpeakeasyBase {
    deviceId?: number[];
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    from: Date;
    groupId?: number[];
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    to: Date;
    /**
     * % can be used to return events of all types
     */
    type?: string[];
}
export declare class GetReportsEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    events?: shared.Event[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
