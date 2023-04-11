import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Possible result values from the function mock invocation.
 */
export declare class Result extends SpeakeasyBase {
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
     */
    undefined?: Record<string, any>;
    /**
     * The result is an actual value. The type of the value must match that of the type declared by the service.
     */
    value?: any;
}
