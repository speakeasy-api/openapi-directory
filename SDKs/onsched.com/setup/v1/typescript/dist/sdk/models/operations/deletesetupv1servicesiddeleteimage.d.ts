import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ServicesIdDeleteimageRequest extends SpeakeasyBase {
    /**
     * id of service object
     */
    id: string;
}
export declare class DeleteSetupV1ServicesIdDeleteimageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
