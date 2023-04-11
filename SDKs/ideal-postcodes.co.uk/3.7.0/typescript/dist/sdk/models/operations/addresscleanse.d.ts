import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddressCleanseRequestBody extends SpeakeasyBase {
    /**
     * Freeform address input to cleanse
     *
     * @remarks
     *
     */
    query: string;
}
export declare class AddressCleanseRequest extends SpeakeasyBase {
    requestBody: AddressCleanseRequestBody;
    apiKey?: string;
}
export declare class AddressCleanseResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    /**
     * Success
     */
    cleanseResponse?: shared.CleanseResponse;
    contentType: string;
    /**
     * Rate Limited
     */
    rateLimitedResponse?: shared.RateLimitedResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
}
