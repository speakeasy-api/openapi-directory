import { SpeakeasyBase } from "../../../internal/utils";
import { BucketAccessControl } from "./bucketaccesscontrol";
/**
 * An access-control list.
 */
export declare class BucketAccessControls extends SpeakeasyBase {
    /**
     * The list of items.
     */
    items?: BucketAccessControl[];
    /**
     * The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.
     */
    kind?: string;
}
