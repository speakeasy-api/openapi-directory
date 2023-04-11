import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateBulkDataExporterConfigsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Status
 */
export declare enum CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum {
    TwoHundredAndOne = "201"
}
/**
 * The bulk response
 */
export declare class CreateBulkDataExporterConfigs200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether the action was carried out correctly or not
     */
    created?: boolean;
    /**
     * Data exporter id
     */
    id?: boolean;
    /**
     * Status
     */
    status?: CreateBulkDataExporterConfigs200ApplicationJSONStatusEnum;
}
export declare class CreateBulkDataExporterConfigsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createBulkDataExporterConfigs200ApplicationJSONObjects?: CreateBulkDataExporterConfigs200ApplicationJSON[];
}
