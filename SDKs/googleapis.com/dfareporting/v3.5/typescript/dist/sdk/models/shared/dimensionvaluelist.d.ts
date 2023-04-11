import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Represents the list of DimensionValue resources.
 */
export declare class DimensionValueList extends SpeakeasyBase {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The dimension values returned in this response.
     */
    items?: DimensionValue[];
    /**
     * The kind of list this is, in this case dfareporting#dimensionValueList.
     */
    kind?: string;
    /**
     * Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
}
