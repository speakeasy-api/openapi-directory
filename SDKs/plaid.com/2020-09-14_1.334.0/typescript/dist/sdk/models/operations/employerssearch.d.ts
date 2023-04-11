import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EmployersSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    employersSearchResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
