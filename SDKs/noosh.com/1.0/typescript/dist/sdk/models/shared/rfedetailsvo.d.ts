import { SpeakeasyBase } from "../../../internal/utils";
import { RfeItemSimpleEXTVO } from "./rfeitemsimpleextvo";
import { RfeSuEstimateSimpleVO } from "./rfesuestimatesimplevo";
/**
 * Java type: com.noosh.nooshapi.vo.RfeDetailsVO
 */
export declare class RfeDetailsVO extends SpeakeasyBase {
    description?: string;
    details?: string;
    estimateDueDate?: Date;
    estimators?: string[];
    itemizedTaxAndShipping?: number;
    proposedOrderCompletionDate?: Date;
    referenceNumber?: string;
    requestor?: string;
    rfeId?: number;
    rfeItems?: RfeItemSimpleEXTVO[];
    status?: string;
    submittedDate?: Date;
    supplierEstimates?: RfeSuEstimateSimpleVO[];
    title?: string;
}
