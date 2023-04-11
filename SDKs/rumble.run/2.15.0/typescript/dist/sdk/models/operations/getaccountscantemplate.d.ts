import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountScanTemplateSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountScanTemplateRequest extends SpeakeasyBase {
    /**
     * UUID of the scan template to retrieve
     */
    scanTemplateId: string;
}
export declare class GetAccountScanTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * scan template
     */
    scanTemplate?: shared.ScanTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
