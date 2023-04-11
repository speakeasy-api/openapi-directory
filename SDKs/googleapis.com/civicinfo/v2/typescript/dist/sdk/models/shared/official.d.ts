import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { GeocodingSummary } from "./geocodingsummary";
import { SimpleAddressType } from "./simpleaddresstype";
/**
 * Information about a person holding an elected office.
 */
export declare class Official extends SpeakeasyBase {
    /**
     * Addresses at which to contact the official.
     */
    address?: SimpleAddressType[];
    /**
     * A list of known (social) media channels for this official.
     */
    channels?: Channel[];
    /**
     * The direct email addresses for the official.
     */
    emails?: string[];
    /**
     * Detailed summary about the official's address's geocoding
     */
    geocodingSummaries?: GeocodingSummary[];
    /**
     * The official's name.
     */
    name?: string;
    /**
     * The full name of the party the official belongs to.
     */
    party?: string;
    /**
     * The official's public contact phone numbers.
     */
    phones?: string[];
    /**
     * A URL for a photo of the official.
     */
    photoUrl?: string;
    /**
     * The official's public website URLs.
     */
    urls?: string[];
}
