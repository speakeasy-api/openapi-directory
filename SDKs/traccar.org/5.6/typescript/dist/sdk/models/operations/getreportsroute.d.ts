import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReportsRouteRequest extends SpeakeasyBase {
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
export declare class GetReportsRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    positions?: shared.Position[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
