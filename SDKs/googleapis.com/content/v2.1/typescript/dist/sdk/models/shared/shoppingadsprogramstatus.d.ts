import { SpeakeasyBase } from "../../../internal/utils";
import { ShoppingAdsProgramStatusRegionStatus } from "./shoppingadsprogramstatusregionstatus";
/**
 * State of the program. `ENABLED` if there are offers for at least one region.
 */
export declare enum ShoppingAdsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED",
    NotEnabled = "NOT_ENABLED",
    NoOffersUploaded = "NO_OFFERS_UPLOADED",
    Enabled = "ENABLED"
}
/**
 * Response message for GetShoppingAdsProgramStatus.
 */
export declare class ShoppingAdsProgramStatus extends SpeakeasyBase {
    /**
     * State of the program. `ENABLED` if there are offers for at least one region.
     */
    globalState?: ShoppingAdsProgramStatusGlobalStateEnum;
    /**
     * Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`.
     */
    regionStatuses?: ShoppingAdsProgramStatusRegionStatus[];
}
