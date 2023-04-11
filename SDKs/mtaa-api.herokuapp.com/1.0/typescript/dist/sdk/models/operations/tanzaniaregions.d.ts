import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TanzaniaRegionsRequest extends SpeakeasyBase {
    /**
     * Country name in lowercase eg (Tanzania)
     */
    country: string;
}
export declare class TanzaniaRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
