import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
 */
export declare class Group extends SpeakeasyBase {
    /**
     * The descriptoin of the group
     */
    description?: string;
    /**
     * The unique id of the group. Usually 64 random alpha numerical characters, but can be anything
     */
    id: string;
    /**
     * The name of the group
     */
    name: string;
}
