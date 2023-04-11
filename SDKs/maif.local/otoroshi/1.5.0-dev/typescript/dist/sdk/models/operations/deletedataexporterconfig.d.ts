import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDataExporterConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDataExporterConfigRequest extends SpeakeasyBase {
    /**
     * The data exporter config id
     */
    dataExporterConfigId: string;
}
export declare class DeleteDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
