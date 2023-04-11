import { SpeakeasyBase } from "../../../internal/utils";
import { ListSourceAccountResponseV2Links } from "./listsourceaccountresponsev2links";
import { PagedUserResponsePage } from "./pageduserresponsepage";
import { SourceAccountResponseV2 } from "./sourceaccountresponsev2";
/**
 * List Source Accounts Response Object
 */
export declare class ListSourceAccountResponseV2 extends SpeakeasyBase {
    content?: SourceAccountResponseV2[];
    links?: ListSourceAccountResponseV2Links[];
    page?: PagedUserResponsePage;
}
