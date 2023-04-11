import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Coverage values assign specific values to coverage parameters.
 */
export declare class CoverageValueWriteV1 extends SpeakeasyBase {
    /**
     * Array of "children" coverage values, only required for certain coverage parameters.
     *
     * @remarks
     *
     * Objects in the `child_coverage_values` array should adhere to the `coverage_values` schema. Read more about [parent/child relationships](https://www.heraldapi.com/docs/risk-and-coverage-parameters#parent_child).
     */
    childCoverageValues?: CoverageValueWriteV1[];
    /**
     * The ID of the [coverage parameter](https://www.heraldapi.com/docs/risk-and-coverage-parameters) for which a value is being provided. A list of all coverage parameters are documented in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    coverageParameterId: string;
    /**
     * The value being assigned. Different coverage parameters expect different value types. This is specified in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    value: any;
}
