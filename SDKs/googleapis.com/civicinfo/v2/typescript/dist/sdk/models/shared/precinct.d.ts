import { SpeakeasyBase } from "../../../internal/utils";
export declare class Precinct extends SpeakeasyBase {
    /**
     * ID of the AdministrationRegion message for this precinct. Corresponds to LocalityId xml tag.
     */
    administrationRegionId?: string;
    /**
     * ID(s) of the Contest message(s) for this precinct.
     */
    contestId?: string[];
    /**
     * Required. Dataset ID. What datasets our Precincts come from.
     */
    datasetId?: string;
    /**
     * ID(s) of the PollingLocation message(s) for this precinct.
     */
    earlyVoteSiteId?: string[];
    /**
     * ID(s) of the ElectoralDistrict message(s) for this precinct.
     */
    electoralDistrictId?: string[];
    /**
     * Required. A unique identifier for this precinct.
     */
    id?: string;
    /**
     * Specifies if the precinct runs mail-only elections.
     */
    mailOnly?: boolean;
    /**
     * Required. The name of the precinct.
     */
    name?: string;
    /**
     * The number of the precinct.
     */
    number?: string;
    /**
     * Encouraged. The OCD ID of the precinct
     */
    ocdId?: string[];
    /**
     * ID(s) of the PollingLocation message(s) for this precinct.
     */
    pollingLocationId?: string[];
    /**
     * ID(s) of the SpatialBoundary message(s) for this precinct. Used to specify a geometrical boundary of the precinct.
     */
    spatialBoundaryId?: string[];
    /**
     * If present, this proto corresponds to one portion of split precinct. Other portions of this precinct are guaranteed to have the same `name`. If not present, this proto represents a full precicnt.
     */
    splitName?: string;
    /**
     * Specifies the ward the precinct is contained within.
     */
    ward?: string;
}
