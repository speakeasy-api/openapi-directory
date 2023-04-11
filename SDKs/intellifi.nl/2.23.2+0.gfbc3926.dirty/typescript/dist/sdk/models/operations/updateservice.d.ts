import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateServiceRequest extends SpeakeasyBase {
    /**
     * A JSON object containing service information
     */
    serviceInput: shared.ServiceInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
