import { SpeakeasyBase } from "../../../internal/utils";
import { AccountResource } from "./accountresource";
/**
 * Successful response to get a single account.
 *
 * @remarks
 *
 */
export declare class GetAccountResponse extends SpeakeasyBase {
    /**
     * The account returned in this response.
     *
     * @remarks
     *
     */
    data: AccountResource;
}
