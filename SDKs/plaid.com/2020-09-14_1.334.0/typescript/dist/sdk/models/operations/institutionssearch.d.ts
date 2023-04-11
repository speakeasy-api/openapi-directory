import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InstitutionsSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    institutionsSearchResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
