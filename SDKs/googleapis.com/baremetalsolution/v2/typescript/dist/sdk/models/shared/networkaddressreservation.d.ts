import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reservation of one or more addresses in a network.
 */
export declare class NetworkAddressReservation extends SpeakeasyBase {
    /**
     * The last address of this reservation block, inclusive. I.e., for cases when reservations are only single addresses, end_address and start_address will be the same. Must be specified as a single IPv4 address, e.g. 10.1.2.2.
     */
    endAddress?: string;
    /**
     * A note about this reservation, intended for human consumption.
     */
    note?: string;
    /**
     * The first address of this reservation block. Must be specified as a single IPv4 address, e.g. 10.1.2.2.
     */
    startAddress?: string;
}
