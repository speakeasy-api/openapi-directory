import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterTextV1 } from "./parametertextv1";
/**
 * Recommended input type. Only returned by `/applications` endpoint. [Full list of input types](https://www.heraldapi.com/docs/input-types).
 */
export declare enum CoverageValueReadV1InputTypeEnum {
    Date = "date",
    Number = "number",
    Integer = "integer",
    SelectOne = "select_one",
    SelectMany = "select_many",
    Address = "address",
    ClaimEvent = "claim_event",
    Email = "email",
    Phone = "phone",
    Year = "year",
    ShortText = "short_text",
    LongText = "long_text",
    Website = "website",
    File = "file"
}
export declare enum CoverageValueReadV1RequiredForEnum {
    Quote = "quote",
    Bind = "bind",
    Null = "null"
}
/**
 * Coverage values assign specific values to coverage parameters.
 */
export declare class CoverageValueReadV1 extends SpeakeasyBase {
    /**
     * True if the value potentially impacts the relevance of other risk or coverage values. Only returned by `/applications` endpoint. Read more about [conditionality](https://www.heraldapi.com/docs/risk-and-coverage-parameters#affects_conditions).
     */
    affectsConditions?: boolean;
    /**
     * Array of "children" coverage values, only required for certain coverage parameters.
     *
     * @remarks
     *
     * Objects in the `child_coverage_values` array should adhere to the `coverage_values` schema. Read more about [parent/child relationships](https://www.heraldapi.com/docs/risk-and-coverage-parameters#parent_child).
     */
    childCoverageValues?: CoverageValueReadV1[];
    /**
     * The ID of the [coverage parameter](https://www.heraldapi.com/docs/risk-and-coverage-parameters) for which a value is being provided. A list of all coverage parameters are documented in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    coverageParameterId?: string;
    /**
     * True if multiple values can be submitted with the same parameter ID.  Read more about [`creates_array`](https://www.heraldapi.com/docs/risk-and-coverage-parameters#creates_array).
     */
    createsArray?: boolean;
    /**
     * Recommended input type. Only returned by `/applications` endpoint. [Full list of input types](https://www.heraldapi.com/docs/input-types).
     */
    inputType?: CoverageValueReadV1InputTypeEnum;
    /**
     * Unique identifier to distinguish different instances of coverage values that have the same `coverage_parameter_id`. Only returned by `/applications` for risk and coverage values where `creates_array: true`
     *
     * @remarks
     * Read our [guide to using instances](https://www.heraldapi.com/docs/instance).
     */
    instance?: string;
    /**
     * Object containing text for the parameter that you can render on a front-end.
     */
    parameterText?: ParameterTextV1;
    /**
     * Array of product IDs the coverage parameter is relevant for. Some coverage parameters are relevant for all products, but some are unique to a certain product. Only returned by `/applications` endpoint.
     */
    relevantProducts?: string[];
    /**
     * Specifies fow which operations this value is required.
     */
    requiredFor?: CoverageValueReadV1RequiredForEnum[];
    /**
     * [JSON schema](https://json-schema.org/) describing the expected value. Only returned by `/applications` endpoint.
     */
    schema?: Record<string, any>;
    /**
     * **Deprecated**: use the `parameter_text` object instead.
     */
    text?: string;
    /**
     * The value being assigned. Different coverage parameters expect different value types. This is specified in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    value?: any;
}
