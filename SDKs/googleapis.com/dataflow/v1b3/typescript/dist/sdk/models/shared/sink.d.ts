import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A sink that records can be encoded and written to.
 */
export declare class Sink extends SpeakeasyBase {
    /**
     * The codec to use to encode data written to the sink.
     */
    codec?: Record<string, any>;
    /**
     * The sink to write to, plus its parameters.
     */
    spec?: Record<string, any>;
}
