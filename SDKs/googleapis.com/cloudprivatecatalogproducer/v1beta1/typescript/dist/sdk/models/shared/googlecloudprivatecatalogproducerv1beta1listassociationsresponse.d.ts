import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPrivatecatalogproducerV1beta1Association } from "./googlecloudprivatecatalogproducerv1beta1association";
/**
 * Successful response
 */
export declare class GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse extends SpeakeasyBase {
    /**
     * The returned `Association` resources from the list call.
     */
    associations?: GoogleCloudPrivatecatalogproducerV1beta1Association[];
    /**
     * A pagination token returned from a previous call to
     *
     * @remarks
     * `ListAssociations` that indicates where the listing should continue from.
     * This field is optional.
     */
    nextPageToken?: string;
}
