import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssetReportCreateResponse extends SpeakeasyBase {
    /**
     * OK
     */
    assetReportCreateResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
