import { SpeakeasyBase } from "../../../internal/utils";
import { CostScenario } from "./costscenario";
/**
 * Request for EstimateCostScenarioWithListPrice.
 */
export declare class EstimateCostScenarioWithListPriceRequest extends SpeakeasyBase {
    /**
     * Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
     */
    costScenario?: CostScenario;
}
