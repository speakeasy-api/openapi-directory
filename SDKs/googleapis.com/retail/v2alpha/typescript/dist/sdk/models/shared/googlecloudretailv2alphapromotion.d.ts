import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Promotion specification.
 */
export declare class GoogleCloudRetailV2alphaPromotion extends SpeakeasyBase {
    /**
     * Promotion identifier, which is the final component of name. For example, this field is "free_gift", if name is `projects/* /locations/global/catalogs/default_catalog/promotions/free_gift`. The value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: `a-zA-Z*`. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Corresponds to Google Merchant Center property [promotion_id](https://support.google.com/merchants/answer/7050148).
     */
    promotionId?: string;
}
