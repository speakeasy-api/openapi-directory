import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountScanTemplatesSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountScanTemplatesRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetAccountScanTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * array of scan templates
     */
    scanTemplates?: shared.ScanTemplate[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
