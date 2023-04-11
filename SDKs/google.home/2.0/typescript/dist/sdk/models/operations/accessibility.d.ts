import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccessibilityResponse extends SpeakeasyBase {
    contentType: string;
    getcurrentvalues?: shared.Getcurrentvalues;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
