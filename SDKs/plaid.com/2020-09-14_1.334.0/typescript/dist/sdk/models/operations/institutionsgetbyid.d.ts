import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InstitutionsGetByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    institutionsGetByIdResponse?: Record<string, any>;
    /**
     * Error response
     */
    plaidError?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
