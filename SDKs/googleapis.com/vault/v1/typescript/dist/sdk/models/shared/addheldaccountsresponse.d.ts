import { SpeakeasyBase } from "../../../internal/utils";
import { AddHeldAccountResult } from "./addheldaccountresult";
/**
 * Response for batch create held accounts.
 */
export declare class AddHeldAccountsResponse extends SpeakeasyBase {
    /**
     * The list of responses, in the same order as the batch request.
     */
    responses?: AddHeldAccountResult[];
}
