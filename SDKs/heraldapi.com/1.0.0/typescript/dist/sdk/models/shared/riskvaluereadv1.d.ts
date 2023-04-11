import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterTextV1 } from "./parametertextv1";
/**
 * Array of risk parameters that triggered this question. Only returned by /applications endpoint.
 */
export declare class RiskValueReadV1ConditionalOn extends SpeakeasyBase {
    /**
     * Specifies the risk parameter(s) that this question is conditional on.
     */
    riskParameterId?: string[][];
}
/**
 * Recommended input type. Only returned by `/applications` endpoint. [Full list of input types](https://www.heraldapi.com/docs/input-types).
 */
export declare enum RiskValueReadV1InputTypeEnum {
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
export declare enum RiskValueReadV1RequiredForEnum {
    Quote = "quote",
    Bind = "bind",
    Null = "null"
}
/**
 * Risk values assign specific values to risk parameters.
 */
export declare class RiskValueReadV1 extends SpeakeasyBase {
    /**
     * True if the value potentially impacts the relevance of other risk or coverage values. Only returned by `/applications` endpoint. Read more about [conditionality](https://www.heraldapi.com/docs/risk-and-coverage-parameters#affects_conditions).
     */
    affectsConditions?: boolean;
    /**
     * Array of "children" coverage values, only required for certain coverage parameters.
     *
     * @remarks
     *
     * Objects in the `child_risk_values` array should adhere to the `risk_values` schema. Read more about [parent/child relationships](https://www.heraldapi.com/docs/risk-and-coverage-parameters#parent_child).
     */
    childRiskValues?: RiskValueReadV1[];
    /**
     * Array of risk parameters that triggered this question. Only returned by /applications endpoint.
     */
    conditionalOn?: RiskValueReadV1ConditionalOn;
    /**
     * True if multiple values can be submitted with the same parameter ID. For example, since an application can have more than one location, the associated risk value will have `creates_array: true`. Read more about [`creates_array`](https://www.heraldapi.com/docs/risk-and-coverage-parameters#creates_array).
     */
    createsArray?: boolean;
    /**
     * Recommended input type. Only returned by `/applications` endpoint. [Full list of input types](https://www.heraldapi.com/docs/input-types).
     */
    inputType?: RiskValueReadV1InputTypeEnum;
    /**
     * Unique identifier to distinguish different instances of risk values that have the same `risk_parameter_id`. Only returned by `/applications` for risk and coverage values where `creates_array: true`
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
     * Array of product IDs the risk parameter is relevant for. Some risk parameters are relevant for all products, but some are unique to a certain product. Only returned by `/applications` endpoint.
     */
    relevantProducts?: string[];
    /**
     * Specifies fow which operations this value is required.
     */
    requiredFor?: RiskValueReadV1RequiredForEnum[];
    /**
     * The ID of the [risk parameter](https://www.heraldapi.com/docs/risk-and-coverage-parameters) for which a value is being provided. A list of all risk parameters are documented in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    riskParameterId?: string;
    /**
     * [JSON schema](https://json-schema.org/) describing the expected value. Only returned by `/applications` endpoint.
     */
    schema?: Record<string, any>;
    /**
     * **Deprecated**: use the `parameter_text` object instead.
     */
    text?: string;
    /**
     * The value being assigned. Different risk parameters expect different value types. This is specified in the [appendix](https://www.heraldapi.com/tools-and-resources/the-appendix).
     */
    value?: any;
}
