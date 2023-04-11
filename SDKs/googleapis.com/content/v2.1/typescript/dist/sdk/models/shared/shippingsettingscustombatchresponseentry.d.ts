import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ShippingSettings } from "./shippingsettings";
/**
 * A batch entry encoding a single non-batch shipping settings response.
 */
export declare class ShippingsettingsCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
     */
    shippingSettings?: ShippingSettings;
}
