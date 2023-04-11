import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardUserGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    dashboardUserGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
