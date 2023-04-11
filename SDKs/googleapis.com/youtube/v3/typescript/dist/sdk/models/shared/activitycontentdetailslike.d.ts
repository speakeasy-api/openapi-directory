import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
/**
 * Information about a resource that received a positive (like) rating.
 */
export declare class ActivityContentDetailsLike extends SpeakeasyBase {
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    resourceId?: ResourceId;
}
