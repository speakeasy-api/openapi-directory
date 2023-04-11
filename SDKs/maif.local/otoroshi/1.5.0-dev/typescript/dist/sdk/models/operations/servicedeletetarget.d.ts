import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceDeleteTargetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceDeleteTargetRequest extends SpeakeasyBase {
    /**
     * The service id
     */
    serviceId: string;
}
export declare class ServiceDeleteTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    targets?: shared.Target[];
}
