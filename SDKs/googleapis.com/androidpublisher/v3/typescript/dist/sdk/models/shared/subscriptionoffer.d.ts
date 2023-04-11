import { SpeakeasyBase } from "../../../internal/utils";
import { OfferTag } from "./offertag";
import { OtherRegionsSubscriptionOfferConfig } from "./otherregionssubscriptionofferconfig";
import { RegionalSubscriptionOfferConfig } from "./regionalsubscriptionofferconfig";
import { SubscriptionOfferPhase } from "./subscriptionofferphase";
import { SubscriptionOfferTargeting } from "./subscriptionoffertargeting";
/**
 * A single, temporary offer
 */
export declare class SubscriptionOfferInput extends SpeakeasyBase {
    /**
     * Required. Immutable. The ID of the base plan to which this offer is an extension.
     */
    basePlanId?: string;
    /**
     * Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
     */
    offerId?: string;
    /**
     * List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.
     */
    offerTags?: OfferTag[];
    /**
     * Configuration for any new locations Play may launch in specified on a subscription offer.
     */
    otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;
    /**
     * Required. Immutable. The package name of the app the parent subscription belongs to.
     */
    packageName?: string;
    /**
     * Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.
     */
    phases?: SubscriptionOfferPhase[];
    /**
     * Required. Immutable. The ID of the parent subscription this offer belongs to.
     */
    productId?: string;
    /**
     * Required. The region-specific configuration of this offer. Must contain at least one entry.
     */
    regionalConfigs?: RegionalSubscriptionOfferConfig[];
    /**
     * Defines the rule a user needs to satisfy to receive this offer.
     */
    targeting?: SubscriptionOfferTargeting;
}
/**
 * Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active.
 */
export declare enum SubscriptionOfferStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A single, temporary offer
 */
export declare class SubscriptionOffer extends SpeakeasyBase {
    /**
     * Required. Immutable. The ID of the base plan to which this offer is an extension.
     */
    basePlanId?: string;
    /**
     * Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.
     */
    offerId?: string;
    /**
     * List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.
     */
    offerTags?: OfferTag[];
    /**
     * Configuration for any new locations Play may launch in specified on a subscription offer.
     */
    otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;
    /**
     * Required. Immutable. The package name of the app the parent subscription belongs to.
     */
    packageName?: string;
    /**
     * Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.
     */
    phases?: SubscriptionOfferPhase[];
    /**
     * Required. Immutable. The ID of the parent subscription this offer belongs to.
     */
    productId?: string;
    /**
     * Required. The region-specific configuration of this offer. Must contain at least one entry.
     */
    regionalConfigs?: RegionalSubscriptionOfferConfig[];
    /**
     * Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active.
     */
    state?: SubscriptionOfferStateEnum;
    /**
     * Defines the rule a user needs to satisfy to receive this offer.
     */
    targeting?: SubscriptionOfferTargeting;
}
