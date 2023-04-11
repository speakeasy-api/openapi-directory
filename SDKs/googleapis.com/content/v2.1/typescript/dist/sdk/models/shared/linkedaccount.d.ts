import { SpeakeasyBase } from "../../../internal/utils";
import { LinkService } from "./linkservice";
export declare class LinkedAccount extends SpeakeasyBase {
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string;
    /**
     * List of provided services.
     */
    services?: LinkService[];
}
