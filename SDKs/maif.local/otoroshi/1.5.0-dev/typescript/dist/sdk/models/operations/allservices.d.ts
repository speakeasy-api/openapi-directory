import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AllServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    services?: shared.Service[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
