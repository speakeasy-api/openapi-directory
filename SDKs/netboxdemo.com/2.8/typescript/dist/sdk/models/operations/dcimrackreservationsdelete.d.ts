import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimRackReservationsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rack reservation.
     */
    id: number;
}
export declare class DcimRackReservationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
