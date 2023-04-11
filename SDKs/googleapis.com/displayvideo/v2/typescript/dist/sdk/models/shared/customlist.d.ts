import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a custom list entity, such as a custom affinity or custom intent audience list.
 */
export declare class CustomList extends SpeakeasyBase {
    /**
     * Output only. The unique ID of the custom list. Assigned by the system.
     */
    customListId?: string;
    /**
     * Output only. The display name of the custom list. .
     */
    displayName?: string;
    /**
     * Output only. The resource name of the custom list.
     */
    name?: string;
}
