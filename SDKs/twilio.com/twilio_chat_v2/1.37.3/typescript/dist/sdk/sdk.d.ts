import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://chat.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    createChannel(req: operations.CreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    createChannelWebhook(req: operations.CreateChannelWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelWebhookResponse>;
    createCredential(req: operations.CreateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialResponse>;
    createInvite(req: operations.CreateInviteRequest, config?: AxiosRequestConfig): Promise<operations.CreateInviteResponse>;
    createMember(req: operations.CreateMemberRequest, config?: AxiosRequestConfig): Promise<operations.CreateMemberResponse>;
    createMessage(req: operations.CreateMessageRequest, config?: AxiosRequestConfig): Promise<operations.CreateMessageResponse>;
    createRole(req: operations.CreateRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoleResponse>;
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    deleteBinding(req: operations.DeleteBindingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBindingResponse>;
    deleteChannel(req: operations.DeleteChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    deleteChannelWebhook(req: operations.DeleteChannelWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelWebhookResponse>;
    deleteCredential(req: operations.DeleteCredentialRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialResponse>;
    deleteInvite(req: operations.DeleteInviteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInviteResponse>;
    deleteMember(req: operations.DeleteMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMemberResponse>;
    deleteMessage(req: operations.DeleteMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageResponse>;
    deleteRole(req: operations.DeleteRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoleResponse>;
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    deleteUserBinding(req: operations.DeleteUserBindingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserBindingResponse>;
    /**
     * deleteUserChannel - Removes User from selected Channel.
    **/
    deleteUserChannel(req: operations.DeleteUserChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserChannelResponse>;
    fetchBinding(req: operations.FetchBindingRequest, config?: AxiosRequestConfig): Promise<operations.FetchBindingResponse>;
    fetchChannel(req: operations.FetchChannelRequest, config?: AxiosRequestConfig): Promise<operations.FetchChannelResponse>;
    fetchChannelWebhook(req: operations.FetchChannelWebhookRequest, config?: AxiosRequestConfig): Promise<operations.FetchChannelWebhookResponse>;
    fetchCredential(req: operations.FetchCredentialRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialResponse>;
    fetchInvite(req: operations.FetchInviteRequest, config?: AxiosRequestConfig): Promise<operations.FetchInviteResponse>;
    fetchMember(req: operations.FetchMemberRequest, config?: AxiosRequestConfig): Promise<operations.FetchMemberResponse>;
    fetchMessage(req: operations.FetchMessageRequest, config?: AxiosRequestConfig): Promise<operations.FetchMessageResponse>;
    fetchRole(req: operations.FetchRoleRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoleResponse>;
    fetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    fetchUser(req: operations.FetchUserRequest, config?: AxiosRequestConfig): Promise<operations.FetchUserResponse>;
    fetchUserBinding(req: operations.FetchUserBindingRequest, config?: AxiosRequestConfig): Promise<operations.FetchUserBindingResponse>;
    fetchUserChannel(req: operations.FetchUserChannelRequest, config?: AxiosRequestConfig): Promise<operations.FetchUserChannelResponse>;
    listBinding(req: operations.ListBindingRequest, config?: AxiosRequestConfig): Promise<operations.ListBindingResponse>;
    listChannel(req: operations.ListChannelRequest, config?: AxiosRequestConfig): Promise<operations.ListChannelResponse>;
    listChannelWebhook(req: operations.ListChannelWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ListChannelWebhookResponse>;
    listCredential(req: operations.ListCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialResponse>;
    listInvite(req: operations.ListInviteRequest, config?: AxiosRequestConfig): Promise<operations.ListInviteResponse>;
    listMember(req: operations.ListMemberRequest, config?: AxiosRequestConfig): Promise<operations.ListMemberResponse>;
    listMessage(req: operations.ListMessageRequest, config?: AxiosRequestConfig): Promise<operations.ListMessageResponse>;
    listRole(req: operations.ListRoleRequest, config?: AxiosRequestConfig): Promise<operations.ListRoleResponse>;
    listService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    listUser(req: operations.ListUserRequest, config?: AxiosRequestConfig): Promise<operations.ListUserResponse>;
    listUserBinding(req: operations.ListUserBindingRequest, config?: AxiosRequestConfig): Promise<operations.ListUserBindingResponse>;
    /**
     * listUserChannel - List all Channels for a given User.
    **/
    listUserChannel(req: operations.ListUserChannelRequest, config?: AxiosRequestConfig): Promise<operations.ListUserChannelResponse>;
    updateChannel(req: operations.UpdateChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChannelResponse>;
    updateChannelWebhook(req: operations.UpdateChannelWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChannelWebhookResponse>;
    updateCredential(req: operations.UpdateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialResponse>;
    updateMember(req: operations.UpdateMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMemberResponse>;
    updateMessage(req: operations.UpdateMessageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMessageResponse>;
    updateRole(req: operations.UpdateRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoleResponse>;
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    updateUserChannel(req: operations.UpdateUserChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserChannelResponse>;
}
export {};
