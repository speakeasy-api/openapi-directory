import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
/**
 * A request for Firestore.Listen
 */
export declare class ListenRequest extends SpeakeasyBase {
    /**
     * A specification of a set of documents to listen to.
     */
    addTarget?: Target;
    /**
     * Labels associated with this target change.
     */
    labels?: Record<string, string>;
    /**
     * The ID of a target to remove from this stream.
     */
    removeTarget?: number;
}
