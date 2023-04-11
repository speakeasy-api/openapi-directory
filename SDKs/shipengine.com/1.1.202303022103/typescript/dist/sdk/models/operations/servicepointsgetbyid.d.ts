import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServicePointsGetByIdRequest extends SpeakeasyBase {
    /**
     * Carrier code
     */
    carrierCode: string;
    /**
     * A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)
     *
     * @remarks
     *
     */
    countryCode: string;
    servicePointId: string;
}
export declare class ServicePointsGetByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getServicePointByIdResponseBody?: shared.GetServicePointByIdResponseBody;
}
