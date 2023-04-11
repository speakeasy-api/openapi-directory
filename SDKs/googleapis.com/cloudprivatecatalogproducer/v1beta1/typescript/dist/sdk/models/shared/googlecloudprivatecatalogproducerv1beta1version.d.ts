import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The producer representation of a version, which is a child resource under a
 *
 * @remarks
 * `Product` with asset data.
 */
export declare class GoogleCloudPrivatecatalogproducerV1beta1Version extends SpeakeasyBase {
    /**
     * Output only. The asset which has been validated and is ready to be
     *
     * @remarks
     * provisioned. See Version.original_asset for the schema.
     */
    asset?: Record<string, any>;
    /**
     * Output only. The time when the version was created.
     */
    createTime?: string;
    /**
     * The user-supplied description of the version. Maximum of 256 characters.
     */
    description?: string;
    /**
     * Required. The resource name of the version, in the format
     *
     * @remarks
     * `catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.
     *
     * A unique identifier for the version under a product, which can't
     * be changed after the version is created. The final segment of the name must
     * between 1 and 63 characters in length.
     */
    name?: string;
    /**
     * The user-supplied asset payload. The maximum size of the payload is 2MB.
     *
     * @remarks
     * The JSON schema of the payload is defined as:
     *
     * ```
     * type: object
     * properties:
     *   mainTemplate:
     *     type: string
     *     description: The file name of the main template and name prefix of
     *     schema file. The content of the main template should be set in the
     *     imports list. The schema file name is expected to be
     *     <mainTemplate>.schema in the imports list. required: true
     *   imports:
     *     type: array
     *     description: Import template and schema file contents. Required to have
     *     both <mainTemplate> and <mainTemplate>.schema files. required: true
     *     minItems: 2
     *     items:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *         content:
     *           type: string
     * ```
     */
    originalAsset?: Record<string, any>;
    /**
     * Output only. The time when the version was last updated.
     */
    updateTime?: string;
}
