import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPickupByIdRequest extends SpeakeasyBase {
    pickupId: string;
}
export declare class GetPickupByIdResponse extends SpeakeasyBase {
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
    getPickupByIdResponseBody?: shared.GetPickupByIdResponseBodyOutput;
}
