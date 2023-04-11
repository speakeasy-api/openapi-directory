import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindAllDataExportersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    dataExporterConfigs?: shared.DataExporterConfig[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
