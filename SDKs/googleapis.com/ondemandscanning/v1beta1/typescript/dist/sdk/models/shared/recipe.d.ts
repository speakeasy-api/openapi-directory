import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.
**/
export declare class Recipe extends SpeakeasyBase {
    arguments?: Record<string, any>[];
    definedInMaterial?: string;
    entryPoint?: string;
    environment?: Record<string, any>[];
    type?: string;
}
