import { SpeakeasyBase } from "../../../internal/utils";
import { ListSourceAccountResponseV3Links } from "./listsourceaccountresponsev3links";
import { PagedUserResponsePage } from "./pageduserresponsepage";
import { SourceAccountResponseV3 } from "./sourceaccountresponsev3";
/**
 * List Source Accounts Response Object
 */
export declare class ListSourceAccountResponseV3 extends SpeakeasyBase {
    content?: SourceAccountResponseV3[];
    links?: ListSourceAccountResponseV3Links[];
    page?: PagedUserResponsePage;
}
