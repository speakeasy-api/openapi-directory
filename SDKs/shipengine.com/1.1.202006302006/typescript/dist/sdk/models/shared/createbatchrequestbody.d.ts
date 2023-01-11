import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A create batch request body
**/
export declare class CreateBatchRequestBody extends SpeakeasyBase {
    batchNotes?: string;
    externalBatchId?: string;
    rateIds?: Record<string, any>[];
    shipmentIds?: string[];
}
