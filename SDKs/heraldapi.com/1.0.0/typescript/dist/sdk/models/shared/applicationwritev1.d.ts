import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageValueWriteV1 } from "./coveragevaluewritev1";
import { RiskValueWriteV1 } from "./riskvaluewritev1";
/**
 * An application is a set of information submitted by a producer to institutions in order to get quotes.
 */
export declare class ApplicationWriteV1 extends SpeakeasyBase {
    /**
     * Array of coverage values
     */
    coverageValues?: CoverageValueWriteV1[];
    /**
     * Array of product IDs. You can find a list of supported [products](https://www.heraldapi.com/docs/products) via `GET /products`
     */
    products: string[];
    /**
     * Array of risk values
     */
    riskValues?: RiskValueWriteV1[];
}
