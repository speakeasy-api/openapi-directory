import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountsCustomBatchRequestEntryLinkRequest extends SpeakeasyBase {
    /**
     * Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`"
     */
    action?: string;
    /**
     * Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`"
     */
    linkType?: string;
    /**
     * The ID of the linked account.
     */
    linkedAccountId?: string;
}
