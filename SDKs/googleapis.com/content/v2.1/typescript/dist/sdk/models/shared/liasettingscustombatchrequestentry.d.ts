import { SpeakeasyBase } from "../../../internal/utils";
import { LiaSettings } from "./liasettings";
export declare class LiasettingsCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * The ID of the account for which to get/update account LIA settings.
     */
    accountId?: string;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * Inventory validation contact email. Required only for SetInventoryValidationContact.
     */
    contactEmail?: string;
    /**
     * Inventory validation contact name. Required only for SetInventoryValidationContact.
     */
    contactName?: string;
    /**
     * The country code. Required only for RequestInventoryVerification.
     */
    country?: string;
    /**
     * The Business Profile. Required only for RequestGmbAccess.
     */
    gmbEmail?: string;
    /**
     * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
     */
    liaSettings?: LiaSettings;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`"
     */
    method?: string;
    /**
     * The ID of POS data provider. Required only for SetPosProvider.
     */
    posDataProviderId?: string;
    /**
     * The account ID by which this merchant is known to the POS provider.
     */
    posExternalAccountId?: string;
}
