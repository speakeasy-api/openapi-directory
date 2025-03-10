import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The readonly representation of a product computed with a given resource
 *
 * @remarks
 * context.
 */
export declare class GoogleCloudPrivatecatalogV1beta1Product extends SpeakeasyBase {
    /**
     * Output only. The type of the product asset. It can be one of the
     *
     * @remarks
     * following values:
     *
     * * `google.deploymentmanager.Template`
     * * `google.cloudprivatecatalog.ListingOnly`
     */
    assetType?: string;
    /**
     * Output only. The time when the product was created.
     */
    createTime?: string;
    /**
     * Output only. The display metadata to describe the product.
     *
     * @remarks
     * The JSON schema of the metadata differs by Product.asset_type.
     * When the type is `google.deploymentmanager.Template`, the schema is as
     * follows:
     *
     * ```
     * "$schema": http://json-schema.org/draft-04/schema#
     * type: object
     * properties:
     *   name:
     *     type: string
     *     minLength: 1
     *     maxLength: 64
     *   description:
     *     type: string
     *     minLength: 1
     *     maxLength: 2048
     *   tagline:
     *     type: string
     *     minLength: 1
     *     maxLength: 100
     *   support_info:
     *     type: string
     *     minLength: 1
     *     maxLength: 2048
     *   creator:
     *     type: string
     *     minLength: 1
     *     maxLength: 100
     *   documentation:
     *     type: array
     *     items:
     *       type: object
     *       properties:
     *         url:
     *           type: string
     *           pattern:
     *           "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
     *         title:
     *           type: string
     *           minLength: 1
     *           maxLength: 64
     *         description:
     *           type: string
     *           minLength: 1
     *           maxLength: 2048
     * required:
     * - name
     * - description
     * additionalProperties: false
     *
     * ```
     *
     * When the asset type is `google.cloudprivatecatalog.ListingOnly`, the schema
     * is as follows:
     *
     * ```
     * "$schema": http://json-schema.org/draft-04/schema#
     * type: object
     * properties:
     *   name:
     *     type: string
     *     minLength: 1
     *     maxLength: 64
     *   description:
     *     type: string
     *     minLength: 1
     *     maxLength: 2048
     *   tagline:
     *     type: string
     *     minLength: 1
     *     maxLength: 100
     *   support_info:
     *     type: string
     *     minLength: 1
     *     maxLength: 2048
     *   creator:
     *     type: string
     *     minLength: 1
     *     maxLength: 100
     *   documentation:
     *     type: array
     *     items:
     *       type: object
     *       properties:
     *         url:
     *           type: string
     *           pattern:
     *           "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
     *         title:
     *           type: string
     *           minLength: 1
     *           maxLength: 64
     *         description:
     *           type: string
     *           minLength: 1
     *           maxLength: 2048
     *   signup_url:
     *     type: string
     *     pattern:
     *     "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
     * required:
     * - name
     * - description
     * - signup_url
     * additionalProperties: false
     * ```
     */
    displayMetadata?: Record<string, any>;
    /**
     * Output only. The icon URI of the product.
     */
    iconUri?: string;
    /**
     * Output only. The resource name of the target product, in the format of
     *
     * @remarks
     * `products/a-z*[a-z0-9]'.
     *
     * A unique identifier for the product under a catalog.
     */
    name?: string;
    /**
     * Output only. The time when the product was last updated.
     */
    updateTime?: string;
}
