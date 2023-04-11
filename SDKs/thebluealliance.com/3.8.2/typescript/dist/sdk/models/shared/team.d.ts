import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Team extends SpeakeasyBase {
    /**
     * Will be NULL, for future development.
     */
    address?: string;
    /**
     * City of team derived from parsing the address registered with FIRST.
     */
    city?: string;
    /**
     * Country of team derived from parsing the address registered with FIRST.
     */
    country?: string;
    /**
     * Will be NULL, for future development.
     */
    gmapsPlaceId?: string;
    /**
     * Will be NULL, for future development.
     */
    gmapsUrl?: string;
    /**
     * Location of the team's home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value.
     */
    homeChampionship?: Record<string, any>;
    /**
     * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
     */
    key: string;
    /**
     * Will be NULL, for future development.
     */
    lat?: number;
    /**
     * Will be NULL, for future development.
     */
    lng?: number;
    /**
     * Will be NULL, for future development.
     */
    locationName?: string;
    /**
     * Team's motto as provided by FIRST. This field is deprecated and will return null - will be removed at end-of-season in 2019.
     */
    motto?: string;
    /**
     * Official long name registered with FIRST.
     */
    name: string;
    /**
     * Team nickname provided by FIRST.
     */
    nickname?: string;
    /**
     * Postal code from the team address.
     */
    postalCode?: string;
    /**
     * First year the team officially competed.
     */
    rookieYear?: number;
    /**
     * Name of team school or affilited group registered with FIRST.
     */
    schoolName?: string;
    /**
     * State of team derived from parsing the address registered with FIRST.
     */
    stateProv?: string;
    /**
     * Official team number issued by FIRST.
     */
    teamNumber: number;
    /**
     * Official website associated with the team.
     */
    website?: string;
}
