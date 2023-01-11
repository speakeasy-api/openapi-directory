import { SpeakeasyBase } from "../../../internal/utils";
import { ProductVerifyEnum } from "./productverifyenum";
/**
 * Verify
**/
export declare class VerifyApi extends SpeakeasyBase {
    accountId: string;
    callbackUrl?: string;
    dateEnd?: Date;
    dateStart?: Date;
    includeSubaccounts?: boolean;
    network?: string;
    product: ProductVerifyEnum;
    to?: string;
}
