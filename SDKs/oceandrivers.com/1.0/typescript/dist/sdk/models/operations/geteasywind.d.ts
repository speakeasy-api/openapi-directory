import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEasywindRequest extends SpeakeasyBase {
    /**
     * currently: 'EW013'|'EW008'
     */
    easywindId: string;
    /**
     * Period of time to get the data latestdata|latesthour|latestday
     */
    period: string;
}
export declare class GetEasywindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
