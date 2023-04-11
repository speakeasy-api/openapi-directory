import { SpeakeasyBase } from "../../../internal/utils";
import { PromotionPromotionStatusDestinationStatus } from "./promotionpromotionstatusdestinationstatus";
import { PromotionPromotionStatusPromotionIssue } from "./promotionpromotionstatuspromotionissue";
/**
 * The status of the promotion.
 */
export declare class PromotionPromotionStatus extends SpeakeasyBase {
    /**
     * Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    creationDate?: string;
    /**
     * The intended destinations for the promotion.
     */
    destinationStatuses?: PromotionPromotionStatusDestinationStatus[];
    /**
     * Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    lastUpdateDate?: string;
    /**
     * A list of issues associated with the promotion.
     */
    promotionIssue?: PromotionPromotionStatusPromotionIssue[];
}
