import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
 */
export declare class ChannelAuditDetails extends SpeakeasyBase {
    /**
     * Whether or not the channel respects the community guidelines.
     */
    communityGuidelinesGoodStanding?: boolean;
    /**
     * Whether or not the channel has any unresolved claims.
     */
    contentIdClaimsGoodStanding?: boolean;
    /**
     * Whether or not the channel has any copyright strikes.
     */
    copyrightStrikesGoodStanding?: boolean;
}
