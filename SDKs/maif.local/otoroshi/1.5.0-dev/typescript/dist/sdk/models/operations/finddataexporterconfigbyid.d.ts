import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindDataExporterConfigByIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindDataExporterConfigByIdRequest extends SpeakeasyBase {
    /**
     * The data exporter config id
     */
    dataExporterConfigId: string;
}
export declare class FindDataExporterConfigByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
