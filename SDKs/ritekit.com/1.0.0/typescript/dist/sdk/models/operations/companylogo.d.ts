import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyLogoRequest extends SpeakeasyBase {
    /**
     * URL of the company
     */
    domain: string;
}
export declare class CompanyLogoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
