import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ServicesIdRequest extends SpeakeasyBase {
    serviceUpdateModel?: shared.ServiceUpdateModel;
    id: string;
}
export declare class PutSetupV1ServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
