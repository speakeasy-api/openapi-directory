import { SpeakeasyBase } from "../../../internal/utils";
import { Icon } from "./icon";
/**
 * Response message for IconService.ListIcons.
 */
export declare class ListIconsResponse extends SpeakeasyBase {
    /**
     * A list of all icons associated with the queried partner account.
     */
    icons?: Icon[];
}
