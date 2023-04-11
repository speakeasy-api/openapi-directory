import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type of a resource
 */
export declare enum MetaResourceTypeEnum {
    User = "User",
    Group = "Group"
}
/**
 * The metadata associated with the creation/updates to the user.
 */
export declare class Meta extends SpeakeasyBase {
    /**
     * A date and time when the user was created.
     */
    created?: string;
    /**
     * A data and time when the user was last modified.
     */
    lastModified?: string;
    /**
     * A URL location of an object
     */
    location?: string;
    /**
     * A type of a resource
     */
    resourceType: MetaResourceTypeEnum;
}
