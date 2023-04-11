import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalAccount } from "./externalaccount";
/**
 * A list of External Account objects
 */
export declare class ExternalAccountList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: ExternalAccount[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
