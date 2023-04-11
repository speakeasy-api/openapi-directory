import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeBody } from "./administrativebody";
import { Source } from "./source";
/**
 * Describes information about a regional election administrative area.
 */
export declare class AdministrationRegion extends SpeakeasyBase {
    /**
     * Information about an election administrative body (e.g. County Board of Elections).
     */
    electionAdministrationBody?: AdministrativeBody;
    /**
     * Describes information about a regional election administrative area.
     */
    localJurisdiction?: AdministrationRegion;
    /**
     * The name of the jurisdiction.
     */
    name?: string;
    /**
     * A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources.
     */
    sources?: Source[];
}
