import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1alphaIdea } from "./googlesearchideahubv1alphaidea";
/**
 * Successful response
 */
export declare class GoogleSearchIdeahubV1alphaListIdeasResponse extends SpeakeasyBase {
    /**
     * Results for the ListIdeasRequest.
     */
    ideas?: GoogleSearchIdeahubV1alphaIdea[];
    /**
     * Used to fetch the next page in a subsequent request.
     */
    nextPageToken?: string;
}
