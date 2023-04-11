import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServiceByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetServiceByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the service
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
