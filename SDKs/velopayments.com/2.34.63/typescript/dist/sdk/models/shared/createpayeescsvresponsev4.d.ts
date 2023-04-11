import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeesCSVResponseV3RejectedCSVRows } from "./createpayeescsvresponsev3rejectedcsvrows";
/**
 * HTTP Created. Body created only on CSV requests
 */
export declare class CreatePayeesCSVResponseV4 extends SpeakeasyBase {
    batchId?: string;
    rejectedCsvRows?: CreatePayeesCSVResponseV3RejectedCSVRows[];
}
