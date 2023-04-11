import { SpeakeasyBase } from "../../../internal/utils";
import { QuoteBaseVO } from "./quotebasevo";
import { RfqItemBaseVO } from "./rfqitembasevo";
/**
 * Java type: com.noosh.nooshapi.vo.RfqDetailsVO
 */
export declare class RfqDetailsVO extends SpeakeasyBase {
    comments?: string;
    description?: string;
    proposedCompletionDate?: Date;
    quoteDueDate?: Date;
    quotes?: QuoteBaseVO[];
    receivedDate?: Date;
    recipientName?: string;
    requestorName?: string;
    rfqId?: number;
    rfqItems?: RfqItemBaseVO[];
    rfqTitle?: string;
    status?: string;
}
