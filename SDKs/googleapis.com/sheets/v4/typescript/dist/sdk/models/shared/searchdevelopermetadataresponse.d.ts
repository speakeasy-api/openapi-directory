import { SpeakeasyBase } from "../../../internal/utils";
import { MatchedDeveloperMetadata } from "./matcheddevelopermetadata";
/**
 * A reply to a developer metadata search request.
 */
export declare class SearchDeveloperMetadataResponse extends SpeakeasyBase {
    /**
     * The metadata matching the criteria of the search request.
     */
    matchedDeveloperMetadata?: MatchedDeveloperMetadata[];
}
