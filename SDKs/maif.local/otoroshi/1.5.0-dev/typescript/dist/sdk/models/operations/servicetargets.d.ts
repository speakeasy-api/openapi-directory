import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceTargetsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceTargetsRequest extends SpeakeasyBase {
    /**
     * The service id
     */
    serviceId: string;
}
export declare class ServiceTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    targets?: shared.Target[];
}
