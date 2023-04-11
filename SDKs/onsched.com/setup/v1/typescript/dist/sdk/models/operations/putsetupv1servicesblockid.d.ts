import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ServicesBlockIdRequest extends SpeakeasyBase {
    /**
     * Service Block update model
     */
    serviceBlockUpdateModel?: shared.ServiceBlockUpdateModel;
    /**
     * id of serviceBlock object
     */
    id: string;
}
export declare class PutSetupV1ServicesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceBlockViewModel?: shared.ServiceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
