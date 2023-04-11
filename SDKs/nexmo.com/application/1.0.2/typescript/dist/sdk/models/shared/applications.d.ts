import { SpeakeasyBase } from "../../../internal/utils";
import { Embedded } from "./embedded";
import { Links } from "./links";
/**
 * OK
 */
export declare class Applications extends SpeakeasyBase {
    embedded: Embedded;
    /**
     * A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
     */
    links: Links;
    /**
     * The number of items associated with your account.
     */
    count: number;
    /**
     * The offset from the first page.
     */
    pageIndex: number;
    /**
     * The number of items returned on each call to this endpoint. The default is 10 records.
     */
    pageSize: number;
}
