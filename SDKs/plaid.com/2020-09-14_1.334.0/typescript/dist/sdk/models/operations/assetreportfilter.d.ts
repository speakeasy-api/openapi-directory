import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssetReportFilterResponse extends SpeakeasyBase {
    /**
     * OK
     */
    assetReportFilterResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
