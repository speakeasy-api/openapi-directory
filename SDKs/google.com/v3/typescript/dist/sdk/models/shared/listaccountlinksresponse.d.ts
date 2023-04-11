import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLink } from "./accountlink";
/**
 * Response message for AccountLinkService.ListAccountLinks.
 */
export declare class ListAccountLinksResponse extends SpeakeasyBase {
    /**
     * A list of all account links associated with the Hotel Center account being queried.
     */
    accountLinks?: AccountLink[];
}
