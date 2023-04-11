import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagInput } from "./googleclouddatacatalogv1tag";
/**
 * Request message for ReconcileTags.
 */
export declare class GoogleCloudDatacatalogV1ReconcileTagsRequestInput extends SpeakeasyBase {
    /**
     * If set to `true`, deletes entry tags related to a tag template not listed in the tags source from an entry. If set to `false`, unlisted tags are retained.
     */
    forceDeleteMissing?: boolean;
    /**
     * Required. The name of the tag template, which is used for reconciliation.
     */
    tagTemplate?: string;
    /**
     * A list of tags to apply to an entry. A tag can specify a tag template, which must be the template specified in the `ReconcileTagsRequest`. The sole entry and each of its columns must be mentioned at most once.
     */
    tags?: GoogleCloudDatacatalogV1TagInput[];
}
