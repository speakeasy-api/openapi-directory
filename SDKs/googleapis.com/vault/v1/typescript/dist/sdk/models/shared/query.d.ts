import { SpeakeasyBase } from "../../../internal/utils";
import { AccountInfo } from "./accountinfo";
import { DriveOptions } from "./driveoptions";
import { HangoutsChatInfo } from "./hangoutschatinfo";
import { HangoutsChatOptions } from "./hangoutschatoptions";
import { MailOptions } from "./mailoptions";
import { OrgUnitInfo } from "./orgunitinfo";
import { SharedDriveInfo } from "./shareddriveinfo";
import { SitesUrlInfo } from "./sitesurlinfo";
import { TeamDriveInfo } from "./teamdriveinfo";
import { VoiceOptions } from "./voiceoptions";
/**
 * The Google Workspace service to search.
 */
export declare enum QueryCorpusEnum {
    CorpusTypeUnspecified = "CORPUS_TYPE_UNSPECIFIED",
    Drive = "DRIVE",
    Mail = "MAIL",
    Groups = "GROUPS",
    HangoutsChat = "HANGOUTS_CHAT",
    Voice = "VOICE"
}
/**
 * The data source to search.
 */
export declare enum QueryDataScopeEnum {
    DataScopeUnspecified = "DATA_SCOPE_UNSPECIFIED",
    AllData = "ALL_DATA",
    HeldData = "HELD_DATA",
    UnprocessedData = "UNPROCESSED_DATA"
}
/**
 * The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**.
 */
export declare enum QueryMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED",
    Account = "ACCOUNT",
    OrgUnit = "ORG_UNIT",
    TeamDrive = "TEAM_DRIVE",
    EntireOrg = "ENTIRE_ORG",
    Room = "ROOM",
    SitesUrl = "SITES_URL",
    SharedDrive = "SHARED_DRIVE"
}
/**
 * The search method to use.
 */
export declare enum QuerySearchMethodEnum {
    SearchMethodUnspecified = "SEARCH_METHOD_UNSPECIFIED",
    Account = "ACCOUNT",
    OrgUnit = "ORG_UNIT",
    TeamDrive = "TEAM_DRIVE",
    EntireOrg = "ENTIRE_ORG",
    Room = "ROOM",
    SitesUrl = "SITES_URL",
    SharedDrive = "SHARED_DRIVE"
}
/**
 * The query definition used for search and export.
 */
export declare class Query extends SpeakeasyBase {
    /**
     * The accounts to search
     */
    accountInfo?: AccountInfo;
    /**
     * The Google Workspace service to search.
     */
    corpus?: QueryCorpusEnum;
    /**
     * The data source to search.
     */
    dataScope?: QueryDataScopeEnum;
    /**
     * Additional options for Drive search
     */
    driveOptions?: DriveOptions;
    /**
     * The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    endTime?: string;
    /**
     * The Chat spaces to search
     */
    hangoutsChatInfo?: HangoutsChatInfo;
    /**
     * Additional options for Google Chat search
     */
    hangoutsChatOptions?: HangoutsChatOptions;
    /**
     * Additional options for Gmail search
     */
    mailOptions?: MailOptions;
    /**
     * The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**.
     */
    method?: QueryMethodEnum;
    /**
     * The organizational unit to search
     */
    orgUnitInfo?: OrgUnitInfo;
    /**
     * The search method to use.
     */
    searchMethod?: QuerySearchMethodEnum;
    /**
     * The shared drives to search
     */
    sharedDriveInfo?: SharedDriveInfo;
    /**
     * The published site URLs of new Google Sites to search
     */
    sitesUrlInfo?: SitesUrlInfo;
    /**
     * The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    startTime?: string;
    /**
     * Team Drives to search
     */
    teamDriveInfo?: TeamDriveInfo;
    /**
     * Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results.
     */
    terms?: string;
    /**
     * The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time).
     */
    timeZone?: string;
    /**
     * Additional options for Voice search
     */
    voiceOptions?: VoiceOptions;
}
