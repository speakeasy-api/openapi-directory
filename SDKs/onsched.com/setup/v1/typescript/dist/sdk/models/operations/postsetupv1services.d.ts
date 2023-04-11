import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
