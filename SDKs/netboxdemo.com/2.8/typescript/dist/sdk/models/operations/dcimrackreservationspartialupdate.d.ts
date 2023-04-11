import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRackReservationsPartialUpdateRequest extends SpeakeasyBase {
    writableRackReservationInput: shared.WritableRackReservationInput;
    /**
     * A unique integer value identifying this rack reservation.
     */
    id: number;
}
export declare class DcimRackReservationsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackReservation?: shared.RackReservation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
