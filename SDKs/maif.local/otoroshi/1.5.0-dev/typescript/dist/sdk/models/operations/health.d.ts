import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HealthResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    otoroshiHealth?: shared.OtoroshiHealth;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
