import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * The type of user mention.
 */
export declare enum UserMentionMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Add = "ADD",
    Mention = "MENTION"
}
/**
 * Annotation metadata for user mentions (@).
 */
export declare class UserMentionMetadata extends SpeakeasyBase {
    /**
     * The type of user mention.
     */
    type?: UserMentionMetadataTypeEnum;
    /**
     * A user in Google Chat.
     */
    user?: User;
}
