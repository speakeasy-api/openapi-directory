import { SpeakeasyBase } from "../../../internal/utils";
import { SlashCommandMetadata } from "./slashcommandmetadata";
import { UserMentionMetadata } from "./usermentionmetadata";
/**
 * The type of this annotation.
 */
export declare enum AnnotationTypeEnum {
    AnnotationTypeUnspecified = "ANNOTATION_TYPE_UNSPECIFIED",
    UserMention = "USER_MENTION",
    SlashCommand = "SLASH_COMMAND"
}
/**
 * Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!" ``` The corresponding annotations metadata: ``` "annotations":[{ "type":"USER_MENTION", "startIndex":6, "length":7, "userMention": { "user": { "name":"users/{user}", "displayName":"FooBot", "avatarUrl":"https://goo.gl/aeDtrS", "type":"BOT" }, "type":"MENTION" } }] ```
 */
export declare class Annotation extends SpeakeasyBase {
    /**
     * Length of the substring in the plain-text message body this annotation corresponds to.
     */
    length?: number;
    /**
     * Annotation metadata for slash commands (/).
     */
    slashCommand?: SlashCommandMetadata;
    /**
     * Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to.
     */
    startIndex?: number;
    /**
     * The type of this annotation.
     */
    type?: AnnotationTypeEnum;
    /**
     * Annotation metadata for user mentions (@).
     */
    userMention?: UserMentionMetadata;
}
