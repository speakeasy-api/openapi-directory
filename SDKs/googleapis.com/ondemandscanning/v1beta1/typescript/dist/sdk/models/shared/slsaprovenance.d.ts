import { SpeakeasyBase } from "../../../internal/utils";
import { Material } from "./material";
import { SlsaBuilder } from "./slsabuilder";
import { SlsaMetadata } from "./slsametadata";
import { SlsaRecipe } from "./slsarecipe";
export declare class SlsaProvenance extends SpeakeasyBase {
    builder?: SlsaBuilder;
    /**
     * The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty.
     */
    materials?: Material[];
    /**
     * Other properties of the build.
     */
    metadata?: SlsaMetadata;
    /**
     * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
     */
    recipe?: SlsaRecipe;
}
