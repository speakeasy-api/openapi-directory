import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFindingPageRequest extends SpeakeasyBase {
    /**
     * Numeric ID of the scan to get findings
     */
    scanId: number;
}
export declare class GetFindingPageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    findings?: shared.Findings[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
