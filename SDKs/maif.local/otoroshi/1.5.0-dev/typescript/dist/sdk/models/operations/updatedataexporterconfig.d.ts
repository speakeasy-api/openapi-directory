import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDataExporterConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDataExporterConfigRequest extends SpeakeasyBase {
    dataExporterConfig?: shared.DataExporterConfig;
    /**
     * The data exporter config id
     */
    dataExporterConfigId: string;
}
export declare class UpdateDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
