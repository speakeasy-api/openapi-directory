import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveAccountScanTemplateSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAccountScanTemplateRequest extends SpeakeasyBase {
    /**
     * UUID of the scan template to remove
     */
    scanTemplateId: string;
}
export declare class RemoveAccountScanTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * scan template
     */
    scanTemplate?: shared.ScanTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
