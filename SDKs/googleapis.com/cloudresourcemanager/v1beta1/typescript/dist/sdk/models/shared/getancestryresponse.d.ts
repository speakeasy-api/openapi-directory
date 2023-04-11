import { SpeakeasyBase } from "../../../internal/utils";
import { Ancestor } from "./ancestor";
/**
 * Response from the projects.getAncestry method.
 */
export declare class GetAncestryResponse extends SpeakeasyBase {
    /**
     * Ancestors are ordered from bottom to top of the resource hierarchy. The first ancestor is the project itself, followed by the project's parent, etc.
     */
    ancestor?: Ancestor[];
}
