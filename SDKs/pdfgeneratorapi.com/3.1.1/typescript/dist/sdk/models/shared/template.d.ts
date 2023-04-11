import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Template object
 */
export declare class Template extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id?: number;
    /**
     * Timestamp when the template was modified
     */
    modified?: string;
    /**
     * Template name
     */
    name?: string;
    /**
     * Indicates if the workspace is the owner of the template
     */
    owner?: boolean;
    /**
     * A list of tags assigned to a template
     */
    tags?: string[];
}
