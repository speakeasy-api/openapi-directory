import { SpeakeasyBase } from "../../../internal/utils";
export declare class Read extends SpeakeasyBase {
    lastRead: Date;
    unreadMessages: number;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
}
