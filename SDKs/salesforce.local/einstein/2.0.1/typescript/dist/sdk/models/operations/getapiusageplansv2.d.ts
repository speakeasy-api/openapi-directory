import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiUsagePlansV2Response extends SpeakeasyBase {
    /**
     * api usage
     */
    apiUsageList?: shared.ApiUsageList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
