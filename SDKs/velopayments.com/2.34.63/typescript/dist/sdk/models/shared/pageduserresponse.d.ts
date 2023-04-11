import { SpeakeasyBase } from "../../../internal/utils";
import { PagedUserResponseLinks } from "./pageduserresponselinks";
import { PagedUserResponsePage } from "./pageduserresponsepage";
import { UserResponse } from "./userresponse";
/**
 * List Users Response Object
 */
export declare class PagedUserResponse extends SpeakeasyBase {
    content?: UserResponse[];
    links?: PagedUserResponseLinks[];
    page?: PagedUserResponsePage;
}
