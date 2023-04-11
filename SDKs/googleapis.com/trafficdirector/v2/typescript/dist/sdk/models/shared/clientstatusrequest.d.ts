import { SpeakeasyBase } from "../../../internal/utils";
import { NodeMatcher } from "./nodematcher";
/**
 * Request for client status of clients identified by a list of NodeMatchers.
 */
export declare class ClientStatusRequest extends SpeakeasyBase {
    /**
     * Management server can use these match criteria to identify clients. The match follows OR semantics.
     */
    nodeMatchers?: NodeMatcher[];
}
