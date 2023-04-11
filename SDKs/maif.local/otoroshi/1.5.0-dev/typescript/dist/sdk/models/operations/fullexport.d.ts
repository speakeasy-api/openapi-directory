import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FullExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    importExport?: shared.ImportExport;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
