import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RoadDisruptedStreetsRequest extends SpeakeasyBase {
    /**
     * Optional, The end time to filter on.
     */
    endDate: Date;
    /**
     * Optional, the start time to filter on.
     */
    startDate: Date;
}
export declare class RoadDisruptedStreetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemObject?: Record<string, any>;
}
