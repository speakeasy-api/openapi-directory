import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
/**
 * Response message for TablesService.BatchCreateRows.
 */
export declare class BatchCreateRowsResponse extends SpeakeasyBase {
    /**
     * The created rows.
     */
    rows?: Row[];
}
