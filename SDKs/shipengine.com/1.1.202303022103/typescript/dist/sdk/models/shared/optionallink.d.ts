import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link to a related resource, or an empty object if there is no resource to link to
 */
export declare class OptionalLink extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
    /**
     * The type of resource, or the type of relationship to the parent resource
     */
    type?: string;
}
