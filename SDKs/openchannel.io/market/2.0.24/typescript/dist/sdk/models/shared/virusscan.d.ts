import { SpeakeasyBase } from "../../../internal/utils";
import { FoundVirus } from "./foundvirus";
/**
 * The virus scan results for this file
 */
export declare class VirusScan extends SpeakeasyBase {
    /**
     * The date (in milliseconds) when this file finished it's scan
     */
    finished?: number;
    /**
     * The list of viruses found in this file
     */
    foundViruses?: FoundVirus[];
    /**
     * The date (in milliseconds) when this file started it's scan
     */
    started?: number;
    /**
     * The status of this scan. Can be NOT_SCANNED, CLEAN or DIRTY
     */
    status: string;
}
