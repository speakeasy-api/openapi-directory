import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a saved report.
 */
export declare class SavedReport extends SpeakeasyBase {
    /**
     * Output only. Resource name of the report. Format: accounts/{account}/reports/{report}
     */
    name?: string;
    /**
     * Report title as specified by publisher.
     */
    title?: string;
}
