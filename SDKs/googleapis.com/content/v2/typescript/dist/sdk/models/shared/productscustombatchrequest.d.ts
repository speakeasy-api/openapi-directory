import { SpeakeasyBase } from "../../../internal/utils";
import { ProductsCustomBatchRequestEntry } from "./productscustombatchrequestentry";
export declare class ProductsCustomBatchRequest extends SpeakeasyBase {
    /**
     * The request entries to be processed in the batch.
     */
    entries?: ProductsCustomBatchRequestEntry[];
}
