import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { ProductVerifyEnum } from "./productverifyenum";
import { RequestStatusEnum } from "./requeststatusenum";
/**
 * Verify
**/
export declare class VerifyApiResponseGetReport extends SpeakeasyBase {
    links?: Links;
    accountId?: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    itemsCount?: number;
    network?: string;
    product?: ProductVerifyEnum;
    receiveTime?: Date;
    requestId?: string;
    requestStatus?: RequestStatusEnum;
    startTime?: Date;
    to?: string;
}
