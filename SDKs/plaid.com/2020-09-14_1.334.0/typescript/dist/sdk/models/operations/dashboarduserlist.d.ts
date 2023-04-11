import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardUserListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    dashboardUserListResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
