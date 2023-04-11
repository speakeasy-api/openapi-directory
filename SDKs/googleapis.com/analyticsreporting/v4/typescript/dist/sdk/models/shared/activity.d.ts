import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDimension } from "./customdimension";
import { EcommerceData } from "./ecommercedata";
import { EventData } from "./eventdata";
import { GoalSetData } from "./goalsetdata";
import { PageviewData } from "./pageviewdata";
import { ScreenviewData } from "./screenviewdata";
/**
 * Type of this activity.
 */
export declare enum ActivityActivityTypeEnum {
    ActivityTypeUnspecified = "ACTIVITY_TYPE_UNSPECIFIED",
    Pageview = "PAGEVIEW",
    Screenview = "SCREENVIEW",
    Goal = "GOAL",
    Ecommerce = "ECOMMERCE",
    Event = "EVENT"
}
/**
 * An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
 */
export declare class Activity extends SpeakeasyBase {
    /**
     * Timestamp of the activity. If activities for a visit cross midnight and occur in two separate dates, then two sessions (one per date) share the session identifier. For example, say session ID 113472 has activity within 2019-08-20, and session ID 243742 has activity within 2019-08-25 and 2019-08-26. Session ID 113472 is one session, and session ID 243742 is two sessions.
     */
    activityTime?: string;
    /**
     * Type of this activity.
     */
    activityType?: ActivityActivityTypeEnum;
    appview?: ScreenviewData;
    /**
     * For manual campaign tracking, it is the value of the utm_campaign campaign tracking parameter. For AdWords autotagging, it is the name(s) of the online ad campaign(s) you use for the property. If you use neither, its value is (not set).
     */
    campaign?: string;
    /**
     * The Channel Group associated with an end user's session for this View (defined by the View's Channel Groupings).
     */
    channelGrouping?: string;
    /**
     * A list of all custom dimensions associated with this activity.
     */
    customDimension?: CustomDimension[];
    /**
     * E-commerce details associated with the user activity.
     */
    ecommerce?: EcommerceData;
    /**
     * Represents all the details pertaining to an event.
     */
    event?: EventData;
    /**
     * Represents a set of goals that were reached in an activity.
     */
    goals?: GoalSetData;
    /**
     * The hostname from which the tracking request was made.
     */
    hostname?: string;
    /**
     * For manual campaign tracking, it is the value of the utm_term campaign tracking parameter. For AdWords traffic, it contains the best matching targeting criteria. For the display network, where multiple targeting criteria could have caused the ad to show up, it returns the best matching targeting criteria as selected by Ads. This could be display_keyword, site placement, boomuserlist, user_interest, age, or gender. Otherwise its value is (not set).
     */
    keyword?: string;
    /**
     * The first page in users' sessions, or the landing page.
     */
    landingPagePath?: string;
    /**
     * The type of referrals. For manual campaign tracking, it is the value of the utm_medium campaign tracking parameter. For AdWords autotagging, it is cpc. If users came from a search engine detected by Google Analytics, it is organic. If the referrer is not a search engine, it is referral. If users came directly to the property and document.referrer is empty, its value is (none).
     */
    medium?: string;
    /**
     * Represents details collected when the visitor views a page.
     */
    pageview?: PageviewData;
    /**
     * The source of referrals. For manual campaign tracking, it is the value of the utm_source campaign tracking parameter. For AdWords autotagging, it is google. If you use neither, it is the domain of the source (e.g., document.referrer) referring the users. It may also contain a port address. If users arrived without a referrer, its value is (direct).
     */
    source?: string;
}
