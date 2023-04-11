import { SpeakeasyBase } from "../../../internal/utils";
import { GetPayeeListResponseV3 } from "./getpayeelistresponsev3";
import { PagedPayeeResponseV3Links } from "./pagedpayeeresponsev3links";
import { PagedPayeeResponseV3Page } from "./pagedpayeeresponsev3page";
import { PagedPayeeResponseV3Summary } from "./pagedpayeeresponsev3summary";
/**
 * List Payees Response Object
 */
export declare class PagedPayeeResponseV3 extends SpeakeasyBase {
    content?: GetPayeeListResponseV3[];
    links?: PagedPayeeResponseV3Links[];
    page?: PagedPayeeResponseV3Page;
    summary?: PagedPayeeResponseV3Summary;
}
