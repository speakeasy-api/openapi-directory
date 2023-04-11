import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaBigQuerySource } from "./googlecloudretailv2alphabigquerysource";
import { GoogleCloudRetailV2alphaGcsSource } from "./googlecloudretailv2alphagcssource";
import { GoogleCloudRetailV2alphaProductInlineSourceInput } from "./googlecloudretailv2alphaproductinlinesource";
/**
 * The input config source for products.
 */
export declare class GoogleCloudRetailV2alphaProductInputConfigInput extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource;
    /**
     * Google Cloud Storage location for input content.
     */
    gcsSource?: GoogleCloudRetailV2alphaGcsSource;
    /**
     * The inline source for the input config for ImportProducts method.
     */
    productInlineSource?: GoogleCloudRetailV2alphaProductInlineSourceInput;
}
