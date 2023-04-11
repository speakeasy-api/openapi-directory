import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchBulkDataExporterConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Status
 */
export declare enum PatchBulkDataExporterConfig200ApplicationJSONStatusEnum {
    TwoHundred = "200"
}
/**
 * The bulk response
 */
export declare class PatchBulkDataExporterConfig200ApplicationJSON extends SpeakeasyBase {
    /**
     * Data exporter id
     */
    id?: boolean;
    /**
     * Status
     */
    status?: PatchBulkDataExporterConfig200ApplicationJSONStatusEnum;
    /**
     * Whether the action was carried out correctly or not
     */
    updated?: boolean;
}
export declare class PatchBulkDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    patchBulkDataExporterConfig200ApplicationJSONObjects?: PatchBulkDataExporterConfig200ApplicationJSON[];
}
