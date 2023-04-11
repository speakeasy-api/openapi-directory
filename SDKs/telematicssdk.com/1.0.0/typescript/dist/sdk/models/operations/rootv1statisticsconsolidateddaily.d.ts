import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RootV1StatisticsConsolidatedDailyRequest extends SpeakeasyBase {
    appId?: string;
    companyId?: string;
    deviceToken?: string;
    endDate?: string;
    instanceId?: string;
    startDate?: string;
    tag?: string;
}
export declare class RootV1StatisticsConsolidatedDailyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
