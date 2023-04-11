import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAccountScanTemplateSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateAccountScanTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * scan template
     */
    scanTemplate?: shared.ScanTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
