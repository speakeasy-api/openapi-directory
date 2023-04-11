import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Version } from "./googlecloudprivatecatalogproducerv1beta1version";
/**
 * Successful response
 */
export declare class GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse extends SpeakeasyBase {
    /**
     * A pagination token returned from a previous call to ListProducts
     *
     * @remarks
     * that indicates where the listing should continue from.
     * This field is optional.
     */
    nextPageToken?: string;
    /**
     * The `VersiVersionon` returned from the list call.
     */
    versions?: GoogleCloudPrivatecatalogproducerV1beta1Version[];
}
