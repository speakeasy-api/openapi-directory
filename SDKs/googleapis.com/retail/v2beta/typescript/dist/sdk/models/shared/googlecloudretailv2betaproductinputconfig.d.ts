import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";
import { GoogleCloudRetailV2betaGcsSource } from "./googlecloudretailv2betagcssource";
import { GoogleCloudRetailV2betaProductInlineSourceInput } from "./googlecloudretailv2betaproductinlinesource";
/**
 * The input config source for products.
 */
export declare class GoogleCloudRetailV2betaProductInputConfigInput extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;
    /**
     * Google Cloud Storage location for input content.
     */
    gcsSource?: GoogleCloudRetailV2betaGcsSource;
    /**
     * The inline source for the input config for ImportProducts method.
     */
    productInlineSource?: GoogleCloudRetailV2betaProductInlineSourceInput;
}
