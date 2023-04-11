import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://ip-messaging.twilio.com"];
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
    createChannel(req: operations.CreateChannelRequest, security: operations.CreateChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    createChannelWebhook(req: operations.CreateChannelWebhookRequest, security: operations.CreateChannelWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateChannelWebhookResponse>;
    createCredential(req: operations.CreateCredentialCreateCredentialRequest, security: operations.CreateCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCredentialResponse>;
    createInvite(req: operations.CreateInviteRequest, security: operations.CreateInviteSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateInviteResponse>;
    createMember(req: operations.CreateMemberRequest, security: operations.CreateMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMemberResponse>;
    createMessage(req: operations.CreateMessageRequest, security: operations.CreateMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMessageResponse>;
    createRole(req: operations.CreateRoleRequest, security: operations.CreateRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateRoleResponse>;
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    createUser(req: operations.CreateUserRequest, security: operations.CreateUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    deleteBinding(req: operations.DeleteBindingRequest, security: operations.DeleteBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteBindingResponse>;
    deleteChannel(req: operations.DeleteChannelRequest, security: operations.DeleteChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    deleteChannelWebhook(req: operations.DeleteChannelWebhookRequest, security: operations.DeleteChannelWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteChannelWebhookResponse>;
    deleteCredential(req: operations.DeleteCredentialRequest, security: operations.DeleteCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialResponse>;
    deleteInvite(req: operations.DeleteInviteRequest, security: operations.DeleteInviteSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteInviteResponse>;
    deleteMember(req: operations.DeleteMemberRequest, security: operations.DeleteMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteMemberResponse>;
    deleteMessage(req: operations.DeleteMessageRequest, security: operations.DeleteMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteMessageResponse>;
    deleteRole(req: operations.DeleteRoleRequest, security: operations.DeleteRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRoleResponse>;
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    deleteUser(req: operations.DeleteUserRequest, security: operations.DeleteUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    deleteUserBinding(req: operations.DeleteUserBindingRequest, security: operations.DeleteUserBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUserBindingResponse>;
    deleteUserChannel(req: operations.DeleteUserChannelRequest, security: operations.DeleteUserChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUserChannelResponse>;
    fetchBinding(req: operations.FetchBindingRequest, security: operations.FetchBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBindingResponse>;
    fetchChannel(req: operations.FetchChannelRequest, security: operations.FetchChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchChannelResponse>;
    fetchChannelWebhook(req: operations.FetchChannelWebhookRequest, security: operations.FetchChannelWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchChannelWebhookResponse>;
    fetchCredential(req: operations.FetchCredentialRequest, security: operations.FetchCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCredentialResponse>;
    fetchInvite(req: operations.FetchInviteRequest, security: operations.FetchInviteSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInviteResponse>;
    fetchMember(req: operations.FetchMemberRequest, security: operations.FetchMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMemberResponse>;
    fetchMessage(req: operations.FetchMessageRequest, security: operations.FetchMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMessageResponse>;
    fetchRole(req: operations.FetchRoleRequest, security: operations.FetchRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoleResponse>;
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    fetchUser(req: operations.FetchUserRequest, security: operations.FetchUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUserResponse>;
    fetchUserBinding(req: operations.FetchUserBindingRequest, security: operations.FetchUserBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUserBindingResponse>;
    fetchUserChannel(req: operations.FetchUserChannelRequest, security: operations.FetchUserChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUserChannelResponse>;
    listBinding(req: operations.ListBindingRequest, security: operations.ListBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBindingResponse>;
    listChannel(req: operations.ListChannelRequest, security: operations.ListChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListChannelResponse>;
    listChannelWebhook(req: operations.ListChannelWebhookRequest, security: operations.ListChannelWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListChannelWebhookResponse>;
    listCredential(req: operations.ListCredentialRequest, security: operations.ListCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCredentialResponse>;
    listInvite(req: operations.ListInviteRequest, security: operations.ListInviteSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInviteResponse>;
    listMember(req: operations.ListMemberRequest, security: operations.ListMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMemberResponse>;
    listMessage(req: operations.ListMessageRequest, security: operations.ListMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMessageResponse>;
    listRole(req: operations.ListRoleRequest, security: operations.ListRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRoleResponse>;
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    listUser(req: operations.ListUserRequest, security: operations.ListUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUserResponse>;
    listUserBinding(req: operations.ListUserBindingRequest, security: operations.ListUserBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUserBindingResponse>;
    listUserChannel(req: operations.ListUserChannelRequest, security: operations.ListUserChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUserChannelResponse>;
    updateChannel(req: operations.UpdateChannelRequest, security: operations.UpdateChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateChannelResponse>;
    updateChannelWebhook(req: operations.UpdateChannelWebhookRequest, security: operations.UpdateChannelWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateChannelWebhookResponse>;
    updateCredential(req: operations.UpdateCredentialRequest, security: operations.UpdateCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialResponse>;
    updateMember(req: operations.UpdateMemberRequest, security: operations.UpdateMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMemberResponse>;
    updateMessage(req: operations.UpdateMessageRequest, security: operations.UpdateMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMessageResponse>;
    updateRole(req: operations.UpdateRoleRequest, security: operations.UpdateRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRoleResponse>;
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    updateUser(req: operations.UpdateUserRequest, security: operations.UpdateUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    updateUserChannel(req: operations.UpdateUserChannelRequest, security: operations.UpdateUserChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUserChannelResponse>;
}
