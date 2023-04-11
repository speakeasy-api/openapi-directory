import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The absence period was created successfully
 */
export declare class PostCompanyTimeOffs201ApplicationJSON extends SpeakeasyBase {
    data?: shared.CreateTimeOffPeriodResponse;
}
export declare class PostCompanyTimeOffsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The absence period was created successfully
     */
    postCompanyTimeOffs201ApplicationJSONObject?: PostCompanyTimeOffs201ApplicationJSON;
}
