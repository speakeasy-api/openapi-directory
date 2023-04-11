import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchServiceRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The service id
     */
    serviceId: string;
}
export declare class PatchServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    service?: shared.Service;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
