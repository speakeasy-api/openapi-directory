import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
 */
export declare class TagBinding extends SpeakeasyBase {
    /**
     * Output only. The name of the TagBinding. This is a String of the form: `tagBindings/{full-resource-name}/{tag-value-name}` (e.g. `tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F123/tagValues/456`).
     */
    name?: string;
    /**
     * The full resource name of the resource the TagValue is bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123`
     */
    parent?: string;
    /**
     * The TagValue of the TagBinding. Must be of the form `tagValues/456`.
     */
    tagValue?: string;
}
/**
 * A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
 */
export declare class TagBindingInput extends SpeakeasyBase {
    /**
     * The full resource name of the resource the TagValue is bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123`
     */
    parent?: string;
    /**
     * The TagValue of the TagBinding. Must be of the form `tagValues/456`.
     */
    tagValue?: string;
}
