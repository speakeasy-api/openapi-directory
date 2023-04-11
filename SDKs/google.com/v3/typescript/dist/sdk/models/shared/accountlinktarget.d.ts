import { SpeakeasyBase } from "../../../internal/utils";
import { HotelList } from "./hotellist";
/**
 * Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified.
 */
export declare class AccountLinkTarget extends SpeakeasyBase {
    /**
     * True if all properties under the Hotel Center account are made available to the account link. The default is `false`.
     */
    allHotels?: boolean;
    /**
     * The properties in the Hotel Center account that can be managed with the Google Ads account.
     */
    hotelList?: HotelList;
}
