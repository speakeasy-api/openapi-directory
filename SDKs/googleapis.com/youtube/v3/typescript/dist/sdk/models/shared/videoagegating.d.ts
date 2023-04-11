import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Video game rating, if any.
 */
export declare enum VideoAgeGatingVideoGameRatingEnum {
    Anyone = "anyone",
    M15Plus = "m15Plus",
    M16Plus = "m16Plus",
    M17Plus = "m17Plus"
}
export declare class VideoAgeGating extends SpeakeasyBase {
    /**
     * Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.
     */
    alcoholContent?: boolean;
    /**
     * Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won't be present.
     */
    restricted?: boolean;
    /**
     * Video game rating, if any.
     */
    videoGameRating?: VideoAgeGatingVideoGameRatingEnum;
}
