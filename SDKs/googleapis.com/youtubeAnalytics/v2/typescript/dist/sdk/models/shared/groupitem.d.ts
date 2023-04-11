import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GroupItemResource } from "./groupitemresource";
/**
 * A group item.
 */
export declare class GroupItem extends SpeakeasyBase {
    /**
     * Request Error information. The presence of an error field signals that the operation has failed.
     */
    errors?: Errors;
    /**
     * The Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the group that contains the item.
     */
    groupId?: string;
    /**
     * The ID that YouTube uses to uniquely identify the `channel`, `video`, `playlist`, or `asset` resource that is included in the group. Note that this ID refers specifically to the inclusion of that resource in a particular group and is different than the channel ID, video ID, playlist ID, or asset ID that uniquely identifies the resource itself. The `resource.id` property's value specifies the unique channel, video, playlist, or asset ID.
     */
    id?: string;
    /**
     * Identifies the API resource's type. The value will be `youtube#groupItem`.
     */
    kind?: string;
    resource?: GroupItemResource;
}
