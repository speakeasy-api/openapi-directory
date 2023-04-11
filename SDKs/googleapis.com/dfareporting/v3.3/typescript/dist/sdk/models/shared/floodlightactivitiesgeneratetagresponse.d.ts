import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Floodlight Activity GenerateTag Response
 */
export declare class FloodlightActivitiesGenerateTagResponse extends SpeakeasyBase {
    /**
     * Generated tag for this Floodlight activity. For global site tags, this is the event snippet.
     */
    floodlightActivityTag?: string;
    /**
     * The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more.
     */
    globalSiteTagGlobalSnippet?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse".
     */
    kind?: string;
}
