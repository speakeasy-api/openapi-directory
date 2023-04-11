import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteScheduledPickupRequest extends SpeakeasyBase {
    pickupId: string;
}
export declare class DeleteScheduledPickupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Return the `pickup_id` of the scheduled pickup that was successfully deleted
     *
     * @remarks
     *
     */
    deletePickupByIdResponseBody?: shared.DeletePickupByIdResponseBody;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
