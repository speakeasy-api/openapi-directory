import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchDataExporterConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchDataExporterConfigRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The data exporter config id
     */
    dataExporterConfigId: string;
}
export declare class PatchDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
