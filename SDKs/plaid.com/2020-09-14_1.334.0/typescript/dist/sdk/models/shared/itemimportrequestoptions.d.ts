import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to configure `/item/import` request.
 */
export declare class ItemImportRequestOptions extends SpeakeasyBase {
    /**
     * Specifies a webhook URL to associate with an Item. Plaid fires a webhook if credentials fail.
     *
     * @remarks
     *
     */
    webhook?: string;
}
