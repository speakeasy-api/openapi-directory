import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesIdRequest extends SpeakeasyBase {
    /**
     * id of service object
     */
    id: number;
}
export declare class GetSetupV1ServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
