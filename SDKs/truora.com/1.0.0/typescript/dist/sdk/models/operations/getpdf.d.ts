import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPDFRequest extends SpeakeasyBase {
    /**
     * ID of the check
     */
    checkId: string;
    /**
     * Used to specify the language for the PDF, if not specified the PDF will be downloaded in Spanish.
     */
    lang?: string;
}
export declare class GetPDFResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
