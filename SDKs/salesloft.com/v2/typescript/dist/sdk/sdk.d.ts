import { Accounts } from "./accounts";
import { AccountStages } from "./accountstages";
import { AccountTiers } from "./accounttiers";
import { AccountUpsert } from "./accountupsert";
import { ActionDetailsCallInstructions } from "./actiondetailscallinstructions";
import { Actions } from "./actions";
import { Activities } from "./activities";
import { ActivityHistories } from "./activityhistories";
import { BulkJobs } from "./bulkjobs";
import { BulkJobsJobData } from "./bulkjobsjobdata";
import { BulkJobsResults } from "./bulkjobsresults";
import { CadenceExports } from "./cadenceexports";
import { CadenceImports } from "./cadenceimports";
import { CadenceMemberships } from "./cadencememberships";
import { Cadences } from "./cadences";
import { CalendarEvents } from "./calendarevents";
import { CallDataRecords } from "./calldatarecords";
import { CallDispositions } from "./calldispositions";
import { CallerIDs } from "./callerids";
import { Calls } from "./calls";
import { CallSentiments } from "./callsentiments";
import { ConversationsCalls } from "./conversationscalls";
import { CRMActivities } from "./crmactivities";
import { CRMActivityFields } from "./crmactivityfields";
import { CrmUsers } from "./crmusers";
import { CustomFields } from "./customfields";
import { Emails } from "./emails";
import { EmailTemplateAttachments } from "./emailtemplateattachments";
import { EmailTemplates } from "./emailtemplates";
import { ExternalEmails } from "./externalemails";
import { Groups } from "./groups";
import { Imports } from "./imports";
import { LiveFeedItems } from "./livefeeditems";
import { LiveWebsiteTrackingParameters } from "./livewebsitetrackingparameters";
import { Me } from "./me";
import { Meetings } from "./meetings";
import { MeetingSettings } from "./meetingsettings";
import { MeetingsSettingsSearches } from "./meetingssettingssearches";
import { MimeEmailPayloads } from "./mimeemailpayloads";
import { Notes } from "./notes";
import { OngoingActions } from "./ongoingactions";
import { PendingEmails } from "./pendingemails";
import { People } from "./people";
import { PersonStages } from "./personstages";
import { PersonUpsert } from "./personupsert";
import { PhoneNumberAssignments } from "./phonenumberassignments";
import { RecordingSettings } from "./recordingsettings";
import { SavedListViews } from "./savedlistviews";
import { Steps } from "./steps";
import { Successes } from "./successes";
import { Tags } from "./tags";
import { Tasks } from "./tasks";
import { Team } from "./team";
import { TeamTemplateAttachments } from "./teamtemplateattachments";
import { TeamTemplates } from "./teamtemplates";
import { Users } from "./users";
import { WebhookSubscriptions } from "./webhooksubscriptions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.salesloft.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * SalesLoft helps transform sales teams into modern sales organizations  - converting more target accounts into customer accounts
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Account Stage Management
     */
    accountStages: AccountStages;
    /**
     * Account Tier Information
     */
    accountTiers: AccountTiers;
    /**
     * Account Upsert
     */
    accountUpsert: AccountUpsert;
    /**
     * Account Management
     */
    accounts: Accounts;
    /**
     * Actions - Call Instructions
     */
    actionDetailsCallInstructions: ActionDetailsCallInstructions;
    /**
     * Actions
     */
    actions: Actions;
    /**
     * Activities
     */
    activities: Activities;
    /**
     * Activity Histories
     */
    activityHistories: ActivityHistories;
    /**
     * Bulk Jobs
     */
    bulkJobs: BulkJobs;
    /**
     * Bulk Jobs - Job Data
     */
    bulkJobsJobData: BulkJobsJobData;
    /**
     * Bulk Jobs - Results
     */
    bulkJobsResults: BulkJobsResults;
    /**
     * CRM Activity Management
     */
    crmActivities: CRMActivities;
    /**
     * CRM Activity Fields
     */
    crmActivityFields: CRMActivityFields;
    /**
     * Cadence Exports
     */
    cadenceExports: CadenceExports;
    /**
     * Cadence Importing
     */
    cadenceImports: CadenceImports;
    /**
     * Cadence Membership
     */
    cadenceMemberships: CadenceMemberships;
    /**
     * Cadence Management
     */
    cadences: Cadences;
    /**
     * Calendar Events
     */
    calendarEvents: CalendarEvents;
    /**
     * Call Data Record Management
     */
    callDataRecords: CallDataRecords;
    /**
     * Call Dispositions
     */
    callDispositions: CallDispositions;
    /**
     * Call Sentiments
     */
    callSentiments: CallSentiments;
    /**
     * Caller ID Information
     */
    callerIDs: CallerIDs;
    /**
     * Call Management
     */
    calls: Calls;
    /**
     * Conversations Calls
     */
    conversationsCalls: ConversationsCalls;
    /**
     * Crm Users
     */
    crmUsers: CrmUsers;
    /**
     * Custom Field Management
     */
    customFields: CustomFields;
    /**
     * Email Template Attachments
     */
    emailTemplateAttachments: EmailTemplateAttachments;
    /**
     * Email Templates Management
     */
    emailTemplates: EmailTemplates;
    /**
     * Email Management
     */
    emails: Emails;
    /**
     * External Emails
     */
    externalEmails: ExternalEmails;
    /**
     * Group Management
     */
    groups: Groups;
    /**
     * Import Management
     */
    imports: Imports;
    /**
     * Live Feed Items
     */
    liveFeedItems: LiveFeedItems;
    /**
     * Live Website Tracking Parameters
     */
    liveWebsiteTrackingParameters: LiveWebsiteTrackingParameters;
    /**
     * User Information
     */
    me: Me;
    /**
     * Meetings Settings
     */
    meetingSettings: MeetingSettings;
    /**
     * Meetings
     */
    meetings: Meetings;
    /**
     * Meetings Settings - Searches
     */
    meetingsSettingsSearches: MeetingsSettingsSearches;
    /**
     * MIME content for email
     */
    mimeEmailPayloads: MimeEmailPayloads;
    /**
     * Note Management
     */
    notes: Notes;
    /**
     * Ongoing Actions
     */
    ongoingActions: OngoingActions;
    /**
     * Pending Emails
     */
    pendingEmails: PendingEmails;
    /**
     * Person Management
     */
    people: People;
    /**
     * Person Stage Management
     */
    personStages: PersonStages;
    /**
     * Person Upsert
     */
    personUpsert: PersonUpsert;
    /**
     * Phone Number Assignments
     */
    phoneNumberAssignments: PhoneNumberAssignments;
    /**
     * Recording Settings Information
     */
    recordingSettings: RecordingSettings;
    /**
     * Saved List Views
     */
    savedListViews: SavedListViews;
    /**
     * Steps
     */
    steps: Steps;
    /**
     * Success Management
     */
    successes: Successes;
    /**
     * Tags
     */
    tags: Tags;
    /**
     * Tasks
     */
    tasks: Tasks;
    /**
     * Team Information
     */
    team: Team;
    /**
     * Team Template Attachments
     */
    teamTemplateAttachments: TeamTemplateAttachments;
    /**
     * Team Template Management
     */
    teamTemplates: TeamTemplates;
    /**
     * User Management
     */
    users: Users;
    /**
     * Webhook Subscriptions
     */
    webhookSubscriptions: WebhookSubscriptions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
