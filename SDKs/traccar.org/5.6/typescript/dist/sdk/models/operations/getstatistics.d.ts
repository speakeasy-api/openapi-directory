import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatisticsRequest extends SpeakeasyBase {
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    from: Date;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    to: Date;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    statistics?: shared.Statistics[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
