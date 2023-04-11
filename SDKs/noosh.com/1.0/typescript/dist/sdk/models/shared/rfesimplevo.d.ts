import { SpeakeasyBase } from "../../../internal/utils";
import { RfeItemSimpleVO } from "./rfeitemsimplevo";
import { RfeSuEstimateSimpleVO } from "./rfesuestimatesimplevo";
/**
 * Java type: com.noosh.nooshapi.vo.RfeSimpleVO
 */
export declare class RfeSimpleVO extends SpeakeasyBase {
    estimateDueDate?: Date;
    rfeId?: number;
    rfeItems?: RfeItemSimpleVO[];
    rfeTitle?: string;
    supplierEstimates?: RfeSuEstimateSimpleVO[];
}
