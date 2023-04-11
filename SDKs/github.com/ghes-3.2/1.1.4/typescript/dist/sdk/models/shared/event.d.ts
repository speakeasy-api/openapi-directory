import { SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { Issue } from "./issue";
import { IssueComment } from "./issuecomment";
export declare class EventPayloadPages extends SpeakeasyBase {
    action?: string;
    htmlUrl?: string;
    pageName?: string;
    sha?: string;
    summary?: string;
    title?: string;
}
export declare class EventPayload extends SpeakeasyBase {
    action?: string;
    /**
     * Comments provide a way for people to collaborate on an issue.
     */
    comment?: IssueComment;
    /**
     * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
     */
    issue?: Issue;
    pages?: EventPayloadPages[];
}
export declare class EventRepo extends SpeakeasyBase {
    id: number;
    name: string;
    url: string;
}
/**
 * Event
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Actor
     */
    actor: Actor;
    createdAt: Date;
    id: string;
    /**
     * Actor
     */
    org?: Actor;
    payload: EventPayload;
    public: boolean;
    repo: EventRepo;
    type: string;
}
