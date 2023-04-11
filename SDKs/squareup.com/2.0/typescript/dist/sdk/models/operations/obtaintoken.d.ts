import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ObtainTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    obtainTokenResponse?: shared.ObtainTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
