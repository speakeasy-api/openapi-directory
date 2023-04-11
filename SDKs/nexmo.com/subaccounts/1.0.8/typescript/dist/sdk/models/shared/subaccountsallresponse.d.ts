import { SpeakeasyBase } from "../../../internal/utils";
import { SubaccountResponse } from "./subaccountresponse";
export declare class SubaccountsAllResponseEmbedded extends SpeakeasyBase {
    primaryAccount?: SubaccountResponse;
    subaccounts?: SubaccountResponse[];
}
/**
 * Subaccounts response
 */
export declare class SubaccountsAllResponse extends SpeakeasyBase {
    embedded?: SubaccountsAllResponseEmbedded;
}
