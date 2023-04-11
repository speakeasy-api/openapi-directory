import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InitiateServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
