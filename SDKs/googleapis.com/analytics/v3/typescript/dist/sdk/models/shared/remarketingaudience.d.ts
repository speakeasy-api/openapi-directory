import { SpeakeasyBase } from "../../../internal/utils";
import { IncludeConditions } from "./includeconditions";
import { LinkedForeignAccount, LinkedForeignAccountInput } from "./linkedforeignaccount";
/**
 * The simple audience definition that will cause a user to be added to an audience.
 */
export declare class RemarketingAudienceAudienceDefinition extends SpeakeasyBase {
    /**
     * JSON template for an Analytics Remarketing Include Conditions.
     */
    includeConditions?: IncludeConditions;
}
/**
 * Defines the conditions to exclude users from the audience.
 */
export declare class RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions extends SpeakeasyBase {
    /**
     * Whether to make the exclusion TEMPORARY or PERMANENT.
     */
    exclusionDuration?: string;
    /**
     * The segment condition that will cause a user to be removed from an audience.
     */
    segment?: string;
}
/**
 * A state based audience definition that will cause a user to be added or removed from an audience.
 */
export declare class RemarketingAudienceStateBasedAudienceDefinition extends SpeakeasyBase {
    /**
     * Defines the conditions to exclude users from the audience.
     */
    excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
    /**
     * JSON template for an Analytics Remarketing Include Conditions.
     */
    includeConditions?: IncludeConditions;
}
/**
 * JSON template for an Analytics remarketing audience.
 */
export declare class RemarketingAudienceInput extends SpeakeasyBase {
    /**
     * Account ID to which this remarketing audience belongs.
     */
    accountId?: string;
    /**
     * The simple audience definition that will cause a user to be added to an audience.
     */
    audienceDefinition?: RemarketingAudienceAudienceDefinition;
    /**
     * The type of audience, either SIMPLE or STATE_BASED.
     */
    audienceType?: string;
    /**
     * Remarketing Audience ID.
     */
    id?: string;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.
     */
    linkedAdAccounts?: LinkedForeignAccountInput[];
    /**
     * The views (profiles) that this remarketing audience is linked to.
     */
    linkedViews?: string[];
    /**
     * The name of this remarketing audience.
     */
    name?: string;
    /**
     * A state based audience definition that will cause a user to be added or removed from an audience.
     */
    stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.
     */
    webPropertyId?: string;
}
/**
 * JSON template for an Analytics remarketing audience.
 */
export declare class RemarketingAudience extends SpeakeasyBase {
    /**
     * Account ID to which this remarketing audience belongs.
     */
    accountId?: string;
    /**
     * The simple audience definition that will cause a user to be added to an audience.
     */
    audienceDefinition?: RemarketingAudienceAudienceDefinition;
    /**
     * The type of audience, either SIMPLE or STATE_BASED.
     */
    audienceType?: string;
    /**
     * Time this remarketing audience was created.
     */
    created?: Date;
    /**
     * The description of this remarketing audience.
     */
    description?: string;
    /**
     * Remarketing Audience ID.
     */
    id?: string;
    /**
     * Internal ID for the web property to which this remarketing audience belongs.
     */
    internalWebPropertyId?: string;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.
     */
    linkedAdAccounts?: LinkedForeignAccount[];
    /**
     * The views (profiles) that this remarketing audience is linked to.
     */
    linkedViews?: string[];
    /**
     * The name of this remarketing audience.
     */
    name?: string;
    /**
     * A state based audience definition that will cause a user to be added or removed from an audience.
     */
    stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;
    /**
     * Time this remarketing audience was last modified.
     */
    updated?: Date;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.
     */
    webPropertyId?: string;
}
