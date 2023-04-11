import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * The reaction to use
 */
export declare enum ReactionContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
/**
 * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
 */
export declare class Reaction extends SpeakeasyBase {
    /**
     * The reaction to use
     */
    content: ReactionContentEnum;
    createdAt: Date;
    id: number;
    nodeId: string;
    /**
     * A GitHub user.
     */
    user: NullableSimpleUser;
}
