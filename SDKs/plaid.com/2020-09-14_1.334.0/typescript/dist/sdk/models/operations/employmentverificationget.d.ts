import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EmploymentVerificationGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    employmentVerificationGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
