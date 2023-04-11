import { SpeakeasyBase } from "../../../internal/utils";
import { DiscountResponse } from "./discountresponse";
import { ProductResponse } from "./productresponse";
/**
 * List of library items
 */
export declare class LibraryResponse extends SpeakeasyBase {
    deletedDiscounts?: string[];
    deletedProducts?: string[];
    discounts?: DiscountResponse[];
    fromEventLogUuid?: string;
    products?: ProductResponse[];
    untilEventLogUuid?: string;
}
