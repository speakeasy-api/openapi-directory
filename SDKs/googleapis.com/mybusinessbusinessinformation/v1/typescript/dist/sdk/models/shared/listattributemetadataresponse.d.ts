import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeMetadata } from "./attributemetadata";
/**
 * Response for AttributesService.ListAttributeMetadata.
 */
export declare class ListAttributeMetadataResponse extends SpeakeasyBase {
    /**
     * A collection of attribute metadata for the available attributes.
     */
    attributeMetadata?: AttributeMetadata[];
    /**
     * If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response.
     */
    nextPageToken?: string;
}
