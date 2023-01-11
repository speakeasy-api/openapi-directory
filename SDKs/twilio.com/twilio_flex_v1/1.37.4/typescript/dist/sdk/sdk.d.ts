import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://flex-api.twilio.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * createAssessments - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
    **/
    createAssessments(req: operations.CreateAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssessmentsResponse>;
    createChannel(req: operations.CreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    createFlexFlow(req: operations.CreateFlexFlowRequest, config?: AxiosRequestConfig): Promise<operations.CreateFlexFlowResponse>;
    /**
     * createGooddata - To create a GoodData Session id to access GoodData dashboards
    **/
    createGooddata(req: operations.CreateGooddataRequest, config?: AxiosRequestConfig): Promise<operations.CreateGooddataResponse>;
    /**
     * createInteraction - Create a new Interaction.
    **/
    createInteraction(req: operations.CreateInteractionRequest, config?: AxiosRequestConfig): Promise<operations.CreateInteractionResponse>;
    /**
     * createInteractionChannelInvite - Invite an Agent or a TaskQueue to a Channel.
    **/
    createInteractionChannelInvite(req: operations.CreateInteractionChannelInviteRequest, config?: AxiosRequestConfig): Promise<operations.CreateInteractionChannelInviteResponse>;
    /**
     * createInteractionChannelParticipant - Add a Participant to a Channel.
    **/
    createInteractionChannelParticipant(req: operations.CreateInteractionChannelParticipantRequest, config?: AxiosRequestConfig): Promise<operations.CreateInteractionChannelParticipantResponse>;
    createWebChannel(req: operations.CreateWebChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebChannelResponse>;
    deleteChannel(req: operations.DeleteChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    deleteFlexFlow(req: operations.DeleteFlexFlowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlexFlowResponse>;
    deleteWebChannel(req: operations.DeleteWebChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebChannelResponse>;
    fetchChannel(req: operations.FetchChannelRequest, config?: AxiosRequestConfig): Promise<operations.FetchChannelResponse>;
    fetchConfiguration(req: operations.FetchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationResponse>;
    fetchFlexFlow(req: operations.FetchFlexFlowRequest, config?: AxiosRequestConfig): Promise<operations.FetchFlexFlowResponse>;
    fetchInteraction(req: operations.FetchInteractionRequest, config?: AxiosRequestConfig): Promise<operations.FetchInteractionResponse>;
    /**
     * fetchInteractionChannel - Fetch a Channel for an Interaction.
    **/
    fetchInteractionChannel(req: operations.FetchInteractionChannelRequest, config?: AxiosRequestConfig): Promise<operations.FetchInteractionChannelResponse>;
    /**
     * fetchUserRoles - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
    **/
    fetchUserRoles(req: operations.FetchUserRolesRequest, config?: AxiosRequestConfig): Promise<operations.FetchUserRolesResponse>;
    fetchWebChannel(req: operations.FetchWebChannelRequest, config?: AxiosRequestConfig): Promise<operations.FetchWebChannelResponse>;
    listChannel(req: operations.ListChannelRequest, config?: AxiosRequestConfig): Promise<operations.ListChannelResponse>;
    listFlexFlow(req: operations.ListFlexFlowRequest, config?: AxiosRequestConfig): Promise<operations.ListFlexFlowResponse>;
    /**
     * listInteractionChannel - List all Channels for an Interaction.
    **/
    listInteractionChannel(req: operations.ListInteractionChannelRequest, config?: AxiosRequestConfig): Promise<operations.ListInteractionChannelResponse>;
    /**
     * listInteractionChannelInvite - List all Invites for a Channel.
    **/
    listInteractionChannelInvite(req: operations.ListInteractionChannelInviteRequest, config?: AxiosRequestConfig): Promise<operations.ListInteractionChannelInviteResponse>;
    /**
     * listInteractionChannelParticipant - List all Participants for a Channel.
    **/
    listInteractionChannelParticipant(req: operations.ListInteractionChannelParticipantRequest, config?: AxiosRequestConfig): Promise<operations.ListInteractionChannelParticipantResponse>;
    listWebChannel(req: operations.ListWebChannelRequest, config?: AxiosRequestConfig): Promise<operations.ListWebChannelResponse>;
    updateFlexFlow(req: operations.UpdateFlexFlowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFlexFlowResponse>;
    /**
     * updateInteractionChannel - Update an existing Interaction Channel.
    **/
    updateInteractionChannel(req: operations.UpdateInteractionChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInteractionChannelResponse>;
    /**
     * updateInteractionChannelParticipant - Update an existing Channel Participant.
    **/
    updateInteractionChannelParticipant(req: operations.UpdateInteractionChannelParticipantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInteractionChannelParticipantResponse>;
    updateWebChannel(req: operations.UpdateWebChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebChannelResponse>;
}
