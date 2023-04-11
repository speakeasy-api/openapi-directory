import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInformation } from "./contactinformation";
import { DealServingMetadata } from "./dealservingmetadata";
import { DealTerms } from "./dealterms";
import { DeliveryControl } from "./deliverycontrol";
import { PrivateData } from "./privatedata";
import { SharedTargeting } from "./sharedtargeting";
/**
 * A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
 */
export declare class MarketplaceDeal extends SpeakeasyBase {
    buyerPrivateData?: PrivateData;
    /**
     * The time (ms since epoch) of the deal creation. (readonly)
     */
    creationTimeMs?: string;
    /**
     * Specifies the creative pre-approval policy (buyer-readonly)
     */
    creativePreApprovalPolicy?: string;
    /**
     * Specifies whether the creative is safeFrame compatible (buyer-readonly)
     */
    creativeSafeFrameCompatibility?: string;
    /**
     * A unique deal-id for the deal (readonly).
     */
    dealId?: string;
    dealServingMetadata?: DealServingMetadata;
    deliveryControl?: DeliveryControl;
    /**
     * The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly)
     */
    externalDealId?: string;
    /**
     * Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
     */
    flightEndTimeMs?: string;
    /**
     * Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
     */
    flightStartTimeMs?: string;
    /**
     * Description for the deal terms. (buyer-readonly)
     */
    inventoryDescription?: string;
    /**
     * Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products.
     */
    isRfpTemplate?: boolean;
    /**
     * True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action)
     */
    isSetupComplete?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal".
     */
    kind?: string;
    /**
     * The time (ms since epoch) when the deal was last updated. (readonly)
     */
    lastUpdateTimeMs?: string;
    makegoodRequestedReason?: string;
    /**
     * The name of the deal. (updatable)
     */
    name?: string;
    /**
     * The product-id from which this deal was created. (readonly, except on create)
     */
    productId?: string;
    /**
     * The revision number of the product that the deal was created from (readonly, except on create)
     */
    productRevisionNumber?: string;
    /**
     * Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly)
     */
    programmaticCreativeSource?: string;
    proposalId?: string;
    /**
     * Optional Seller contact information for the deal (buyer-readonly)
     */
    sellerContacts?: ContactInformation[];
    /**
     * The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. (updatable)
     */
    sharedTargetings?: SharedTargeting[];
    /**
     * The syndication product associated with the deal. (readonly, except on create)
     */
    syndicationProduct?: string;
    terms?: DealTerms;
    webPropertyCode?: string;
}
