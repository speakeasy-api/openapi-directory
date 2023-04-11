import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssetReportAuditCopyGetResponse extends SpeakeasyBase {
    /**
     * OK
     */
    assetReportGetResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
