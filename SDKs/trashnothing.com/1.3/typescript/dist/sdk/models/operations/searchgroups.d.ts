import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchGroupsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class SearchGroupsRequest extends SpeakeasyBase {
    /**
     * Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
     *
     * @remarks
     *
     */
    country?: string;
    /**
     * When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.
     *
     * @remarks
     *
     */
    distance?: number;
    /**
     * Find groups near the given latitude and longitude.
     */
    latitude?: number;
    /**
     * Find groups near the given latitude and longitude.
     */
    longitude?: number;
    /**
     * Find groups that have the given text somewhere in their name (case insensitive).
     */
    name?: string;
    /**
     * The page of groups to return.
     */
    page?: number;
    /**
     * The number of groups to return per page (must be >= 1 and <= 100).
     */
    perPage?: number;
    /**
     * Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.
     *
     * @remarks
     *
     */
    postalCode?: string;
    /**
     * For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv
     *
     * @remarks
     *
     */
    region?: string;
}
/**
 * The groups and paging data.
 */
export declare class SearchGroups200ApplicationJSON extends SpeakeasyBase {
    /**
     * The index of the last group being returned (an integer between start_index and num_groups).
     */
    endIndex?: number;
    groups?: shared.Group[];
    /**
     * The total number of groups available.
     */
    numGroups?: number;
    /**
     * The total number of pages available.
     */
    numPages?: number;
    /**
     * The page number of the groups being returned.
     */
    page?: number;
    /**
     * The number of groups being returned per page.
     */
    perPage?: number;
    /**
     * The index of the first group being returned (an integer between 1 and num_groups).
     */
    startIndex?: number;
}
export declare class SearchGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The groups and paging data.
     */
    searchGroups200ApplicationJSONObject?: SearchGroups200ApplicationJSON;
}
