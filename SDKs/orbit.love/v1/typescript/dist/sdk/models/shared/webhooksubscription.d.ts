import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookSubscription extends SpeakeasyBase {
    activityTags?: string[];
    activityTypes?: string[];
    eventType: string;
    memberTags?: string[];
    name: string;
    secret?: string;
    url: string;
}
