import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyAutomatedTopup } from "./apikeyautomatedtopup";
import { ApiKeyCurrentPurchase } from "./apikeycurrentpurchase";
import { ApiKeyDailyLimit } from "./apikeydailylimit";
import { ApiKeyDatasets } from "./apikeydatasets";
import { ApiKeyIndividualLimit } from "./apikeyindividuallimit";
import { ApiKeyNotifications } from "./apikeynotifications";
export declare class ApiKeyDetails extends SpeakeasyBase {
    /**
     * A list of allowed URLs. An empty list means that allowed URLs are disabled.
     */
    allowedUrls: string[];
    /**
     * Automated topup status
     */
    automatedTopups: ApiKeyAutomatedTopup;
    /**
     * Current balance purchases attached to key.
     */
    currentPurchases: ApiKeyCurrentPurchase[];
    dailyLimit: ApiKeyDailyLimit;
    /**
     * Indicates which datasets are available and added by default to the address responses
     */
    datasets?: ApiKeyDatasets;
    individualLimit: ApiKeyIndividualLimit;
    lookupsRemaining: number;
    notifications?: ApiKeyNotifications;
}
