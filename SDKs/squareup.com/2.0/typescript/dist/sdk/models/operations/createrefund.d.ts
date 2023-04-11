import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateRefundSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateRefundRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    v1CreateRefundRequest: shared.V1CreateRefundRequest;
    /**
     * The ID of the original payment's associated location.
     */
    locationId: string;
}
export declare class CreateRefundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Refund?: shared.V1Refund;
}
