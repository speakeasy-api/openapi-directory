import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOneServiceRequest extends SpeakeasyBase {
    /**
     * The ID of the service.
     */
    serviceId: string;
}
export declare class GetOneServiceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
