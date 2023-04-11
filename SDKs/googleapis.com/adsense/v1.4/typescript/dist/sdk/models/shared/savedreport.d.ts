import { SpeakeasyBase } from "../../../internal/utils";
export declare class SavedReport extends SpeakeasyBase {
    /**
     * Unique identifier of this saved report.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#savedReport.
     */
    kind?: string;
    /**
     * This saved report's name.
     */
    name?: string;
}
