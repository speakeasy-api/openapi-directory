import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ServicesIdBlockRequest extends SpeakeasyBase {
    serviceBlockInputModel?: shared.ServiceBlockInputModel;
    /**
     * id of service object
     */
    id: string;
}
export declare class PostSetupV1ServicesIdBlockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceBlockViewModel?: shared.ServiceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
