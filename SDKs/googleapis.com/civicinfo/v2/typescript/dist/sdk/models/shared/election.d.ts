import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ElectionShapeLookupBehaviorEnum {
    ShapeLookupDefault = "shapeLookupDefault",
    ShapeLookupDisabled = "shapeLookupDisabled",
    ShapeLookupEnabled = "shapeLookupEnabled"
}
/**
 * Information about the election that was queried.
 */
export declare class Election extends SpeakeasyBase {
    /**
     * Day of the election in YYYY-MM-DD format.
     */
    electionDay?: string;
    /**
     * The unique ID of this election.
     */
    id?: string;
    /**
     * A displayable name for the election.
     */
    name?: string;
    /**
     * The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us).
     */
    ocdDivisionId?: string;
    shapeLookupBehavior?: ElectionShapeLookupBehaviorEnum;
}
