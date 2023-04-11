import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetProfitLossReportRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetProfitLossReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordProfitLossModel?: shared.LandlordProfitLossModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
