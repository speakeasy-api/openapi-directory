import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { Parameter } from "./parameter";
/**
 * Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
 */
export declare enum TriggerTypeEnum {
    EventTypeUnspecified = "eventTypeUnspecified",
    Pageview = "pageview",
    DomReady = "domReady",
    WindowLoaded = "windowLoaded",
    CustomEvent = "customEvent",
    TriggerGroup = "triggerGroup",
    Init = "init",
    ConsentInit = "consentInit",
    ServerPageview = "serverPageview",
    Always = "always",
    FirebaseAppException = "firebaseAppException",
    FirebaseAppUpdate = "firebaseAppUpdate",
    FirebaseCampaign = "firebaseCampaign",
    FirebaseFirstOpen = "firebaseFirstOpen",
    FirebaseInAppPurchase = "firebaseInAppPurchase",
    FirebaseNotificationDismiss = "firebaseNotificationDismiss",
    FirebaseNotificationForeground = "firebaseNotificationForeground",
    FirebaseNotificationOpen = "firebaseNotificationOpen",
    FirebaseNotificationReceive = "firebaseNotificationReceive",
    FirebaseOsUpdate = "firebaseOsUpdate",
    FirebaseSessionStart = "firebaseSessionStart",
    FirebaseUserEngagement = "firebaseUserEngagement",
    FormSubmission = "formSubmission",
    Click = "click",
    LinkClick = "linkClick",
    JsError = "jsError",
    HistoryChange = "historyChange",
    Timer = "timer",
    AmpClick = "ampClick",
    AmpTimer = "ampTimer",
    AmpScroll = "ampScroll",
    AmpVisibility = "ampVisibility",
    YouTubeVideo = "youTubeVideo",
    ScrollDepth = "scrollDepth",
    ElementVisibility = "elementVisibility"
}
/**
 * Represents a Google Tag Manager Trigger
 */
export declare class Trigger extends SpeakeasyBase {
    /**
     * GTM Account ID.
     */
    accountId?: string;
    /**
     * Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    autoEventFilter?: Condition[];
    /**
     * Represents a Google Tag Manager Parameter.
     */
    checkValidation?: Parameter;
    /**
     * GTM Container ID.
     */
    containerId?: string;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    continuousTimeMinMilliseconds?: Parameter;
    /**
     * Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    customEventFilter?: Condition[];
    /**
     * Represents a Google Tag Manager Parameter.
     */
    eventName?: Parameter;
    /**
     * The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    filter?: Condition[];
    /**
     * The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
     */
    fingerprint?: string;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    horizontalScrollPercentageList?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    interval?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    intervalSeconds?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    limit?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    maxTimerLengthSeconds?: Parameter;
    /**
     * Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    name?: string;
    /**
     * User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    notes?: string;
    /**
     * Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    parameter?: Parameter[];
    /**
     * Parent folder id.
     */
    parentFolderId?: string;
    /**
     * GTM Trigger's API relative path.
     */
    path?: string;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    selector?: Parameter;
    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    totalTimeMinMilliseconds?: Parameter;
    /**
     * The Trigger ID uniquely identifies the GTM Trigger.
     */
    triggerId?: string;
    /**
     * Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update
     */
    type?: TriggerTypeEnum;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    uniqueTriggerId?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    verticalScrollPercentageList?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    visibilitySelector?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    visiblePercentageMax?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    visiblePercentageMin?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    waitForTags?: Parameter;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    waitForTagsTimeout?: Parameter;
    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
}
