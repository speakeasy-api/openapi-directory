import { SpeakeasyBase } from "../../../internal/utils";
import { StragglerInfo } from "./stragglerinfo";
import { StreamingStragglerInfo } from "./streamingstragglerinfo";
/**
 * Information for a straggler.
 */
export declare class Straggler extends SpeakeasyBase {
    /**
     * Information useful for straggler identification and debugging.
     */
    batchStraggler?: StragglerInfo;
    /**
     * Information useful for streaming straggler identification and debugging.
     */
    streamingStraggler?: StreamingStragglerInfo;
}
