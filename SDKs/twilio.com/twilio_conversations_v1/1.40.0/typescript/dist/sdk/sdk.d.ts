import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://conversations.twilio.com"];
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
    /**
     * Create a new address configuration
     */
    createConfigurationAddress(req: operations.CreateConfigurationAddressCreateConfigurationAddressRequest, security: operations.CreateConfigurationAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationAddressResponse>;
    /**
     * Create a new conversation in your account's default service
     */
    createConversation(req: operations.CreateConversationRequest, security: operations.CreateConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateConversationResponse>;
    /**
     * Add a new message to the conversation
     */
    createConversationMessage(req: operations.CreateConversationMessageRequest, security: operations.CreateConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateConversationMessageResponse>;
    /**
     * Add a new participant to the conversation
     */
    createConversationParticipant(req: operations.CreateConversationParticipantRequest, security: operations.CreateConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateConversationParticipantResponse>;
    /**
     * Create a new webhook scoped to the conversation
     */
    createConversationScopedWebhook(req: operations.CreateConversationScopedWebhookRequest, security: operations.CreateConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateConversationScopedWebhookResponse>;
    /**
     * Add a new push notification credential to your account
     */
    createCredential(req: operations.CreateCredentialCreateCredentialRequest, security: operations.CreateCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCredentialResponse>;
    /**
     * Create a new user role in your account's default service
     */
    createRole(req: operations.CreateRoleCreateRoleRequest, security: operations.CreateRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateRoleResponse>;
    /**
     * Create a new conversation service on your account
     */
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create a new conversation in your service
     */
    createServiceConversation(req: operations.CreateServiceConversationRequest, security: operations.CreateServiceConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationResponse>;
    /**
     * Add a new message to the conversation in a specific service
     */
    createServiceConversationMessage(req: operations.CreateServiceConversationMessageRequest, security: operations.CreateServiceConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationMessageResponse>;
    /**
     * Add a new participant to the conversation in a specific service
     */
    createServiceConversationParticipant(req: operations.CreateServiceConversationParticipantRequest, security: operations.CreateServiceConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationParticipantResponse>;
    /**
     * Create a new webhook scoped to the conversation in a specific service
     */
    createServiceConversationScopedWebhook(req: operations.CreateServiceConversationScopedWebhookRequest, security: operations.CreateServiceConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationScopedWebhookResponse>;
    /**
     * Create a new user role in your service
     */
    createServiceRole(req: operations.CreateServiceRoleRequest, security: operations.CreateServiceRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceRoleResponse>;
    /**
     * Add a new conversation user to your service
     */
    createServiceUser(req: operations.CreateServiceUserRequest, security: operations.CreateServiceUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceUserResponse>;
    /**
     * Add a new conversation user to your account's default service
     */
    createUser(req: operations.CreateUserRequest, security: operations.CreateUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Remove an existing address configuration
     */
    deleteConfigurationAddress(req: operations.DeleteConfigurationAddressRequest, security: operations.DeleteConfigurationAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationAddressResponse>;
    /**
     * Remove a conversation from your account's default service
     */
    deleteConversation(req: operations.DeleteConversationRequest, security: operations.DeleteConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConversationResponse>;
    /**
     * Remove a message from the conversation
     */
    deleteConversationMessage(req: operations.DeleteConversationMessageRequest, security: operations.DeleteConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConversationMessageResponse>;
    /**
     * Remove a participant from the conversation
     */
    deleteConversationParticipant(req: operations.DeleteConversationParticipantRequest, security: operations.DeleteConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConversationParticipantResponse>;
    /**
     * Remove an existing webhook scoped to the conversation
     */
    deleteConversationScopedWebhook(req: operations.DeleteConversationScopedWebhookRequest, security: operations.DeleteConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConversationScopedWebhookResponse>;
    /**
     * Remove a push notification credential from your account
     */
    deleteCredential(req: operations.DeleteCredentialRequest, security: operations.DeleteCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialResponse>;
    /**
     * Remove a user role from your account's default service
     */
    deleteRole(req: operations.DeleteRoleRequest, security: operations.DeleteRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRoleResponse>;
    /**
     * Remove a conversation service with all its nested resources from your account
     */
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * Remove a push notification binding from the conversation service
     */
    deleteServiceBinding(req: operations.DeleteServiceBindingRequest, security: operations.DeleteServiceBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceBindingResponse>;
    /**
     * Remove a conversation from your service
     */
    deleteServiceConversation(req: operations.DeleteServiceConversationRequest, security: operations.DeleteServiceConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationResponse>;
    /**
     * Remove a message from the conversation
     */
    deleteServiceConversationMessage(req: operations.DeleteServiceConversationMessageRequest, security: operations.DeleteServiceConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationMessageResponse>;
    /**
     * Remove a participant from the conversation
     */
    deleteServiceConversationParticipant(req: operations.DeleteServiceConversationParticipantRequest, security: operations.DeleteServiceConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationParticipantResponse>;
    /**
     * Remove an existing webhook scoped to the conversation
     */
    deleteServiceConversationScopedWebhook(req: operations.DeleteServiceConversationScopedWebhookRequest, security: operations.DeleteServiceConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationScopedWebhookResponse>;
    /**
     * Remove a user role from your service
     */
    deleteServiceRole(req: operations.DeleteServiceRoleRequest, security: operations.DeleteServiceRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceRoleResponse>;
    /**
     * Remove a conversation user from your service
     */
    deleteServiceUser(req: operations.DeleteServiceUserRequest, security: operations.DeleteServiceUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceUserResponse>;
    /**
     * Delete a specific User Conversation.
     */
    deleteServiceUserConversation(req: operations.DeleteServiceUserConversationRequest, security: operations.DeleteServiceUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceUserConversationResponse>;
    /**
     * Remove a conversation user from your account's default service
     */
    deleteUser(req: operations.DeleteUserRequest, security: operations.DeleteUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Delete a specific User Conversation.
     */
    deleteUserConversation(req: operations.DeleteUserConversationRequest, security: operations.DeleteUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUserConversationResponse>;
    /**
     * Fetch the global configuration of conversations on your account
     */
    fetchConfiguration(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationResponse>;
    /**
     * Fetch an address configuration
     */
    fetchConfigurationAddress(req: operations.FetchConfigurationAddressRequest, security: operations.FetchConfigurationAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationAddressResponse>;
    fetchConfigurationWebhook(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationWebhookResponse>;
    /**
     * Fetch a conversation from your account's default service
     */
    fetchConversation(req: operations.FetchConversationRequest, security: operations.FetchConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConversationResponse>;
    /**
     * Fetch a message from the conversation
     */
    fetchConversationMessage(req: operations.FetchConversationMessageRequest, security: operations.FetchConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConversationMessageResponse>;
    /**
     * Fetch the delivery and read receipts of the conversation message
     */
    fetchConversationMessageReceipt(req: operations.FetchConversationMessageReceiptRequest, security: operations.FetchConversationMessageReceiptSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConversationMessageReceiptResponse>;
    /**
     * Fetch a participant of the conversation
     */
    fetchConversationParticipant(req: operations.FetchConversationParticipantRequest, security: operations.FetchConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConversationParticipantResponse>;
    /**
     * Fetch the configuration of a conversation-scoped webhook
     */
    fetchConversationScopedWebhook(req: operations.FetchConversationScopedWebhookRequest, security: operations.FetchConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConversationScopedWebhookResponse>;
    /**
     * Fetch a push notification credential from your account
     */
    fetchCredential(req: operations.FetchCredentialRequest, security: operations.FetchCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCredentialResponse>;
    /**
     * Fetch a user role from your account's default service
     */
    fetchRole(req: operations.FetchRoleRequest, security: operations.FetchRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoleResponse>;
    /**
     * Fetch a conversation service from your account
     */
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * Fetch a push notification binding from the conversation service
     */
    fetchServiceBinding(req: operations.FetchServiceBindingRequest, security: operations.FetchServiceBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceBindingResponse>;
    /**
     * Fetch the configuration of a conversation service
     */
    fetchServiceConfiguration(req: operations.FetchServiceConfigurationRequest, security: operations.FetchServiceConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceConfigurationResponse>;
    /**
     * Fetch a conversation from your service
     */
    fetchServiceConversation(req: operations.FetchServiceConversationRequest, security: operations.FetchServiceConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationResponse>;
    /**
     * Fetch a message from the conversation
     */
    fetchServiceConversationMessage(req: operations.FetchServiceConversationMessageRequest, security: operations.FetchServiceConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationMessageResponse>;
    /**
     * Fetch the delivery and read receipts of the conversation message
     */
    fetchServiceConversationMessageReceipt(req: operations.FetchServiceConversationMessageReceiptRequest, security: operations.FetchServiceConversationMessageReceiptSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationMessageReceiptResponse>;
    /**
     * Fetch a participant of the conversation
     */
    fetchServiceConversationParticipant(req: operations.FetchServiceConversationParticipantRequest, security: operations.FetchServiceConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationParticipantResponse>;
    /**
     * Fetch the configuration of a conversation-scoped webhook
     */
    fetchServiceConversationScopedWebhook(req: operations.FetchServiceConversationScopedWebhookRequest, security: operations.FetchServiceConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationScopedWebhookResponse>;
    /**
     * Fetch push notification service settings
     */
    fetchServiceNotification(req: operations.FetchServiceNotificationRequest, security: operations.FetchServiceNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceNotificationResponse>;
    /**
     * Fetch a user role from your service
     */
    fetchServiceRole(req: operations.FetchServiceRoleRequest, security: operations.FetchServiceRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceRoleResponse>;
    /**
     * Fetch a conversation user from your service
     */
    fetchServiceUser(req: operations.FetchServiceUserRequest, security: operations.FetchServiceUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceUserResponse>;
    /**
     * Fetch a specific User Conversation.
     */
    fetchServiceUserConversation(req: operations.FetchServiceUserConversationRequest, security: operations.FetchServiceUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceUserConversationResponse>;
    /**
     * Fetch a specific service webhook configuration.
     */
    fetchServiceWebhookConfiguration(req: operations.FetchServiceWebhookConfigurationRequest, security: operations.FetchServiceWebhookConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceWebhookConfigurationResponse>;
    /**
     * Fetch a conversation user from your account's default service
     */
    fetchUser(req: operations.FetchUserRequest, security: operations.FetchUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUserResponse>;
    /**
     * Fetch a specific User Conversation.
     */
    fetchUserConversation(req: operations.FetchUserConversationRequest, security: operations.FetchUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUserConversationResponse>;
    /**
     * Retrieve a list of address configurations for an account
     */
    listConfigurationAddress(req: operations.ListConfigurationAddressRequest, security: operations.ListConfigurationAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConfigurationAddressResponse>;
    /**
     * Retrieve a list of conversations in your account's default service
     */
    listConversation(req: operations.ListConversationRequest, security: operations.ListConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConversationResponse>;
    /**
     * Retrieve a list of all messages in the conversation
     */
    listConversationMessage(req: operations.ListConversationMessageRequest, security: operations.ListConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConversationMessageResponse>;
    /**
     * Retrieve a list of all delivery and read receipts of the conversation message
     */
    listConversationMessageReceipt(req: operations.ListConversationMessageReceiptRequest, security: operations.ListConversationMessageReceiptSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConversationMessageReceiptResponse>;
    /**
     * Retrieve a list of all participants of the conversation
     */
    listConversationParticipant(req: operations.ListConversationParticipantRequest, security: operations.ListConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConversationParticipantResponse>;
    /**
     * Retrieve a list of all webhooks scoped to the conversation
     */
    listConversationScopedWebhook(req: operations.ListConversationScopedWebhookRequest, security: operations.ListConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConversationScopedWebhookResponse>;
    /**
     * Retrieve a list of all push notification credentials on your account
     */
    listCredential(req: operations.ListCredentialRequest, security: operations.ListCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCredentialResponse>;
    /**
     * Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
     */
    listParticipantConversation(req: operations.ListParticipantConversationRequest, security: operations.ListParticipantConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListParticipantConversationResponse>;
    /**
     * Retrieve a list of all user roles in your account's default service
     */
    listRole(req: operations.ListRoleRequest, security: operations.ListRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRoleResponse>;
    /**
     * Retrieve a list of all conversation services on your account
     */
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * Retrieve a list of all push notification bindings in the conversation service
     */
    listServiceBinding(req: operations.ListServiceBindingRequest, security: operations.ListServiceBindingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceBindingResponse>;
    /**
     * Retrieve a list of conversations in your service
     */
    listServiceConversation(req: operations.ListServiceConversationRequest, security: operations.ListServiceConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationResponse>;
    /**
     * Retrieve a list of all messages in the conversation
     */
    listServiceConversationMessage(req: operations.ListServiceConversationMessageRequest, security: operations.ListServiceConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationMessageResponse>;
    /**
     * Retrieve a list of all delivery and read receipts of the conversation message
     */
    listServiceConversationMessageReceipt(req: operations.ListServiceConversationMessageReceiptRequest, security: operations.ListServiceConversationMessageReceiptSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationMessageReceiptResponse>;
    /**
     * Retrieve a list of all participants of the conversation
     */
    listServiceConversationParticipant(req: operations.ListServiceConversationParticipantRequest, security: operations.ListServiceConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationParticipantResponse>;
    /**
     * Retrieve a list of all webhooks scoped to the conversation
     */
    listServiceConversationScopedWebhook(req: operations.ListServiceConversationScopedWebhookRequest, security: operations.ListServiceConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationScopedWebhookResponse>;
    /**
     * Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
     */
    listServiceParticipantConversation(req: operations.ListServiceParticipantConversationRequest, security: operations.ListServiceParticipantConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceParticipantConversationResponse>;
    /**
     * Retrieve a list of all user roles in your service
     */
    listServiceRole(req: operations.ListServiceRoleRequest, security: operations.ListServiceRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceRoleResponse>;
    /**
     * Retrieve a list of all conversation users in your service
     */
    listServiceUser(req: operations.ListServiceUserRequest, security: operations.ListServiceUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceUserResponse>;
    /**
     * Retrieve a list of all User Conversations for the User.
     */
    listServiceUserConversation(req: operations.ListServiceUserConversationRequest, security: operations.ListServiceUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceUserConversationResponse>;
    /**
     * Retrieve a list of all conversation users in your account's default service
     */
    listUser(req: operations.ListUserRequest, security: operations.ListUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUserResponse>;
    /**
     * Retrieve a list of all User Conversations for the User.
     */
    listUserConversation(req: operations.ListUserConversationRequest, security: operations.ListUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUserConversationResponse>;
    /**
     * Update the global configuration of conversations on your account
     */
    updateConfiguration(req: operations.UpdateConfigurationUpdateConfigurationRequest, security: operations.UpdateConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationResponse>;
    /**
     * Update an existing address configuration
     */
    updateConfigurationAddress(req: operations.UpdateConfigurationAddressRequest, security: operations.UpdateConfigurationAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationAddressResponse>;
    updateConfigurationWebhook(req: operations.UpdateConfigurationWebhookUpdateConfigurationWebhookRequest, security: operations.UpdateConfigurationWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationWebhookResponse>;
    /**
     * Update an existing conversation in your account's default service
     */
    updateConversation(req: operations.UpdateConversationRequest, security: operations.UpdateConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConversationResponse>;
    /**
     * Update an existing message in the conversation
     */
    updateConversationMessage(req: operations.UpdateConversationMessageRequest, security: operations.UpdateConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConversationMessageResponse>;
    /**
     * Update an existing participant in the conversation
     */
    updateConversationParticipant(req: operations.UpdateConversationParticipantRequest, security: operations.UpdateConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConversationParticipantResponse>;
    /**
     * Update an existing conversation-scoped webhook
     */
    updateConversationScopedWebhook(req: operations.UpdateConversationScopedWebhookRequest, security: operations.UpdateConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConversationScopedWebhookResponse>;
    /**
     * Update an existing push notification credential on your account
     */
    updateCredential(req: operations.UpdateCredentialRequest, security: operations.UpdateCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialResponse>;
    /**
     * Update an existing user role in your account's default service
     */
    updateRole(req: operations.UpdateRoleRequest, security: operations.UpdateRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRoleResponse>;
    /**
     * Update configuration settings of a conversation service
     */
    updateServiceConfiguration(req: operations.UpdateServiceConfigurationRequest, security: operations.UpdateServiceConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConfigurationResponse>;
    /**
     * Update an existing conversation in your service
     */
    updateServiceConversation(req: operations.UpdateServiceConversationRequest, security: operations.UpdateServiceConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationResponse>;
    /**
     * Update an existing message in the conversation
     */
    updateServiceConversationMessage(req: operations.UpdateServiceConversationMessageRequest, security: operations.UpdateServiceConversationMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationMessageResponse>;
    /**
     * Update an existing participant in the conversation
     */
    updateServiceConversationParticipant(req: operations.UpdateServiceConversationParticipantRequest, security: operations.UpdateServiceConversationParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationParticipantResponse>;
    /**
     * Update an existing conversation-scoped webhook
     */
    updateServiceConversationScopedWebhook(req: operations.UpdateServiceConversationScopedWebhookRequest, security: operations.UpdateServiceConversationScopedWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationScopedWebhookResponse>;
    /**
     * Update push notification service settings
     */
    updateServiceNotification(req: operations.UpdateServiceNotificationRequest, security: operations.UpdateServiceNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceNotificationResponse>;
    /**
     * Update an existing user role in your service
     */
    updateServiceRole(req: operations.UpdateServiceRoleRequest, security: operations.UpdateServiceRoleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceRoleResponse>;
    /**
     * Update an existing conversation user in your service
     */
    updateServiceUser(req: operations.UpdateServiceUserRequest, security: operations.UpdateServiceUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceUserResponse>;
    /**
     * Update a specific User Conversation.
     */
    updateServiceUserConversation(req: operations.UpdateServiceUserConversationRequest, security: operations.UpdateServiceUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceUserConversationResponse>;
    /**
     * Update a specific Webhook.
     */
    updateServiceWebhookConfiguration(req: operations.UpdateServiceWebhookConfigurationRequest, security: operations.UpdateServiceWebhookConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceWebhookConfigurationResponse>;
    /**
     * Update an existing conversation user in your account's default service
     */
    updateUser(req: operations.UpdateUserRequest, security: operations.UpdateUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    /**
     * Update a specific User Conversation.
     */
    updateUserConversation(req: operations.UpdateUserConversationRequest, security: operations.UpdateUserConversationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUserConversationResponse>;
}
