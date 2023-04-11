import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelProfileDetails } from "./channelprofiledetails";
import { MembershipsDetails } from "./membershipsdetails";
export declare class MemberSnippet extends SpeakeasyBase {
    /**
     * The id of the channel that's offering memberships.
     */
    creatorChannelId?: string;
    memberDetails?: ChannelProfileDetails;
    membershipsDetails?: MembershipsDetails;
}
