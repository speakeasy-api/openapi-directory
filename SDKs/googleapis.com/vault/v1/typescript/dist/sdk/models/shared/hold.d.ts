import { SpeakeasyBase } from "../../../internal/utils";
import { CorpusQuery } from "./corpusquery";
import { HeldAccount } from "./heldaccount";
import { HeldOrgUnit } from "./heldorgunit";
/**
 * The service to be searched.
 */
export declare enum HoldCorpusEnum {
    CorpusTypeUnspecified = "CORPUS_TYPE_UNSPECIFIED",
    Drive = "DRIVE",
    Mail = "MAIL",
    Groups = "GROUPS",
    HangoutsChat = "HANGOUTS_CHAT",
    Voice = "VOICE"
}
/**
 * A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
 */
export declare class Hold extends SpeakeasyBase {
    /**
     * If set, the hold applies to the specified accounts and **orgUnit** must be empty.
     */
    accounts?: HeldAccount[];
    /**
     * The service to be searched.
     */
    corpus?: HoldCorpusEnum;
    /**
     * The unique immutable ID of the hold. Assigned during creation.
     */
    holdId?: string;
    /**
     * The name of the hold.
     */
    name?: string;
    /**
     * The organizational unit covered by a hold. This structure is immutable.
     */
    orgUnit?: HeldOrgUnit;
    /**
     * Service-specific options for holds.
     */
    query?: CorpusQuery;
    /**
     * The last time this hold was modified.
     */
    updateTime?: string;
}
