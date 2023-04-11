import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePDFRequest extends SpeakeasyBase {
    /**
     * ID of the check
     */
    checkId: string;
}
export declare class CreatePDFResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
