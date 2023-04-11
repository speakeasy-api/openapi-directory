import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateBulkDataExporterConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Status
 */
export declare enum UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum {
    TwoHundred = "200"
}
/**
 * The bulk response
 */
export declare class UpdateBulkDataExporterConfig200ApplicationJSON extends SpeakeasyBase {
    /**
     * Data exporter id
     */
    id?: boolean;
    /**
     * Status
     */
    status?: UpdateBulkDataExporterConfig200ApplicationJSONStatusEnum;
    /**
     * Whether the action was carried out correctly or not
     */
    updated?: boolean;
}
export declare class UpdateBulkDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateBulkDataExporterConfig200ApplicationJSONObjects?: UpdateBulkDataExporterConfig200ApplicationJSON[];
}
