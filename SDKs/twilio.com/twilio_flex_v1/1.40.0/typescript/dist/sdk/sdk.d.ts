import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://flex-api.twilio.com"];
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
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    createChannel(req: operations.CreateChannelCreateChannelRequest, security: operations.CreateChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    createFlexFlow(req: operations.CreateFlexFlowCreateFlexFlowRequest, security: operations.CreateFlexFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateFlexFlowResponse>;
    /**
     * Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
     */
    createInsightsAssessments(req: operations.CreateInsightsAssessmentsRequest, security: operations.CreateInsightsAssessmentsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInsightsAssessmentsResponse>;
    /**
     * To create a comment assessment for a conversation
     */
    createInsightsAssessmentsComment(req: operations.CreateInsightsAssessmentsCommentRequest, security: operations.CreateInsightsAssessmentsCommentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInsightsAssessmentsCommentResponse>;
    /**
     * To create a Questionnaire
     */
    createInsightsQuestionnaires(req: operations.CreateInsightsQuestionnairesRequest, security: operations.CreateInsightsQuestionnairesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInsightsQuestionnairesResponse>;
    /**
     * To create a category for Questions
     */
    createInsightsQuestionnairesCategory(req: operations.CreateInsightsQuestionnairesCategoryRequest, security: operations.CreateInsightsQuestionnairesCategorySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInsightsQuestionnairesCategoryResponse>;
    /**
     * To create a question for a Category
     */
    createInsightsQuestionnairesQuestion(req: operations.CreateInsightsQuestionnairesQuestionRequest, security: operations.CreateInsightsQuestionnairesQuestionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInsightsQuestionnairesQuestionResponse>;
    /**
     * To obtain session details for fetching reports and dashboards
     */
    createInsightsSession(req: operations.CreateInsightsSessionRequest, security: operations.CreateInsightsSessionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInsightsSessionResponse>;
    /**
     * Create a new Interaction.
     */
    createInteraction(req: operations.CreateInteractionCreateInteractionRequest, security: operations.CreateInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInteractionResponse>;
    /**
     * Invite an Agent or a TaskQueue to a Channel.
     */
    createInteractionChannelInvite(req: operations.CreateInteractionChannelInviteRequest, security: operations.CreateInteractionChannelInviteSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInteractionChannelInviteResponse>;
    /**
     * Add a Participant to a Channel.
     */
    createInteractionChannelParticipant(req: operations.CreateInteractionChannelParticipantRequest, security: operations.CreateInteractionChannelParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInteractionChannelParticipantResponse>;
    createWebChannel(req: operations.CreateWebChannelCreateWebChannelRequest, security: operations.CreateWebChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWebChannelResponse>;
    deleteChannel(req: operations.DeleteChannelRequest, security: operations.DeleteChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    deleteFlexFlow(req: operations.DeleteFlexFlowRequest, security: operations.DeleteFlexFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFlexFlowResponse>;
    /**
     * To delete the questionnaire
     */
    deleteInsightsQuestionnaires(req: operations.DeleteInsightsQuestionnairesRequest, security: operations.DeleteInsightsQuestionnairesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteInsightsQuestionnairesResponse>;
    deleteInsightsQuestionnairesCategory(req: operations.DeleteInsightsQuestionnairesCategoryRequest, security: operations.DeleteInsightsQuestionnairesCategorySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteInsightsQuestionnairesCategoryResponse>;
    deleteInsightsQuestionnairesQuestion(req: operations.DeleteInsightsQuestionnairesQuestionRequest, security: operations.DeleteInsightsQuestionnairesQuestionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteInsightsQuestionnairesQuestionResponse>;
    deleteWebChannel(req: operations.DeleteWebChannelRequest, security: operations.DeleteWebChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteWebChannelResponse>;
    fetchChannel(req: operations.FetchChannelRequest, security: operations.FetchChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchChannelResponse>;
    fetchConfiguration(req: operations.FetchConfigurationRequest, security: operations.FetchConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationResponse>;
    fetchFlexFlow(req: operations.FetchFlexFlowRequest, security: operations.FetchFlexFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFlexFlowResponse>;
    /**
     * To get the Questionnaire Detail
     */
    fetchInsightsQuestionnaires(req: operations.FetchInsightsQuestionnairesRequest, security: operations.FetchInsightsQuestionnairesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInsightsQuestionnairesResponse>;
    /**
     * To get the Segments of an Account
     */
    fetchInsightsSegments(req: operations.FetchInsightsSegmentsRequest, security: operations.FetchInsightsSegmentsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInsightsSegmentsResponse>;
    /**
     * To get the Answer Set Settings for an Account
     */
    fetchInsightsSettingsAnswersets(req: operations.FetchInsightsSettingsAnswersetsRequest, security: operations.FetchInsightsSettingsAnswersetsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInsightsSettingsAnswersetsResponse>;
    /**
     * To get the Comment Settings for an Account
     */
    fetchInsightsSettingsComment(req: operations.FetchInsightsSettingsCommentRequest, security: operations.FetchInsightsSettingsCommentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInsightsSettingsCommentResponse>;
    /**
     * This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
     */
    fetchInsightsUserRoles(req: operations.FetchInsightsUserRolesRequest, security: operations.FetchInsightsUserRolesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInsightsUserRolesResponse>;
    fetchInteraction(req: operations.FetchInteractionRequest, security: operations.FetchInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInteractionResponse>;
    /**
     * Fetch a Channel for an Interaction.
     */
    fetchInteractionChannel(req: operations.FetchInteractionChannelRequest, security: operations.FetchInteractionChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInteractionChannelResponse>;
    fetchWebChannel(req: operations.FetchWebChannelRequest, security: operations.FetchWebChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWebChannelResponse>;
    listChannel(req: operations.ListChannelRequest, security: operations.ListChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListChannelResponse>;
    listFlexFlow(req: operations.ListFlexFlowRequest, security: operations.ListFlexFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFlexFlowResponse>;
    /**
     * Get assessments done for a conversation by logged in user
     */
    listInsightsAssessments(req: operations.ListInsightsAssessmentsRequest, security: operations.ListInsightsAssessmentsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInsightsAssessmentsResponse>;
    /**
     * To create a comment assessment for a conversation
     */
    listInsightsAssessmentsComment(req: operations.ListInsightsAssessmentsCommentRequest, security: operations.ListInsightsAssessmentsCommentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInsightsAssessmentsCommentResponse>;
    /**
     * To get conversation with segment id
     */
    listInsightsConversations(req: operations.ListInsightsConversationsRequest, security: operations.ListInsightsConversationsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInsightsConversationsResponse>;
    /**
     * To get all questionnaires with questions
     */
    listInsightsQuestionnaires(req: operations.ListInsightsQuestionnairesRequest, security: operations.ListInsightsQuestionnairesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInsightsQuestionnairesResponse>;
    /**
     * To get all the categories
     */
    listInsightsQuestionnairesCategory(req: operations.ListInsightsQuestionnairesCategoryRequest, security: operations.ListInsightsQuestionnairesCategorySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInsightsQuestionnairesCategoryResponse>;
    /**
     * To get all the question for the given categories
     */
    listInsightsQuestionnairesQuestion(req: operations.ListInsightsQuestionnairesQuestionRequest, security: operations.ListInsightsQuestionnairesQuestionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInsightsQuestionnairesQuestionResponse>;
    /**
     * To get segments for given reservation Ids
     */
    listInsightsSegments(req: operations.ListInsightsSegmentsRequest, security: operations.ListInsightsSegmentsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInsightsSegmentsResponse>;
    /**
     * List all Channels for an Interaction.
     */
    listInteractionChannel(req: operations.ListInteractionChannelRequest, security: operations.ListInteractionChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInteractionChannelResponse>;
    /**
     * List all Invites for a Channel.
     */
    listInteractionChannelInvite(req: operations.ListInteractionChannelInviteRequest, security: operations.ListInteractionChannelInviteSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInteractionChannelInviteResponse>;
    /**
     * List all Participants for a Channel.
     */
    listInteractionChannelParticipant(req: operations.ListInteractionChannelParticipantRequest, security: operations.ListInteractionChannelParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInteractionChannelParticipantResponse>;
    listWebChannel(req: operations.ListWebChannelRequest, security: operations.ListWebChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWebChannelResponse>;
    updateFlexFlow(req: operations.UpdateFlexFlowRequest, security: operations.UpdateFlexFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateFlexFlowResponse>;
    /**
     * Update a specific Assessment assessed earlier
     */
    updateInsightsAssessments(req: operations.UpdateInsightsAssessmentsRequest, security: operations.UpdateInsightsAssessmentsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateInsightsAssessmentsResponse>;
    /**
     * To update the questionnaire
     */
    updateInsightsQuestionnaires(req: operations.UpdateInsightsQuestionnairesRequest, security: operations.UpdateInsightsQuestionnairesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateInsightsQuestionnairesResponse>;
    /**
     * To update the category for Questions
     */
    updateInsightsQuestionnairesCategory(req: operations.UpdateInsightsQuestionnairesCategoryRequest, security: operations.UpdateInsightsQuestionnairesCategorySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateInsightsQuestionnairesCategoryResponse>;
    /**
     * To update the question
     */
    updateInsightsQuestionnairesQuestion(req: operations.UpdateInsightsQuestionnairesQuestionRequest, security: operations.UpdateInsightsQuestionnairesQuestionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateInsightsQuestionnairesQuestionResponse>;
    /**
     * Update an existing Interaction Channel.
     */
    updateInteractionChannel(req: operations.UpdateInteractionChannelRequest, security: operations.UpdateInteractionChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateInteractionChannelResponse>;
    /**
     * Update an existing Channel Participant.
     */
    updateInteractionChannelParticipant(req: operations.UpdateInteractionChannelParticipantRequest, security: operations.UpdateInteractionChannelParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateInteractionChannelParticipantResponse>;
    updateWebChannel(req: operations.UpdateWebChannelRequest, security: operations.UpdateWebChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWebChannelResponse>;
}
