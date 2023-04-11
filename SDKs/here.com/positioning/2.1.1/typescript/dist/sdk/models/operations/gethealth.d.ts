import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHealthResponse extends SpeakeasyBase {
    /**
     * Health status
     */
    apiHealthStatus?: shared.ApiHealthStatus;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
