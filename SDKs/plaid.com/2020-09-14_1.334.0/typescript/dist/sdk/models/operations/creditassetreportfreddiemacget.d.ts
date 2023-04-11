import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreditAssetReportFreddieMacGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    assetReportFreddieGetResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
