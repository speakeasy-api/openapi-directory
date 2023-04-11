import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDataExporterConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
