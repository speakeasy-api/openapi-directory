import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LineStatusBySeverityRequest extends SpeakeasyBase {
    /**
     * The level of severity (eg: a number from 0 to 14)
     */
    severity: number;
}
export declare class LineStatusBySeverityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
