import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PolicyStatusEnum {
    Pending = "pending",
    UnderReview = "under_review",
    Active = "active",
    Expired = "expired",
    Cancelled = "cancelled",
    Unresponsive = "unresponsive"
}
export declare class Policy extends SpeakeasyBase {
    id?: string;
    portalLink?: string;
    quoteId?: string;
    status?: PolicyStatusEnum;
}
