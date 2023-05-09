# Projects

### Available Operations

* [DialogflowProjectsLocationsAgentEntityTypesBatchDelete](#dialogflowprojectslocationsagententitytypesbatchdelete) - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesBatchUpdate](#dialogflowprojectslocationsagententitytypesbatchupdate) - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate](#dialogflowprojectslocationsagententitytypesentitiesbatchcreate) - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete](#dialogflowprojectslocationsagententitytypesentitiesbatchdelete) - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate](#dialogflowprojectslocationsagententitytypesentitiesbatchupdate) - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 
* [DialogflowProjectsLocationsAgentEnvironmentsCreate](#dialogflowprojectslocationsagentenvironmentscreate) - Creates an agent environment.
* [DialogflowProjectsLocationsAgentEnvironmentsGetHistory](#dialogflowprojectslocationsagentenvironmentsgethistory) - Gets the history of the specified environment.
* [DialogflowProjectsLocationsAgentEnvironmentsList](#dialogflowprojectslocationsagentenvironmentslist) - Returns the list of all non-default environments of the specified agent.
* [DialogflowProjectsLocationsAgentExport](#dialogflowprojectslocationsagentexport) - Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
* [DialogflowProjectsLocationsAgentGetValidationResult](#dialogflowprojectslocationsagentgetvalidationresult) - Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
* [DialogflowProjectsLocationsAgentImport](#dialogflowprojectslocationsagentimport) - Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentIntentsBatchDelete](#dialogflowprojectslocationsagentintentsbatchdelete) - Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentIntentsBatchUpdate](#dialogflowprojectslocationsagentintentsbatchupdate) - Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentIntentsCreate](#dialogflowprojectslocationsagentintentscreate) - Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentIntentsList](#dialogflowprojectslocationsagentintentslist) - Returns the list of all intents in the specified agent.
* [DialogflowProjectsLocationsAgentRestore](#dialogflowprojectslocationsagentrestore) - Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentSearch](#dialogflowprojectslocationsagentsearch) - Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
* [DialogflowProjectsLocationsAgentSessionsContextsCreate](#dialogflowprojectslocationsagentsessionscontextscreate) - Creates a context. If the specified context already exists, overrides the context.
* [DialogflowProjectsLocationsAgentSessionsContextsList](#dialogflowprojectslocationsagentsessionscontextslist) - Returns the list of all contexts in the specified session.
* [DialogflowProjectsLocationsAgentSessionsDeleteContexts](#dialogflowprojectslocationsagentsessionsdeletecontexts) - Deletes all active contexts in the specified session.
* [DialogflowProjectsLocationsAgentSessionsDetectIntent](#dialogflowprojectslocationsagentsessionsdetectintent) - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* [DialogflowProjectsLocationsAgentSessionsEntityTypesCreate](#dialogflowprojectslocationsagentsessionsentitytypescreate) - Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* [DialogflowProjectsLocationsAgentSessionsEntityTypesList](#dialogflowprojectslocationsagentsessionsentitytypeslist) - Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* [DialogflowProjectsLocationsAgentTrain](#dialogflowprojectslocationsagenttrain) - Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentVersionsCreate](#dialogflowprojectslocationsagentversionscreate) - Creates an agent version. The new version points to the agent instance in the "default" environment.
* [DialogflowProjectsLocationsAgentVersionsList](#dialogflowprojectslocationsagentversionslist) - Returns the list of all versions of the specified agent.
* [DialogflowProjectsLocationsAnswerRecordsList](#dialogflowprojectslocationsanswerrecordslist) - Returns the list of all answer records in the specified project in reverse chronological order.
* [DialogflowProjectsLocationsConversationDatasetsCreate](#dialogflowprojectslocationsconversationdatasetscreate) - Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset
* [DialogflowProjectsLocationsConversationDatasetsImportConversationData](#dialogflowprojectslocationsconversationdatasetsimportconversationdata) - Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
* [DialogflowProjectsLocationsConversationDatasetsList](#dialogflowprojectslocationsconversationdatasetslist) - Returns the list of all conversation datasets in the specified project and location.
* [DialogflowProjectsLocationsConversationModelsCreate](#dialogflowprojectslocationsconversationmodelscreate) - Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
* [DialogflowProjectsLocationsConversationModelsDeploy](#dialogflowprojectslocationsconversationmodelsdeploy) - Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [DialogflowProjectsLocationsConversationModelsEvaluationsCreate](#dialogflowprojectslocationsconversationmodelsevaluationscreate) - Creates evaluation of a conversation model.
* [DialogflowProjectsLocationsConversationModelsEvaluationsList](#dialogflowprojectslocationsconversationmodelsevaluationslist) - Lists evaluations of a conversation model.
* [DialogflowProjectsLocationsConversationModelsList](#dialogflowprojectslocationsconversationmodelslist) - Lists conversation models.
* [DialogflowProjectsLocationsConversationModelsUndeploy](#dialogflowprojectslocationsconversationmodelsundeploy) - Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilesclearsuggestionfeatureconfig) - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
* [DialogflowProjectsLocationsConversationProfilesCreate](#dialogflowprojectslocationsconversationprofilescreate) - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
* [DialogflowProjectsLocationsConversationProfilesList](#dialogflowprojectslocationsconversationprofileslist) - Returns the list of all conversation profiles in the specified project.
* [DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilessetsuggestionfeatureconfig) - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
* [DialogflowProjectsLocationsConversationsComplete](#dialogflowprojectslocationsconversationscomplete) - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
* [DialogflowProjectsLocationsConversationsCreate](#dialogflowprojectslocationsconversationscreate) - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
* [DialogflowProjectsLocationsConversationsList](#dialogflowprojectslocationsconversationslist) - Returns the list of all conversations in the specified project.
* [DialogflowProjectsLocationsConversationsMessagesList](#dialogflowprojectslocationsconversationsmessageslist) - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* [DialogflowProjectsLocationsConversationsParticipantsAnalyzeContent](#dialogflowprojectslocationsconversationsparticipantsanalyzecontent) - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* [DialogflowProjectsLocationsConversationsParticipantsCreate](#dialogflowprojectslocationsconversationsparticipantscreate) - Creates a new participant in a conversation.
* [DialogflowProjectsLocationsConversationsParticipantsList](#dialogflowprojectslocationsconversationsparticipantslist) - Returns the list of all participants in the specified conversation.
* [DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestarticles) - Gets suggested articles for a participant based on specific historical messages.
* [DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestfaqanswers) - Gets suggested faq answers for a participant based on specific historical messages.
* [DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestsmartreplies) - Gets smart replies for a participant based on specific historical messages.
* [DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary](#dialogflowprojectslocationsconversationssuggestionssuggestconversationsummary) - Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
* [DialogflowProjectsLocationsDeleteAgent](#dialogflowprojectslocationsdeleteagent) - Deletes the specified agent.
* [DialogflowProjectsLocationsGetAgent](#dialogflowprojectslocationsgetagent) - Retrieves the specified agent.
* [DialogflowProjectsLocationsKnowledgeBasesCreate](#dialogflowprojectslocationsknowledgebasescreate) - Creates a knowledge base.
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate](#dialogflowprojectslocationsknowledgebasesdocumentscreate) - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsDelete](#dialogflowprojectslocationsknowledgebasesdocumentsdelete) - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsExport](#dialogflowprojectslocationsknowledgebasesdocumentsexport) - Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsImport](#dialogflowprojectslocationsknowledgebasesdocumentsimport) - Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsList](#dialogflowprojectslocationsknowledgebasesdocumentslist) - Returns the list of all documents of the knowledge base.
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch](#dialogflowprojectslocationsknowledgebasesdocumentspatch) - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsReload](#dialogflowprojectslocationsknowledgebasesdocumentsreload) - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [DialogflowProjectsLocationsKnowledgeBasesList](#dialogflowprojectslocationsknowledgebaseslist) - Returns the list of all knowledge bases of the specified agent.
* [DialogflowProjectsLocationsList](#dialogflowprojectslocationslist) - Lists information about the supported locations for this service.
* [DialogflowProjectsLocationsSetAgent](#dialogflowprojectslocationssetagent) - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsOperationsCancel](#dialogflowprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DialogflowProjectsOperationsGet](#dialogflowprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DialogflowProjectsOperationsList](#dialogflowprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## DialogflowProjectsLocationsAgentEntityTypesBatchDelete

Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesBatchDelete(ctx, operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest: &shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest{
            EntityTypeNames: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("recusandae"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("veritatis"),
    }, operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEntityTypesBatchUpdate

Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesBatchUpdate(ctx, operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest: &shared.GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest{
            EntityTypeBatchInline: &shared.GoogleCloudDialogflowV2EntityTypeBatch{
                EntityTypes: []shared.GoogleCloudDialogflowV2EntityType{
                    shared.GoogleCloudDialogflowV2EntityType{
                        AutoExpansionMode: shared.GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnumAutoExpansionModeUnspecified.ToPointer(),
                        DisplayName: sdk.String("repellendus"),
                        EnableFuzzyExtraction: sdk.Bool(false),
                        Entities: []shared.GoogleCloudDialogflowV2EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "odit",
                                    "at",
                                    "at",
                                    "maiores",
                                },
                                Value: sdk.String("molestiae"),
                            },
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "quod",
                                    "esse",
                                    "totam",
                                    "porro",
                                },
                                Value: sdk.String("dolorum"),
                            },
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "nam",
                                },
                                Value: sdk.String("officia"),
                            },
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "fugit",
                                    "deleniti",
                                    "hic",
                                },
                                Value: sdk.String("optio"),
                            },
                        },
                        Kind: shared.GoogleCloudDialogflowV2EntityTypeKindEnumKindList.ToPointer(),
                        Name: sdk.String("Lucy Krajcik"),
                    },
                },
            },
            EntityTypeBatchURI: sdk.String("impedit"),
            LanguageCode: sdk.String("cum"),
            UpdateMask: sdk.String("esse"),
        },
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ad"),
        OauthToken: sdk.String("natus"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    }, operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate

Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate(ctx, operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2BatchCreateEntitiesRequest: &shared.GoogleCloudDialogflowV2BatchCreateEntitiesRequest{
            Entities: []shared.GoogleCloudDialogflowV2EntityTypeEntity{
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "fuga",
                        "in",
                        "corporis",
                        "iste",
                    },
                    Value: sdk.String("iure"),
                },
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "quidem",
                        "architecto",
                        "ipsa",
                        "reiciendis",
                    },
                    Value: sdk.String("est"),
                },
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "laborum",
                        "dolores",
                        "dolorem",
                    },
                    Value: sdk.String("corporis"),
                },
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "nobis",
                    },
                    Value: sdk.String("enim"),
                },
            },
            LanguageCode: sdk.String("omnis"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete

Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete(ctx, operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2BatchDeleteEntitiesRequest: &shared.GoogleCloudDialogflowV2BatchDeleteEntitiesRequest{
            EntityValues: []string{
                "consequuntur",
                "repellat",
                "mollitia",
            },
            LanguageCode: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("error"),
        Parent: "quia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate(ctx, operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2BatchUpdateEntitiesRequest: &shared.GoogleCloudDialogflowV2BatchUpdateEntitiesRequest{
            Entities: []shared.GoogleCloudDialogflowV2EntityTypeEntity{
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "quo",
                    },
                    Value: sdk.String("sequi"),
                },
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "ipsam",
                        "id",
                        "possimus",
                        "aut",
                    },
                    Value: sdk.String("quasi"),
                },
            },
            LanguageCode: sdk.String("error"),
            UpdateMask: sdk.String("temporibus"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("nihil"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEnvironmentsCreate

Creates an agent environment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEnvironmentsCreate(ctx, operations.DialogflowProjectsLocationsAgentEnvironmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2EnvironmentInput: &shared.GoogleCloudDialogflowV2EnvironmentInput{
            AgentVersion: sdk.String("cum"),
            Description: sdk.String("perferendis"),
            Fulfillment: &shared.GoogleCloudDialogflowV2Fulfillment{
                DisplayName: sdk.String("doloremque"),
                Enabled: sdk.Bool(false),
                Features: []shared.GoogleCloudDialogflowV2FulfillmentFeature{
                    shared.GoogleCloudDialogflowV2FulfillmentFeature{
                        Type: shared.GoogleCloudDialogflowV2FulfillmentFeatureTypeEnumTypeUnspecified.ToPointer(),
                    },
                    shared.GoogleCloudDialogflowV2FulfillmentFeature{
                        Type: shared.GoogleCloudDialogflowV2FulfillmentFeatureTypeEnumSmalltalk.ToPointer(),
                    },
                },
                GenericWebService: &shared.GoogleCloudDialogflowV2FulfillmentGenericWebService{
                    IsCloudFunction: sdk.Bool(false),
                    Password: sdk.String("dicta"),
                    RequestHeaders: map[string]string{
                        "dolore": "iusto",
                        "dicta": "harum",
                    },
                    URI: sdk.String("http://unacceptable-hare.org"),
                    Username: sdk.String("Anissa_Emmerich56"),
                },
                Name: sdk.String("Joel Lang"),
            },
            TextToSpeechSettings: &shared.GoogleCloudDialogflowV2TextToSpeechSettings{
                EnableTextToSpeech: sdk.Bool(false),
                OutputAudioEncoding: shared.GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingUnspecified.ToPointer(),
                SampleRateHertz: sdk.Int(921158),
                SynthesizeSpeechConfigs: map[string]shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig{
                    "veritatis": shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig{
                        EffectsProfileID: []string{
                            "incidunt",
                            "enim",
                            "consequatur",
                            "est",
                        },
                        Pitch: sdk.Float64(8423.42),
                        SpeakingRate: sdk.Float64(1317.97),
                        Voice: &shared.GoogleCloudDialogflowV2VoiceSelectionParams{
                            Name: sdk.String("Rudy Spencer"),
                            SsmlGender: shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified.ToPointer(),
                        },
                        VolumeGainDb: sdk.Float64(3978.21),
                    },
                    "cupiditate": shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig{
                        EffectsProfileID: []string{
                            "perferendis",
                            "magni",
                            "assumenda",
                        },
                        Pitch: sdk.Float64(3698.08),
                        SpeakingRate: sdk.Float64(46.95),
                        Voice: &shared.GoogleCloudDialogflowV2VoiceSelectionParams{
                            Name: sdk.String("Sonya Marks"),
                            SsmlGender: shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderFemale.ToPointer(),
                        },
                        VolumeGainDb: sdk.Float64(2884.76),
                    },
                    "delectus": shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig{
                        EffectsProfileID: []string{
                            "non",
                            "eligendi",
                        },
                        Pitch: sdk.Float64(5761.57),
                        SpeakingRate: sdk.Float64(3960.98),
                        Voice: &shared.GoogleCloudDialogflowV2VoiceSelectionParams{
                            Name: sdk.String("Terence Marquardt"),
                            SsmlGender: shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderNeutral.ToPointer(),
                        },
                        VolumeGainDb: sdk.Float64(9527.49),
                    },
                },
            },
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        EnvironmentID: sdk.String("illum"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("dicta"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("ea"),
    }, operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Environment != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEnvironmentsGetHistory

Gets the history of the specified environment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEnvironmentsGetHistory(ctx, operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("accusamus"),
        PageSize: sdk.Int64(965417),
        PageToken: sdk.String("quidem"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2EnvironmentHistory != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEnvironmentsList

Returns the list of all non-default environments of the specified agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentEnvironmentsList(ctx, operations.DialogflowProjectsLocationsAgentEnvironmentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("nisi"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(606393),
        PageToken: sdk.String("molestiae"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListEnvironmentsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentExport

Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentExport(ctx, operations.DialogflowProjectsLocationsAgentExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2ExportAgentRequest: &shared.GoogleCloudDialogflowV2ExportAgentRequest{
            AgentURI: sdk.String("labore"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("vero"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("et"),
    }, operations.DialogflowProjectsLocationsAgentExportSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentExportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentGetValidationResult

Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentGetValidationResult(ctx, operations.DialogflowProjectsLocationsAgentGetValidationResultRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("sint"),
        Key: sdk.String("accusantium"),
        LanguageCode: sdk.String("mollitia"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "mollitia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DialogflowProjectsLocationsAgentGetValidationResultSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ValidationResult != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentImport

Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentImport(ctx, operations.DialogflowProjectsLocationsAgentImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2ImportAgentRequest: &shared.GoogleCloudDialogflowV2ImportAgentRequest{
            AgentContent: sdk.String("odit"),
            AgentURI: sdk.String("nemo"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("maxime"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DialogflowProjectsLocationsAgentImportSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentImportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentIntentsBatchDelete

Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentIntentsBatchDelete(ctx, operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput: &shared.GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput{
            Intents: []shared.GoogleCloudDialogflowV2IntentInput{
                shared.GoogleCloudDialogflowV2IntentInput{
                    Action: sdk.String("ullam"),
                    DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum{
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumKik,
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumGoogleHangouts,
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumActionsOnGoogle,
                    },
                    DisplayName: sdk.String("sed"),
                    EndInteraction: sdk.Bool(false),
                    Events: []string{
                        "pariatur",
                        "accusantium",
                        "consequuntur",
                        "praesentium",
                    },
                    InputContextNames: []string{
                        "magni",
                        "sunt",
                        "quo",
                    },
                    IsFallback: sdk.Bool(false),
                    LiveAgentHandoff: sdk.Bool(false),
                    Messages: []shared.GoogleCloudDialogflowV2IntentMessage{
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://imaginary-mix.com"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://big-willingness.net"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://impolite-rat.com"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://wise-airbag.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                FormattedText: sdk.String("aut"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("cumque"),
                                    ImageURI: sdk.String("corporis"),
                                },
                                Subtitle: sdk.String("hic"),
                                Title: sdk.String("Miss"),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("quis"),
                                        Footer: sdk.String("totam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("dignissimos"),
                                            ImageURI: sdk.String("eaque"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("quis"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("dolores"),
                                        Text: sdk.String("minus"),
                                    },
                                },
                                ImageURI: sdk.String("quam"),
                                Subtitle: sdk.String("dolor"),
                                Title: sdk.String("Dr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("hic"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("recusandae"),
                                            ImageURI: sdk.String("omnis"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("facilis"),
                                            Synonyms: []string{
                                                "voluptatem",
                                                "porro",
                                                "consequuntur",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("error"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("eaque"),
                                            ImageURI: sdk.String("occaecati"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("rerum"),
                                            Synonyms: []string{
                                                "asperiores",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("modi"),
                                ImageURI: sdk.String("iste"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("dolorum"),
                                URI: sdk.String("https://traumatic-neighbourhood.net"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("delectus"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quaerat"),
                                            ImageURI: sdk.String("quos"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("aliquid"),
                                            Synonyms: []string{
                                                "dolorem",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("qui"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ipsum"),
                                            ImageURI: sdk.String("hic"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("excepturi"),
                                            Synonyms: []string{
                                                "voluptate",
                                                "dignissimos",
                                                "reiciendis",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("dolorum"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("numquam"),
                                            ImageURI: sdk.String("veritatis"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("ipsa"),
                                            Synonyms: []string{
                                                "iure",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                Subtitle: sdk.String("quaerat"),
                                Title: sdk.String("Dr."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("voluptatibus"),
                                        Description: sdk.String("voluptas"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("natus"),
                                            ImageURI: sdk.String("eos"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("atque"),
                                            ImageURI: sdk.String("sit"),
                                        },
                                        Name: sdk.String("Stephen Roberts"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("voluptate"),
                                        Description: sdk.String("dolorum"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("deleniti"),
                                            ImageURI: sdk.String("omnis"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("necessitatibus"),
                                            ImageURI: sdk.String("distinctio"),
                                        },
                                        Name: sdk.String("Jessie Emmerich"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("saepe"),
                                        Description: sdk.String("eius"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("aspernatur"),
                                            ImageURI: sdk.String("perferendis"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("amet"),
                                            ImageURI: sdk.String("optio"),
                                        },
                                        Name: sdk.String("Tommy Turner"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "repellendus": "totam",
                                "similique": "alias",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumActionsOnGoogle.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "tempora",
                                    "vel",
                                },
                                Title: sdk.String("Miss"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("qui"),
                                        Ssml: sdk.String("dolorum"),
                                        TextToSpeech: sdk.String("a"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("esse"),
                                        Ssml: sdk.String("harum"),
                                        TextToSpeech: sdk.String("iusto"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("ipsum"),
                                        Ssml: sdk.String("quisquam"),
                                        TextToSpeech: sdk.String("tenetur"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("amet"),
                                        Ssml: sdk.String("tempore"),
                                        TextToSpeech: sdk.String("accusamus"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://knowing-amenity.net"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://improbable-redhead.info"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://dry-donor.biz"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://tough-reunion.com"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("incidunt"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("dolores"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("facilis"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("quam"),
                                    ImageURI: sdk.String("molestias"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("neque"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("magni"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("sunt"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("ullam"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("hic"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("voluptatem"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("cumque"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("soluta"),
                                Title: sdk.String("Miss"),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "saepe",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://shrill-medium.net"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                FormattedText: sdk.String("aperiam"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("delectus"),
                                    ImageURI: sdk.String("dolorem"),
                                },
                                Subtitle: sdk.String("dolore"),
                                Title: sdk.String("Mrs."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumGray.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("architecto"),
                                        Footer: sdk.String("quae"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("aut"),
                                            ImageURI: sdk.String("quas"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("itaque"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("repellendus"),
                                        Footer: sdk.String("porro"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("doloribus"),
                                            ImageURI: sdk.String("ut"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("facilis"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("quae"),
                                        Footer: sdk.String("laudantium"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("odio"),
                                            ImageURI: sdk.String("occaecati"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("voluptatibus"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("quis"),
                                        Text: sdk.String("ipsum"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("delectus"),
                                        Text: sdk.String("voluptate"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("consectetur"),
                                        Text: sdk.String("vero"),
                                    },
                                },
                                ImageURI: sdk.String("tenetur"),
                                Subtitle: sdk.String("dignissimos"),
                                Title: sdk.String("Dr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("quod"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("odio"),
                                            ImageURI: sdk.String("similique"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("facilis"),
                                            Synonyms: []string{
                                                "ducimus",
                                                "dolore",
                                                "quibusdam",
                                                "illum",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("natus"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("impedit"),
                                            ImageURI: sdk.String("aut"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("voluptatibus"),
                                            Synonyms: []string{
                                                "nulla",
                                                "fugit",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("maiores"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("doloribus"),
                                            ImageURI: sdk.String("iusto"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("eligendi"),
                                            Synonyms: []string{
                                                "alias",
                                                "officia",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("ipsam"),
                                ImageURI: sdk.String("ea"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("aspernatur"),
                                URI: sdk.String("http://sunny-effectiveness.biz"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("laudantium"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("dicta"),
                                            ImageURI: sdk.String("dolor"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("maiores"),
                                            Synonyms: []string{
                                                "ex",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("excepturi"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptatibus"),
                                            ImageURI: sdk.String("nostrum"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("sapiente"),
                                            Synonyms: []string{
                                                "saepe",
                                                "ea",
                                                "impedit",
                                                "corporis",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                Subtitle: sdk.String("aliquid"),
                                Title: sdk.String("Mr."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("ea"),
                                        Description: sdk.String("quo"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("consectetur"),
                                            ImageURI: sdk.String("recusandae"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("aspernatur"),
                                            ImageURI: sdk.String("minima"),
                                        },
                                        Name: sdk.String("Mr. Elsa Reinger"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("impedit"),
                                        Description: sdk.String("aliquam"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("fugit"),
                                            ImageURI: sdk.String("accusamus"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("inventore"),
                                            ImageURI: sdk.String("non"),
                                        },
                                        Name: sdk.String("Sonya Osinski"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "nobis": "quas",
                                "assumenda": "nulla",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumTelegram.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "quasi",
                                    "tempora",
                                    "numquam",
                                },
                                Title: sdk.String("Mr."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("ipsa"),
                                        Ssml: sdk.String("molestiae"),
                                        TextToSpeech: sdk.String("magnam"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("odio"),
                                        Ssml: sdk.String("eius"),
                                        TextToSpeech: sdk.String("esse"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("esse"),
                                        Ssml: sdk.String("rem"),
                                        TextToSpeech: sdk.String("fuga"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://heavy-sophomore.biz"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://bouncy-babushka.name"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("quo"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("quo"),
                                    ImageURI: sdk.String("fuga"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("voluptas"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("cupiditate"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("consequatur"),
                                Title: sdk.String("Mrs."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "ipsam",
                                    "aspernatur",
                                    "sequi",
                                    "quo",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://aromatic-rabbit.net"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://knobby-liver.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                FormattedText: sdk.String("odio"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("occaecati"),
                                    ImageURI: sdk.String("commodi"),
                                },
                                Subtitle: sdk.String("sapiente"),
                                Title: sdk.String("Mr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("accusantium"),
                                        Footer: sdk.String("porro"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("eum"),
                                            ImageURI: sdk.String("quas"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("praesentium"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("fugit"),
                                        Footer: sdk.String("fuga"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("mollitia"),
                                            ImageURI: sdk.String("incidunt"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("atque"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("fugit"),
                                        Text: sdk.String("sapiente"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("consequuntur"),
                                        Text: sdk.String("ratione"),
                                    },
                                },
                                ImageURI: sdk.String("explicabo"),
                                Subtitle: sdk.String("saepe"),
                                Title: sdk.String("Ms."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("et"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("esse"),
                                            ImageURI: sdk.String("eveniet"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("accusamus"),
                                            Synonyms: []string{
                                                "esse",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("nam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("vero"),
                                            ImageURI: sdk.String("aliquid"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("quasi"),
                                            Synonyms: []string{
                                                "vel",
                                                "harum",
                                                "molestiae",
                                                "rerum",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("minima"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("distinctio"),
                                            ImageURI: sdk.String("eligendi"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("sit"),
                                            Synonyms: []string{
                                                "tempore",
                                                "adipisci",
                                                "cumque",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("consequatur"),
                                ImageURI: sdk.String("minus"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("quaerat"),
                                URI: sdk.String("https://emotional-infancy.name"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("a"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nulla"),
                                            ImageURI: sdk.String("quas"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("esse"),
                                            Synonyms: []string{
                                                "a",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("sint"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("pariatur"),
                                            ImageURI: sdk.String("possimus"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("quia"),
                                            Synonyms: []string{
                                                "asperiores",
                                                "facere",
                                                "veritatis",
                                                "consequuntur",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("similique"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("culpa"),
                                            ImageURI: sdk.String("aliquid"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("tenetur"),
                                            Synonyms: []string{
                                                "earum",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                Subtitle: sdk.String("in"),
                                Title: sdk.String("Mrs."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("illum"),
                                        Description: sdk.String("soluta"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("accusantium"),
                                            ImageURI: sdk.String("aliquam"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("sapiente"),
                                            ImageURI: sdk.String("dicta"),
                                        },
                                        Name: sdk.String("Delores Hermiston IV"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("qui"),
                                        Description: sdk.String("quibusdam"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ex"),
                                            ImageURI: sdk.String("deleniti"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("itaque"),
                                            ImageURI: sdk.String("dolorum"),
                                        },
                                        Name: sdk.String("Dr. Belinda West III"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("ipsa"),
                                        Description: sdk.String("minima"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("veritatis"),
                                            ImageURI: sdk.String("consectetur"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("adipisci"),
                                            ImageURI: sdk.String("iste"),
                                        },
                                        Name: sdk.String("Ms. Kenneth Ledner"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "corrupti": "non",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumPlatformUnspecified.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "occaecati",
                                },
                                Title: sdk.String("Mrs."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("explicabo"),
                                        Ssml: sdk.String("voluptas"),
                                        TextToSpeech: sdk.String("aut"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("dignissimos"),
                                        Ssml: sdk.String("dicta"),
                                        TextToSpeech: sdk.String("maiores"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("natus"),
                                        Ssml: sdk.String("velit"),
                                        TextToSpeech: sdk.String("voluptatibus"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("voluptas"),
                                        Ssml: sdk.String("asperiores"),
                                        TextToSpeech: sdk.String("aperiam"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://strange-king.name"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://beloved-epithelium.net"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://biodegradable-deadline.net"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://everlasting-parking.name"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("fugiat"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("ducimus"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("vel"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("possimus"),
                                    ImageURI: sdk.String("facilis"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("in"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("corporis"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("assumenda"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("nemo"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("recusandae"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("aliquid"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("cum"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("consectetur"),
                                Title: sdk.String("Ms."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "earum",
                                    "facere",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://helpless-warming.net"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://focused-caddy.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                FormattedText: sdk.String("non"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("amet"),
                                    ImageURI: sdk.String("beatae"),
                                },
                                Subtitle: sdk.String("dignissimos"),
                                Title: sdk.String("Dr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("corporis"),
                                        Footer: sdk.String("harum"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("laboriosam"),
                                            ImageURI: sdk.String("ipsa"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("voluptates"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("similique"),
                                        Text: sdk.String("tempora"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("aspernatur"),
                                        Text: sdk.String("voluptas"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("voluptas"),
                                        Text: sdk.String("voluptas"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("minima"),
                                        Text: sdk.String("nobis"),
                                    },
                                },
                                ImageURI: sdk.String("dolorum"),
                                Subtitle: sdk.String("adipisci"),
                                Title: sdk.String("Miss"),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("blanditiis"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("in"),
                                            ImageURI: sdk.String("dolore"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("aliquam"),
                                            Synonyms: []string{
                                                "temporibus",
                                                "ullam",
                                                "adipisci",
                                                "cum",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("quas"),
                                ImageURI: sdk.String("hic"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("nesciunt"),
                                URI: sdk.String("https://muddy-suede.name"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("exercitationem"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nobis"),
                                            ImageURI: sdk.String("sit"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("rerum"),
                                            Synonyms: []string{
                                                "reiciendis",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("asperiores"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("facilis"),
                                            ImageURI: sdk.String("voluptate"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("expedita"),
                                            Synonyms: []string{
                                                "iste",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("laborum"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("sed"),
                                            ImageURI: sdk.String("in"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("commodi"),
                                            Synonyms: []string{
                                                "explicabo",
                                                "voluptas",
                                                "unde",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("suscipit"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("sapiente"),
                                            ImageURI: sdk.String("debitis"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("illo"),
                                            Synonyms: []string{
                                                "perferendis",
                                                "corrupti",
                                                "maiores",
                                                "incidunt",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                Subtitle: sdk.String("provident"),
                                Title: sdk.String("Mrs."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("ipsum"),
                                        Description: sdk.String("ea"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("occaecati"),
                                            ImageURI: sdk.String("quos"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptatibus"),
                                            ImageURI: sdk.String("tempora"),
                                        },
                                        Name: sdk.String("Allison Wisozk I"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("officiis"),
                                        Description: sdk.String("praesentium"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("facilis"),
                                            ImageURI: sdk.String("quaerat"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("incidunt"),
                                            ImageURI: sdk.String("ipsam"),
                                        },
                                        Name: sdk.String("Ian Balistreri"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("veniam"),
                                        Description: sdk.String("minima"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("recusandae"),
                                            ImageURI: sdk.String("reiciendis"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nulla"),
                                            ImageURI: sdk.String("magni"),
                                        },
                                        Name: sdk.String("Gwen Fritsch"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("officiis"),
                                        Description: sdk.String("beatae"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("laudantium"),
                                            ImageURI: sdk.String("exercitationem"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("praesentium"),
                                            ImageURI: sdk.String("cum"),
                                        },
                                        Name: sdk.String("Lee Lehner"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "neque": "dolorum",
                                "nostrum": "officia",
                                "dolorum": "corrupti",
                                "accusamus": "tempora",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumSkype.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "ut",
                                },
                                Title: sdk.String("Dr."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("culpa"),
                                        Ssml: sdk.String("expedita"),
                                        TextToSpeech: sdk.String("magnam"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Ms."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://messy-metric.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://lovable-gumshoe.com"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("nostrum"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("error"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("incidunt"),
                                    ImageURI: sdk.String("reiciendis"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("dicta"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("architecto"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("occaecati"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("labore"),
                                Title: sdk.String("Miss"),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "laborum",
                                    "nam",
                                    "tenetur",
                                },
                            },
                        },
                    },
                    MlDisabled: sdk.Bool(false),
                    Name: sdk.String("Patricia Farrell"),
                    OutputContexts: []shared.GoogleCloudDialogflowV2Context{
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(972083),
                            Name: sdk.String("Marcos Windler MD"),
                            Parameters: map[string]interface{}{
                                "reprehenderit": "facere",
                                "fuga": "praesentium",
                                "mollitia": "veniam",
                            },
                        },
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(29100),
                            Name: sdk.String("Phil Boyer"),
                            Parameters: map[string]interface{}{
                                "totam": "suscipit",
                                "quidem": "maxime",
                                "et": "esse",
                                "amet": "assumenda",
                            },
                        },
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(410301),
                            Name: sdk.String("Evan Torphy"),
                            Parameters: map[string]interface{}{
                                "minima": "aspernatur",
                                "ex": "maiores",
                                "corrupti": "at",
                            },
                        },
                    },
                    Parameters: []shared.GoogleCloudDialogflowV2IntentParameter{
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("blanditiis"),
                            DisplayName: sdk.String("suscipit"),
                            EntityTypeDisplayName: sdk.String("repudiandae"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Dave Cartwright"),
                            Prompts: []string{
                                "labore",
                                "reiciendis",
                                "doloremque",
                                "repudiandae",
                            },
                            Value: sdk.String("dicta"),
                        },
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("accusantium"),
                            DisplayName: sdk.String("beatae"),
                            EntityTypeDisplayName: sdk.String("dolores"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Vanessa Franecki"),
                            Prompts: []string{
                                "saepe",
                                "consequuntur",
                            },
                            Value: sdk.String("occaecati"),
                        },
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("officiis"),
                            DisplayName: sdk.String("perspiciatis"),
                            EntityTypeDisplayName: sdk.String("in"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Tricia McClure"),
                            Prompts: []string{
                                "quis",
                                "reprehenderit",
                                "error",
                            },
                            Value: sdk.String("illo"),
                        },
                    },
                    ParentFollowupIntentName: sdk.String("corporis"),
                    Priority: sdk.Int(696463),
                    ResetContexts: sdk.Bool(false),
                    TrainingPhrases: []shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Meghan Batz IV"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("molestiae"),
                                    EntityType: sdk.String("eveniet"),
                                    Text: sdk.String("qui"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(739884),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumExample.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Sean Pacocha"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("aliquam"),
                                    EntityType: sdk.String("ad"),
                                    Text: sdk.String("repellat"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("alias"),
                                    EntityType: sdk.String("corporis"),
                                    Text: sdk.String("perspiciatis"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("nihil"),
                                    EntityType: sdk.String("mollitia"),
                                    Text: sdk.String("voluptas"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(5189),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Todd O'Reilly"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("nesciunt"),
                                    EntityType: sdk.String("quae"),
                                    Text: sdk.String("recusandae"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("omnis"),
                                    EntityType: sdk.String("quaerat"),
                                    Text: sdk.String("molestiae"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("ex"),
                                    EntityType: sdk.String("ut"),
                                    Text: sdk.String("culpa"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(238413),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Andre Hills"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("quis"),
                                    EntityType: sdk.String("eum"),
                                    Text: sdk.String("reiciendis"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("provident"),
                                    EntityType: sdk.String("aspernatur"),
                                    Text: sdk.String("ullam"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("quasi"),
                                    EntityType: sdk.String("animi"),
                                    Text: sdk.String("nostrum"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(652309),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumExample.ToPointer(),
                        },
                    },
                    WebhookState: shared.GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabledForSlotFilling.ToPointer(),
                },
                shared.GoogleCloudDialogflowV2IntentInput{
                    Action: sdk.String("animi"),
                    DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum{
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumTelegram,
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumPlatformUnspecified,
                    },
                    DisplayName: sdk.String("repellat"),
                    EndInteraction: sdk.Bool(false),
                    Events: []string{
                        "ullam",
                        "in",
                        "nam",
                        "earum",
                    },
                    InputContextNames: []string{
                        "laborum",
                        "placeat",
                        "modi",
                    },
                    IsFallback: sdk.Bool(false),
                    LiveAgentHandoff: sdk.Bool(false),
                    Messages: []shared.GoogleCloudDialogflowV2IntentMessage{
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://well-informed-sage.com"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://glistening-bike.com"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://agreeable-dealing.com"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                FormattedText: sdk.String("eius"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("rem"),
                                    ImageURI: sdk.String("at"),
                                },
                                Subtitle: sdk.String("impedit"),
                                Title: sdk.String("Mr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("dicta"),
                                        Footer: sdk.String("minima"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("beatae"),
                                            ImageURI: sdk.String("cupiditate"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("provident"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("hic"),
                                        Footer: sdk.String("illum"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("eaque"),
                                            ImageURI: sdk.String("earum"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("perspiciatis"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("porro"),
                                        Text: sdk.String("suscipit"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("dolorem"),
                                        Text: sdk.String("fugit"),
                                    },
                                },
                                ImageURI: sdk.String("cumque"),
                                Subtitle: sdk.String("fuga"),
                                Title: sdk.String("Mr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("necessitatibus"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nulla"),
                                            ImageURI: sdk.String("consequatur"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("quasi"),
                                            Synonyms: []string{
                                                "ducimus",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("occaecati"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("suscipit"),
                                            ImageURI: sdk.String("adipisci"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("quasi"),
                                            Synonyms: []string{
                                                "doloribus",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("necessitatibus"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ipsa"),
                                            ImageURI: sdk.String("tempora"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("nihil"),
                                            Synonyms: []string{
                                                "dicta",
                                                "iusto",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("praesentium"),
                                ImageURI: sdk.String("maiores"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("reiciendis"),
                                URI: sdk.String("http://burly-story.com"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("odio"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("tempora"),
                                            ImageURI: sdk.String("esse"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("ex"),
                                            Synonyms: []string{
                                                "aliquid",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                Subtitle: sdk.String("laborum"),
                                Title: sdk.String("Mr."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("fugiat"),
                                        Description: sdk.String("expedita"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("aliquid"),
                                            ImageURI: sdk.String("officia"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("suscipit"),
                                            ImageURI: sdk.String("aliquid"),
                                        },
                                        Name: sdk.String("Natalie Hirthe"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("ab"),
                                        Description: sdk.String("error"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("possimus"),
                                            ImageURI: sdk.String("voluptates"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("mollitia"),
                                            ImageURI: sdk.String("laborum"),
                                        },
                                        Name: sdk.String("Derek Leuschke PhD"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "ex": "ut",
                                "ad": "expedita",
                                "voluptatem": "molestias",
                                "cum": "aliquid",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumFacebook.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "omnis",
                                    "veritatis",
                                    "rerum",
                                },
                                Title: sdk.String("Miss"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("voluptatem"),
                                        Ssml: sdk.String("sapiente"),
                                        TextToSpeech: sdk.String("officiis"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("architecto"),
                                        Ssml: sdk.String("fuga"),
                                        TextToSpeech: sdk.String("pariatur"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("debitis"),
                                        Ssml: sdk.String("voluptatem"),
                                        TextToSpeech: sdk.String("alias"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://hairy-wrecker.biz"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://these-literature.net"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://harmonious-parenthesis.biz"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("deleniti"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("tempora"),
                                    ImageURI: sdk.String("dolor"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("sit"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("modi"),
                                Title: sdk.String("Mr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "laudantium",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://thrifty-frontier.com"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                FormattedText: sdk.String("quas"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("eveniet"),
                                    ImageURI: sdk.String("impedit"),
                                },
                                Subtitle: sdk.String("officiis"),
                                Title: sdk.String("Ms."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("veniam"),
                                        Footer: sdk.String("nesciunt"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("expedita"),
                                            ImageURI: sdk.String("eum"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("vel"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("ab"),
                                        Text: sdk.String("porro"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("autem"),
                                        Text: sdk.String("nobis"),
                                    },
                                },
                                ImageURI: sdk.String("laboriosam"),
                                Subtitle: sdk.String("recusandae"),
                                Title: sdk.String("Mr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("exercitationem"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("necessitatibus"),
                                            ImageURI: sdk.String("quasi"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("nisi"),
                                            Synonyms: []string{
                                                "vero",
                                                "est",
                                                "harum",
                                                "sequi",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("repudiandae"),
                                ImageURI: sdk.String("optio"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("occaecati"),
                                URI: sdk.String("http://jolly-latitude.name"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("numquam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nemo"),
                                            ImageURI: sdk.String("quos"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("eius"),
                                            Synonyms: []string{
                                                "ducimus",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("fuga"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("laudantium"),
                                            ImageURI: sdk.String("incidunt"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("quasi"),
                                            Synonyms: []string{
                                                "fugiat",
                                                "dicta",
                                                "nisi",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                Subtitle: sdk.String("consectetur"),
                                Title: sdk.String("Mr."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("reiciendis"),
                                        Description: sdk.String("soluta"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("alias"),
                                            ImageURI: sdk.String("omnis"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("eos"),
                                            ImageURI: sdk.String("occaecati"),
                                        },
                                        Name: sdk.String("Ernest Bode"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("voluptatibus"),
                                        Description: sdk.String("distinctio"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("omnis"),
                                            ImageURI: sdk.String("delectus"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("minima"),
                                            ImageURI: sdk.String("praesentium"),
                                        },
                                        Name: sdk.String("Oscar Smith"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("itaque"),
                                        Description: sdk.String("commodi"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("totam"),
                                            ImageURI: sdk.String("earum"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("modi"),
                                            ImageURI: sdk.String("nam"),
                                        },
                                        Name: sdk.String("Kenneth Hilpert Sr."),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "enim": "sint",
                                "nulla": "deserunt",
                                "esse": "nemo",
                                "reprehenderit": "est",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumTelegram.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "accusamus",
                                    "impedit",
                                    "hic",
                                },
                                Title: sdk.String("Dr."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("ex"),
                                        Ssml: sdk.String("voluptas"),
                                        TextToSpeech: sdk.String("debitis"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("delectus"),
                                        Ssml: sdk.String("quae"),
                                        TextToSpeech: sdk.String("minus"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("fuga"),
                                        Ssml: sdk.String("laborum"),
                                        TextToSpeech: sdk.String("consectetur"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("velit"),
                                        Ssml: sdk.String("atque"),
                                        TextToSpeech: sdk.String("ipsum"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://jaunty-conductor.info"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://minor-stag.info"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("vel"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("quibusdam"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("facere"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("architecto"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("quia"),
                                    ImageURI: sdk.String("porro"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("illo"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("vel"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("ea"),
                                Title: sdk.String("Mr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "excepturi",
                                    "eum",
                                    "velit",
                                    "ut",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://circular-scale.org"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://adorable-goodbye.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://exhausted-criterion.info"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                FormattedText: sdk.String("doloremque"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("consequatur"),
                                    ImageURI: sdk.String("officia"),
                                },
                                Subtitle: sdk.String("recusandae"),
                                Title: sdk.String("Ms."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("facilis"),
                                        Footer: sdk.String("placeat"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("perspiciatis"),
                                            ImageURI: sdk.String("expedita"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("deleniti"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("ullam"),
                                        Footer: sdk.String("unde"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("necessitatibus"),
                                            ImageURI: sdk.String("animi"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("impedit"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("error"),
                                        Text: sdk.String("esse"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("labore"),
                                        Text: sdk.String("veritatis"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("vero"),
                                        Text: sdk.String("consectetur"),
                                    },
                                },
                                ImageURI: sdk.String("vitae"),
                                Subtitle: sdk.String("inventore"),
                                Title: sdk.String("Mrs."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("qui"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("iste"),
                                            ImageURI: sdk.String("ex"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("nemo"),
                                            Synonyms: []string{
                                                "libero",
                                                "rem",
                                                "dolorum",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("fugit"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("alias"),
                                            ImageURI: sdk.String("magni"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("vel"),
                                            Synonyms: []string{
                                                "quae",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("neque"),
                                ImageURI: sdk.String("exercitationem"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("itaque"),
                                URI: sdk.String("http://dual-nursing.org"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("maxime"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quia"),
                                            ImageURI: sdk.String("quia"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("nostrum"),
                                            Synonyms: []string{
                                                "libero",
                                                "dicta",
                                                "id",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("fugiat"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("officia"),
                                            ImageURI: sdk.String("quos"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("placeat"),
                                            Synonyms: []string{
                                                "iusto",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("voluptates"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("inventore"),
                                            ImageURI: sdk.String("aperiam"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("totam"),
                                            Synonyms: []string{
                                                "eligendi",
                                                "distinctio",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                Subtitle: sdk.String("autem"),
                                Title: sdk.String("Ms."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("assumenda"),
                                        Description: sdk.String("beatae"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("est"),
                                            ImageURI: sdk.String("facere"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("corrupti"),
                                            ImageURI: sdk.String("molestiae"),
                                        },
                                        Name: sdk.String("Sheldon Treutel"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "ipsam": "rerum",
                                "laudantium": "corporis",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumActionsOnGoogle.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "cum",
                                    "at",
                                    "alias",
                                    "quia",
                                },
                                Title: sdk.String("Miss"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("repudiandae"),
                                        Ssml: sdk.String("accusantium"),
                                        TextToSpeech: sdk.String("expedita"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("officiis"),
                                        Ssml: sdk.String("eos"),
                                        TextToSpeech: sdk.String("quibusdam"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("odio"),
                                        Ssml: sdk.String("praesentium"),
                                        TextToSpeech: sdk.String("odit"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://envious-transfer.name"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://glum-bridge.name"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://offbeat-chap.biz"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("at"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("dignissimos"),
                                    ImageURI: sdk.String("optio"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("qui"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("expedita"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("cupiditate"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("minima"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("placeat"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("neque"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("in"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("eum"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("modi"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("corporis"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("magnam"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("voluptates"),
                                Title: sdk.String("Dr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "aperiam",
                                    "libero",
                                    "ratione",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://numb-gap.net"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://realistic-file.net"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                                FormattedText: sdk.String("delectus"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("tempore"),
                                    ImageURI: sdk.String("vero"),
                                },
                                Subtitle: sdk.String("odit"),
                                Title: sdk.String("Dr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("reprehenderit"),
                                        Footer: sdk.String("aperiam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("odio"),
                                            ImageURI: sdk.String("minima"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("in"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("dolores"),
                                        Footer: sdk.String("error"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("veritatis"),
                                            ImageURI: sdk.String("ducimus"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("voluptate"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("optio"),
                                        Text: sdk.String("ex"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("quaerat"),
                                        Text: sdk.String("commodi"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("officiis"),
                                        Text: sdk.String("placeat"),
                                    },
                                },
                                ImageURI: sdk.String("quidem"),
                                Subtitle: sdk.String("exercitationem"),
                                Title: sdk.String("Ms."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("modi"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ipsa"),
                                            ImageURI: sdk.String("sint"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("vero"),
                                            Synonyms: []string{
                                                "repudiandae",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("dicta"),
                                ImageURI: sdk.String("earum"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("veniam"),
                                URI: sdk.String("https://decisive-real.com"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("necessitatibus"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nobis"),
                                            ImageURI: sdk.String("ipsa"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("ducimus"),
                                            Synonyms: []string{
                                                "veritatis",
                                                "quasi",
                                                "laboriosam",
                                                "pariatur",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                                Subtitle: sdk.String("excepturi"),
                                Title: sdk.String("Ms."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("aliquam"),
                                        Description: sdk.String("nostrum"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("doloribus"),
                                            ImageURI: sdk.String("eligendi"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("sint"),
                                            ImageURI: sdk.String("enim"),
                                        },
                                        Name: sdk.String("Matt Macejkovic"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("odio"),
                                        Description: sdk.String("eaque"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("saepe"),
                                            ImageURI: sdk.String("architecto"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quos"),
                                            ImageURI: sdk.String("iste"),
                                        },
                                        Name: sdk.String("Randolph Reinger DVM"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "ipsum": "adipisci",
                                "saepe": "deserunt",
                                "doloremque": "quis",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumTelegram.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "architecto",
                                    "cupiditate",
                                    "molestiae",
                                },
                                Title: sdk.String("Miss"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("non"),
                                        Ssml: sdk.String("magnam"),
                                        TextToSpeech: sdk.String("itaque"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("sed"),
                                        Ssml: sdk.String("asperiores"),
                                        TextToSpeech: sdk.String("veniam"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("consequuntur"),
                                        Ssml: sdk.String("facere"),
                                        TextToSpeech: sdk.String("laudantium"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("odit"),
                                        Ssml: sdk.String("pariatur"),
                                        TextToSpeech: sdk.String("amet"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://humiliating-western.biz"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://hospitable-father.info"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://sturdy-puddle.biz"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("voluptatibus"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("debitis"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("rerum"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("reprehenderit"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("neque"),
                                    ImageURI: sdk.String("iusto"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("eligendi"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("fugiat"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("unde"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("ducimus"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("dolor"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("dicta"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("error"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("vitae"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("dignissimos"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("esse"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("fugiat"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("ad"),
                                Title: sdk.String("Mr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "delectus",
                                    "iusto",
                                },
                            },
                        },
                    },
                    MlDisabled: sdk.Bool(false),
                    Name: sdk.String("Mrs. Pam Bins"),
                    OutputContexts: []shared.GoogleCloudDialogflowV2Context{
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(734814),
                            Name: sdk.String("Julia Wisozk"),
                            Parameters: map[string]interface{}{
                                "nemo": "repellat",
                                "quisquam": "sequi",
                                "nihil": "deleniti",
                            },
                        },
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(75566),
                            Name: sdk.String("Nadine Gutmann"),
                            Parameters: map[string]interface{}{
                                "repudiandae": "consequatur",
                                "maxime": "aspernatur",
                                "nam": "expedita",
                            },
                        },
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(559174),
                            Name: sdk.String("Lamar Prohaska"),
                            Parameters: map[string]interface{}{
                                "similique": "repellendus",
                                "iure": "dolorem",
                                "commodi": "impedit",
                                "commodi": "aut",
                            },
                        },
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(32055),
                            Name: sdk.String("Brenda Fay"),
                            Parameters: map[string]interface{}{
                                "cum": "amet",
                                "quasi": "dicta",
                                "laudantium": "doloremque",
                            },
                        },
                    },
                    Parameters: []shared.GoogleCloudDialogflowV2IntentParameter{
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("iusto"),
                            DisplayName: sdk.String("amet"),
                            EntityTypeDisplayName: sdk.String("provident"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Terence Medhurst III"),
                            Prompts: []string{
                                "itaque",
                                "facilis",
                            },
                            Value: sdk.String("corrupti"),
                        },
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("aperiam"),
                            DisplayName: sdk.String("sint"),
                            EntityTypeDisplayName: sdk.String("accusamus"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Mrs. Deanna Buckridge"),
                            Prompts: []string{
                                "a",
                            },
                            Value: sdk.String("dolor"),
                        },
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("occaecati"),
                            DisplayName: sdk.String("atque"),
                            EntityTypeDisplayName: sdk.String("beatae"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Leroy Schinner Jr."),
                            Prompts: []string{
                                "ea",
                                "aperiam",
                                "dignissimos",
                            },
                            Value: sdk.String("repellat"),
                        },
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("velit"),
                            DisplayName: sdk.String("porro"),
                            EntityTypeDisplayName: sdk.String("provident"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Vicky Kuhn"),
                            Prompts: []string{
                                "temporibus",
                                "officia",
                                "amet",
                            },
                            Value: sdk.String("tenetur"),
                        },
                    },
                    ParentFollowupIntentName: sdk.String("aspernatur"),
                    Priority: sdk.Int(778276),
                    ResetContexts: sdk.Bool(false),
                    TrainingPhrases: []shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Cameron Kuhn"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("repellat"),
                                    EntityType: sdk.String("explicabo"),
                                    Text: sdk.String("explicabo"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(350325),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumExample.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Virginia Bins"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("non"),
                                    EntityType: sdk.String("distinctio"),
                                    Text: sdk.String("in"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("exercitationem"),
                                    EntityType: sdk.String("labore"),
                                    Text: sdk.String("numquam"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("repudiandae"),
                                    EntityType: sdk.String("modi"),
                                    Text: sdk.String("in"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("explicabo"),
                                    EntityType: sdk.String("accusamus"),
                                    Text: sdk.String("rem"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(44016),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTypeUnspecified.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Bill Kling"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("magnam"),
                                    EntityType: sdk.String("sit"),
                                    Text: sdk.String("modi"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("eum"),
                                    EntityType: sdk.String("nesciunt"),
                                    Text: sdk.String("mollitia"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("dignissimos"),
                                    EntityType: sdk.String("fugiat"),
                                    Text: sdk.String("nostrum"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(475325),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTypeUnspecified.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Mr. Stephen Gleason"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("commodi"),
                                    EntityType: sdk.String("numquam"),
                                    Text: sdk.String("dolorum"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("possimus"),
                                    EntityType: sdk.String("voluptate"),
                                    Text: sdk.String("consectetur"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(200637),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTypeUnspecified.ToPointer(),
                        },
                    },
                    WebhookState: shared.GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabledForSlotFilling.ToPointer(),
                },
                shared.GoogleCloudDialogflowV2IntentInput{
                    Action: sdk.String("minus"),
                    DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum{
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumViber,
                    },
                    DisplayName: sdk.String("iusto"),
                    EndInteraction: sdk.Bool(false),
                    Events: []string{
                        "et",
                        "facilis",
                        "amet",
                    },
                    InputContextNames: []string{
                        "fuga",
                        "alias",
                    },
                    IsFallback: sdk.Bool(false),
                    LiveAgentHandoff: sdk.Bool(false),
                    Messages: []shared.GoogleCloudDialogflowV2IntentMessage{
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://mad-speaker.com"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                FormattedText: sdk.String("eaque"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("saepe"),
                                    ImageURI: sdk.String("delectus"),
                                },
                                Subtitle: sdk.String("mollitia"),
                                Title: sdk.String("Dr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("voluptatem"),
                                        Footer: sdk.String("alias"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("eveniet"),
                                            ImageURI: sdk.String("hic"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("voluptatem"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("necessitatibus"),
                                        Text: sdk.String("harum"),
                                    },
                                },
                                ImageURI: sdk.String("explicabo"),
                                Subtitle: sdk.String("beatae"),
                                Title: sdk.String("Mrs."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("optio"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptatibus"),
                                            ImageURI: sdk.String("molestias"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("officia"),
                                            Synonyms: []string{
                                                "totam",
                                                "sequi",
                                                "aliquid",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("impedit"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ducimus"),
                                            ImageURI: sdk.String("odit"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("velit"),
                                            Synonyms: []string{
                                                "repellat",
                                                "nulla",
                                                "laborum",
                                                "natus",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("doloremque"),
                                ImageURI: sdk.String("nisi"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("rerum"),
                                URI: sdk.String("https://upright-derivation.name"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("ullam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quisquam"),
                                            ImageURI: sdk.String("dicta"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("voluptatibus"),
                                            Synonyms: []string{
                                                "quae",
                                                "officiis",
                                                "architecto",
                                                "architecto",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                Subtitle: sdk.String("optio"),
                                Title: sdk.String("Ms."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("facilis"),
                                        Description: sdk.String("reiciendis"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("a"),
                                            ImageURI: sdk.String("iste"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("dicta"),
                                            ImageURI: sdk.String("quos"),
                                        },
                                        Name: sdk.String("Eleanor Gleason"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "assumenda": "vero",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumGoogleHangouts.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "porro",
                                    "accusamus",
                                    "totam",
                                    "reiciendis",
                                },
                                Title: sdk.String("Mr."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("nihil"),
                                        Ssml: sdk.String("esse"),
                                        TextToSpeech: sdk.String("iure"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("odio"),
                                        Ssml: sdk.String("nesciunt"),
                                        TextToSpeech: sdk.String("debitis"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("vel"),
                                        Ssml: sdk.String("neque"),
                                        TextToSpeech: sdk.String("corporis"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://faithful-azimuth.name"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://giving-tic.biz"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("quos"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("fugiat"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("delectus"),
                                    ImageURI: sdk.String("velit"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("similique"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("illo"),
                                Title: sdk.String("Dr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "doloribus",
                                    "possimus",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://colorful-frigate.name"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://repulsive-conspiracy.info"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://gifted-temporariness.name"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                FormattedText: sdk.String("ut"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("numquam"),
                                    ImageURI: sdk.String("tenetur"),
                                },
                                Subtitle: sdk.String("adipisci"),
                                Title: sdk.String("Miss"),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumWhite.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("ex"),
                                        Footer: sdk.String("minus"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ab"),
                                            ImageURI: sdk.String("beatae"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("hic"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("dolor"),
                                        Footer: sdk.String("ducimus"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("fuga"),
                                            ImageURI: sdk.String("minima"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("architecto"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("incidunt"),
                                        Text: sdk.String("adipisci"),
                                    },
                                },
                                ImageURI: sdk.String("praesentium"),
                                Subtitle: sdk.String("dolor"),
                                Title: sdk.String("Mrs."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("facilis"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("impedit"),
                                            ImageURI: sdk.String("sit"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("nemo"),
                                            Synonyms: []string{
                                                "consequuntur",
                                                "amet",
                                                "deserunt",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("veniam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quod"),
                                            ImageURI: sdk.String("itaque"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("a"),
                                            Synonyms: []string{
                                                "enim",
                                                "doloribus",
                                                "assumenda",
                                                "officiis",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("alias"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("culpa"),
                                            ImageURI: sdk.String("ipsa"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("nobis"),
                                            Synonyms: []string{
                                                "quia",
                                                "dicta",
                                                "vel",
                                                "perspiciatis",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("ullam"),
                                ImageURI: sdk.String("architecto"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("accusantium"),
                                URI: sdk.String("http://bold-nephew.net"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("quibusdam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quod"),
                                            ImageURI: sdk.String("nemo"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("recusandae"),
                                            Synonyms: []string{
                                                "magnam",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("laboriosam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("sed"),
                                            ImageURI: sdk.String("odio"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("natus"),
                                            Synonyms: []string{
                                                "cum",
                                                "doloribus",
                                                "facilis",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                                Subtitle: sdk.String("itaque"),
                                Title: sdk.String("Mrs."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("modi"),
                                        Description: sdk.String("perspiciatis"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("hic"),
                                            ImageURI: sdk.String("cum"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("aspernatur"),
                                            ImageURI: sdk.String("libero"),
                                        },
                                        Name: sdk.String("Barry Walsh"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("saepe"),
                                        Description: sdk.String("autem"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quo"),
                                            ImageURI: sdk.String("nesciunt"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("illum"),
                                            ImageURI: sdk.String("nemo"),
                                        },
                                        Name: sdk.String("Johnathan Franey"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("recusandae"),
                                        Description: sdk.String("distinctio"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("pariatur"),
                                            ImageURI: sdk.String("ad"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("facere"),
                                            ImageURI: sdk.String("laborum"),
                                        },
                                        Name: sdk.String("Neal Gorczany"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "deserunt": "molestias",
                                "laborum": "est",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumSkype.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "quo",
                                    "perferendis",
                                },
                                Title: sdk.String("Mr."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("magnam"),
                                        Ssml: sdk.String("quaerat"),
                                        TextToSpeech: sdk.String("eligendi"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("hic"),
                                        Ssml: sdk.String("nostrum"),
                                        TextToSpeech: sdk.String("officiis"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://jumbo-mayor.net"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://burdensome-penguin.net"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("voluptatem"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("necessitatibus"),
                                    ImageURI: sdk.String("maxime"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("architecto"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("similique"),
                                Title: sdk.String("Miss"),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "quae",
                                    "magni",
                                    "officiis",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://sociable-awareness.name"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                FormattedText: sdk.String("maiores"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("laudantium"),
                                    ImageURI: sdk.String("maiores"),
                                },
                                Subtitle: sdk.String("alias"),
                                Title: sdk.String("Dr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumWhite.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("suscipit"),
                                        Footer: sdk.String("earum"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("doloribus"),
                                            ImageURI: sdk.String("velit"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("eius"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("quasi"),
                                        Text: sdk.String("neque"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("vero"),
                                        Text: sdk.String("excepturi"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("accusantium"),
                                        Text: sdk.String("qui"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("impedit"),
                                        Text: sdk.String("beatae"),
                                    },
                                },
                                ImageURI: sdk.String("incidunt"),
                                Subtitle: sdk.String("dicta"),
                                Title: sdk.String("Mr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("rerum"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("alias"),
                                            ImageURI: sdk.String("error"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("vel"),
                                            Synonyms: []string{
                                                "id",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("ex"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quas"),
                                            ImageURI: sdk.String("veritatis"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("ullam"),
                                            Synonyms: []string{
                                                "similique",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("quam"),
                                ImageURI: sdk.String("magni"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("deserunt"),
                                URI: sdk.String("https://parallel-chauvinist.biz"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("quis"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("cupiditate"),
                                            ImageURI: sdk.String("aliquam"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("excepturi"),
                                            Synonyms: []string{
                                                "laudantium",
                                                "velit",
                                                "reiciendis",
                                                "amet",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("ipsa"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quisquam"),
                                            ImageURI: sdk.String("tenetur"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("quas"),
                                            Synonyms: []string{
                                                "aliquid",
                                                "asperiores",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("nobis"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("perspiciatis"),
                                            ImageURI: sdk.String("accusantium"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("dicta"),
                                            Synonyms: []string{
                                                "commodi",
                                                "eveniet",
                                                "porro",
                                                "tempore",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("modi"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptates"),
                                            ImageURI: sdk.String("fugit"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("eius"),
                                            Synonyms: []string{
                                                "eligendi",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                Subtitle: sdk.String("esse"),
                                Title: sdk.String("Ms."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("repellat"),
                                        Description: sdk.String("a"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("animi"),
                                            ImageURI: sdk.String("maiores"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("itaque"),
                                            ImageURI: sdk.String("nulla"),
                                        },
                                        Name: sdk.String("Lewis Franecki"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("officia"),
                                        Description: sdk.String("saepe"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("eum"),
                                            ImageURI: sdk.String("repudiandae"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("accusantium"),
                                            ImageURI: sdk.String("officia"),
                                        },
                                        Name: sdk.String("Ryan Kuvalis"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("eos"),
                                        Description: sdk.String("nobis"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("natus"),
                                            ImageURI: sdk.String("minus"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quia"),
                                            ImageURI: sdk.String("magnam"),
                                        },
                                        Name: sdk.String("Traci Lueilwitz"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "laborum": "modi",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumPlatformUnspecified.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "architecto",
                                    "molestias",
                                    "dolore",
                                    "sunt",
                                },
                                Title: sdk.String("Dr."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("odit"),
                                        Ssml: sdk.String("earum"),
                                        TextToSpeech: sdk.String("veniam"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://fumbling-grade.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://handmade-geometry.org"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("repellendus"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("id"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("sed"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("repellat"),
                                    ImageURI: sdk.String("repudiandae"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("pariatur"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("harum"),
                                Title: sdk.String("Mrs."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "iure",
                                    "explicabo",
                                    "minus",
                                    "soluta",
                                },
                            },
                        },
                    },
                    MlDisabled: sdk.Bool(false),
                    Name: sdk.String("Jacob Wehner"),
                    OutputContexts: []shared.GoogleCloudDialogflowV2Context{
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(97810),
                            Name: sdk.String("Erick Pfeffer MD"),
                            Parameters: map[string]interface{}{
                                "eaque": "deserunt",
                                "aliquid": "excepturi",
                                "magni": "tempora",
                            },
                        },
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(821904),
                            Name: sdk.String("Susie Cremin"),
                            Parameters: map[string]interface{}{
                                "minus": "quo",
                                "quos": "asperiores",
                                "voluptatum": "iste",
                                "corporis": "accusantium",
                            },
                        },
                    },
                    Parameters: []shared.GoogleCloudDialogflowV2IntentParameter{
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("aut"),
                            DisplayName: sdk.String("doloribus"),
                            EntityTypeDisplayName: sdk.String("nostrum"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Woodrow DuBuque"),
                            Prompts: []string{
                                "mollitia",
                                "quae",
                                "quos",
                                "aperiam",
                            },
                            Value: sdk.String("non"),
                        },
                    },
                    ParentFollowupIntentName: sdk.String("voluptates"),
                    Priority: sdk.Int(324052),
                    ResetContexts: sdk.Bool(false),
                    TrainingPhrases: []shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Clifton Crooks III"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("est"),
                                    EntityType: sdk.String("dolor"),
                                    Text: sdk.String("aliquid"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("consectetur"),
                                    EntityType: sdk.String("cumque"),
                                    Text: sdk.String("rem"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("voluptatum"),
                                    EntityType: sdk.String("ducimus"),
                                    Text: sdk.String("adipisci"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(927959),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTypeUnspecified.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Herbert Dietrich MD"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("tenetur"),
                                    EntityType: sdk.String("autem"),
                                    Text: sdk.String("quidem"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(517121),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                        },
                    },
                    WebhookState: shared.GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabled.ToPointer(),
                },
                shared.GoogleCloudDialogflowV2IntentInput{
                    Action: sdk.String("magni"),
                    DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum{
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumTelegram,
                        shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumLine,
                    },
                    DisplayName: sdk.String("commodi"),
                    EndInteraction: sdk.Bool(false),
                    Events: []string{
                        "fuga",
                    },
                    InputContextNames: []string{
                        "dolore",
                    },
                    IsFallback: sdk.Bool(false),
                    LiveAgentHandoff: sdk.Bool(false),
                    Messages: []shared.GoogleCloudDialogflowV2IntentMessage{
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://grotesque-rocket-ship.net"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://outgoing-bedroom.info"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                FormattedText: sdk.String("libero"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("ipsam"),
                                    ImageURI: sdk.String("quasi"),
                                },
                                Subtitle: sdk.String("cumque"),
                                Title: sdk.String("Mr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("facilis"),
                                        Footer: sdk.String("beatae"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("cumque"),
                                            ImageURI: sdk.String("delectus"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("labore"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("rem"),
                                        Footer: sdk.String("atque"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("officiis"),
                                            ImageURI: sdk.String("cum"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("pariatur"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("incidunt"),
                                        Footer: sdk.String("quod"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("minus"),
                                            ImageURI: sdk.String("porro"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("id"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("libero"),
                                        Footer: sdk.String("quo"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("esse"),
                                            ImageURI: sdk.String("hic"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("maxime"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("pariatur"),
                                        Text: sdk.String("eligendi"),
                                    },
                                },
                                ImageURI: sdk.String("recusandae"),
                                Subtitle: sdk.String("veritatis"),
                                Title: sdk.String("Mr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("iusto"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("dolor"),
                                            ImageURI: sdk.String("voluptates"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("tempora"),
                                            Synonyms: []string{
                                                "rerum",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("voluptatem"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("eum"),
                                            ImageURI: sdk.String("at"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("eum"),
                                            Synonyms: []string{
                                                "voluptatum",
                                                "blanditiis",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("atque"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("rerum"),
                                            ImageURI: sdk.String("deserunt"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("atque"),
                                            Synonyms: []string{
                                                "atque",
                                                "architecto",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("enim"),
                                ImageURI: sdk.String("rem"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("magni"),
                                URI: sdk.String("http://narrow-skull.biz"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("sapiente"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("saepe"),
                                            ImageURI: sdk.String("delectus"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("officia"),
                                            Synonyms: []string{
                                                "cumque",
                                                "natus",
                                                "quaerat",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("quia"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("officiis"),
                                            ImageURI: sdk.String("mollitia"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("cumque"),
                                            Synonyms: []string{
                                                "enim",
                                                "eum",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                Subtitle: sdk.String("illum"),
                                Title: sdk.String("Mrs."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("odio"),
                                        Description: sdk.String("minus"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("asperiores"),
                                            ImageURI: sdk.String("recusandae"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptates"),
                                            ImageURI: sdk.String("praesentium"),
                                        },
                                        Name: sdk.String("Beverly Bailey"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "sunt": "nesciunt",
                                "delectus": "laborum",
                                "aliquam": "deserunt",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumSlack.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "impedit",
                                },
                                Title: sdk.String("Mrs."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("ipsa"),
                                        Ssml: sdk.String("at"),
                                        TextToSpeech: sdk.String("dolorem"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("repellat"),
                                        Ssml: sdk.String("aspernatur"),
                                        TextToSpeech: sdk.String("inventore"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("sequi"),
                                        Ssml: sdk.String("fugit"),
                                        TextToSpeech: sdk.String("fuga"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://frosty-bear.biz"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("optio"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("ex"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("quae"),
                                    ImageURI: sdk.String("deleniti"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("excepturi"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("aliquid"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("sed"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("beatae"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("ea"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("animi"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("dolore"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("dignissimos"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("esse"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("animi"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("laudantium"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("esse"),
                                Title: sdk.String("Dr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "velit",
                                    "officiis",
                                    "eius",
                                    "rerum",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://harsh-caribou.net"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://rotten-cranky.biz"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://lucky-time.biz"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://peppery-bed.net"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                FormattedText: sdk.String("temporibus"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("sint"),
                                    ImageURI: sdk.String("iusto"),
                                },
                                Subtitle: sdk.String("enim"),
                                Title: sdk.String("Dr."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumImageDisplayOptionsUnspecified.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("laudantium"),
                                        Footer: sdk.String("tempora"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quae"),
                                            ImageURI: sdk.String("omnis"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("illum"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("deleniti"),
                                        Footer: sdk.String("modi"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("earum"),
                                            ImageURI: sdk.String("architecto"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("aliquam"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("sequi"),
                                        Footer: sdk.String("saepe"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("consequatur"),
                                            ImageURI: sdk.String("esse"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("debitis"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("cumque"),
                                        Footer: sdk.String("aliquam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("dolorum"),
                                            ImageURI: sdk.String("deserunt"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("ad"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("laborum"),
                                        Text: sdk.String("nobis"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("quibusdam"),
                                        Text: sdk.String("omnis"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("aut"),
                                        Text: sdk.String("ipsam"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("officia"),
                                        Text: sdk.String("cupiditate"),
                                    },
                                },
                                ImageURI: sdk.String("reprehenderit"),
                                Subtitle: sdk.String("quia"),
                                Title: sdk.String("Dr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("ad"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nisi"),
                                            ImageURI: sdk.String("molestiae"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("quia"),
                                            Synonyms: []string{
                                                "sed",
                                                "odit",
                                                "iusto",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("eos"),
                                ImageURI: sdk.String("repellendus"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("nesciunt"),
                                URI: sdk.String("http://noteworthy-e-mail.info"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("distinctio"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("sapiente"),
                                            ImageURI: sdk.String("quam"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("est"),
                                            Synonyms: []string{
                                                "delectus",
                                                "culpa",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                Subtitle: sdk.String("iusto"),
                                Title: sdk.String("Dr."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("voluptas"),
                                        Description: sdk.String("non"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ullam"),
                                            ImageURI: sdk.String("laborum"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptas"),
                                            ImageURI: sdk.String("doloribus"),
                                        },
                                        Name: sdk.String("Rolando Hessel"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("distinctio"),
                                        Description: sdk.String("maiores"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("laboriosam"),
                                            ImageURI: sdk.String("voluptatem"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("optio"),
                                            ImageURI: sdk.String("sequi"),
                                        },
                                        Name: sdk.String("Mr. Evelyn Wiza"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("rerum"),
                                        Description: sdk.String("in"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nostrum"),
                                            ImageURI: sdk.String("temporibus"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ratione"),
                                            ImageURI: sdk.String("dolor"),
                                        },
                                        Name: sdk.String("Stella Witting MD"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("accusantium"),
                                        Description: sdk.String("quod"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("minus"),
                                            ImageURI: sdk.String("quos"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("possimus"),
                                            ImageURI: sdk.String("maiores"),
                                        },
                                        Name: sdk.String("Miss Daisy Willms"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "repellendus": "unde",
                                "alias": "impedit",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumFacebook.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "labore",
                                    "expedita",
                                },
                                Title: sdk.String("Ms."),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("sunt"),
                                        Ssml: sdk.String("enim"),
                                        TextToSpeech: sdk.String("nulla"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("maiores"),
                                        Ssml: sdk.String("distinctio"),
                                        TextToSpeech: sdk.String("mollitia"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("impedit"),
                                        Ssml: sdk.String("accusamus"),
                                        TextToSpeech: sdk.String("et"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("quas"),
                                        Ssml: sdk.String("blanditiis"),
                                        TextToSpeech: sdk.String("cum"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://vague-chassis.net"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://incomplete-riser.org"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("veritatis"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("itaque"),
                                    ImageURI: sdk.String("vero"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("quo"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("minus"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("distinctio"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("cum"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("suscipit"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("saepe"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("earum"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("quod"),
                                Title: sdk.String("Ms."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "ipsum",
                                    "ducimus",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://practical-catcher.biz"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://leading-indication.biz"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://sneaky-naming.com"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                FormattedText: sdk.String("laborum"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("illum"),
                                    ImageURI: sdk.String("fugit"),
                                },
                                Subtitle: sdk.String("maxime"),
                                Title: sdk.String("Miss"),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("illum"),
                                        Footer: sdk.String("quibusdam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("commodi"),
                                            ImageURI: sdk.String("esse"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("explicabo"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("optio"),
                                        Footer: sdk.String("ipsa"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("maiores"),
                                            ImageURI: sdk.String("exercitationem"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("culpa"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("neque"),
                                        Text: sdk.String("officia"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("suscipit"),
                                        Text: sdk.String("harum"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("ducimus"),
                                        Text: sdk.String("doloremque"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("perferendis"),
                                        Text: sdk.String("laudantium"),
                                    },
                                },
                                ImageURI: sdk.String("iusto"),
                                Subtitle: sdk.String("corrupti"),
                                Title: sdk.String("Ms."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("iure"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ab"),
                                            ImageURI: sdk.String("quaerat"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("amet"),
                                            Synonyms: []string{
                                                "corporis",
                                                "est",
                                                "iure",
                                                "quisquam",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("laudantium"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nam"),
                                            ImageURI: sdk.String("nemo"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("enim"),
                                            Synonyms: []string{
                                                "minima",
                                                "tempora",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("corrupti"),
                                ImageURI: sdk.String("doloremque"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("fugiat"),
                                URI: sdk.String("http://anxious-reprocessing.net"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("porro"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("impedit"),
                                            ImageURI: sdk.String("nisi"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("cumque"),
                                            Synonyms: []string{
                                                "fugiat",
                                                "laboriosam",
                                                "nam",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("maiores"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("consectetur"),
                                            ImageURI: sdk.String("necessitatibus"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("maxime"),
                                            Synonyms: []string{
                                                "voluptatem",
                                                "provident",
                                                "adipisci",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("magnam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("repellat"),
                                            ImageURI: sdk.String("omnis"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("explicabo"),
                                            Synonyms: []string{
                                                "cum",
                                                "id",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                Subtitle: sdk.String("fugit"),
                                Title: sdk.String("Mrs."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("sequi"),
                                        Description: sdk.String("voluptatum"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quasi"),
                                            ImageURI: sdk.String("error"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("nobis"),
                                            ImageURI: sdk.String("tempora"),
                                        },
                                        Name: sdk.String("Dr. Monica Ratke"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("fugit"),
                                        Description: sdk.String("voluptatem"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("repudiandae"),
                                            ImageURI: sdk.String("corporis"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ea"),
                                            ImageURI: sdk.String("eos"),
                                        },
                                        Name: sdk.String("Vickie Welch"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "cupiditate": "animi",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumSkype.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "ipsa",
                                },
                                Title: sdk.String("Miss"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("assumenda"),
                                        Ssml: sdk.String("quo"),
                                        TextToSpeech: sdk.String("fuga"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("tempore"),
                                        Ssml: sdk.String("commodi"),
                                        TextToSpeech: sdk.String("fugit"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("suscipit"),
                                        Ssml: sdk.String("voluptate"),
                                        TextToSpeech: sdk.String("nisi"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://vicious-servitude.com"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://cylindrical-budget.net"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://grateful-standpoint.name"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://silly-refrigerator.biz"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("asperiores"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("id"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("quibusdam"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("quo"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("aliquam"),
                                    ImageURI: sdk.String("provident"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("doloremque"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("ipsum"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("alias"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("doloremque"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("perspiciatis"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("quam"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("officia"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("ex"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("architecto"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("laborum"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("veritatis"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("quod"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("a"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("qui"),
                                Title: sdk.String("Mr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "atque",
                                    "totam",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://junior-shop.com"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://standard-implement.com"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://reckless-barium.info"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://criminal-pick.biz"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                                FormattedText: sdk.String("voluptatum"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("perferendis"),
                                    ImageURI: sdk.String("laborum"),
                                },
                                Subtitle: sdk.String("omnis"),
                                Title: sdk.String("Ms."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("velit"),
                                        Footer: sdk.String("adipisci"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("non"),
                                            ImageURI: sdk.String("optio"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("illum"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("molestias"),
                                        Footer: sdk.String("ipsam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("esse"),
                                            ImageURI: sdk.String("laborum"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("perspiciatis"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("quasi"),
                                        Footer: sdk.String("quas"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("odio"),
                                            ImageURI: sdk.String("commodi"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("porro"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("quidem"),
                                        Footer: sdk.String("explicabo"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("et"),
                                            ImageURI: sdk.String("nulla"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("magni"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("impedit"),
                                        Text: sdk.String("unde"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("ut"),
                                        Text: sdk.String("facere"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("voluptas"),
                                        Text: sdk.String("doloribus"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        Postback: sdk.String("recusandae"),
                                        Text: sdk.String("quisquam"),
                                    },
                                },
                                ImageURI: sdk.String("facere"),
                                Subtitle: sdk.String("dignissimos"),
                                Title: sdk.String("Miss"),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("dolor"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("sint"),
                                            ImageURI: sdk.String("aperiam"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("eaque"),
                                            Synonyms: []string{
                                                "laboriosam",
                                                "laborum",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("assumenda"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("explicabo"),
                                            ImageURI: sdk.String("fugiat"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("doloremque"),
                                            Synonyms: []string{
                                                "alias",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        Description: sdk.String("ullam"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("quis"),
                                            ImageURI: sdk.String("velit"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("ratione"),
                                            Synonyms: []string{
                                                "maxime",
                                                "recusandae",
                                                "cumque",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                AccessibilityText: sdk.String("totam"),
                                ImageURI: sdk.String("iure"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("maiores"),
                                URI: sdk.String("https://cooperative-birdbath.org"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("dicta"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("ipsam"),
                                            ImageURI: sdk.String("consequuntur"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("cumque"),
                                            Synonyms: []string{
                                                "non",
                                                "beatae",
                                                "sunt",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("beatae"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("autem"),
                                            ImageURI: sdk.String("ducimus"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("libero"),
                                            Synonyms: []string{
                                                "necessitatibus",
                                                "ipsum",
                                                "impedit",
                                            },
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        Description: sdk.String("illum"),
                                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("distinctio"),
                                            ImageURI: sdk.String("voluptatem"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                            Key: sdk.String("non"),
                                            Synonyms: []string{
                                                "consequatur",
                                                "laudantium",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                Subtitle: sdk.String("commodi"),
                                Title: sdk.String("Dr."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("voluptas"),
                                        Description: sdk.String("quaerat"),
                                        Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("earum"),
                                            ImageURI: sdk.String("tenetur"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                            AccessibilityText: sdk.String("assumenda"),
                                            ImageURI: sdk.String("dolore"),
                                        },
                                        Name: sdk.String("Ms. Samantha Metz"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "commodi": "neque",
                            },
                            Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumActionsOnGoogle.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "rem",
                                    "officiis",
                                },
                                Title: sdk.String("Miss"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("corporis"),
                                        Ssml: sdk.String("quod"),
                                        TextToSpeech: sdk.String("dolores"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://acrobatic-resist.org"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://fixed-dawn.biz"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://thick-jot.biz"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://funny-improvement.info"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        Header: sdk.String("vel"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("quaerat"),
                                    ImageURI: sdk.String("quasi"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("doloremque"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("assumenda"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("facere"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("sed"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("inventore"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("unde"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("deserunt"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("repellendus"),
                                            },
                                            shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                Text: sdk.String("consequatur"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("adipisci"),
                                Title: sdk.String("Mr."),
                            },
                            Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                Text: []string{
                                    "tempora",
                                    "debitis",
                                    "cumque",
                                    "maxime",
                                },
                            },
                        },
                    },
                    MlDisabled: sdk.Bool(false),
                    Name: sdk.String("Ms. Teresa Ondricka"),
                    OutputContexts: []shared.GoogleCloudDialogflowV2Context{
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(270477),
                            Name: sdk.String("Faye Bartoletti"),
                            Parameters: map[string]interface{}{
                                "laudantium": "ullam",
                                "aut": "quia",
                                "officia": "quaerat",
                            },
                        },
                        shared.GoogleCloudDialogflowV2Context{
                            LifespanCount: sdk.Int(361371),
                            Name: sdk.String("Mathew Williamson"),
                            Parameters: map[string]interface{}{
                                "quisquam": "praesentium",
                                "tempora": "ipsam",
                                "officiis": "sequi",
                            },
                        },
                    },
                    Parameters: []shared.GoogleCloudDialogflowV2IntentParameter{
                        shared.GoogleCloudDialogflowV2IntentParameter{
                            DefaultValue: sdk.String("voluptatem"),
                            DisplayName: sdk.String("est"),
                            EntityTypeDisplayName: sdk.String("amet"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Natasha Wiza"),
                            Prompts: []string{
                                "quibusdam",
                                "earum",
                                "excepturi",
                            },
                            Value: sdk.String("numquam"),
                        },
                    },
                    ParentFollowupIntentName: sdk.String("molestiae"),
                    Priority: sdk.Int(773833),
                    ResetContexts: sdk.Bool(false),
                    TrainingPhrases: []shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Ken Jacobs"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("incidunt"),
                                    EntityType: sdk.String("eos"),
                                    Text: sdk.String("magnam"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("dolores"),
                                    EntityType: sdk.String("aliquid"),
                                    Text: sdk.String("eum"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("vel"),
                                    EntityType: sdk.String("ad"),
                                    Text: sdk.String("quos"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("illo"),
                                    EntityType: sdk.String("suscipit"),
                                    Text: sdk.String("quibusdam"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(855484),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Ivan Volkman"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("doloribus"),
                                    EntityType: sdk.String("cumque"),
                                    Text: sdk.String("expedita"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(266370),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            Name: sdk.String("Kristina Erdman"),
                            Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    Alias: sdk.String("fugit"),
                                    EntityType: sdk.String("quo"),
                                    Text: sdk.String("temporibus"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(652092),
                            Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumExample.ToPointer(),
                        },
                    },
                    WebhookState: shared.GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabledForSlotFilling.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("quam"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("delectus"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("at"),
    }, operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentIntentsBatchUpdate

Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentIntentsBatchUpdate(ctx, operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput: &shared.GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput{
            IntentBatchInline: &shared.GoogleCloudDialogflowV2IntentBatchInput{
                Intents: []shared.GoogleCloudDialogflowV2IntentInput{
                    shared.GoogleCloudDialogflowV2IntentInput{
                        Action: sdk.String("temporibus"),
                        DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum{
                            shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSlack,
                            shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSlack,
                            shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSkype,
                            shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumLine,
                        },
                        DisplayName: sdk.String("dolore"),
                        EndInteraction: sdk.Bool(false),
                        Events: []string{
                            "reiciendis",
                            "iste",
                        },
                        InputContextNames: []string{
                            "occaecati",
                        },
                        IsFallback: sdk.Bool(false),
                        LiveAgentHandoff: sdk.Bool(false),
                        Messages: []shared.GoogleCloudDialogflowV2IntentMessage{
                            shared.GoogleCloudDialogflowV2IntentMessage{
                                BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                                    Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://murky-lawsuit.name"),
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("https://nautical-crash.org"),
                                            },
                                            Title: sdk.String("Miss"),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("https://worried-overweight.org"),
                                            },
                                            Title: sdk.String("Dr."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://well-made-wet-bar.net"),
                                            },
                                            Title: sdk.String("Dr."),
                                        },
                                    },
                                    FormattedText: sdk.String("omnis"),
                                    Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                        AccessibilityText: sdk.String("delectus"),
                                        ImageURI: sdk.String("odio"),
                                    },
                                    Subtitle: sdk.String("voluptatibus"),
                                    Title: sdk.String("Mr."),
                                },
                                BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                                    ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumWhite.ToPointer(),
                                    Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                            Description: sdk.String("similique"),
                                            Footer: sdk.String("asperiores"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("modi"),
                                                ImageURI: sdk.String("facere"),
                                            },
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                                URL: sdk.String("neque"),
                                                URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                            Description: sdk.String("sed"),
                                            Footer: sdk.String("non"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("porro"),
                                                ImageURI: sdk.String("fugiat"),
                                            },
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                                URL: sdk.String("soluta"),
                                                URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                            },
                                            Title: sdk.String("Dr."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                            Description: sdk.String("labore"),
                                            Footer: sdk.String("vero"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("eos"),
                                                ImageURI: sdk.String("quas"),
                                            },
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                                URL: sdk.String("quasi"),
                                                URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                    },
                                },
                                Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                                    Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                        shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                            Postback: sdk.String("fugiat"),
                                            Text: sdk.String("enim"),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                            Postback: sdk.String("iure"),
                                            Text: sdk.String("laudantium"),
                                        },
                                    },
                                    ImageURI: sdk.String("modi"),
                                    Subtitle: sdk.String("magnam"),
                                    Title: sdk.String("Dr."),
                                },
                                CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                                    Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                        shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                            Description: sdk.String("repudiandae"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("quibusdam"),
                                                ImageURI: sdk.String("praesentium"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                                Key: sdk.String("enim"),
                                                Synonyms: []string{
                                                    "unde",
                                                    "quae",
                                                    "eum",
                                                },
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                            Description: sdk.String("eveniet"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("laboriosam"),
                                                ImageURI: sdk.String("ratione"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                                Key: sdk.String("blanditiis"),
                                                Synonyms: []string{
                                                    "illum",
                                                    "reiciendis",
                                                    "placeat",
                                                },
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                            Description: sdk.String("consequatur"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("nesciunt"),
                                                ImageURI: sdk.String("quia"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                                Key: sdk.String("quidem"),
                                                Synonyms: []string{
                                                    "quo",
                                                    "laudantium",
                                                },
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                            Description: sdk.String("omnis"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("omnis"),
                                                ImageURI: sdk.String("fugit"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                                Key: sdk.String("dolorem"),
                                                Synonyms: []string{
                                                    "molestiae",
                                                    "debitis",
                                                    "vitae",
                                                },
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("ad"),
                                    ImageURI: sdk.String("atque"),
                                },
                                LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                                    DestinationName: sdk.String("ut"),
                                    URI: sdk.String("https://interesting-peak.org"),
                                },
                                ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                                    Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                        shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                            Description: sdk.String("eos"),
                                            Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("impedit"),
                                                ImageURI: sdk.String("ex"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                                Key: sdk.String("praesentium"),
                                                Synonyms: []string{
                                                    "vitae",
                                                    "tenetur",
                                                    "laudantium",
                                                },
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                    },
                                    Subtitle: sdk.String("eligendi"),
                                    Title: sdk.String("Dr."),
                                },
                                MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                                    MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                        shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                            ContentURL: sdk.String("inventore"),
                                            Description: sdk.String("ullam"),
                                            Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("iusto"),
                                                ImageURI: sdk.String("inventore"),
                                            },
                                            LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                                AccessibilityText: sdk.String("voluptate"),
                                                ImageURI: sdk.String("sed"),
                                            },
                                            Name: sdk.String("Shirley Heidenreich"),
                                        },
                                    },
                                    MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                                },
                                Payload: map[string]interface{}{
                                    "minus": "a",
                                    "fuga": "totam",
                                    "cupiditate": "at",
                                    "doloribus": "omnis",
                                },
                                Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumKik.ToPointer(),
                                QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                                    QuickReplies: []string{
                                        "voluptates",
                                        "sequi",
                                    },
                                    Title: sdk.String("Mrs."),
                                },
                                SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                                    SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                        shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                            DisplayText: sdk.String("vel"),
                                            Ssml: sdk.String("rem"),
                                            TextToSpeech: sdk.String("aliquid"),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                            DisplayText: sdk.String("aperiam"),
                                            Ssml: sdk.String("perspiciatis"),
                                            TextToSpeech: sdk.String("fugit"),
                                        },
                                    },
                                },
                                Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                                    Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                        shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                            Title: sdk.String("Miss"),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                            Title: sdk.String("Miss"),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                            Title: sdk.String("Dr."),
                                        },
                                    },
                                },
                                TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                                    Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("https://gentle-veneer.com"),
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://stupid-tweezers.net"),
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://content-gravel.org"),
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://calculating-placement.biz"),
                                            },
                                            Title: sdk.String("Dr."),
                                        },
                                    },
                                    ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                        shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                            Header: sdk.String("omnis"),
                                            HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                        },
                                    },
                                    Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                        AccessibilityText: sdk.String("sapiente"),
                                        ImageURI: sdk.String("officiis"),
                                    },
                                    Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                        shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                            Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                    Text: sdk.String("vitae"),
                                                },
                                            },
                                            DividerAfter: sdk.Bool(false),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                            Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                    Text: sdk.String("quas"),
                                                },
                                                shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                    Text: sdk.String("ipsa"),
                                                },
                                            },
                                            DividerAfter: sdk.Bool(false),
                                        },
                                        shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                            Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                    Text: sdk.String("placeat"),
                                                },
                                                shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                    Text: sdk.String("quod"),
                                                },
                                                shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                                    Text: sdk.String("eligendi"),
                                                },
                                            },
                                            DividerAfter: sdk.Bool(false),
                                        },
                                    },
                                    Subtitle: sdk.String("sit"),
                                    Title: sdk.String("Dr."),
                                },
                                Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                                    Text: []string{
                                        "distinctio",
                                        "assumenda",
                                        "illum",
                                    },
                                },
                            },
                        },
                        MlDisabled: sdk.Bool(false),
                        Name: sdk.String("Clifford Langworth"),
                        OutputContexts: []shared.GoogleCloudDialogflowV2Context{
                            shared.GoogleCloudDialogflowV2Context{
                                LifespanCount: sdk.Int(549419),
                                Name: sdk.String("Cesar Haag"),
                                Parameters: map[string]interface{}{
                                    "ab": "officiis",
                                    "eum": "rerum",
                                    "placeat": "ab",
                                },
                            },
                        },
                        Parameters: []shared.GoogleCloudDialogflowV2IntentParameter{
                            shared.GoogleCloudDialogflowV2IntentParameter{
                                DefaultValue: sdk.String("blanditiis"),
                                DisplayName: sdk.String("porro"),
                                EntityTypeDisplayName: sdk.String("labore"),
                                IsList: sdk.Bool(false),
                                Mandatory: sdk.Bool(false),
                                Name: sdk.String("Mario Weber"),
                                Prompts: []string{
                                    "cupiditate",
                                    "occaecati",
                                },
                                Value: sdk.String("itaque"),
                            },
                            shared.GoogleCloudDialogflowV2IntentParameter{
                                DefaultValue: sdk.String("fuga"),
                                DisplayName: sdk.String("consectetur"),
                                EntityTypeDisplayName: sdk.String("modi"),
                                IsList: sdk.Bool(false),
                                Mandatory: sdk.Bool(false),
                                Name: sdk.String("Dr. Rose Hoeger"),
                                Prompts: []string{
                                    "qui",
                                    "accusantium",
                                    "consequatur",
                                },
                                Value: sdk.String("impedit"),
                            },
                        },
                        ParentFollowupIntentName: sdk.String("recusandae"),
                        Priority: sdk.Int(451831),
                        ResetContexts: sdk.Bool(false),
                        TrainingPhrases: []shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                            shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                                Name: sdk.String("Carl Rath"),
                                Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("quidem"),
                                        EntityType: sdk.String("in"),
                                        Text: sdk.String("culpa"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("doloremque"),
                                        EntityType: sdk.String("fuga"),
                                        Text: sdk.String("dicta"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("architecto"),
                                        EntityType: sdk.String("suscipit"),
                                        Text: sdk.String("eligendi"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("officiis"),
                                        EntityType: sdk.String("dignissimos"),
                                        Text: sdk.String("fugit"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                },
                                TimesAddedCount: sdk.Int(188782),
                                Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                                Name: sdk.String("Susan Mraz"),
                                Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("ratione"),
                                        EntityType: sdk.String("ipsa"),
                                        Text: sdk.String("debitis"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("iste"),
                                        EntityType: sdk.String("deserunt"),
                                        Text: sdk.String("hic"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("ducimus"),
                                        EntityType: sdk.String("consequuntur"),
                                        Text: sdk.String("ipsam"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                },
                                TimesAddedCount: sdk.Int(729612),
                                Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTypeUnspecified.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                                Name: sdk.String("Willie Denesik I"),
                                Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                    shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                                        Alias: sdk.String("fugiat"),
                                        EntityType: sdk.String("voluptatum"),
                                        Text: sdk.String("velit"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                },
                                TimesAddedCount: sdk.Int(942780),
                                Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumExample.ToPointer(),
                            },
                        },
                        WebhookState: shared.GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabled.ToPointer(),
                    },
                },
            },
            IntentBatchURI: sdk.String("itaque"),
            IntentView: shared.GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnumIntentViewFull.ToPointer(),
            LanguageCode: sdk.String("iusto"),
            UpdateMask: sdk.String("dignissimos"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("sunt"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("vero"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentIntentsCreate

Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentIntentsCreate(ctx, operations.DialogflowProjectsLocationsAgentIntentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2IntentInput: &shared.GoogleCloudDialogflowV2IntentInput{
            Action: sdk.String("magnam"),
            DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum{
                shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSlack,
                shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumSkype,
                shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnumFacebook,
            },
            DisplayName: sdk.String("nemo"),
            EndInteraction: sdk.Bool(false),
            Events: []string{
                "illum",
                "porro",
                "quaerat",
                "magni",
            },
            InputContextNames: []string{
                "quos",
                "in",
                "commodi",
                "maxime",
            },
            IsFallback: sdk.Bool(false),
            LiveAgentHandoff: sdk.Bool(false),
            Messages: []shared.GoogleCloudDialogflowV2IntentMessage{
                shared.GoogleCloudDialogflowV2IntentMessage{
                    BasicCard: &shared.GoogleCloudDialogflowV2IntentMessageBasicCard{
                        Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                            shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("http://sugary-vomit.net"),
                                },
                                Title: sdk.String("Mrs."),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://warm-scrutiny.com"),
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("http://horrible-captor.biz"),
                                },
                                Title: sdk.String("Mr."),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://muted-developmental.com"),
                                },
                                Title: sdk.String("Dr."),
                            },
                        },
                        FormattedText: sdk.String("nam"),
                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                            AccessibilityText: sdk.String("architecto"),
                            ImageURI: sdk.String("rerum"),
                        },
                        Subtitle: sdk.String("assumenda"),
                        Title: sdk.String("Mr."),
                    },
                    BrowseCarouselCard: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard{
                        ImageDisplayOptions: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnumGray.ToPointer(),
                        Items: []shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                            shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("repellendus"),
                                Footer: sdk.String("nam"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("ab"),
                                    ImageURI: sdk.String("magnam"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("pariatur"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                },
                                Title: sdk.String("Ms."),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("tempore"),
                                Footer: sdk.String("recusandae"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("nostrum"),
                                    ImageURI: sdk.String("officia"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("voluptas"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                },
                                Title: sdk.String("Mrs."),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("excepturi"),
                                Footer: sdk.String("natus"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("deleniti"),
                                    ImageURI: sdk.String("necessitatibus"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("aspernatur"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("vero"),
                                Footer: sdk.String("eos"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("voluptatem"),
                                    ImageURI: sdk.String("temporibus"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("id"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                },
                                Title: sdk.String("Ms."),
                            },
                        },
                    },
                    Card: &shared.GoogleCloudDialogflowV2IntentMessageCard{
                        Buttons: []shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                            shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                Postback: sdk.String("minus"),
                                Text: sdk.String("sed"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                Postback: sdk.String("nam"),
                                Text: sdk.String("quia"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                Postback: sdk.String("iusto"),
                                Text: sdk.String("ab"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageCardButton{
                                Postback: sdk.String("deserunt"),
                                Text: sdk.String("sed"),
                            },
                        },
                        ImageURI: sdk.String("blanditiis"),
                        Subtitle: sdk.String("sint"),
                        Title: sdk.String("Dr."),
                    },
                    CarouselSelect: &shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect{
                        Items: []shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                            shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                Description: sdk.String("molestiae"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("itaque"),
                                    ImageURI: sdk.String("rem"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                    Key: sdk.String("nemo"),
                                    Synonyms: []string{
                                        "recusandae",
                                        "omnis",
                                    },
                                },
                                Title: sdk.String("Mr."),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem{
                                Description: sdk.String("aliquam"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("dolor"),
                                    ImageURI: sdk.String("occaecati"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                    Key: sdk.String("quibusdam"),
                                    Synonyms: []string{
                                        "consequuntur",
                                    },
                                },
                                Title: sdk.String("Mr."),
                            },
                        },
                    },
                    Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                        AccessibilityText: sdk.String("eius"),
                        ImageURI: sdk.String("commodi"),
                    },
                    LinkOutSuggestion: &shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion{
                        DestinationName: sdk.String("ipsam"),
                        URI: sdk.String("http://odd-discussion.info"),
                    },
                    ListSelect: &shared.GoogleCloudDialogflowV2IntentMessageListSelect{
                        Items: []shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                            shared.GoogleCloudDialogflowV2IntentMessageListSelectItem{
                                Description: sdk.String("modi"),
                                Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("doloremque"),
                                    ImageURI: sdk.String("odio"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo{
                                    Key: sdk.String("sit"),
                                    Synonyms: []string{
                                        "tempora",
                                        "delectus",
                                        "quam",
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                        },
                        Subtitle: sdk.String("libero"),
                        Title: sdk.String("Mr."),
                    },
                    MediaContent: &shared.GoogleCloudDialogflowV2IntentMessageMediaContent{
                        MediaObjects: []shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                            shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                ContentURL: sdk.String("optio"),
                                Description: sdk.String("saepe"),
                                Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("maiores"),
                                    ImageURI: sdk.String("accusantium"),
                                },
                                LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("sed"),
                                    ImageURI: sdk.String("eos"),
                                },
                                Name: sdk.String("Beatrice Buckridge"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject{
                                ContentURL: sdk.String("fugiat"),
                                Description: sdk.String("quidem"),
                                Icon: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("exercitationem"),
                                    ImageURI: sdk.String("veniam"),
                                },
                                LargeImage: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                                    AccessibilityText: sdk.String("modi"),
                                    ImageURI: sdk.String("quasi"),
                                },
                                Name: sdk.String("Hattie Schuster"),
                            },
                        },
                        MediaType: shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                    },
                    Payload: map[string]interface{}{
                        "est": "doloribus",
                        "provident": "alias",
                        "deserunt": "fugit",
                    },
                    Platform: shared.GoogleCloudDialogflowV2IntentMessagePlatformEnumKik.ToPointer(),
                    QuickReplies: &shared.GoogleCloudDialogflowV2IntentMessageQuickReplies{
                        QuickReplies: []string{
                            "molestiae",
                            "maxime",
                            "facere",
                            "impedit",
                        },
                        Title: sdk.String("Ms."),
                    },
                    SimpleResponses: &shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses{
                        SimpleResponses: []shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                            shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                DisplayText: sdk.String("quasi"),
                                Ssml: sdk.String("maiores"),
                                TextToSpeech: sdk.String("voluptatem"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                DisplayText: sdk.String("aliquid"),
                                Ssml: sdk.String("laudantium"),
                                TextToSpeech: sdk.String("unde"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse{
                                DisplayText: sdk.String("corrupti"),
                                Ssml: sdk.String("quae"),
                                TextToSpeech: sdk.String("facere"),
                            },
                        },
                    },
                    Suggestions: &shared.GoogleCloudDialogflowV2IntentMessageSuggestions{
                        Suggestions: []shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                            shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2IntentMessageSuggestion{
                                Title: sdk.String("Miss"),
                            },
                        },
                    },
                    TableCard: &shared.GoogleCloudDialogflowV2IntentMessageTableCard{
                        Buttons: []shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                            shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("http://square-upstairs.name"),
                                },
                                Title: sdk.String("Miss"),
                            },
                        },
                        ColumnProperties: []shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                            shared.GoogleCloudDialogflowV2IntentMessageColumnProperties{
                                Header: sdk.String("labore"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                            },
                        },
                        Image: &shared.GoogleCloudDialogflowV2IntentMessageImage{
                            AccessibilityText: sdk.String("cumque"),
                            ImageURI: sdk.String("adipisci"),
                        },
                        Rows: []shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                            shared.GoogleCloudDialogflowV2IntentMessageTableCardRow{
                                Cells: []shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                        Text: sdk.String("voluptatibus"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                        Text: sdk.String("magnam"),
                                    },
                                    shared.GoogleCloudDialogflowV2IntentMessageTableCardCell{
                                        Text: sdk.String("aperiam"),
                                    },
                                },
                                DividerAfter: sdk.Bool(false),
                            },
                        },
                        Subtitle: sdk.String("ducimus"),
                        Title: sdk.String("Dr."),
                    },
                    Text: &shared.GoogleCloudDialogflowV2IntentMessageText{
                        Text: []string{
                            "numquam",
                            "doloribus",
                            "eligendi",
                            "sapiente",
                        },
                    },
                },
            },
            MlDisabled: sdk.Bool(false),
            Name: sdk.String("Leticia Funk"),
            OutputContexts: []shared.GoogleCloudDialogflowV2Context{
                shared.GoogleCloudDialogflowV2Context{
                    LifespanCount: sdk.Int(532336),
                    Name: sdk.String("Gerald Herman"),
                    Parameters: map[string]interface{}{
                        "ratione": "excepturi",
                        "corrupti": "est",
                    },
                },
                shared.GoogleCloudDialogflowV2Context{
                    LifespanCount: sdk.Int(21701),
                    Name: sdk.String("Myron Kuphal"),
                    Parameters: map[string]interface{}{
                        "fugit": "dolore",
                    },
                },
            },
            Parameters: []shared.GoogleCloudDialogflowV2IntentParameter{
                shared.GoogleCloudDialogflowV2IntentParameter{
                    DefaultValue: sdk.String("maxime"),
                    DisplayName: sdk.String("expedita"),
                    EntityTypeDisplayName: sdk.String("accusantium"),
                    IsList: sdk.Bool(false),
                    Mandatory: sdk.Bool(false),
                    Name: sdk.String("Leticia Leannon"),
                    Prompts: []string{
                        "consequuntur",
                    },
                    Value: sdk.String("repellendus"),
                },
                shared.GoogleCloudDialogflowV2IntentParameter{
                    DefaultValue: sdk.String("sit"),
                    DisplayName: sdk.String("dolores"),
                    EntityTypeDisplayName: sdk.String("enim"),
                    IsList: sdk.Bool(false),
                    Mandatory: sdk.Bool(false),
                    Name: sdk.String("Erika Cummerata MD"),
                    Prompts: []string{
                        "possimus",
                        "ipsam",
                        "odio",
                    },
                    Value: sdk.String("fugit"),
                },
                shared.GoogleCloudDialogflowV2IntentParameter{
                    DefaultValue: sdk.String("aspernatur"),
                    DisplayName: sdk.String("at"),
                    EntityTypeDisplayName: sdk.String("illum"),
                    IsList: sdk.Bool(false),
                    Mandatory: sdk.Bool(false),
                    Name: sdk.String("Kirk Heidenreich"),
                    Prompts: []string{
                        "placeat",
                        "reiciendis",
                        "dolores",
                    },
                    Value: sdk.String("dolore"),
                },
                shared.GoogleCloudDialogflowV2IntentParameter{
                    DefaultValue: sdk.String("pariatur"),
                    DisplayName: sdk.String("facilis"),
                    EntityTypeDisplayName: sdk.String("cupiditate"),
                    IsList: sdk.Bool(false),
                    Mandatory: sdk.Bool(false),
                    Name: sdk.String("Cora Hyatt"),
                    Prompts: []string{
                        "nostrum",
                    },
                    Value: sdk.String("qui"),
                },
            },
            ParentFollowupIntentName: sdk.String("tenetur"),
            Priority: sdk.Int(477352),
            ResetContexts: sdk.Bool(false),
            TrainingPhrases: []shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                    Name: sdk.String("Shannon Fisher"),
                    Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                            Alias: sdk.String("fugiat"),
                            EntityType: sdk.String("molestiae"),
                            Text: sdk.String("quas"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                            Alias: sdk.String("repellendus"),
                            EntityType: sdk.String("saepe"),
                            Text: sdk.String("amet"),
                            UserDefined: sdk.Bool(false),
                        },
                    },
                    TimesAddedCount: sdk.Int(716795),
                    Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumExample.ToPointer(),
                },
                shared.GoogleCloudDialogflowV2IntentTrainingPhrase{
                    Name: sdk.String("Jackie Douglas"),
                    Parts: []shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                            Alias: sdk.String("ullam"),
                            EntityType: sdk.String("dolorum"),
                            Text: sdk.String("soluta"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                            Alias: sdk.String("cum"),
                            EntityType: sdk.String("in"),
                            Text: sdk.String("delectus"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                            Alias: sdk.String("commodi"),
                            EntityType: sdk.String("commodi"),
                            Text: sdk.String("fugit"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart{
                            Alias: sdk.String("ullam"),
                            EntityType: sdk.String("ullam"),
                            Text: sdk.String("doloremque"),
                            UserDefined: sdk.Bool(false),
                        },
                    },
                    TimesAddedCount: sdk.Int(667804),
                    Type: shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTypeUnspecified.ToPointer(),
                },
            },
            WebhookState: shared.GoogleCloudDialogflowV2IntentWebhookStateEnumWebhookStateEnabled.ToPointer(),
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("deserunt"),
        IntentView: operations.DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnumIntentViewFull.ToPointer(),
        Key: sdk.String("incidunt"),
        LanguageCode: sdk.String("deleniti"),
        OauthToken: sdk.String("dolor"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("odit"),
    }, operations.DialogflowProjectsLocationsAgentIntentsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Intent != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentIntentsList

Returns the list of all intents in the specified agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentIntentsList(ctx, operations.DialogflowProjectsLocationsAgentIntentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("facilis"),
        IntentView: operations.DialogflowProjectsLocationsAgentIntentsListIntentViewEnumIntentViewFull.ToPointer(),
        Key: sdk.String("nisi"),
        LanguageCode: sdk.String("ipsam"),
        OauthToken: sdk.String("voluptatem"),
        PageSize: sdk.Int64(76786),
        PageToken: sdk.String("iure"),
        Parent: "incidunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eveniet"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("ea"),
    }, operations.DialogflowProjectsLocationsAgentIntentsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentIntentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListIntentsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentRestore

Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentRestore(ctx, operations.DialogflowProjectsLocationsAgentRestoreRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2RestoreAgentRequest: &shared.GoogleCloudDialogflowV2RestoreAgentRequest{
            AgentContent: sdk.String("veniam"),
            AgentURI: sdk.String("quidem"),
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("molestias"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DialogflowProjectsLocationsAgentRestoreSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentRestoreSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentSearch

Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentSearch(ctx, operations.DialogflowProjectsLocationsAgentSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("vitae"),
        PageSize: sdk.Int64(147297),
        PageToken: sdk.String("nam"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("eos"),
    }, operations.DialogflowProjectsLocationsAgentSearchSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2SearchAgentsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentSessionsContextsCreate

Creates a context. If the specified context already exists, overrides the context.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentSessionsContextsCreate(ctx, operations.DialogflowProjectsLocationsAgentSessionsContextsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2Context: &shared.GoogleCloudDialogflowV2Context{
            LifespanCount: sdk.Int(319807),
            Name: sdk.String("Bryant Ondricka"),
            Parameters: map[string]interface{}{
                "dignissimos": "quam",
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("sint"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("illum"),
    }, operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Context != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentSessionsContextsList

Returns the list of all contexts in the specified session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentSessionsContextsList(ctx, operations.DialogflowProjectsLocationsAgentSessionsContextsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("ea"),
        PageSize: sdk.Int64(428199),
        PageToken: sdk.String("delectus"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("sed"),
    }, operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListContextsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentSessionsDeleteContexts

Deletes all active contexts in the specified session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentSessionsDeleteContexts(ctx, operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("non"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("enim"),
    }, operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentSessionsDetectIntent

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentSessionsDetectIntent(ctx, operations.DialogflowProjectsLocationsAgentSessionsDetectIntentRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2DetectIntentRequest: &shared.GoogleCloudDialogflowV2DetectIntentRequest{
            InputAudio: sdk.String("libero"),
            OutputAudioConfig: &shared.GoogleCloudDialogflowV2OutputAudioConfig{
                AudioEncoding: shared.GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp364Kbps.ToPointer(),
                SampleRateHertz: sdk.Int(569196),
                SynthesizeSpeechConfig: &shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig{
                    EffectsProfileID: []string{
                        "quisquam",
                    },
                    Pitch: sdk.Float64(5471.84),
                    SpeakingRate: sdk.Float64(8301.97),
                    Voice: &shared.GoogleCloudDialogflowV2VoiceSelectionParams{
                        Name: sdk.String("Taylor Orn"),
                        SsmlGender: shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale.ToPointer(),
                    },
                    VolumeGainDb: sdk.Float64(1204.32),
                },
            },
            OutputAudioConfigMask: sdk.String("recusandae"),
            QueryInput: &shared.GoogleCloudDialogflowV2QueryInput{
                AudioConfig: &shared.GoogleCloudDialogflowV2InputAudioConfig{
                    AudioEncoding: shared.GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnumAudioEncodingSpeexWithHeaderByte.ToPointer(),
                    DisableNoSpeechRecognizedEvent: sdk.Bool(false),
                    EnableAutomaticPunctuation: sdk.Bool(false),
                    EnableWordInfo: sdk.Bool(false),
                    LanguageCode: sdk.String("id"),
                    Model: sdk.String("odit"),
                    ModelVariant: shared.GoogleCloudDialogflowV2InputAudioConfigModelVariantEnumSpeechModelVariantUnspecified.ToPointer(),
                    PhraseHints: []string{
                        "atque",
                        "explicabo",
                        "ullam",
                    },
                    SampleRateHertz: sdk.Int(539703),
                    SingleUtterance: sdk.Bool(false),
                    SpeechContexts: []shared.GoogleCloudDialogflowV2SpeechContext{
                        shared.GoogleCloudDialogflowV2SpeechContext{
                            Boost: sdk.Float32(8674.34),
                            Phrases: []string{
                                "similique",
                            },
                        },
                        shared.GoogleCloudDialogflowV2SpeechContext{
                            Boost: sdk.Float32(6121.81),
                            Phrases: []string{
                                "nam",
                                "animi",
                                "labore",
                                "voluptate",
                            },
                        },
                        shared.GoogleCloudDialogflowV2SpeechContext{
                            Boost: sdk.Float32(9736.42),
                            Phrases: []string{
                                "nulla",
                                "dolorem",
                            },
                        },
                        shared.GoogleCloudDialogflowV2SpeechContext{
                            Boost: sdk.Float32(9156.53),
                            Phrases: []string{
                                "perferendis",
                                "quaerat",
                                "excepturi",
                                "aliquid",
                            },
                        },
                    },
                },
                Event: &shared.GoogleCloudDialogflowV2EventInput{
                    LanguageCode: sdk.String("dolore"),
                    Name: sdk.String("Desiree Howell IV"),
                    Parameters: map[string]interface{}{
                        "vitae": "quisquam",
                    },
                },
                Text: &shared.GoogleCloudDialogflowV2TextInput{
                    LanguageCode: sdk.String("atque"),
                    Text: sdk.String("nihil"),
                },
            },
            QueryParams: &shared.GoogleCloudDialogflowV2QueryParameters{
                Contexts: []shared.GoogleCloudDialogflowV2Context{
                    shared.GoogleCloudDialogflowV2Context{
                        LifespanCount: sdk.Int(837739),
                        Name: sdk.String("Leon McDermott"),
                        Parameters: map[string]interface{}{
                            "delectus": "ab",
                            "mollitia": "possimus",
                            "praesentium": "neque",
                            "quam": "animi",
                        },
                    },
                    shared.GoogleCloudDialogflowV2Context{
                        LifespanCount: sdk.Int(890379),
                        Name: sdk.String("Miss Donald Schamberger V"),
                        Parameters: map[string]interface{}{
                            "occaecati": "quis",
                            "tempore": "officia",
                            "iste": "unde",
                            "quas": "laboriosam",
                        },
                    },
                    shared.GoogleCloudDialogflowV2Context{
                        LifespanCount: sdk.Int(497695),
                        Name: sdk.String("Timmy Oberbrunner"),
                        Parameters: map[string]interface{}{
                            "sint": "autem",
                            "iste": "cupiditate",
                        },
                    },
                },
                GeoLocation: &shared.GoogleTypeLatLng{
                    Latitude: sdk.Float64(678.55),
                    Longitude: sdk.Float64(6837.83),
                },
                Payload: map[string]interface{}{
                    "dolor": "voluptatum",
                    "molestias": "quod",
                    "repudiandae": "eaque",
                    "consectetur": "autem",
                },
                ResetContexts: sdk.Bool(false),
                SentimentAnalysisRequestConfig: &shared.GoogleCloudDialogflowV2SentimentAnalysisRequestConfig{
                    AnalyzeQueryTextSentiment: sdk.Bool(false),
                },
                SessionEntityTypes: []shared.GoogleCloudDialogflowV2SessionEntityType{
                    shared.GoogleCloudDialogflowV2SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "modi",
                                    "quos",
                                },
                                Value: sdk.String("minus"),
                            },
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "error",
                                    "reprehenderit",
                                },
                                Value: sdk.String("reprehenderit"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride.ToPointer(),
                        Name: sdk.String("Silvia Wintheiser"),
                    },
                },
                TimeZone: sdk.String("exercitationem"),
                WebhookHeaders: map[string]string{
                    "laboriosam": "doloremque",
                },
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("a"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        Session: "cupiditate",
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2DetectIntentResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentSessionsEntityTypesCreate

Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentSessionsEntityTypesCreate(ctx, operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2SessionEntityType: &shared.GoogleCloudDialogflowV2SessionEntityType{
            Entities: []shared.GoogleCloudDialogflowV2EntityTypeEntity{
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "necessitatibus",
                    },
                    Value: sdk.String("possimus"),
                },
                shared.GoogleCloudDialogflowV2EntityTypeEntity{
                    Synonyms: []string{
                        "itaque",
                        "explicabo",
                    },
                    Value: sdk.String("ullam"),
                },
            },
            EntityOverrideMode: shared.GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified.ToPointer(),
            Name: sdk.String("Mrs. Randall Schinner"),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officia"),
        Fields: sdk.String("est"),
        Key: sdk.String("in"),
        LanguageCode: sdk.String("illo"),
        OauthToken: sdk.String("voluptate"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2SessionEntityType != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentSessionsEntityTypesList

Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentSessionsEntityTypesList(ctx, operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("laboriosam"),
        PageSize: sdk.Int64(464290),
        PageToken: sdk.String("fuga"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("soluta"),
    }, operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListSessionEntityTypesResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentTrain

Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentTrain(ctx, operations.DialogflowProjectsLocationsAgentTrainRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "fugiat": "inventore",
            "atque": "ad",
            "sapiente": "voluptates",
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("quidem"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("cumque"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.DialogflowProjectsLocationsAgentTrainSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentTrainSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentVersionsCreate

Creates an agent version. The new version points to the agent instance in the "default" environment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentVersionsCreate(ctx, operations.DialogflowProjectsLocationsAgentVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2VersionInput: &shared.GoogleCloudDialogflowV2VersionInput{
            Description: sdk.String("atque"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("totam"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("aspernatur"),
        Parent: "eaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("ex"),
    }, operations.DialogflowProjectsLocationsAgentVersionsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Version != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentVersionsList

Returns the list of all versions of the specified agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAgentVersionsList(ctx, operations.DialogflowProjectsLocationsAgentVersionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("eos"),
        PageSize: sdk.Int64(333507),
        PageToken: sdk.String("repudiandae"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.DialogflowProjectsLocationsAgentVersionsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListVersionsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAnswerRecordsList

Returns the list of all answer records in the specified project in reverse chronological order.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsAnswerRecordsList(ctx, operations.DialogflowProjectsLocationsAnswerRecordsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("tempore"),
        PageSize: sdk.Int64(447323),
        PageToken: sdk.String("omnis"),
        Parent: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.DialogflowProjectsLocationsAnswerRecordsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAnswerRecordsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListAnswerRecordsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationDatasetsCreate

Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationDatasetsCreate(ctx, operations.DialogflowProjectsLocationsConversationDatasetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2ConversationDatasetInput: &shared.GoogleCloudDialogflowV2ConversationDatasetInput{
            ConversationInfo: &shared.GoogleCloudDialogflowV2ConversationInfo{
                LanguageCode: sdk.String("esse"),
            },
            Description: sdk.String("harum"),
            DisplayName: sdk.String("ad"),
            InputConfig: &shared.GoogleCloudDialogflowV2InputConfig{
                GcsSource: &shared.GoogleCloudDialogflowV2GcsSources{
                    Uris: []string{
                        "ratione",
                        "totam",
                        "vero",
                        "dolore",
                    },
                },
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("illo"),
        OauthToken: sdk.String("saepe"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("eveniet"),
    }, operations.DialogflowProjectsLocationsConversationDatasetsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationDatasetsImportConversationData

Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationDatasetsImportConversationData(ctx, operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2ImportConversationDataRequest: &shared.GoogleCloudDialogflowV2ImportConversationDataRequest{
            InputConfig: &shared.GoogleCloudDialogflowV2InputConfig{
                GcsSource: &shared.GoogleCloudDialogflowV2GcsSources{
                    Uris: []string{
                        "provident",
                        "aut",
                        "dolorum",
                    },
                },
            },
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nam"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("odio"),
        Name: "Elisa Boehm",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationDatasetsList

Returns the list of all conversation datasets in the specified project and location.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationDatasetsList(ctx, operations.DialogflowProjectsLocationsConversationDatasetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("laborum"),
        PageSize: sdk.Int64(757596),
        PageToken: sdk.String("autem"),
        Parent: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.DialogflowProjectsLocationsConversationDatasetsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationDatasetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListConversationDatasetsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationModelsCreate

Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationModelsCreate(ctx, operations.DialogflowProjectsLocationsConversationModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2ConversationModelInput: &shared.GoogleCloudDialogflowV2ConversationModelInput{
            ArticleSuggestionModelMetadata: &shared.GoogleCloudDialogflowV2ArticleSuggestionModelMetadata{
                TrainingModelType: shared.GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnumSmartReplyBertModel.ToPointer(),
            },
            Datasets: []shared.GoogleCloudDialogflowV2InputDataset{
                shared.GoogleCloudDialogflowV2InputDataset{
                    Dataset: sdk.String("autem"),
                },
            },
            DisplayName: sdk.String("optio"),
            LanguageCode: sdk.String("eveniet"),
            Name: sdk.String("Guy Will"),
            SmartReplyModelMetadata: &shared.GoogleCloudDialogflowV2SmartReplyModelMetadata{
                TrainingModelType: shared.GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnumSmartReplyBertModel.ToPointer(),
            },
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("et"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("maiores"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.DialogflowProjectsLocationsConversationModelsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationModelsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationModelsDeploy

Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationModelsDeploy(ctx, operations.DialogflowProjectsLocationsConversationModelsDeployRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "vitae": "iusto",
            "atque": "velit",
            "molestiae": "nam",
        },
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("at"),
        Name: "Erik Lesch",
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DialogflowProjectsLocationsConversationModelsDeploySecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationModelsDeploySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationModelsEvaluationsCreate

Creates evaluation of a conversation model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationModelsEvaluationsCreate(ctx, operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput: &shared.GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput{
            ConversationModelEvaluation: &shared.GoogleCloudDialogflowV2ConversationModelEvaluationInput{
                DisplayName: sdk.String("accusamus"),
                EvaluationConfig: &shared.GoogleCloudDialogflowV2EvaluationConfig{
                    Datasets: []shared.GoogleCloudDialogflowV2InputDataset{
                        shared.GoogleCloudDialogflowV2InputDataset{
                            Dataset: sdk.String("incidunt"),
                        },
                        shared.GoogleCloudDialogflowV2InputDataset{
                            Dataset: sdk.String("labore"),
                        },
                        shared.GoogleCloudDialogflowV2InputDataset{
                            Dataset: sdk.String("blanditiis"),
                        },
                    },
                    SmartComposeConfig: &shared.GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig{
                        AllowlistDocument: sdk.String("ducimus"),
                        MaxResultCount: sdk.Int(234550),
                    },
                    SmartReplyConfig: &shared.GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig{
                        AllowlistDocument: sdk.String("sapiente"),
                        MaxResultCount: sdk.Int(337149),
                    },
                },
                Name: sdk.String("Diana Feil V"),
                SmartReplyMetrics: &shared.GoogleCloudDialogflowV2SmartReplyMetrics{
                    AllowlistCoverage: sdk.Float32(8219.93),
                    ConversationCount: sdk.String("tempore"),
                    TopNMetrics: []shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics{
                        shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics{
                            N: sdk.Int(98250),
                            Recall: sdk.Float32(1597.29),
                        },
                        shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics{
                            N: sdk.Int(366117),
                            Recall: sdk.Float32(7519.01),
                        },
                        shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics{
                            N: sdk.Int(892640),
                            Recall: sdk.Float32(2873.79),
                        },
                        shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics{
                            N: sdk.Int(84438),
                            Recall: sdk.Float32(3287.44),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("placeat"),
        Parent: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("minima"),
    }, operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationModelsEvaluationsList

Lists evaluations of a conversation model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationModelsEvaluationsList(ctx, operations.DialogflowProjectsLocationsConversationModelsEvaluationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("vel"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("alias"),
        PageSize: sdk.Int64(930398),
        PageToken: sdk.String("ab"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListConversationModelEvaluationsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationModelsList

Lists conversation models.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationModelsList(ctx, operations.DialogflowProjectsLocationsConversationModelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("omnis"),
        PageSize: sdk.Int64(924623),
        PageToken: sdk.String("architecto"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.DialogflowProjectsLocationsConversationModelsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationModelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListConversationModelsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationModelsUndeploy

Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationModelsUndeploy(ctx, operations.DialogflowProjectsLocationsConversationModelsUndeployRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolore": "optio",
            "quo": "repudiandae",
            "tempora": "libero",
            "suscipit": "illum",
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("repellat"),
        Name: "Glenn Rosenbaum",
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DialogflowProjectsLocationsConversationModelsUndeploySecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig

Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig(ctx, operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest: &shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest{
            ParticipantRole: shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnumRoleUnspecified.ToPointer(),
            SuggestionFeatureType: shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolore"),
        ConversationProfile: "magnam",
        Fields: sdk.String("maiores"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("libero"),
    }, operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationProfilesCreate

Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationProfilesCreate(ctx, operations.DialogflowProjectsLocationsConversationProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2ConversationProfileInput: &shared.GoogleCloudDialogflowV2ConversationProfileInput{
            AutomatedAgentConfig: &shared.GoogleCloudDialogflowV2AutomatedAgentConfig{
                Agent: sdk.String("totam"),
            },
            DisplayName: sdk.String("tempora"),
            HumanAgentAssistantConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfig{
                EndUserSuggestionConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig{
                    FeatureConfigs: []shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                        shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("dolor"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(123179),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(6050.89),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("quam"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "dicta",
                                        "excepturi",
                                        "consectetur",
                                        "deserunt",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "incidunt",
                                    },
                                },
                                MaxResults: sdk.Int(361801),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmalltalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("suscipit"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(499005),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(9473.09),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("excepturi"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "corrupti",
                                        "nihil",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "placeat",
                                        "fugit",
                                    },
                                },
                                MaxResults: sdk.Int(815618),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmalltalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("nobis"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(784120),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(2878.34),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("perspiciatis"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "qui",
                                        "qui",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "ratione",
                                    },
                                },
                                MaxResults: sdk.Int(904193),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmalltalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("aliquid"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(738592),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(8537.01),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("rem"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "officiis",
                                        "corporis",
                                        "repellendus",
                                        "aut",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "libero",
                                    },
                                },
                                MaxResults: sdk.Int(568419),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmalltalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                    },
                    GroupSuggestionResponses: sdk.Bool(false),
                },
                HumanAgentSuggestionConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig{
                    FeatureConfigs: []shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                        shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("officiis"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(961576),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(1692.29),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("sit"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "voluptatum",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "neque",
                                        "aspernatur",
                                    },
                                },
                                MaxResults: sdk.Int(53662),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmalltalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("cupiditate"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(15563),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(7726.04),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("quod"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "architecto",
                                        "voluptatem",
                                        "perspiciatis",
                                        "ea",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "aperiam",
                                        "voluptatem",
                                    },
                                },
                                MaxResults: sdk.Int(247838),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumTypeUnspecified.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmalltalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("sequi"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(699215),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(2151.82),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("debitis"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "eaque",
                                        "incidunt",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "delectus",
                                        "aliquid",
                                    },
                                },
                                MaxResults: sdk.Int(352407),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumSmartReply.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmalltalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                    },
                    GroupSuggestionResponses: sdk.Bool(false),
                },
                MessageAnalysisConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig{
                    EnableEntityExtraction: sdk.Bool(false),
                    EnableSentimentAnalysis: sdk.Bool(false),
                },
                NotificationConfig: &shared.GoogleCloudDialogflowV2NotificationConfig{
                    MessageFormat: shared.GoogleCloudDialogflowV2NotificationConfigMessageFormatEnumJSON.ToPointer(),
                    Topic: sdk.String("reprehenderit"),
                },
            },
            HumanAgentHandoffConfig: &shared.GoogleCloudDialogflowV2HumanAgentHandoffConfig{
                LivePersonConfig: &shared.GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig{
                    AccountNumber: sdk.String("eos"),
                },
                SalesforceLiveAgentConfig: &shared.GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig{
                    ButtonID: sdk.String("assumenda"),
                    DeploymentID: sdk.String("cumque"),
                    EndpointDomain: sdk.String("ut"),
                    OrganizationID: sdk.String("quae"),
                },
            },
            LanguageCode: sdk.String("nihil"),
            LoggingConfig: &shared.GoogleCloudDialogflowV2LoggingConfig{
                EnableStackdriverLogging: sdk.Bool(false),
            },
            Name: sdk.String("Krystal Abshire"),
            NewMessageEventNotificationConfig: &shared.GoogleCloudDialogflowV2NotificationConfig{
                MessageFormat: shared.GoogleCloudDialogflowV2NotificationConfigMessageFormatEnumMessageFormatUnspecified.ToPointer(),
                Topic: sdk.String("tenetur"),
            },
            NotificationConfig: &shared.GoogleCloudDialogflowV2NotificationConfig{
                MessageFormat: shared.GoogleCloudDialogflowV2NotificationConfigMessageFormatEnumMessageFormatUnspecified.ToPointer(),
                Topic: sdk.String("accusantium"),
            },
            SecuritySettings: sdk.String("corrupti"),
            SttConfig: &shared.GoogleCloudDialogflowV2SpeechToTextConfig{
                Model: sdk.String("itaque"),
                SpeechModelVariant: shared.GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnumUseEnhanced.ToPointer(),
            },
            TimeZone: sdk.String("impedit"),
            TtsConfig: &shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig{
                EffectsProfileID: []string{
                    "corporis",
                },
                Pitch: sdk.Float64(7720.62),
                SpeakingRate: sdk.Float64(9088.77),
                Voice: &shared.GoogleCloudDialogflowV2VoiceSelectionParams{
                    Name: sdk.String("Clifford Stark"),
                    SsmlGender: shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified.ToPointer(),
                },
                VolumeGainDb: sdk.Float64(8834.26),
            },
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("veniam"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DialogflowProjectsLocationsConversationProfilesCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ConversationProfile != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationProfilesList

Returns the list of all conversation profiles in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationProfilesList(ctx, operations.DialogflowProjectsLocationsConversationProfilesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("quas"),
        PageSize: sdk.Int64(745304),
        PageToken: sdk.String("cupiditate"),
        Parent: "unde",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("unde"),
    }, operations.DialogflowProjectsLocationsConversationProfilesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationProfilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListConversationProfilesResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig

Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig(ctx, operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest: &shared.GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest{
            ParticipantRole: shared.GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnumHumanAgent.ToPointer(),
            SuggestionFeatureConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig{
                ConversationModelConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig{
                    Model: sdk.String("facere"),
                },
                ConversationProcessConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig{
                    RecentSentencesCount: sdk.Int(867581),
                },
                EnableEventBasedSuggestion: sdk.Bool(false),
                QueryConfig: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig{
                    ConfidenceThreshold: sdk.Float32(7233.82),
                    ContextFilterSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                        DropHandoffMessages: sdk.Bool(false),
                        DropIvrMessages: sdk.Bool(false),
                        DropVirtualAgentMessages: sdk.Bool(false),
                    },
                    DialogflowQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                        Agent: sdk.String("quaerat"),
                    },
                    DocumentQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                        Documents: []string{
                            "sint",
                            "eius",
                            "vel",
                        },
                    },
                    KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                        KnowledgeBases: []string{
                            "vero",
                        },
                    },
                    MaxResults: sdk.Int(484833),
                },
                SuggestionFeature: &shared.GoogleCloudDialogflowV2SuggestionFeature{
                    Type: shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
                },
                SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings{
                    NoSmalltalk: sdk.Bool(false),
                    OnlyEndUser: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("optio"),
        ConversationProfile: "nobis",
        Fields: sdk.String("recusandae"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("sit"),
    }, operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsComplete

Completes the specified conversation. Finished conversations are purged from the database after 30 days.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsComplete(ctx, operations.DialogflowProjectsLocationsConversationsCompleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "consequatur": "vero",
            "id": "error",
            "ratione": "perferendis",
            "distinctio": "voluptas",
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("cumque"),
        Name: "Dr. Elisa Koelpin",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.DialogflowProjectsLocationsConversationsCompleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsCompleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Conversation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsCreate

Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsCreate(ctx, operations.DialogflowProjectsLocationsConversationsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2ConversationInput: &shared.GoogleCloudDialogflowV2ConversationInput{
            ConversationProfile: sdk.String("voluptatem"),
            ConversationStage: shared.GoogleCloudDialogflowV2ConversationConversationStageEnumConversationStageUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veritatis"),
        ConversationID: sdk.String("ex"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("quas"),
        OauthToken: sdk.String("dolores"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DialogflowProjectsLocationsConversationsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Conversation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsList

Returns the list of all conversations in the specified project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsList(ctx, operations.DialogflowProjectsLocationsConversationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("beatae"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("consectetur"),
        PageSize: sdk.Int64(742010),
        PageToken: sdk.String("tenetur"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DialogflowProjectsLocationsConversationsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListConversationsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsMessagesList

Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsMessagesList(ctx, operations.DialogflowProjectsLocationsConversationsMessagesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("doloremque"),
        Filter: sdk.String("accusamus"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("sunt"),
        PageSize: sdk.Int64(377430),
        PageToken: sdk.String("earum"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("nostrum"),
    }, operations.DialogflowProjectsLocationsConversationsMessagesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsMessagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListMessagesResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsParticipantsAnalyzeContent

Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContent(ctx, operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2AnalyzeContentRequest: &shared.GoogleCloudDialogflowV2AnalyzeContentRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "nam": "ullam",
                },
            },
            CxParameters: map[string]interface{}{
                "eos": "id",
            },
            EventInput: &shared.GoogleCloudDialogflowV2EventInput{
                LanguageCode: sdk.String("modi"),
                Name: sdk.String("Julius Feil"),
                Parameters: map[string]interface{}{
                    "culpa": "culpa",
                    "a": "magnam",
                    "eius": "ad",
                },
            },
            QueryParams: &shared.GoogleCloudDialogflowV2QueryParameters{
                Contexts: []shared.GoogleCloudDialogflowV2Context{
                    shared.GoogleCloudDialogflowV2Context{
                        LifespanCount: sdk.Int(798147),
                        Name: sdk.String("Miss Margie Gerlach"),
                        Parameters: map[string]interface{}{
                            "odit": "est",
                            "at": "ipsum",
                            "explicabo": "nulla",
                        },
                    },
                },
                GeoLocation: &shared.GoogleTypeLatLng{
                    Latitude: sdk.Float64(6694.08),
                    Longitude: sdk.Float64(9565.72),
                },
                Payload: map[string]interface{}{
                    "voluptatum": "quasi",
                    "mollitia": "voluptatum",
                    "blanditiis": "sapiente",
                    "ut": "incidunt",
                },
                ResetContexts: sdk.Bool(false),
                SentimentAnalysisRequestConfig: &shared.GoogleCloudDialogflowV2SentimentAnalysisRequestConfig{
                    AnalyzeQueryTextSentiment: sdk.Bool(false),
                },
                SessionEntityTypes: []shared.GoogleCloudDialogflowV2SessionEntityType{
                    shared.GoogleCloudDialogflowV2SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "nihil",
                                    "ratione",
                                },
                                Value: sdk.String("tenetur"),
                            },
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "quod",
                                    "nulla",
                                    "tempora",
                                    "quam",
                                },
                                Value: sdk.String("consectetur"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride.ToPointer(),
                        Name: sdk.String("Lana Keeling"),
                    },
                    shared.GoogleCloudDialogflowV2SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "eaque",
                                },
                                Value: sdk.String("natus"),
                            },
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "nihil",
                                },
                                Value: sdk.String("unde"),
                            },
                            shared.GoogleCloudDialogflowV2EntityTypeEntity{
                                Synonyms: []string{
                                    "id",
                                    "ex",
                                    "occaecati",
                                },
                                Value: sdk.String("optio"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement.ToPointer(),
                        Name: sdk.String("Ollie Reichert"),
                    },
                },
                TimeZone: sdk.String("quam"),
                WebhookHeaders: map[string]string{
                    "repellendus": "culpa",
                    "dicta": "rem",
                    "fuga": "odio",
                },
            },
            ReplyAudioConfig: &shared.GoogleCloudDialogflowV2OutputAudioConfig{
                AudioEncoding: shared.GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp364Kbps.ToPointer(),
                SampleRateHertz: sdk.Int(168546),
                SynthesizeSpeechConfig: &shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig{
                    EffectsProfileID: []string{
                        "harum",
                    },
                    Pitch: sdk.Float64(9729.34),
                    SpeakingRate: sdk.Float64(6061.72),
                    Voice: &shared.GoogleCloudDialogflowV2VoiceSelectionParams{
                        Name: sdk.String("Olga Morissette"),
                        SsmlGender: shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale.ToPointer(),
                    },
                    VolumeGainDb: sdk.Float64(5066.89),
                },
            },
            RequestID: sdk.String("eum"),
            TextInput: &shared.GoogleCloudDialogflowV2TextInput{
                LanguageCode: sdk.String("vitae"),
                Text: sdk.String("animi"),
            },
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("iste"),
        Participant: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2AnalyzeContentResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsParticipantsCreate

Creates a new participant in a conversation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsParticipantsCreate(ctx, operations.DialogflowProjectsLocationsConversationsParticipantsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2Participant: &shared.GoogleCloudDialogflowV2Participant{
            DocumentsMetadataFilters: map[string]string{
                "eligendi": "occaecati",
            },
            Name: sdk.String("Terence Leffler"),
            ObfuscatedExternalUserID: sdk.String("veniam"),
            Role: shared.GoogleCloudDialogflowV2ParticipantRoleEnumRoleUnspecified.ToPointer(),
            SipRecordingMediaLabel: sdk.String("magni"),
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("quod"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("dolore"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("modi"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Participant != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsParticipantsList

Returns the list of all participants in the specified conversation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsParticipantsList(ctx, operations.DialogflowProjectsLocationsConversationsParticipantsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("autem"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("eius"),
        PageSize: sdk.Int64(342393),
        PageToken: sdk.String("ex"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListParticipantsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles

Gets suggested articles for a participant based on specific historical messages.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles(ctx, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2SuggestArticlesRequest: &shared.GoogleCloudDialogflowV2SuggestArticlesRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "quidem": "odit",
                    "molestiae": "accusamus",
                    "quia": "inventore",
                    "doloribus": "praesentium",
                },
            },
            ContextSize: sdk.Int(397730),
            LatestMessage: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("vel"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2SuggestArticlesResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers

Gets suggested faq answers for a participant based on specific historical messages.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers(ctx, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2SuggestFaqAnswersRequest: &shared.GoogleCloudDialogflowV2SuggestFaqAnswersRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "quis": "deleniti",
                    "iusto": "quod",
                    "saepe": "ad",
                    "magni": "nostrum",
                },
            },
            ContextSize: sdk.Int(793402),
            LatestMessage: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("totam"),
        Parent: "velit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2SuggestFaqAnswersResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies

Gets smart replies for a participant based on specific historical messages.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies(ctx, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2SuggestSmartRepliesRequest: &shared.GoogleCloudDialogflowV2SuggestSmartRepliesRequest{
            ContextSize: sdk.Int(61844),
            CurrentTextInput: &shared.GoogleCloudDialogflowV2TextInput{
                LanguageCode: sdk.String("dolore"),
                Text: sdk.String("in"),
            },
            LatestMessage: sdk.String("libero"),
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("beatae"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("cumque"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("amet"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2SuggestSmartRepliesResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary

Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary(ctx, operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2SuggestConversationSummaryRequest: &shared.GoogleCloudDialogflowV2SuggestConversationSummaryRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "minus": "vero",
                    "impedit": "omnis",
                    "et": "earum",
                },
            },
            ContextSize: sdk.Int(685513),
            LatestMessage: sdk.String("est"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        Conversation: "totam",
        Fields: sdk.String("praesentium"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2SuggestConversationSummaryResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsDeleteAgent

Deletes the specified agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsDeleteAgent(ctx, operations.DialogflowProjectsLocationsDeleteAgentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("quibusdam"),
        Parent: "reprehenderit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("et"),
    }, operations.DialogflowProjectsLocationsDeleteAgentSecurity{
        Option1: &operations.DialogflowProjectsLocationsDeleteAgentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsGetAgent

Retrieves the specified agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsGetAgent(ctx, operations.DialogflowProjectsLocationsGetAgentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("eius"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DialogflowProjectsLocationsGetAgentSecurity{
        Option1: &operations.DialogflowProjectsLocationsGetAgentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Agent != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesCreate

Creates a knowledge base.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesCreate(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2KnowledgeBase: &shared.GoogleCloudDialogflowV2KnowledgeBase{
            DisplayName: sdk.String("voluptatum"),
            LanguageCode: sdk.String("facere"),
            Name: sdk.String("Faye Simonis DDS"),
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("provident"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("tempore"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2KnowledgeBase != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2DocumentInput: &shared.GoogleCloudDialogflowV2DocumentInput{
            ContentURI: sdk.String("quo"),
            DisplayName: sdk.String("ullam"),
            EnableAutoReload: sdk.Bool(false),
            KnowledgeTypes: []shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum{
                shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumAgentFacingSmartReply,
                shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumArticleSuggestion,
            },
            LatestReloadStatus: &shared.GoogleCloudDialogflowV2DocumentReloadStatus{
                Status: &shared.GoogleRPCStatus{
                    Code: sdk.Int(429344),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "atque": "similique",
                            "quia": "architecto",
                        },
                        map[string]interface{}{
                            "accusamus": "illo",
                            "excepturi": "harum",
                        },
                        map[string]interface{}{
                            "a": "repudiandae",
                            "minus": "officia",
                            "laboriosam": "illo",
                        },
                        map[string]interface{}{
                            "veritatis": "aliquam",
                            "excepturi": "atque",
                            "dicta": "magnam",
                        },
                    },
                    Message: sdk.String("doloremque"),
                },
                Time: sdk.String("cum"),
            },
            Metadata: map[string]string{
                "eius": "maiores",
                "delectus": "quos",
            },
            MimeType: sdk.String("id"),
            Name: sdk.String("Dr. Andrew Kling"),
            RawContent: sdk.String("voluptatem"),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("a"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("nihil"),
        Parent: "recusandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsDelete

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesDocumentsDelete(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("enim"),
        Force: sdk.Bool(false),
        Key: sdk.String("corporis"),
        Name: "Nathaniel Johnston",
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsExport

Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesDocumentsExport(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2ExportDocumentRequest: &shared.GoogleCloudDialogflowV2ExportDocumentRequest{
            ExportFullContent: sdk.Bool(false),
            GcsDestination: &shared.GoogleCloudDialogflowV2GcsDestination{
                URI: sdk.String("https://serene-harpsichord.info"),
            },
            SmartMessagingPartialUpdate: sdk.Bool(false),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("in"),
        Name: "Faith Kuvalis",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsImport

Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesDocumentsImport(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2ImportDocumentsRequest: &shared.GoogleCloudDialogflowV2ImportDocumentsRequest{
            DocumentTemplate: &shared.GoogleCloudDialogflowV2ImportDocumentTemplate{
                KnowledgeTypes: []shared.GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum{
                    shared.GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnumExtractiveQa,
                    shared.GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnumKnowledgeTypeUnspecified,
                    shared.GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnumArticleSuggestion,
                    shared.GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnumArticleSuggestion,
                },
                Metadata: map[string]string{
                    "molestias": "a",
                    "dignissimos": "labore",
                    "laudantium": "dolore",
                },
                MimeType: sdk.String("aliquid"),
            },
            GcsSource: &shared.GoogleCloudDialogflowV2GcsSources{
                Uris: []string{
                    "aspernatur",
                    "quod",
                    "dolorem",
                    "neque",
                },
            },
            ImportGcsCustomMetadata: sdk.Bool(false),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("ullam"),
        Parent: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("sint"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsList

Returns the list of all documents of the knowledge base.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesDocumentsList(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("fuga"),
        Filter: sdk.String("consequatur"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("iure"),
        PageSize: sdk.Int64(938672),
        PageToken: sdk.String("quis"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("quo"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListDocumentsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2DocumentInput: &shared.GoogleCloudDialogflowV2DocumentInput{
            ContentURI: sdk.String("illo"),
            DisplayName: sdk.String("est"),
            EnableAutoReload: sdk.Bool(false),
            KnowledgeTypes: []shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum{
                shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnumFaq,
            },
            LatestReloadStatus: &shared.GoogleCloudDialogflowV2DocumentReloadStatus{
                Status: &shared.GoogleRPCStatus{
                    Code: sdk.Int(665082),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "maiores": "provident",
                            "sunt": "maiores",
                            "excepturi": "ducimus",
                        },
                        map[string]interface{}{
                            "aspernatur": "molestias",
                            "fuga": "at",
                        },
                        map[string]interface{}{
                            "laborum": "provident",
                            "hic": "corrupti",
                            "soluta": "earum",
                        },
                    },
                    Message: sdk.String("praesentium"),
                },
                Time: sdk.String("explicabo"),
            },
            Metadata: map[string]string{
                "illo": "architecto",
            },
            MimeType: sdk.String("quia"),
            Name: sdk.String("Shannon Hermiston"),
            RawContent: sdk.String("iste"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("repellat"),
        LanguageCode: sdk.String("iusto"),
        Name: "Adrian McCullough",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UpdateMask: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnumIntentViewFull.ToPointer(),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsReload

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesDocumentsReload(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2ReloadDocumentRequest: &shared.GoogleCloudDialogflowV2ReloadDocumentRequest{
            ContentURI: sdk.String("voluptatum"),
            ImportGcsCustomMetadata: sdk.Bool(false),
            SmartMessagingPartialUpdate: sdk.Bool(false),
        },
        AccessToken: sdk.String("dolore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("eos"),
        Key: sdk.String("sunt"),
        Name: "Ruby Monahan",
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesList

Returns the list of all knowledge bases of the specified agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsKnowledgeBasesList(ctx, operations.DialogflowProjectsLocationsKnowledgeBasesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nihil"),
        Fields: sdk.String("quia"),
        Filter: sdk.String("quis"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(115849),
        PageToken: sdk.String("eum"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2ListKnowledgeBasesResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsList(ctx, operations.DialogflowProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("aspernatur"),
        Name: "Pat Crooks",
        OauthToken: sdk.String("amet"),
        PageSize: sdk.Int64(287020),
        PageToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.DialogflowProjectsLocationsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudLocationListLocationsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsSetAgent

Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsLocationsSetAgent(ctx, operations.DialogflowProjectsLocationsSetAgentRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2Agent: &shared.GoogleCloudDialogflowV2Agent{
            APIVersion: shared.GoogleCloudDialogflowV2AgentAPIVersionEnumAPIVersionV1.ToPointer(),
            AvatarURI: sdk.String("officia"),
            ClassificationThreshold: sdk.Float32(1247.4),
            DefaultLanguageCode: sdk.String("perspiciatis"),
            Description: sdk.String("quam"),
            DisplayName: sdk.String("a"),
            EnableLogging: sdk.Bool(false),
            MatchMode: shared.GoogleCloudDialogflowV2AgentMatchModeEnumMatchModeHybrid.ToPointer(),
            Parent: sdk.String("nulla"),
            SupportedLanguageCodes: []string{
                "iste",
                "aspernatur",
                "aspernatur",
                "et",
            },
            Tier: shared.GoogleCloudDialogflowV2AgentTierEnumTierStandard.ToPointer(),
            TimeZone: sdk.String("et"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("in"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("sed"),
        Parent: "voluptatem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        UpdateMask: sdk.String("error"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("enim"),
    }, operations.DialogflowProjectsLocationsSetAgentSecurity{
        Option1: &operations.DialogflowProjectsLocationsSetAgentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2Agent != nil {
        // handle response
    }
}
```

## DialogflowProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsOperationsCancel(ctx, operations.DialogflowProjectsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("quis"),
        Key: sdk.String("modi"),
        Name: "Meredith Langosh",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DialogflowProjectsOperationsCancelSecurity{
        Option1: &operations.DialogflowProjectsOperationsCancelSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DialogflowProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsOperationsGet(ctx, operations.DialogflowProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("non"),
        IntentView: operations.DialogflowProjectsOperationsGetIntentViewEnumIntentViewUnspecified.ToPointer(),
        Key: sdk.String("accusantium"),
        LanguageCode: sdk.String("tempora"),
        Name: "Connie Rath II",
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DialogflowProjectsOperationsGetSecurity{
        Option1: &operations.DialogflowProjectsOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## DialogflowProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.DialogflowProjectsOperationsList(ctx, operations.DialogflowProjectsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("accusamus"),
        Key: sdk.String("totam"),
        Name: "Cristina Nader",
        OauthToken: sdk.String("dolorem"),
        PageSize: sdk.Int64(137724),
        PageToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DialogflowProjectsOperationsListSecurity{
        Option1: &operations.DialogflowProjectsOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
