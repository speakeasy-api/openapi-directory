import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ServicesIdRecoverRequest extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ServicesIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
