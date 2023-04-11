import { SpeakeasyBase } from "../../../internal/utils";
import { QuoteBaseVO } from "./quotebasevo";
/**
 * Java type: com.noosh.nooshapi.vo.RfqSimpleVO
 */
export declare class RfqSimpleVO extends SpeakeasyBase {
    quotes?: QuoteBaseVO[];
    receivedDate?: Date;
    rfqId?: number;
    rfqTitle?: string;
    status?: string;
}
