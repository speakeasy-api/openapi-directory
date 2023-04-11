import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Risk values assign specific values to risk parameters.
 */
export declare class RiskValueWriteV1 extends SpeakeasyBase {
    /**
     * Array of "children" coverage values, only required for certain coverage parameters.
     *
     * @remarks
     *
     * Objects in the `child_risk_values` array should adhere to the `risk_values` schema. Read more about [parent/child relationships](https://www.heraldapi.com/docs/risk-and-coverage-parameters#parent_child).
     */
    childRiskValues?: RiskValueWriteV1[];
    /**
     * The ID of the [risk parameter](https://www.heraldapi.com/docs/risk-and-coverage-parameters) for which a value is being provided. A list of all risk parameters are documented in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    riskParameterId: string;
    /**
     * The value being assigned. Different risk parameters expect different value types. This is specified in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    value: any;
}
