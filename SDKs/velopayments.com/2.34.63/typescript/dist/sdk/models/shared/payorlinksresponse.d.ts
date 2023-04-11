import { SpeakeasyBase } from "../../../internal/utils";
import { PayorLinksResponseLinks } from "./payorlinksresponselinks";
import { PayorLinksResponsePayors } from "./payorlinksresponsepayors";
/**
 * List Payor Links Response Object
 */
export declare class PayorLinksResponse extends SpeakeasyBase {
    links?: PayorLinksResponseLinks[];
    payors?: PayorLinksResponsePayors[];
}
