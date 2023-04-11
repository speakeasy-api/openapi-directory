import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveNEOFeedTodayRequest extends SpeakeasyBase {
    /**
     * detailed
     */
    detailed?: boolean;
}
export declare class RetrieveNEOFeedTodayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nearEarthObjectList?: shared.NearEarthObjectList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
