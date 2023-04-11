import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataLabelMatcher } from "./metadatalabelmatcher";
/**
 * A definition of a matcher that selects endpoints to which the policies should be applied.
 */
export declare class EndpointMatcher extends SpeakeasyBase {
    /**
     * The matcher that is based on node metadata presented by xDS clients.
     */
    metadataLabelMatcher?: MetadataLabelMatcher;
}
