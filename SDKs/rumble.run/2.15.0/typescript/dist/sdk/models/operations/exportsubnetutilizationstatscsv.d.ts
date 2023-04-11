import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportSubnetUtilizationStatsCSVSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportSubnetUtilizationStatsCSVRequest extends SpeakeasyBase {
    /**
     * an optional subnet mask size (ex:24)
     */
    mask?: string;
}
export declare class ExportSubnetUtilizationStatsCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * subnet utilization stats as csv
     */
    exportSubnetUtilizationStatsCSV200TextCSVBinaryString?: Uint8Array;
}
