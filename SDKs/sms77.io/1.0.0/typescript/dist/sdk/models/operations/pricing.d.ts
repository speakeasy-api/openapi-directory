import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PricingRequest extends SpeakeasyBase {
    /**
     * The countries ISO code to get pricings for. Allowed values are de, fr, at. Omit to show pricings for all channels.
     */
    country?: string;
    /**
     * Determines the response format. Allowed values are json and csv. The default value is json.
     */
    format?: string;
}
export declare class PricingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
