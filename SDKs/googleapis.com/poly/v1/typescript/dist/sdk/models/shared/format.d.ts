import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
import { FormatComplexity } from "./formatcomplexity";
/**
 * The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.
 */
export declare class Format extends SpeakeasyBase {
    /**
     * Information on the complexity of this Format.
     */
    formatComplexity?: FormatComplexity;
    /**
     * A short string that identifies the format type of this representation. Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
     */
    formatType?: string;
    /**
     * A list of dependencies of the root element. May include, but is not limited to, materials, textures, and shader programs.
     */
    resources?: File[];
    /**
     * Represents a file in Poly, which can be a root, resource, or thumbnail file.
     */
    root?: File;
}
