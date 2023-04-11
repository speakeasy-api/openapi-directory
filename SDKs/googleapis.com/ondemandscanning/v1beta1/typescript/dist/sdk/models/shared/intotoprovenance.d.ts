import { SpeakeasyBase } from "../../../internal/utils";
import { BuilderConfig } from "./builderconfig";
import { Metadata } from "./metadata";
import { Recipe } from "./recipe";
export declare class InTotoProvenance extends SpeakeasyBase {
    builderConfig?: BuilderConfig;
    /**
     * The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.
     */
    materials?: string[];
    /**
     * Other properties of the build.
     */
    metadata?: Metadata;
    /**
     * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
     */
    recipe?: Recipe;
}
