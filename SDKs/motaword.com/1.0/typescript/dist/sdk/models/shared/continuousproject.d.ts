import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousProjectLinks } from "./continuousprojectlinks";
import { Subscription } from "./subscription";
/**
 * Newly created continuous project
 */
export declare class ContinuousProject extends SpeakeasyBase {
    /**
     * Should we collect analytics data from Active for this continuous project?
     */
    analyticsEnabled?: boolean;
    /**
     * Immediately start post-editing project for translation requests that are applied MT.
     */
    autoStartPostedit?: boolean;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    createdAt?: Date;
    id?: number;
    isEnabled?: boolean;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    lastActivityAt?: Date;
    links?: ContinuousProjectLinks;
    /**
     * Immediately apply MT on translation requests if they are missing from TM.
     */
    mtEnabled?: boolean;
    /**
     * One of "MOTAWORD", "GOOGLE", "AMAZON", "MS". Default is "MOTAWORD".
     */
    mtEngine?: string;
    name?: string;
    /**
     * Get an instant quote for translation requests that are applied MT.
     */
    posteditEnabled?: boolean;
    sourceLanguage?: string;
    /**
     * One of "a => ACTIVE", "i => INACTIVE", "d => DELETED", "c => SCHEDULED CANCELLATION", "p => SCHEDULED CHANGE"
     */
    status?: string;
    subscription?: Subscription;
    targetLanguages?: string[];
    /**
     * Continuous project type. We currently have only 2 types, NULL and "active".
     */
    type?: string;
    wordCount?: number;
}
