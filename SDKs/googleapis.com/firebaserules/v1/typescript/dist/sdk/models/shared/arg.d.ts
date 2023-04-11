import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Arg matchers for the mock function.
 */
export declare class Arg extends SpeakeasyBase {
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
     */
    anyValue?: Record<string, any>;
    /**
     * Argument exactly matches value provided.
     */
    exactValue?: any;
}
