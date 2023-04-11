import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveNearEarthObjectFeedRequest extends SpeakeasyBase {
    /**
     * detailed
     */
    detailed?: boolean;
    /**
     * End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date
     */
    endDate?: string;
    /**
     * Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)
     */
    startDate?: string;
}
export declare class RetrieveNearEarthObjectFeedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nearEarthObjectList?: shared.NearEarthObjectList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
