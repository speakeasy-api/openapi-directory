import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1betaIdea } from "./googlesearchideahubv1betaidea";
/**
 * Successful response
 */
export declare class GoogleSearchIdeahubV1betaListIdeasResponse extends SpeakeasyBase {
    /**
     * Results for the ListIdeasRequest.
     */
    ideas?: GoogleSearchIdeahubV1betaIdea[];
    /**
     * Used to fetch the next page in a subsequent request.
     */
    nextPageToken?: string;
}
