import { SpeakeasyBase } from "../../../internal/utils";
import { EstimateItemPriceVO } from "./estimateitempricevo";
import { PropertyPaAndAttVO } from "./propertypaandattvo";
/**
 * Java type: com.noosh.nooshapi.vo.EstimateItemDetailsVO
 */
export declare class EstimateItemDetailsVO extends SpeakeasyBase {
    comments?: string;
    customFields?: PropertyPaAndAttVO[];
    estimateItemId?: number;
    optionPrices?: EstimateItemPriceVO[];
    pcJobId?: number;
    specName?: string;
    specReference?: string;
    specReferenceId?: number;
}
