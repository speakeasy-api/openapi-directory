import { SpeakeasyBase } from "../../../internal/utils";
export declare class TargetSimple extends SpeakeasyBase {
    /**
     * Custom description for the resource
     */
    desc?: string;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Custom name for the resource
     */
    name?: string;
    /**
     * List of frameworks detected on this resource
     */
    stack?: string[];
    /**
     * Target's site URL
     */
    url?: string;
}
