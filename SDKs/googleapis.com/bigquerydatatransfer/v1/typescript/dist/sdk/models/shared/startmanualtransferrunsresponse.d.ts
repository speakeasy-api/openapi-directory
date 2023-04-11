import { SpeakeasyBase } from "../../../internal/utils";
import { TransferRun } from "./transferrun";
/**
 * A response to start manual transfer runs.
 */
export declare class StartManualTransferRunsResponse extends SpeakeasyBase {
    /**
     * The transfer runs that were created.
     */
    runs?: TransferRun[];
}
