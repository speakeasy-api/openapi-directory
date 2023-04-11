import { SpeakeasyBase } from "../../../internal/utils";
import { HeldDriveQuery } from "./helddrivequery";
import { HeldGroupsQuery } from "./heldgroupsquery";
import { HeldHangoutsChatQuery } from "./heldhangoutschatquery";
import { HeldMailQuery } from "./heldmailquery";
import { HeldVoiceQuery } from "./heldvoicequery";
/**
 * Service-specific options for holds.
 */
export declare class CorpusQuery extends SpeakeasyBase {
    /**
     * Options for Drive holds.
     */
    driveQuery?: HeldDriveQuery;
    /**
     * Query options for group holds.
     */
    groupsQuery?: HeldGroupsQuery;
    /**
     * Options for Chat holds.
     */
    hangoutsChatQuery?: HeldHangoutsChatQuery;
    /**
     * Query options for Gmail holds.
     */
    mailQuery?: HeldMailQuery;
    /**
     * Options for Voice holds.
     */
    voiceQuery?: HeldVoiceQuery;
}
