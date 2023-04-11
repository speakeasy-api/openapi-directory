import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelMember } from "./channelmember";
/**
 * Successful response
 */
export declare class MembersResponse extends SpeakeasyBase {
    duration: string;
    /**
     * List of found members
     */
    members: ChannelMember[];
}
