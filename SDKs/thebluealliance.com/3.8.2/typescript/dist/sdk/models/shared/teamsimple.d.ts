import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class TeamSimple extends SpeakeasyBase {
    /**
     * City of team derived from parsing the address registered with FIRST.
     */
    city?: string;
    /**
     * Country of team derived from parsing the address registered with FIRST.
     */
    country?: string;
    /**
     * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
     */
    key: string;
    /**
     * Official long name registered with FIRST.
     */
    name: string;
    /**
     * Team nickname provided by FIRST.
     */
    nickname?: string;
    /**
     * State of team derived from parsing the address registered with FIRST.
     */
    stateProv?: string;
    /**
     * Official team number issued by FIRST.
     */
    teamNumber: number;
}
