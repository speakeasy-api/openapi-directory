import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingSettings } from "./shippingsettings";
/**
 * A batch entry encoding a single non-batch shippingsettings request.
 */
export declare class ShippingsettingsCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * The ID of the account for which to get/update account shipping settings.
     */
    accountId?: string;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`" - "`update`"
     */
    method?: string;
    /**
     * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
     */
    shippingSettings?: ShippingSettings;
}
