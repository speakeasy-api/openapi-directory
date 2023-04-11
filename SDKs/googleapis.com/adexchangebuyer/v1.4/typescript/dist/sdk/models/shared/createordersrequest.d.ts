import { SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";
export declare class CreateOrdersRequest extends SpeakeasyBase {
    /**
     * The list of proposals to create.
     */
    proposals?: Proposal[];
    /**
     * Web property id of the seller creating these orders
     */
    webPropertyCode?: string;
}
