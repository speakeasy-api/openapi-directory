import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AvailableServicesResponse extends SpeakeasyBase {
    /**
     * Available services
     */
    apiServicesOut?: shared.APIServicesOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
