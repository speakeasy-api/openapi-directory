import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectT } from "./object";
/**
 * Conditions that must be met for this operation to execute.
 */
export declare class ComposeRequestSourceObjectsObjectPreconditions extends SpeakeasyBase {
    /**
     * Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail.
     */
    ifGenerationMatch?: string;
}
export declare class ComposeRequestSourceObjects extends SpeakeasyBase {
    /**
     * The generation of this object to use as the source.
     */
    generation?: string;
    /**
     * The source object's name. All source objects must reside in the same bucket.
     */
    name?: string;
    /**
     * Conditions that must be met for this operation to execute.
     */
    objectPreconditions?: ComposeRequestSourceObjectsObjectPreconditions;
}
/**
 * A Compose request.
 */
export declare class ComposeRequest extends SpeakeasyBase {
    /**
     * An object.
     */
    destination?: ObjectT;
    /**
     * The kind of item this is.
     */
    kind?: string;
    /**
     * The list of source objects that will be concatenated into a single object.
     */
    sourceObjects?: ComposeRequestSourceObjects[];
}
