import { SpeakeasyBase } from "../../../internal/utils";
import { SourceContext } from "./sourcecontext";
/**
 * An ExtendedSourceContext is a SourceContext combined with additional details describing the context.
 */
export declare class ExtendedSourceContext extends SpeakeasyBase {
    /**
     * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
     */
    context?: SourceContext;
    /**
     * Labels with user defined metadata.
     */
    labels?: Record<string, string>;
}
