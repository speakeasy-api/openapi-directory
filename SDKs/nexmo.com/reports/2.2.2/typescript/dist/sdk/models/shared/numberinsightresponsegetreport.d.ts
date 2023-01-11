import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { ProductNiEnum } from "./productnienum";
import { RequestStatusEnum } from "./requeststatusenum";
/**
 * Number Insight
**/
export declare class NumberInsightResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    network?: string;
    number?: string;
    product?: ProductNiEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
}
