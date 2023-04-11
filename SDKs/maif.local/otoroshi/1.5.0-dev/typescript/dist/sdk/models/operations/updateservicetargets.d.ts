import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateServiceTargetsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceTargetsRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The service id
     */
    serviceId: string;
}
export declare class UpdateServiceTargetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    targets?: shared.Target[];
}
