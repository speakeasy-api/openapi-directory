import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportsStopsRequest extends SpeakeasyBase {
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
}
export declare class GetReportsStopsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    reportStops?: shared.ReportStops[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
