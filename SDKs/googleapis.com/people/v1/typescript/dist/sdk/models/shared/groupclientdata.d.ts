import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
 */
export declare class GroupClientData extends SpeakeasyBase {
    /**
     * The client specified key of the client data.
     */
    key?: string;
    /**
     * The client specified value of the client data.
     */
    value?: string;
}
