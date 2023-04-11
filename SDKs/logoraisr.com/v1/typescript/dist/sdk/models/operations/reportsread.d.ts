import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReportsReadRequest extends SpeakeasyBase {
    reportNumber: string;
}
export declare class ReportsReadResponse extends SpeakeasyBase {
    contentType: string;
    report?: shared.Report;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
