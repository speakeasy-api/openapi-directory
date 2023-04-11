import { SpeakeasyBase } from "../../../internal/utils";
import { Reservation } from "./reservation";
export declare class RegionCommitmentsUpdateReservationsRequest extends SpeakeasyBase {
    /**
     * A list of two reservations to transfer GPUs and local SSD between.
     */
    reservations?: Reservation[];
}
