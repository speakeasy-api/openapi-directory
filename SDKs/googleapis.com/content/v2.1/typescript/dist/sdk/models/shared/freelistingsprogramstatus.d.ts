import { SpeakeasyBase } from "../../../internal/utils";
import { FreeListingsProgramStatusRegionStatus } from "./freelistingsprogramstatusregionstatus";
/**
 * State of the program. `ENABLED` if there are offers for at least one region.
 */
export declare enum FreeListingsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED",
    NotEnabled = "NOT_ENABLED",
    NoOffersUploaded = "NO_OFFERS_UPLOADED",
    Enabled = "ENABLED"
}
/**
 * Response message for GetFreeListingsProgramStatus.
 */
export declare class FreeListingsProgramStatus extends SpeakeasyBase {
    /**
     * State of the program. `ENABLED` if there are offers for at least one region.
     */
    globalState?: FreeListingsProgramStatusGlobalStateEnum;
    /**
     * Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`.
     */
    regionStatuses?: FreeListingsProgramStatusRegionStatus[];
}
