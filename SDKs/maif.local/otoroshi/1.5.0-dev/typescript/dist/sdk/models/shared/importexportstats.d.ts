import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Global stats for the current Otoroshi instances
 */
export declare class ImportExportStats extends SpeakeasyBase {
    /**
     * Number of calls to Otoroshi globally
     */
    calls: number;
    /**
     * The amount of data sent to Otoroshi globally
     */
    dataIn: number;
    /**
     * The amount of data sent from Otoroshi globally
     */
    dataOut: number;
}
