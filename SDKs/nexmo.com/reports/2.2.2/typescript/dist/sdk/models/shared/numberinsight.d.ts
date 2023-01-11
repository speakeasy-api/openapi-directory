import { SpeakeasyBase } from "../../../internal/utils";
import { ProductNiEnum } from "./productnienum";
/**
 * Number Insight
**/
export declare class NumberInsight extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    network?: string;
    number?: string;
    product: ProductNiEnum;
}
