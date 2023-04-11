import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a name-pair value for a single label.
 */
export declare class EndpointMatcherMetadataLabelMatcherMetadataLabels extends SpeakeasyBase {
    /**
     * Required. Label name presented as key in xDS Node Metadata.
     */
    labelName?: string;
    /**
     * Required. Label value presented as value corresponding to the above key, in xDS Node Metadata.
     */
    labelValue?: string;
}
