import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletebulkDataExporterConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Status
 */
export declare enum DeletebulkDataExporterConfig200ApplicationJSONStatusEnum {
    TwoHundred = "200"
}
/**
 * The bulk response
 */
export declare class DeletebulkDataExporterConfig200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether the action was carried out correctly or not
     */
    deleted?: boolean;
    /**
     * Data exporter id
     */
    id?: boolean;
    /**
     * Status
     */
    status?: DeletebulkDataExporterConfig200ApplicationJSONStatusEnum;
}
export declare class DeletebulkDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    deletebulkDataExporterConfig200ApplicationJSONObjects?: DeletebulkDataExporterConfig200ApplicationJSON[];
}
