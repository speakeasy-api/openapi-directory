import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageValueReadV1 } from "./coveragevaluereadv1";
import { RiskValueReadV1 } from "./riskvaluereadv1";
/**
 * The status of the application.
 */
export declare enum ApplicationReadV1StatusEnum {
    Incomplete = "incomplete",
    Complete = "complete",
    Submitted = "submitted"
}
/**
 * An application is a set of information submitted by a producer to institutions in order to get quotes.
 */
export declare class ApplicationReadV1 extends SpeakeasyBase {
    /**
     * Array of coverage values
     */
    coverageValues?: CoverageValueReadV1[];
    /**
     * `id` for a specific application
     */
    id?: string;
    /**
     * Array of product IDs. You can find a list of supported [products](https://www.heraldapi.com/docs/products) via `GET /products`
     */
    products?: string[];
    /**
     * Array of risk values
     */
    riskValues?: RiskValueReadV1[];
    /**
     * The status of the application.
     */
    status?: ApplicationReadV1StatusEnum;
}
