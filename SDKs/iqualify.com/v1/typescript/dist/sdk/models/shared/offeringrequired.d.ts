import { SpeakeasyBase } from "../../../internal/utils";
import { BadgeExpiry } from "./badgeexpiry";
export declare class OfferingRequiredBadge extends SpeakeasyBase {
    badgeExpiry?: BadgeExpiry;
    description?: string;
    requiresApproval?: boolean;
    title?: string;
}
export declare class OfferingRequiredMetadata extends SpeakeasyBase {
    category?: string;
    level?: string;
    tags?: string[];
    topic?: string;
}
export declare class OfferingRequired extends SpeakeasyBase {
    badge?: OfferingRequiredBadge;
    /**
     * The identifier for a specific version of a course
     */
    contentId?: string;
    createDefaultChannels?: boolean;
    description?: string;
    earlyCloseOffDate?: Date;
    end?: Date;
    hasEarlyCloseOff?: boolean;
    identifier?: string;
    isReadonly?: boolean;
    metadata?: OfferingRequiredMetadata;
    name?: string;
    /**
     * Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course.
     */
    rootContentId?: string;
    start: Date;
    trailerVideoUrl?: string;
    useRelativeDates?: boolean;
}
