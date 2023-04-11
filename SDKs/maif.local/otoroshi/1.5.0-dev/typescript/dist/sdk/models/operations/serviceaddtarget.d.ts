import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceAddTargetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceAddTargetRequest extends SpeakeasyBase {
    target?: shared.Target;
    /**
     * The service id
     */
    serviceId: string;
}
export declare class ServiceAddTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    targets?: shared.Target[];
}
