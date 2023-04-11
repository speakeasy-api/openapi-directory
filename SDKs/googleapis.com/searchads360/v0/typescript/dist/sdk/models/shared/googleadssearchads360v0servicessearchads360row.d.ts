import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0CommonMetrics } from "./googleadssearchads360v0commonmetrics";
import { GoogleAdsSearchads360V0CommonSegments } from "./googleadssearchads360v0commonsegments";
import { GoogleAdsSearchads360V0CommonValue } from "./googleadssearchads360v0commonvalue";
import { GoogleAdsSearchads360V0ResourcesAdGroup } from "./googleadssearchads360v0resourcesadgroup";
import { GoogleAdsSearchads360V0ResourcesAdGroupBidModifier } from "./googleadssearchads360v0resourcesadgroupbidmodifier";
import { GoogleAdsSearchads360V0ResourcesAdGroupCriterion } from "./googleadssearchads360v0resourcesadgroupcriterion";
import { GoogleAdsSearchads360V0ResourcesBiddingStrategy } from "./googleadssearchads360v0resourcesbiddingstrategy";
import { GoogleAdsSearchads360V0ResourcesCampaign } from "./googleadssearchads360v0resourcescampaign";
import { GoogleAdsSearchads360V0ResourcesCampaignBudget } from "./googleadssearchads360v0resourcescampaignbudget";
import { GoogleAdsSearchads360V0ResourcesCampaignCriterion } from "./googleadssearchads360v0resourcescampaigncriterion";
import { GoogleAdsSearchads360V0ResourcesConversionAction } from "./googleadssearchads360v0resourcesconversionaction";
import { GoogleAdsSearchads360V0ResourcesCustomer } from "./googleadssearchads360v0resourcescustomer";
import { GoogleAdsSearchads360V0ResourcesCustomerClient } from "./googleadssearchads360v0resourcescustomerclient";
import { GoogleAdsSearchads360V0ResourcesCustomerManagerLink } from "./googleadssearchads360v0resourcescustomermanagerlink";
import { GoogleAdsSearchads360V0ResourcesKeywordView } from "./googleadssearchads360v0resourceskeywordview";
import { GoogleAdsSearchads360V0ResourcesProductGroupView } from "./googleadssearchads360v0resourcesproductgroupview";
/**
 * A returned row from the query.
 */
export declare class GoogleAdsSearchads360V0ServicesSearchAds360Row extends SpeakeasyBase {
    /**
     * An ad group.
     */
    adGroup?: GoogleAdsSearchads360V0ResourcesAdGroup;
    /**
     * Represents an ad group bid modifier.
     */
    adGroupBidModifier?: GoogleAdsSearchads360V0ResourcesAdGroupBidModifier;
    /**
     * An ad group criterion.
     */
    adGroupCriterion?: GoogleAdsSearchads360V0ResourcesAdGroupCriterion;
    /**
     * A bidding strategy.
     */
    biddingStrategy?: GoogleAdsSearchads360V0ResourcesBiddingStrategy;
    /**
     * A campaign.
     */
    campaign?: GoogleAdsSearchads360V0ResourcesCampaign;
    /**
     * A campaign budget.
     */
    campaignBudget?: GoogleAdsSearchads360V0ResourcesCampaignBudget;
    /**
     * A campaign criterion.
     */
    campaignCriterion?: GoogleAdsSearchads360V0ResourcesCampaignCriterion;
    /**
     * A conversion action.
     */
    conversionAction?: GoogleAdsSearchads360V0ResourcesConversionAction;
    /**
     * The custom columns.
     */
    customColumns?: GoogleAdsSearchads360V0CommonValue[];
    /**
     * A customer.
     */
    customer?: GoogleAdsSearchads360V0ResourcesCustomer;
    /**
     * A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself.
     */
    customerClient?: GoogleAdsSearchads360V0ResourcesCustomerClient;
    /**
     * Represents customer-manager link relationship.
     */
    customerManagerLink?: GoogleAdsSearchads360V0ResourcesCustomerManagerLink;
    /**
     * A keyword view.
     */
    keywordView?: GoogleAdsSearchads360V0ResourcesKeywordView;
    /**
     * Metrics data.
     */
    metrics?: GoogleAdsSearchads360V0CommonMetrics;
    /**
     * A product group view.
     */
    productGroupView?: GoogleAdsSearchads360V0ResourcesProductGroupView;
    /**
     * Segment only fields.
     */
    segments?: GoogleAdsSearchads360V0CommonSegments;
}
