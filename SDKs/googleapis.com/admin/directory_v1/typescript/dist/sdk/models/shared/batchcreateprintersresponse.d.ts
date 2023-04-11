import { SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";
import { Printer } from "./printer";
/**
 * Response for adding new printers in batch.
 */
export declare class BatchCreatePrintersResponse extends SpeakeasyBase {
    /**
     * A list of create failures. Printer IDs are not populated, as printer were not created.
     */
    failures?: FailureInfo[];
    /**
     * A list of successfully created printers with their IDs populated.
     */
    printers?: Printer[];
}
