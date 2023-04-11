import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentEntityTypesBatchDelete(req: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest, security: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse>;
    /**
     * Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentEntityTypesBatchUpdate(req: operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest, security: operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse>;
    /**
     * Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate(req: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest, security: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse>;
    /**
     * Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete(req: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest, security: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse>;
    /**
     * Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate(req: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest, security: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse>;
    /**
     * Creates an agent environment.
     */
    dialogflowProjectsLocationsAgentEnvironmentsCreate(req: operations.DialogflowProjectsLocationsAgentEnvironmentsCreateRequest, security: operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse>;
    /**
     * Gets the history of the specified environment.
     */
    dialogflowProjectsLocationsAgentEnvironmentsGetHistory(req: operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest, security: operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse>;
    /**
     * Returns the list of all non-default environments of the specified agent.
     */
    dialogflowProjectsLocationsAgentEnvironmentsList(req: operations.DialogflowProjectsLocationsAgentEnvironmentsListRequest, security: operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse>;
    /**
     * Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
     */
    dialogflowProjectsLocationsAgentExport(req: operations.DialogflowProjectsLocationsAgentExportRequest, security: operations.DialogflowProjectsLocationsAgentExportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentExportResponse>;
    /**
     * Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
     */
    dialogflowProjectsLocationsAgentGetValidationResult(req: operations.DialogflowProjectsLocationsAgentGetValidationResultRequest, security: operations.DialogflowProjectsLocationsAgentGetValidationResultSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentGetValidationResultResponse>;
    /**
     * Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentImport(req: operations.DialogflowProjectsLocationsAgentImportRequest, security: operations.DialogflowProjectsLocationsAgentImportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentImportResponse>;
    /**
     * Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentIntentsBatchDelete(req: operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest, security: operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse>;
    /**
     * Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentIntentsBatchUpdate(req: operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest, security: operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse>;
    /**
     * Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentIntentsCreate(req: operations.DialogflowProjectsLocationsAgentIntentsCreateRequest, security: operations.DialogflowProjectsLocationsAgentIntentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentIntentsCreateResponse>;
    /**
     * Returns the list of all intents in the specified agent.
     */
    dialogflowProjectsLocationsAgentIntentsList(req: operations.DialogflowProjectsLocationsAgentIntentsListRequest, security: operations.DialogflowProjectsLocationsAgentIntentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentIntentsListResponse>;
    /**
     * Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentRestore(req: operations.DialogflowProjectsLocationsAgentRestoreRequest, security: operations.DialogflowProjectsLocationsAgentRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentRestoreResponse>;
    /**
     * Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
     */
    dialogflowProjectsLocationsAgentSearch(req: operations.DialogflowProjectsLocationsAgentSearchRequest, security: operations.DialogflowProjectsLocationsAgentSearchSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentSearchResponse>;
    /**
     * Creates a context. If the specified context already exists, overrides the context.
     */
    dialogflowProjectsLocationsAgentSessionsContextsCreate(req: operations.DialogflowProjectsLocationsAgentSessionsContextsCreateRequest, security: operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse>;
    /**
     * Returns the list of all contexts in the specified session.
     */
    dialogflowProjectsLocationsAgentSessionsContextsList(req: operations.DialogflowProjectsLocationsAgentSessionsContextsListRequest, security: operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse>;
    /**
     * Deletes all active contexts in the specified session.
     */
    dialogflowProjectsLocationsAgentSessionsDeleteContexts(req: operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest, security: operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse>;
    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     */
    dialogflowProjectsLocationsAgentSessionsDetectIntent(req: operations.DialogflowProjectsLocationsAgentSessionsDetectIntentRequest, security: operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse>;
    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     */
    dialogflowProjectsLocationsAgentSessionsEntityTypesCreate(req: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest, security: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse>;
    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     */
    dialogflowProjectsLocationsAgentSessionsEntityTypesList(req: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest, security: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse>;
    /**
     * Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsAgentTrain(req: operations.DialogflowProjectsLocationsAgentTrainRequest, security: operations.DialogflowProjectsLocationsAgentTrainSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentTrainResponse>;
    /**
     * Creates an agent version. The new version points to the agent instance in the "default" environment.
     */
    dialogflowProjectsLocationsAgentVersionsCreate(req: operations.DialogflowProjectsLocationsAgentVersionsCreateRequest, security: operations.DialogflowProjectsLocationsAgentVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentVersionsCreateResponse>;
    /**
     * Returns the list of all versions of the specified agent.
     */
    dialogflowProjectsLocationsAgentVersionsList(req: operations.DialogflowProjectsLocationsAgentVersionsListRequest, security: operations.DialogflowProjectsLocationsAgentVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentVersionsListResponse>;
    /**
     * Returns the list of all answer records in the specified project in reverse chronological order.
     */
    dialogflowProjectsLocationsAnswerRecordsList(req: operations.DialogflowProjectsLocationsAnswerRecordsListRequest, security: operations.DialogflowProjectsLocationsAnswerRecordsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAnswerRecordsListResponse>;
    /**
     * Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset
     */
    dialogflowProjectsLocationsConversationDatasetsCreate(req: operations.DialogflowProjectsLocationsConversationDatasetsCreateRequest, security: operations.DialogflowProjectsLocationsConversationDatasetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationDatasetsCreateResponse>;
    /**
     * Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
     */
    dialogflowProjectsLocationsConversationDatasetsImportConversationData(req: operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest, security: operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse>;
    /**
     * Returns the list of all conversation datasets in the specified project and location.
     */
    dialogflowProjectsLocationsConversationDatasetsList(req: operations.DialogflowProjectsLocationsConversationDatasetsListRequest, security: operations.DialogflowProjectsLocationsConversationDatasetsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationDatasetsListResponse>;
    /**
     * Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
     */
    dialogflowProjectsLocationsConversationModelsCreate(req: operations.DialogflowProjectsLocationsConversationModelsCreateRequest, security: operations.DialogflowProjectsLocationsConversationModelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationModelsCreateResponse>;
    /**
     * Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     */
    dialogflowProjectsLocationsConversationModelsDeploy(req: operations.DialogflowProjectsLocationsConversationModelsDeployRequest, security: operations.DialogflowProjectsLocationsConversationModelsDeploySecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationModelsDeployResponse>;
    /**
     * Creates evaluation of a conversation model.
     */
    dialogflowProjectsLocationsConversationModelsEvaluationsCreate(req: operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest, security: operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse>;
    /**
     * Lists evaluations of a conversation model.
     */
    dialogflowProjectsLocationsConversationModelsEvaluationsList(req: operations.DialogflowProjectsLocationsConversationModelsEvaluationsListRequest, security: operations.DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationModelsEvaluationsListResponse>;
    /**
     * Lists conversation models.
     */
    dialogflowProjectsLocationsConversationModelsList(req: operations.DialogflowProjectsLocationsConversationModelsListRequest, security: operations.DialogflowProjectsLocationsConversationModelsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationModelsListResponse>;
    /**
     * Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     */
    dialogflowProjectsLocationsConversationModelsUndeploy(req: operations.DialogflowProjectsLocationsConversationModelsUndeployRequest, security: operations.DialogflowProjectsLocationsConversationModelsUndeploySecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationModelsUndeployResponse>;
    /**
     * Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
     */
    dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig(req: operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest, security: operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse>;
    /**
     * Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
     */
    dialogflowProjectsLocationsConversationProfilesCreate(req: operations.DialogflowProjectsLocationsConversationProfilesCreateRequest, security: operations.DialogflowProjectsLocationsConversationProfilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationProfilesCreateResponse>;
    /**
     * Returns the list of all conversation profiles in the specified project.
     */
    dialogflowProjectsLocationsConversationProfilesList(req: operations.DialogflowProjectsLocationsConversationProfilesListRequest, security: operations.DialogflowProjectsLocationsConversationProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationProfilesListResponse>;
    /**
     * Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
     */
    dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig(req: operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest, security: operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse>;
    /**
     * Completes the specified conversation. Finished conversations are purged from the database after 30 days.
     */
    dialogflowProjectsLocationsConversationsComplete(req: operations.DialogflowProjectsLocationsConversationsCompleteRequest, security: operations.DialogflowProjectsLocationsConversationsCompleteSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsCompleteResponse>;
    /**
     * Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
     */
    dialogflowProjectsLocationsConversationsCreate(req: operations.DialogflowProjectsLocationsConversationsCreateRequest, security: operations.DialogflowProjectsLocationsConversationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsCreateResponse>;
    /**
     * Returns the list of all conversations in the specified project.
     */
    dialogflowProjectsLocationsConversationsList(req: operations.DialogflowProjectsLocationsConversationsListRequest, security: operations.DialogflowProjectsLocationsConversationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsListResponse>;
    /**
     * Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
     */
    dialogflowProjectsLocationsConversationsMessagesList(req: operations.DialogflowProjectsLocationsConversationsMessagesListRequest, security: operations.DialogflowProjectsLocationsConversationsMessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsMessagesListResponse>;
    /**
     * Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     */
    dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent(req: operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest, security: operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse>;
    /**
     * Creates a new participant in a conversation.
     */
    dialogflowProjectsLocationsConversationsParticipantsCreate(req: operations.DialogflowProjectsLocationsConversationsParticipantsCreateRequest, security: operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse>;
    /**
     * Returns the list of all participants in the specified conversation.
     */
    dialogflowProjectsLocationsConversationsParticipantsList(req: operations.DialogflowProjectsLocationsConversationsParticipantsListRequest, security: operations.DialogflowProjectsLocationsConversationsParticipantsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsParticipantsListResponse>;
    /**
     * Gets suggested articles for a participant based on specific historical messages.
     */
    dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles(req: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest, security: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse>;
    /**
     * Gets suggested faq answers for a participant based on specific historical messages.
     */
    dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers(req: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest, security: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse>;
    /**
     * Gets smart replies for a participant based on specific historical messages.
     */
    dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies(req: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest, security: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse>;
    /**
     * Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
     */
    dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary(req: operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest, security: operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse>;
    /**
     * Deletes the specified agent.
     */
    dialogflowProjectsLocationsDeleteAgent(req: operations.DialogflowProjectsLocationsDeleteAgentRequest, security: operations.DialogflowProjectsLocationsDeleteAgentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsDeleteAgentResponse>;
    /**
     * Retrieves the specified agent.
     */
    dialogflowProjectsLocationsGetAgent(req: operations.DialogflowProjectsLocationsGetAgentRequest, security: operations.DialogflowProjectsLocationsGetAgentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsGetAgentResponse>;
    /**
     * Creates a knowledge base.
     */
    dialogflowProjectsLocationsKnowledgeBasesCreate(req: operations.DialogflowProjectsLocationsKnowledgeBasesCreateRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse>;
    /**
     * Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     */
    dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate(req: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse>;
    /**
     * Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     */
    dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete(req: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse>;
    /**
     * Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     */
    dialogflowProjectsLocationsKnowledgeBasesDocumentsExport(req: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportResponse>;
    /**
     * Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
     */
    dialogflowProjectsLocationsKnowledgeBasesDocumentsImport(req: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse>;
    /**
     * Returns the list of all documents of the knowledge base.
     */
    dialogflowProjectsLocationsKnowledgeBasesDocumentsList(req: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse>;
    /**
     * Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     */
    dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch(req: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse>;
    /**
     * Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     */
    dialogflowProjectsLocationsKnowledgeBasesDocumentsReload(req: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse>;
    /**
     * Returns the list of all knowledge bases of the specified agent.
     */
    dialogflowProjectsLocationsKnowledgeBasesList(req: operations.DialogflowProjectsLocationsKnowledgeBasesListRequest, security: operations.DialogflowProjectsLocationsKnowledgeBasesListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsKnowledgeBasesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    dialogflowProjectsLocationsList(req: operations.DialogflowProjectsLocationsListRequest, security: operations.DialogflowProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsListResponse>;
    /**
     * Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     */
    dialogflowProjectsLocationsSetAgent(req: operations.DialogflowProjectsLocationsSetAgentRequest, security: operations.DialogflowProjectsLocationsSetAgentSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSetAgentResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    dialogflowProjectsOperationsCancel(req: operations.DialogflowProjectsOperationsCancelRequest, security: operations.DialogflowProjectsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsCancelResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    dialogflowProjectsOperationsGet(req: operations.DialogflowProjectsOperationsGetRequest, security: operations.DialogflowProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    dialogflowProjectsOperationsList(req: operations.DialogflowProjectsOperationsListRequest, security: operations.DialogflowProjectsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsListResponse>;
}
