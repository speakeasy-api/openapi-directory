import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataExporterTemplateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DataExporterTemplateRequest extends SpeakeasyBase {
    /**
     * The data exporter config type
     */
    type?: string;
}
export declare class DataExporterTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
