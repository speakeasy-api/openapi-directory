import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2ProductInlineSourceInput } from "./googlecloudretailv2productinlinesource";
/**
 * The input config source for products.
 */
export declare class GoogleCloudRetailV2ProductInputConfigInput extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigQuerySource?: GoogleCloudRetailV2BigQuerySource;
    /**
     * Google Cloud Storage location for input content.
     */
    gcsSource?: GoogleCloudRetailV2GcsSource;
    /**
     * The inline source for the input config for ImportProducts method.
     */
    productInlineSource?: GoogleCloudRetailV2ProductInlineSourceInput;
}
