import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionMock } from "./functionmock";
/**
 * Test expectation.
 */
export declare enum TestCaseExpectationEnum {
    ExpectationUnspecified = "EXPECTATION_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
/**
 * Specifies what should be included in the response.
 */
export declare enum TestCaseExpressionReportLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    None = "NONE",
    Full = "FULL",
    Visited = "VISITED"
}
/**
 * Specifies whether paths (such as request.path) are encoded and how.
 */
export declare enum TestCasePathEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    UrlEncoded = "URL_ENCODED",
    Plain = "PLAIN"
}
/**
 * `TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.
 */
export declare class TestCase extends SpeakeasyBase {
    /**
     * Test expectation.
     */
    expectation?: TestCaseExpectationEnum;
    /**
     * Specifies what should be included in the response.
     */
    expressionReportLevel?: TestCaseExpressionReportLevelEnum;
    /**
     * Optional function mocks for service-defined functions. If not set, any service defined function is expected to return an error, which may or may not influence the test outcome.
     */
    functionMocks?: FunctionMock[];
    /**
     * Specifies whether paths (such as request.path) are encoded and how.
     */
    pathEncoding?: TestCasePathEncodingEnum;
    /**
     * Request context. The exact format of the request context is service-dependent. See the appropriate service documentation for information about the supported fields and types on the request. Minimally, all services support the following fields and types: Request field | Type ---------------|----------------- auth.uid | `string` auth.token | `map` headers | `map` method | `string` params | `map` path | `string` time | `google.protobuf.Timestamp` If the request value is not well-formed for the service, the request will be rejected as an invalid argument.
     */
    request?: any;
    /**
     * Optional resource value as it appears in persistent storage before the request is fulfilled. The resource type depends on the `request.path` value.
     */
    resource?: any;
}
