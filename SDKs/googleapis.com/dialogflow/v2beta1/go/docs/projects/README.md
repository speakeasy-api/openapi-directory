# Projects

### Available Operations

* [DialogflowProjectsConversationsParticipantsSuggestionsCompile](#dialogflowprojectsconversationsparticipantssuggestionscompile) - Deprecated. use SuggestArticles and SuggestFaqAnswers instead. Gets suggestions for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
* [DialogflowProjectsConversationsParticipantsSuggestionsList](#dialogflowprojectsconversationsparticipantssuggestionslist) - Deprecated: Use inline suggestion, event based suggestion or Suggestion* API instead. See HumanAgentAssistantConfig.name for more details. Removal Date: 2020-09-01. Retrieves suggestions for live agents. This method should be used by human agent client software to fetch auto generated suggestions in real-time, while the conversation with an end user is in progress. The functionality is implemented in terms of the [list pagination](https://cloud.google.com/apis/design/design_patterns#list_pagination) design pattern. The client app should use the `next_page_token` field to fetch the next batch of suggestions. `suggestions` are sorted by `create_time` in descending order. To fetch latest suggestion, just set `page_size` to 1. To fetch new suggestions without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* [DialogflowProjectsLocationsAgentEntityTypesBatchDelete](#dialogflowprojectslocationsagententitytypesbatchdelete) - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesBatchUpdate](#dialogflowprojectslocationsagententitytypesbatchupdate) - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate](#dialogflowprojectslocationsagententitytypesentitiesbatchcreate) - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete](#dialogflowprojectslocationsagententitytypesentitiesbatchdelete) - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate](#dialogflowprojectslocationsagententitytypesentitiesbatchupdate) - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [DialogflowProjectsLocationsAgentEnvironmentsCreate](#dialogflowprojectslocationsagentenvironmentscreate) - Creates an agent environment.
* [DialogflowProjectsLocationsAgentEnvironmentsGetHistory](#dialogflowprojectslocationsagentenvironmentsgethistory) - Gets the history of the specified environment.
* [DialogflowProjectsLocationsAgentEnvironmentsList](#dialogflowprojectslocationsagentenvironmentslist) - Returns the list of all non-draft environments of the specified agent.
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
* [DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilesclearsuggestionfeatureconfig) - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
* [DialogflowProjectsLocationsConversationProfilesCreate](#dialogflowprojectslocationsconversationprofilescreate) - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
* [DialogflowProjectsLocationsConversationProfilesList](#dialogflowprojectslocationsconversationprofileslist) - Returns the list of all conversation profiles in the specified project.
* [DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilessetsuggestionfeatureconfig) - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
* [DialogflowProjectsLocationsConversationsComplete](#dialogflowprojectslocationsconversationscomplete) - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
* [DialogflowProjectsLocationsConversationsCreate](#dialogflowprojectslocationsconversationscreate) - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
* [DialogflowProjectsLocationsConversationsList](#dialogflowprojectslocationsconversationslist) - Returns the list of all conversations in the specified project.
* [DialogflowProjectsLocationsConversationsMessagesBatchCreate](#dialogflowprojectslocationsconversationsmessagesbatchcreate) - Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.
* [DialogflowProjectsLocationsConversationsMessagesList](#dialogflowprojectslocationsconversationsmessageslist) - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* [DialogflowProjectsLocationsConversationsParticipantsAnalyzeContent](#dialogflowprojectslocationsconversationsparticipantsanalyzecontent) - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* [DialogflowProjectsLocationsConversationsParticipantsCreate](#dialogflowprojectslocationsconversationsparticipantscreate) - Creates a new participant in a conversation.
* [DialogflowProjectsLocationsConversationsParticipantsList](#dialogflowprojectslocationsconversationsparticipantslist) - Returns the list of all participants in the specified conversation.
* [DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestarticles) - Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
* [DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestfaqanswers) - Gets suggested faq answers for a participant based on specific historical messages.
* [DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestsmartreplies) - Gets smart replies for a participant based on specific historical messages.
* [DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary](#dialogflowprojectslocationsconversationssuggestionssuggestconversationsummary) - Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
* [DialogflowProjectsLocationsDeleteAgent](#dialogflowprojectslocationsdeleteagent) - Deletes the specified agent.
* [DialogflowProjectsLocationsGetAgent](#dialogflowprojectslocationsgetagent) - Retrieves the specified agent.
* [DialogflowProjectsLocationsKnowledgeBasesCreate](#dialogflowprojectslocationsknowledgebasescreate) - Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate](#dialogflowprojectslocationsknowledgebasesdocumentscreate) - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsDelete](#dialogflowprojectslocationsknowledgebasesdocumentsdelete) - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsImport](#dialogflowprojectslocationsknowledgebasesdocumentsimport) - Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsList](#dialogflowprojectslocationsknowledgebasesdocumentslist) - Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch](#dialogflowprojectslocationsknowledgebasesdocumentspatch) - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [DialogflowProjectsLocationsKnowledgeBasesDocumentsReload](#dialogflowprojectslocationsknowledgebasesdocumentsreload) - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [DialogflowProjectsLocationsKnowledgeBasesList](#dialogflowprojectslocationsknowledgebaseslist) - Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
* [DialogflowProjectsLocationsList](#dialogflowprojectslocationslist) - Lists information about the supported locations for this service.
* [DialogflowProjectsLocationsSetAgent](#dialogflowprojectslocationssetagent) - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [DialogflowProjectsOperationsCancel](#dialogflowprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [DialogflowProjectsOperationsGet](#dialogflowprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [DialogflowProjectsOperationsList](#dialogflowprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## DialogflowProjectsConversationsParticipantsSuggestionsCompile

Deprecated. use SuggestArticles and SuggestFaqAnswers instead. Gets suggestions for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.

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
    res, err := s.Projects.DialogflowProjectsConversationsParticipantsSuggestionsCompile(ctx, operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1CompileSuggestionRequest: &shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest{
            ContextSize: sdk.Int(891773),
            LatestMessage: sdk.String("ipsa"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity{
        Option1: &operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1CompileSuggestionResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsConversationsParticipantsSuggestionsList

Deprecated: Use inline suggestion, event based suggestion or Suggestion* API instead. See HumanAgentAssistantConfig.name for more details. Removal Date: 2020-09-01. Retrieves suggestions for live agents. This method should be used by human agent client software to fetch auto generated suggestions in real-time, while the conversation with an end user is in progress. The functionality is implemented in terms of the [list pagination](https://cloud.google.com/apis/design/design_patterns#list_pagination) design pattern. The client app should use the `next_page_token` field to fetch the next batch of suggestions. `suggestions` are sorted by `create_time` in descending order. To fetch latest suggestion, just set `page_size` to 1. To fetch new suggestions without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.

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
    res, err := s.Projects.DialogflowProjectsConversationsParticipantsSuggestionsList(ctx, operations.DialogflowProjectsConversationsParticipantsSuggestionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(832620),
        PageToken: sdk.String("sapiente"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
    }, operations.DialogflowProjectsConversationsParticipantsSuggestionsListSecurity{
        Option1: &operations.DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListSuggestionsResponse != nil {
        // handle response
    }
}
```

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest: &shared.GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest{
            EntityTypeNames: []string{
                "quod",
                "quod",
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
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
        GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest: &shared.GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest{
            EntityTypeBatchInline: &shared.GoogleCloudDialogflowV2beta1EntityTypeBatch{
                EntityTypes: []shared.GoogleCloudDialogflowV2beta1EntityType{
                    shared.GoogleCloudDialogflowV2beta1EntityType{
                        AutoExpansionMode: shared.GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeDefault.ToPointer(),
                        DisplayName: sdk.String("beatae"),
                        EnableFuzzyExtraction: sdk.Bool(false),
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "modi",
                                    "qui",
                                },
                                Value: sdk.String("impedit"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "esse",
                                    "ipsum",
                                    "excepturi",
                                },
                                Value: sdk.String("aspernatur"),
                            },
                        },
                        Kind: shared.GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindUnspecified.ToPointer(),
                        Name: sdk.String("Faye Cormier"),
                    },
                    shared.GoogleCloudDialogflowV2beta1EntityType{
                        AutoExpansionMode: shared.GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeDefault.ToPointer(),
                        DisplayName: sdk.String("laboriosam"),
                        EnableFuzzyExtraction: sdk.Bool(false),
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "fuga",
                                    "in",
                                    "corporis",
                                    "iste",
                                },
                                Value: sdk.String("iure"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "quidem",
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                                Value: sdk.String("est"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "laborum",
                                    "dolores",
                                    "dolorem",
                                },
                                Value: sdk.String("corporis"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "nobis",
                                },
                                Value: sdk.String("enim"),
                            },
                        },
                        Kind: shared.GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindList.ToPointer(),
                        Name: sdk.String("Ms. Cathy Marks"),
                    },
                    shared.GoogleCloudDialogflowV2beta1EntityType{
                        AutoExpansionMode: shared.GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeDefault.ToPointer(),
                        DisplayName: sdk.String("sapiente"),
                        EnableFuzzyExtraction: sdk.Bool(false),
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "dolorem",
                                    "culpa",
                                    "consequuntur",
                                },
                                Value: sdk.String("repellat"),
                            },
                        },
                        Kind: shared.GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindList.ToPointer(),
                        Name: sdk.String("Francis Jerde"),
                    },
                    shared.GoogleCloudDialogflowV2beta1EntityType{
                        AutoExpansionMode: shared.GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeUnspecified.ToPointer(),
                        DisplayName: sdk.String("error"),
                        EnableFuzzyExtraction: sdk.Bool(false),
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "vitae",
                                    "laborum",
                                },
                                Value: sdk.String("animi"),
                            },
                        },
                        Kind: shared.GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindMap.ToPointer(),
                        Name: sdk.String("Angelica Dietrich"),
                    },
                },
            },
            EntityTypeBatchURI: sdk.String("id"),
            LanguageCode: sdk.String("possimus"),
            UpdateMask: sdk.String("aut"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("reiciendis"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("praesentium"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest: &shared.GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest{
            Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                    Synonyms: []string{
                        "voluptate",
                        "cum",
                        "perferendis",
                    },
                    Value: sdk.String("doloremque"),
                },
            },
            LanguageCode: sdk.String("reprehenderit"),
        },
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("iusto"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
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
        GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest: &shared.GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest{
            EntityValues: []string{
                "quae",
                "ipsum",
                "quidem",
                "molestias",
            },
            LanguageCode: sdk.String("excepturi"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("rem"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("quasi"),
        Parent: "repudiandae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("itaque"),
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

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest: &shared.GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest{
            Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                    Synonyms: []string{
                        "est",
                    },
                    Value: sdk.String("quibusdam"),
                },
                shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                    Synonyms: []string{
                        "deserunt",
                    },
                    Value: sdk.String("distinctio"),
                },
            },
            LanguageCode: sdk.String("quibusdam"),
            UpdateMask: sdk.String("labore"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
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
        GoogleCloudDialogflowV2beta1EnvironmentInput: &shared.GoogleCloudDialogflowV2beta1EnvironmentInput{
            AgentVersion: sdk.String("dolorum"),
            Description: sdk.String("excepturi"),
            Fulfillment: &shared.GoogleCloudDialogflowV2beta1Fulfillment{
                DisplayName: sdk.String("tempora"),
                Enabled: sdk.Bool(false),
                Features: []shared.GoogleCloudDialogflowV2beta1FulfillmentFeature{
                    shared.GoogleCloudDialogflowV2beta1FulfillmentFeature{
                        Type: shared.GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnumSmalltalk.ToPointer(),
                    },
                    shared.GoogleCloudDialogflowV2beta1FulfillmentFeature{
                        Type: shared.GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnumTypeUnspecified.ToPointer(),
                    },
                    shared.GoogleCloudDialogflowV2beta1FulfillmentFeature{
                        Type: shared.GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnumSmalltalk.ToPointer(),
                    },
                },
                GenericWebService: &shared.GoogleCloudDialogflowV2beta1FulfillmentGenericWebService{
                    IsCloudFunction: sdk.Bool(false),
                    Password: sdk.String("eum"),
                    RequestHeaders: map[string]string{
                        "eligendi": "sint",
                    },
                    URI: sdk.String("http://optimistic-tenth.name"),
                    Username: sdk.String("Loyce_Fadel68"),
                },
                Name: sdk.String("Arlene Stamm"),
            },
            TextToSpeechSettings: &shared.GoogleCloudDialogflowV2beta1TextToSpeechSettings{
                EnableTextToSpeech: sdk.Bool(false),
                OutputAudioEncoding: shared.GoogleCloudDialogflowV2beta1TextToSpeechSettingsOutputAudioEncodingEnumOutputAudioEncodingUnspecified.ToPointer(),
                SampleRateHertz: sdk.Int(297437),
                SynthesizeSpeechConfigs: map[string]shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                    "facere": shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                        EffectsProfileID: []string{
                            "aliquid",
                            "laborum",
                        },
                        Pitch: sdk.Float64(8811.04),
                        SpeakingRate: sdk.Float64(2497.96),
                        Voice: &shared.GoogleCloudDialogflowV2beta1VoiceSelectionParams{
                            Name: sdk.String("Jon Tillman"),
                            SsmlGender: shared.GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderFemale.ToPointer(),
                        },
                        VolumeGainDb: sdk.Float64(7252.55),
                    },
                    "id": shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                        EffectsProfileID: []string{
                            "deleniti",
                            "sapiente",
                            "amet",
                        },
                        Pitch: sdk.Float64(6439.9),
                        SpeakingRate: sdk.Float64(3948.69),
                        Voice: &shared.GoogleCloudDialogflowV2beta1VoiceSelectionParams{
                            Name: sdk.String("Ada Moen IV"),
                            SsmlGender: shared.GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale.ToPointer(),
                        },
                        VolumeGainDb: sdk.Float64(7160.75),
                    },
                    "id": shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                        EffectsProfileID: []string{
                            "labore",
                            "suscipit",
                        },
                        Pitch: sdk.Float64(6180.16),
                        SpeakingRate: sdk.Float64(7491.7),
                        Voice: &shared.GoogleCloudDialogflowV2beta1VoiceSelectionParams{
                            Name: sdk.String("Mrs. Meghan Collins V"),
                            SsmlGender: shared.GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale.ToPointer(),
                        },
                        VolumeGainDb: sdk.Float64(5908.73),
                    },
                    "quos": shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                        EffectsProfileID: []string{
                            "accusantium",
                            "mollitia",
                            "reiciendis",
                        },
                        Pitch: sdk.Float64(6521.03),
                        SpeakingRate: sdk.Float64(3209.97),
                        Voice: &shared.GoogleCloudDialogflowV2beta1VoiceSelectionParams{
                            Name: sdk.String("Carmen Treutel"),
                            SsmlGender: shared.GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified.ToPointer(),
                        },
                        VolumeGainDb: sdk.Float64(4358.65),
                    },
                },
            },
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        EnvironmentID: sdk.String("maxime"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("in"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Environment != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("sed"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(37559),
        PageToken: sdk.String("consequuntur"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1EnvironmentHistory != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsAgentEnvironmentsList

Returns the list of all non-draft environments of the specified agent.

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
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("ea"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("odit"),
        PageSize: sdk.Int64(407183),
        PageToken: sdk.String("accusantium"),
        Parent: "ab",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListEnvironmentsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1ExportAgentRequest: &shared.GoogleCloudDialogflowV2beta1ExportAgentRequest{
            AgentURI: sdk.String("autem"),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("perferendis"),
        Parent: "fugiat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("cumque"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("quis"),
        LanguageCode: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        Parent: "eaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("eos"),
    }, operations.DialogflowProjectsLocationsAgentGetValidationResultSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ValidationResult != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1ImportAgentRequest: &shared.GoogleCloudDialogflowV2beta1ImportAgentRequest{
            AgentContent: sdk.String("dolores"),
            AgentURI: sdk.String("minus"),
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("recusandae"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("voluptatem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput: &shared.GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput{
            Intents: []shared.GoogleCloudDialogflowV2beta1IntentInput{
                shared.GoogleCloudDialogflowV2beta1IntentInput{
                    Action: sdk.String("blanditiis"),
                    DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum{
                        shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumPlatformUnspecified,
                        shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumLine,
                        shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumViber,
                    },
                    DisplayName: sdk.String("adipisci"),
                    EndInteraction: sdk.Bool(false),
                    Events: []string{
                        "earum",
                        "modi",
                        "iste",
                        "dolorum",
                    },
                    InputContextNames: []string{
                        "pariatur",
                        "provident",
                        "nobis",
                    },
                    IsFallback: sdk.Bool(false),
                    LiveAgentHandoff: sdk.Bool(false),
                    Messages: []shared.GoogleCloudDialogflowV2beta1IntentMessage{
                        shared.GoogleCloudDialogflowV2beta1IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://mysterious-grass.biz"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://dental-cravat.org"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://jam-packed-kingdom.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://expensive-bite.com"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                FormattedText: sdk.String("iure"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("odio"),
                                    ImageURI: sdk.String("quaerat"),
                                },
                                Subtitle: sdk.String("accusamus"),
                                Title: sdk.String("Miss"),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumBlurredBackground.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("natus"),
                                        Footer: sdk.String("eos"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("atque"),
                                            ImageURI: sdk.String("sit"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("fugiat"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("dolorum"),
                                        Footer: sdk.String("iusto"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptate"),
                                            ImageURI: sdk.String("dolorum"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("deleniti"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2beta1IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("asperiores"),
                                        Text: sdk.String("nihil"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("ipsum"),
                                        Text: sdk.String("voluptate"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("id"),
                                        Text: sdk.String("saepe"),
                                    },
                                },
                                ImageURI: sdk.String("eius"),
                                Subtitle: sdk.String("aspernatur"),
                                Title: sdk.String("Mr."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                        Description: sdk.String("optio"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("accusamus"),
                                            ImageURI: sdk.String("ad"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("saepe"),
                                            Synonyms: []string{
                                                "deserunt",
                                                "provident",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                AccessibilityText: sdk.String("repellendus"),
                                ImageURI: sdk.String("totam"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("similique"),
                                URI: sdk.String("http://true-epee.biz"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        Description: sdk.String("quod"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("officiis"),
                                            ImageURI: sdk.String("qui"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("dolorum"),
                                            Synonyms: []string{
                                                "esse",
                                                "harum",
                                                "iusto",
                                                "ipsum",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        Description: sdk.String("tenetur"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("amet"),
                                            ImageURI: sdk.String("tempore"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("accusamus"),
                                            Synonyms: []string{
                                                "enim",
                                                "dolorem",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                Subtitle: sdk.String("totam"),
                                Title: sdk.String("Ms."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("expedita"),
                                        Description: sdk.String("neque"),
                                        Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("sed"),
                                            ImageURI: sdk.String("vel"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("libero"),
                                            ImageURI: sdk.String("voluptas"),
                                        },
                                        Name: sdk.String("Darryl Emard"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "pariatur": "soluta",
                                "dicta": "laborum",
                                "totam": "incidunt",
                                "aspernatur": "dolores",
                            },
                            Platform: shared.GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumViber.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2beta1IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "aliquid",
                                    "quam",
                                    "molestias",
                                },
                                Title: sdk.String("Dr."),
                            },
                            RbmCarouselRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard{
                                CardContents: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                        Description: sdk.String("neque"),
                                        Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                            FileURI: sdk.String("fugit"),
                                            Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified.ToPointer(),
                                            ThumbnailURI: sdk.String("odio"),
                                        },
                                        Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("ullam"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("https://warlike-ankle.net"),
                                                    },
                                                    PostbackData: sdk.String("soluta"),
                                                    ShareLocation: map[string]interface{}{
                                                        "et": "saepe",
                                                        "ipsum": "veritatis",
                                                        "nobis": "quos",
                                                    },
                                                    Text: sdk.String("tempore"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("cupiditate"),
                                                    Text: sdk.String("aperiam"),
                                                },
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                CardWidth: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumCardWidthUnspecified.ToPointer(),
                            },
                            RbmStandaloneRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard{
                                CardContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                    Description: sdk.String("dolore"),
                                    Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                        FileURI: sdk.String("labore"),
                                        Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified.ToPointer(),
                                        ThumbnailURI: sdk.String("dolorum"),
                                    },
                                    Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                    PhoneNumber: sdk.String("quae"),
                                                },
                                                OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                    URI: sdk.String("http://narrow-tritone.com"),
                                                },
                                                PostbackData: sdk.String("est"),
                                                ShareLocation: map[string]interface{}{
                                                    "porro": "doloribus",
                                                    "ut": "facilis",
                                                    "cupiditate": "qui",
                                                    "quae": "laudantium",
                                                },
                                                Text: sdk.String("odio"),
                                            },
                                            Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                PostbackData: sdk.String("occaecati"),
                                                Text: sdk.String("voluptatibus"),
                                            },
                                        },
                                    },
                                    Title: sdk.String("Miss"),
                                },
                                CardOrientation: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumVertical.ToPointer(),
                                ThumbnailImageAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumLeft.ToPointer(),
                            },
                            RbmText: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmText{
                                RbmSuggestion: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("ipsum"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://joint-curler.org"),
                                            },
                                            PostbackData: sdk.String("tenetur"),
                                            ShareLocation: map[string]interface{}{
                                                "hic": "distinctio",
                                                "quod": "odio",
                                            },
                                            Text: sdk.String("similique"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("facilis"),
                                            Text: sdk.String("vero"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("ducimus"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://terrible-status.biz"),
                                            },
                                            PostbackData: sdk.String("natus"),
                                            ShareLocation: map[string]interface{}{
                                                "aut": "voluptatibus",
                                                "exercitationem": "nulla",
                                                "fugit": "porro",
                                                "maiores": "doloribus",
                                            },
                                            Text: sdk.String("iusto"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("eligendi"),
                                            Text: sdk.String("ducimus"),
                                        },
                                    },
                                },
                                Text: sdk.String("alias"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("tempora"),
                                        Ssml: sdk.String("ipsam"),
                                        TextToSpeech: sdk.String("ea"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("aspernatur"),
                                        Ssml: sdk.String("vel"),
                                        TextToSpeech: sdk.String("possimus"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("magnam"),
                                        Ssml: sdk.String("ratione"),
                                        TextToSpeech: sdk.String("ex"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://torn-mixer.org"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("quisquam"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("ea"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("corporis"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("aliquid"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("magnam"),
                                    ImageURI: sdk.String("ea"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("recusandae"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("minima"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("a"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("aut"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("aut"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("deleniti"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("impedit"),
                                Title: sdk.String("Mrs."),
                            },
                            TelephonyPlayAudio: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio{
                                AudioURI: sdk.String("fugit"),
                            },
                            TelephonySynthesizeSpeech: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech{
                                Ssml: sdk.String("accusamus"),
                                Text: sdk.String("inventore"),
                            },
                            TelephonyTransferCall: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall{
                                PhoneNumber: sdk.String("non"),
                            },
                            Text: &shared.GoogleCloudDialogflowV2beta1IntentMessageText{
                                Text: []string{
                                    "dolorum",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://evergreen-homogenate.info"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://sweaty-stripe.info"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://far-off-development.com"),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                                FormattedText: sdk.String("ipsa"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("molestiae"),
                                    ImageURI: sdk.String("magnam"),
                                },
                                Subtitle: sdk.String("odio"),
                                Title: sdk.String("Mrs."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumWhite.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("rem"),
                                        Footer: sdk.String("fuga"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("reprehenderit"),
                                            ImageURI: sdk.String("quidem"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("fugiat"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("suscipit"),
                                        Footer: sdk.String("assumenda"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("eos"),
                                            ImageURI: sdk.String("praesentium"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("quisquam"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2beta1IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("quidem"),
                                        Text: sdk.String("neque"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("quo"),
                                        Text: sdk.String("illum"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("quo"),
                                        Text: sdk.String("fuga"),
                                    },
                                },
                                ImageURI: sdk.String("eius"),
                                Subtitle: sdk.String("eos"),
                                Title: sdk.String("Mrs."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                        Description: sdk.String("cupiditate"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("consequatur"),
                                            ImageURI: sdk.String("tempora"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("debitis"),
                                            Synonyms: []string{
                                                "aspernatur",
                                                "sequi",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                AccessibilityText: sdk.String("esse"),
                                ImageURI: sdk.String("recusandae"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("aperiam"),
                                URI: sdk.String("https://starchy-kiosk.com"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        Description: sdk.String("totam"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("accusamus"),
                                            ImageURI: sdk.String("aliquam"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("odio"),
                                            Synonyms: []string{
                                                "commodi",
                                                "sapiente",
                                                "dolores",
                                            },
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        Description: sdk.String("molestiae"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("accusantium"),
                                            ImageURI: sdk.String("porro"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("eum"),
                                            Synonyms: []string{
                                                "praesentium",
                                                "consequuntur",
                                                "deleniti",
                                            },
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                Subtitle: sdk.String("fuga"),
                                Title: sdk.String("Miss"),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("atque"),
                                        Description: sdk.String("explicabo"),
                                        Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("minima"),
                                            ImageURI: sdk.String("nisi"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("fugit"),
                                            ImageURI: sdk.String("sapiente"),
                                        },
                                        Name: sdk.String("Norma Christiansen"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("atque"),
                                        Description: sdk.String("et"),
                                        Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("esse"),
                                            ImageURI: sdk.String("eveniet"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("accusamus"),
                                            ImageURI: sdk.String("veritatis"),
                                        },
                                        Name: sdk.String("Traci Reilly"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "vel": "harum",
                                "molestiae": "rerum",
                                "occaecati": "minima",
                                "distinctio": "eligendi",
                            },
                            Platform: shared.GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumPlatformUnspecified.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2beta1IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "tempore",
                                    "adipisci",
                                    "cumque",
                                },
                                Title: sdk.String("Mr."),
                            },
                            RbmCarouselRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard{
                                CardContents: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                        Description: sdk.String("minus"),
                                        Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                            FileURI: sdk.String("quaerat"),
                                            Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumTall.ToPointer(),
                                            ThumbnailURI: sdk.String("consectetur"),
                                        },
                                        Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("blanditiis"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("https://weird-stove.name"),
                                                    },
                                                    PostbackData: sdk.String("esse"),
                                                    ShareLocation: map[string]interface{}{
                                                        "a": "error",
                                                    },
                                                    Text: sdk.String("sint"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("pariatur"),
                                                    Text: sdk.String("possimus"),
                                                },
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("quia"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("https://yawning-slippers.com"),
                                                    },
                                                    PostbackData: sdk.String("consequuntur"),
                                                    ShareLocation: map[string]interface{}{
                                                        "similique": "culpa",
                                                    },
                                                    Text: sdk.String("aliquid"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("tenetur"),
                                                    Text: sdk.String("quae"),
                                                },
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                CardWidth: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumSmall.ToPointer(),
                            },
                            RbmStandaloneRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard{
                                CardContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                    Description: sdk.String("in"),
                                    Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                        FileURI: sdk.String("eius"),
                                        Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumMedium.ToPointer(),
                                        ThumbnailURI: sdk.String("illum"),
                                    },
                                    Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                    PhoneNumber: sdk.String("accusantium"),
                                                },
                                                OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                    URI: sdk.String("http://well-off-c-clamp.info"),
                                                },
                                                PostbackData: sdk.String("reprehenderit"),
                                                ShareLocation: map[string]interface{}{
                                                    "nisi": "aut",
                                                    "voluptatum": "qui",
                                                },
                                                Text: sdk.String("quibusdam"),
                                            },
                                            Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                PostbackData: sdk.String("ex"),
                                                Text: sdk.String("deleniti"),
                                            },
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                    PhoneNumber: sdk.String("itaque"),
                                                },
                                                OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                    URI: sdk.String("https://burly-official.org"),
                                                },
                                                PostbackData: sdk.String("quasi"),
                                                ShareLocation: map[string]interface{}{
                                                    "et": "voluptate",
                                                    "ipsa": "minima",
                                                    "veritatis": "consectetur",
                                                    "adipisci": "iste",
                                                },
                                                Text: sdk.String("temporibus"),
                                            },
                                            Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                PostbackData: sdk.String("accusantium"),
                                                Text: sdk.String("rem"),
                                            },
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                    PhoneNumber: sdk.String("aut"),
                                                },
                                                OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                    URI: sdk.String("https://inconsequential-performance.com"),
                                                },
                                                PostbackData: sdk.String("corrupti"),
                                                ShareLocation: map[string]interface{}{
                                                    "voluptatem": "dolor",
                                                    "occaecati": "numquam",
                                                },
                                                Text: sdk.String("impedit"),
                                            },
                                            Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                PostbackData: sdk.String("explicabo"),
                                                Text: sdk.String("voluptas"),
                                            },
                                        },
                                    },
                                    Title: sdk.String("Mr."),
                                },
                                CardOrientation: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumHorizontal.ToPointer(),
                                ThumbnailImageAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumThumbnailImageAlignmentUnspecified.ToPointer(),
                            },
                            RbmText: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmText{
                                RbmSuggestion: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("natus"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://winged-gall-bladder.org"),
                                            },
                                            PostbackData: sdk.String("aperiam"),
                                            ShareLocation: map[string]interface{}{
                                                "quaerat": "consequuntur",
                                                "repellendus": "officia",
                                            },
                                            Text: sdk.String("maxime"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("dignissimos"),
                                            Text: sdk.String("officia"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("asperiores"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://beloved-epithelium.net"),
                                            },
                                            PostbackData: sdk.String("quod"),
                                            ShareLocation: map[string]interface{}{
                                                "ab": "adipisci",
                                                "fuga": "id",
                                            },
                                            Text: sdk.String("suscipit"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("velit"),
                                            Text: sdk.String("culpa"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("est"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://marvelous-stimulation.info"),
                                            },
                                            PostbackData: sdk.String("ducimus"),
                                            ShareLocation: map[string]interface{}{
                                                "vel": "labore",
                                                "possimus": "facilis",
                                                "cum": "commodi",
                                            },
                                            Text: sdk.String("in"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("corporis"),
                                            Text: sdk.String("reiciendis"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("assumenda"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://vast-grape.com"),
                                            },
                                            PostbackData: sdk.String("cum"),
                                            ShareLocation: map[string]interface{}{
                                                "in": "exercitationem",
                                            },
                                            Text: sdk.String("earum"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("facere"),
                                            Text: sdk.String("numquam"),
                                        },
                                    },
                                },
                                Text: sdk.String("doloribus"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("reiciendis"),
                                        Ssml: sdk.String("quidem"),
                                        TextToSpeech: sdk.String("saepe"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("necessitatibus"),
                                        Ssml: sdk.String("dolore"),
                                        TextToSpeech: sdk.String("sunt"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://unimportant-custard.info"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://babyish-tortoise.net"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("similique"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("aspernatur"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("voluptas"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("minima"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("dolorum"),
                                    ImageURI: sdk.String("adipisci"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("blanditiis"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("dolore"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("aliquam"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("temporibus"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("ullam"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("adipisci"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("cum"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("quas"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("hic"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("nesciunt"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("culpa"),
                                Title: sdk.String("Ms."),
                            },
                            TelephonyPlayAudio: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio{
                                AudioURI: sdk.String("pariatur"),
                            },
                            TelephonySynthesizeSpeech: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech{
                                Ssml: sdk.String("totam"),
                                Text: sdk.String("hic"),
                            },
                            TelephonyTransferCall: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall{
                                PhoneNumber: sdk.String("exercitationem"),
                            },
                            Text: &shared.GoogleCloudDialogflowV2beta1IntentMessageText{
                                Text: []string{
                                    "sit",
                                    "rerum",
                                    "sed",
                                    "reiciendis",
                                },
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentMessage{
                            BasicCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://royal-implementation.net"),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                },
                                FormattedText: sdk.String("iste"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("dolore"),
                                    ImageURI: sdk.String("laborum"),
                                },
                                Subtitle: sdk.String("sed"),
                                Title: sdk.String("Ms."),
                            },
                            BrowseCarouselCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard{
                                ImageDisplayOptions: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumWhite.ToPointer(),
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("explicabo"),
                                        Footer: sdk.String("voluptas"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("unde"),
                                            ImageURI: sdk.String("architecto"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("suscipit"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("illo"),
                                        Footer: sdk.String("reiciendis"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("perferendis"),
                                            ImageURI: sdk.String("corrupti"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("maiores"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                        },
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        Description: sdk.String("provident"),
                                        Footer: sdk.String("eius"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("necessitatibus"),
                                            ImageURI: sdk.String("ipsum"),
                                        },
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                            URL: sdk.String("ea"),
                                            URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                        },
                                        Title: sdk.String("Ms."),
                                    },
                                },
                            },
                            Card: &shared.GoogleCloudDialogflowV2beta1IntentMessageCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("tempora"),
                                        Text: sdk.String("tempora"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("voluptate"),
                                        Text: sdk.String("reiciendis"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("ex"),
                                        Text: sdk.String("sit"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        Postback: sdk.String("non"),
                                        Text: sdk.String("officiis"),
                                    },
                                },
                                ImageURI: sdk.String("praesentium"),
                                Subtitle: sdk.String("facilis"),
                                Title: sdk.String("Mrs."),
                            },
                            CarouselSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect{
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                        Description: sdk.String("ipsam"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("debitis"),
                                            ImageURI: sdk.String("rem"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("sit"),
                                            Synonyms: []string{
                                                "error",
                                                "veniam",
                                                "minima",
                                                "recusandae",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                        Description: sdk.String("nulla"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("magni"),
                                            ImageURI: sdk.String("aperiam"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("saepe"),
                                            Synonyms: []string{
                                                "veniam",
                                                "in",
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                AccessibilityText: sdk.String("beatae"),
                                ImageURI: sdk.String("laudantium"),
                            },
                            LinkOutSuggestion: &shared.GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion{
                                DestinationName: sdk.String("exercitationem"),
                                URI: sdk.String("https://shady-glen.net"),
                            },
                            ListSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageListSelect{
                                Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        Description: sdk.String("error"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("hic"),
                                            ImageURI: sdk.String("expedita"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("debitis"),
                                            Synonyms: []string{
                                                "dolorum",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        Description: sdk.String("officia"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("dolorum"),
                                            ImageURI: sdk.String("corrupti"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("accusamus"),
                                            Synonyms: []string{
                                                "atque",
                                                "fugit",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        Description: sdk.String("fugiat"),
                                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("voluptatem"),
                                            ImageURI: sdk.String("culpa"),
                                        },
                                        Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                            Key: sdk.String("expedita"),
                                            Synonyms: []string{
                                                "consequatur",
                                                "esse",
                                            },
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                },
                                Subtitle: sdk.String("sit"),
                                Title: sdk.String("Ms."),
                            },
                            MediaContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContent{
                                MediaObjects: []shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("repudiandae"),
                                        Description: sdk.String("corporis"),
                                        Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("et"),
                                            ImageURI: sdk.String("blanditiis"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("ex"),
                                            ImageURI: sdk.String("sed"),
                                        },
                                        Name: sdk.String("Gina Heathcote"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("consequatur"),
                                        Description: sdk.String("incidunt"),
                                        Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("reiciendis"),
                                            ImageURI: sdk.String("dolorem"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("harum"),
                                            ImageURI: sdk.String("dicta"),
                                        },
                                        Name: sdk.String("Violet Greenfelder"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                        ContentURL: sdk.String("laborum"),
                                        Description: sdk.String("nam"),
                                        Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("tenetur"),
                                            ImageURI: sdk.String("laboriosam"),
                                        },
                                        LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                            AccessibilityText: sdk.String("alias"),
                                            ImageURI: sdk.String("amet"),
                                        },
                                        Name: sdk.String("Karl Miller"),
                                    },
                                },
                                MediaType: shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                            },
                            Payload: map[string]interface{}{
                                "voluptates": "perferendis",
                                "est": "quidem",
                                "reprehenderit": "facere",
                                "fuga": "praesentium",
                            },
                            Platform: shared.GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumViber.ToPointer(),
                            QuickReplies: &shared.GoogleCloudDialogflowV2beta1IntentMessageQuickReplies{
                                QuickReplies: []string{
                                    "voluptatem",
                                    "quisquam",
                                },
                                Title: sdk.String("Dr."),
                            },
                            RbmCarouselRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard{
                                CardContents: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                        Description: sdk.String("atque"),
                                        Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                            FileURI: sdk.String("reprehenderit"),
                                            Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumTall.ToPointer(),
                                            ThumbnailURI: sdk.String("totam"),
                                        },
                                        Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("quidem"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("https://bright-inhibition.biz"),
                                                    },
                                                    PostbackData: sdk.String("assumenda"),
                                                    ShareLocation: map[string]interface{}{
                                                        "atque": "error",
                                                        "officiis": "officiis",
                                                    },
                                                    Text: sdk.String("accusamus"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("natus"),
                                                    Text: sdk.String("minima"),
                                                },
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("aspernatur"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("http://woozy-marten.org"),
                                                    },
                                                    PostbackData: sdk.String("error"),
                                                    ShareLocation: map[string]interface{}{
                                                        "suscipit": "repudiandae",
                                                        "atque": "atque",
                                                        "sunt": "recusandae",
                                                    },
                                                    Text: sdk.String("dolorum"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("repellendus"),
                                                    Text: sdk.String("labore"),
                                                },
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                CardWidth: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumCardWidthUnspecified.ToPointer(),
                            },
                            RbmStandaloneRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard{
                                CardContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                    Description: sdk.String("repudiandae"),
                                    Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                        FileURI: sdk.String("dicta"),
                                        Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified.ToPointer(),
                                        ThumbnailURI: sdk.String("beatae"),
                                    },
                                    Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                    PhoneNumber: sdk.String("enim"),
                                                },
                                                OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                    URI: sdk.String("http://every-vengeance.name"),
                                                },
                                                PostbackData: sdk.String("magnam"),
                                                ShareLocation: map[string]interface{}{
                                                    "consequuntur": "occaecati",
                                                    "officiis": "perspiciatis",
                                                    "in": "adipisci",
                                                    "eveniet": "occaecati",
                                                },
                                                Text: sdk.String("consequuntur"),
                                            },
                                            Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                PostbackData: sdk.String("fugit"),
                                                Text: sdk.String("id"),
                                            },
                                        },
                                    },
                                    Title: sdk.String("Mrs."),
                                },
                                CardOrientation: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumHorizontal.ToPointer(),
                                ThumbnailImageAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumLeft.ToPointer(),
                            },
                            RbmText: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmText{
                                RbmSuggestion: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("corporis"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://unwitting-degree.org"),
                                            },
                                            PostbackData: sdk.String("doloremque"),
                                            ShareLocation: map[string]interface{}{
                                                "ipsa": "totam",
                                                "quae": "molestiae",
                                            },
                                            Text: sdk.String("eveniet"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("qui"),
                                            Text: sdk.String("cum"),
                                        },
                                    },
                                },
                                Text: sdk.String("iure"),
                            },
                            SimpleResponses: &shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses{
                                SimpleResponses: []shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("ratione"),
                                        Ssml: sdk.String("laborum"),
                                        TextToSpeech: sdk.String("distinctio"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("voluptatum"),
                                        Ssml: sdk.String("rem"),
                                        TextToSpeech: sdk.String("aliquam"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("ad"),
                                        Ssml: sdk.String("repellat"),
                                        TextToSpeech: sdk.String("alias"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        DisplayText: sdk.String("corporis"),
                                        Ssml: sdk.String("perspiciatis"),
                                        TextToSpeech: sdk.String("nihil"),
                                    },
                                },
                            },
                            Suggestions: &shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestions{
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        Title: sdk.String("Dr."),
                                    },
                                },
                            },
                            TableCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageTableCard{
                                Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://putrid-extinction.biz"),
                                        },
                                        Title: sdk.String("Miss"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://basic-traveler.name"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("http://identical-dress.name"),
                                        },
                                        Title: sdk.String("Mrs."),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                            URI: sdk.String("https://major-homosexuality.info"),
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                },
                                ColumnProperties: []shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("provident"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        Header: sdk.String("eum"),
                                        HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("provident"),
                                    ImageURI: sdk.String("aspernatur"),
                                },
                                Rows: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("animi"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("mollitia"),
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                Text: sdk.String("provident"),
                                            },
                                        },
                                        DividerAfter: sdk.Bool(false),
                                    },
                                },
                                Subtitle: sdk.String("possimus"),
                                Title: sdk.String("Miss"),
                            },
                            TelephonyPlayAudio: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio{
                                AudioURI: sdk.String("ex"),
                            },
                            TelephonySynthesizeSpeech: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech{
                                Ssml: sdk.String("aliquid"),
                                Text: sdk.String("accusantium"),
                            },
                            TelephonyTransferCall: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall{
                                PhoneNumber: sdk.String("repellat"),
                            },
                            Text: &shared.GoogleCloudDialogflowV2beta1IntentMessageText{
                                Text: []string{
                                    "ullam",
                                    "in",
                                    "nam",
                                    "earum",
                                },
                            },
                        },
                    },
                    MlDisabled: sdk.Bool(false),
                    MlEnabled: sdk.Bool(false),
                    Name: sdk.String("Neal Schulist"),
                    OutputContexts: []shared.GoogleCloudDialogflowV2beta1Context{
                        shared.GoogleCloudDialogflowV2beta1Context{
                            LifespanCount: sdk.Int(889794),
                            Name: sdk.String("Noel Bruen"),
                            Parameters: map[string]interface{}{
                                "inventore": "fugit",
                                "cumque": "quae",
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1Context{
                            LifespanCount: sdk.Int(21688),
                            Name: sdk.String("Judy Kemmer"),
                            Parameters: map[string]interface{}{
                                "impedit": "eos",
                                "sapiente": "eum",
                                "dicta": "minima",
                                "beatae": "cupiditate",
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1Context{
                            LifespanCount: sdk.Int(589695),
                            Name: sdk.String("Ed Weimann DVM"),
                            Parameters: map[string]interface{}{
                                "maiores": "debitis",
                                "aliquid": "porro",
                                "suscipit": "dolorem",
                            },
                        },
                    },
                    Parameters: []shared.GoogleCloudDialogflowV2beta1IntentParameter{
                        shared.GoogleCloudDialogflowV2beta1IntentParameter{
                            DefaultValue: sdk.String("cumque"),
                            DisplayName: sdk.String("fuga"),
                            EntityTypeDisplayName: sdk.String("ratione"),
                            IsList: sdk.Bool(false),
                            Mandatory: sdk.Bool(false),
                            Name: sdk.String("Mr. Santiago Stoltenberg IV"),
                            Prompts: []string{
                                "occaecati",
                                "suscipit",
                                "adipisci",
                            },
                            Value: sdk.String("quasi"),
                        },
                    },
                    ParentFollowupIntentName: sdk.String("magni"),
                    Priority: sdk.Int(984934),
                    ResetContexts: sdk.Bool(false),
                    TrainingPhrases: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                            Name: sdk.String("Jeffrey Goldner"),
                            Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("iusto"),
                                    EntityType: sdk.String("esse"),
                                    Text: sdk.String("praesentium"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(979963),
                            Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                            Name: sdk.String("Mr. Diane Stiedemann"),
                            Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("esse"),
                                    EntityType: sdk.String("ex"),
                                    Text: sdk.String("consectetur"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("aliquid"),
                                    EntityType: sdk.String("ipsa"),
                                    Text: sdk.String("laborum"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(123844),
                            Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumExample.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                            Name: sdk.String("Damon Jacobs"),
                            Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("perferendis"),
                                    EntityType: sdk.String("eum"),
                                    Text: sdk.String("voluptas"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("iste"),
                                    EntityType: sdk.String("id"),
                                    Text: sdk.String("ab"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(625358),
                            Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                            Name: sdk.String("Shaun Osinski"),
                            Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("enim"),
                                    EntityType: sdk.String("vitae"),
                                    Text: sdk.String("repellendus"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("ex"),
                                    EntityType: sdk.String("quo"),
                                    Text: sdk.String("ex"),
                                    UserDefined: sdk.Bool(false),
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    Alias: sdk.String("ut"),
                                    EntityType: sdk.String("ad"),
                                    Text: sdk.String("expedita"),
                                    UserDefined: sdk.Bool(false),
                                },
                            },
                            TimesAddedCount: sdk.Int(29950),
                            Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumExample.ToPointer(),
                        },
                    },
                    WebhookState: shared.GoogleCloudDialogflowV2beta1IntentWebhookStateEnumWebhookStateEnabledForSlotFilling.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("rerum"),
        Parent: "est",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("sapiente"),
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
        GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput: &shared.GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput{
            IntentBatchInline: &shared.GoogleCloudDialogflowV2beta1IntentBatchInput{
                Intents: []shared.GoogleCloudDialogflowV2beta1IntentInput{
                    shared.GoogleCloudDialogflowV2beta1IntentInput{
                        Action: sdk.String("fuga"),
                        DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum{
                            shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumTelephony,
                            shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumPlatformUnspecified,
                            shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumPlatformUnspecified,
                            shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumSkype,
                        },
                        DisplayName: sdk.String("earum"),
                        EndInteraction: sdk.Bool(false),
                        Events: []string{
                            "sapiente",
                            "rem",
                        },
                        InputContextNames: []string{
                            "nemo",
                            "asperiores",
                            "ratione",
                            "ullam",
                        },
                        IsFallback: sdk.Bool(false),
                        LiveAgentHandoff: sdk.Bool(false),
                        Messages: []shared.GoogleCloudDialogflowV2beta1IntentMessage{
                            shared.GoogleCloudDialogflowV2beta1IntentMessage{
                                BasicCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCard{
                                    Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("https://snarling-squeegee.net"),
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("https://edible-end.com"),
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://favorite-credit.com"),
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://familiar-certificate.com"),
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                    },
                                    FormattedText: sdk.String("quae"),
                                    Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                        AccessibilityText: sdk.String("dolor"),
                                        ImageURI: sdk.String("fugiat"),
                                    },
                                    Subtitle: sdk.String("ipsam"),
                                    Title: sdk.String("Mr."),
                                },
                                BrowseCarouselCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard{
                                    ImageDisplayOptions: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumImageDisplayOptionsUnspecified.ToPointer(),
                                    Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                            Description: sdk.String("eveniet"),
                                            Footer: sdk.String("impedit"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("officiis"),
                                                ImageURI: sdk.String("esse"),
                                            },
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                                URL: sdk.String("necessitatibus"),
                                                URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                            Description: sdk.String("nesciunt"),
                                            Footer: sdk.String("expedita"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("eum"),
                                                ImageURI: sdk.String("vel"),
                                            },
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                                URL: sdk.String("voluptatum"),
                                                URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                            Description: sdk.String("ab"),
                                            Footer: sdk.String("porro"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("autem"),
                                                ImageURI: sdk.String("nobis"),
                                            },
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                                URL: sdk.String("laboriosam"),
                                                URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                    },
                                },
                                Card: &shared.GoogleCloudDialogflowV2beta1IntentMessageCard{
                                    Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                            Postback: sdk.String("exercitationem"),
                                            Text: sdk.String("necessitatibus"),
                                        },
                                    },
                                    ImageURI: sdk.String("quasi"),
                                    Subtitle: sdk.String("nisi"),
                                    Title: sdk.String("Dr."),
                                },
                                CarouselSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect{
                                    Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                            Description: sdk.String("est"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("harum"),
                                                ImageURI: sdk.String("sequi"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                                Key: sdk.String("doloribus"),
                                                Synonyms: []string{
                                                    "optio",
                                                    "occaecati",
                                                    "nemo",
                                                    "voluptate",
                                                },
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                            Description: sdk.String("officia"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("voluptas"),
                                                ImageURI: sdk.String("numquam"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                                Key: sdk.String("nemo"),
                                                Synonyms: []string{
                                                    "eius",
                                                    "aspernatur",
                                                    "ducimus",
                                                },
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                            Description: sdk.String("fuga"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("laudantium"),
                                                ImageURI: sdk.String("incidunt"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                                Key: sdk.String("quasi"),
                                                Synonyms: []string{
                                                    "fugiat",
                                                    "dicta",
                                                    "nisi",
                                                },
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                            Description: sdk.String("consectetur"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("aperiam"),
                                                ImageURI: sdk.String("cupiditate"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                                Key: sdk.String("reiciendis"),
                                                Synonyms: []string{
                                                    "alias",
                                                    "omnis",
                                                    "eos",
                                                },
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                    },
                                },
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("iste"),
                                    ImageURI: sdk.String("magni"),
                                },
                                LinkOutSuggestion: &shared.GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion{
                                    DestinationName: sdk.String("inventore"),
                                    URI: sdk.String("https://uncomfortable-welcome.net"),
                                },
                                ListSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageListSelect{
                                    Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                            Description: sdk.String("delectus"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("minima"),
                                                ImageURI: sdk.String("praesentium"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                                Key: sdk.String("maxime"),
                                                Synonyms: []string{
                                                    "temporibus",
                                                    "quos",
                                                },
                                            },
                                            Title: sdk.String("Ms."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                            Description: sdk.String("itaque"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("commodi"),
                                                ImageURI: sdk.String("totam"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                                Key: sdk.String("earum"),
                                                Synonyms: []string{
                                                    "nam",
                                                    "vero",
                                                },
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                            Description: sdk.String("ipsam"),
                                            Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("vel"),
                                                ImageURI: sdk.String("alias"),
                                            },
                                            Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                                Key: sdk.String("quasi"),
                                                Synonyms: []string{
                                                    "maiores",
                                                },
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                    },
                                    Subtitle: sdk.String("sint"),
                                    Title: sdk.String("Dr."),
                                },
                                MediaContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContent{
                                    MediaObjects: []shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                            ContentURL: sdk.String("esse"),
                                            Description: sdk.String("nemo"),
                                            Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("reprehenderit"),
                                                ImageURI: sdk.String("est"),
                                            },
                                            LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("quis"),
                                                ImageURI: sdk.String("sint"),
                                            },
                                            Name: sdk.String("Garrett Welch"),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                            ContentURL: sdk.String("ex"),
                                            Description: sdk.String("voluptas"),
                                            Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("debitis"),
                                                ImageURI: sdk.String("delectus"),
                                            },
                                            LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("quae"),
                                                ImageURI: sdk.String("minus"),
                                            },
                                            Name: sdk.String("Pablo Feeney"),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                            ContentURL: sdk.String("ipsum"),
                                            Description: sdk.String("impedit"),
                                            Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("magni"),
                                                ImageURI: sdk.String("soluta"),
                                            },
                                            LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                                AccessibilityText: sdk.String("repudiandae"),
                                                ImageURI: sdk.String("nam"),
                                            },
                                            Name: sdk.String("Glenda Kling"),
                                        },
                                    },
                                    MediaType: shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                                },
                                Payload: map[string]interface{}{
                                    "deleniti": "quibusdam",
                                    "iure": "odit",
                                    "voluptatibus": "vel",
                                    "magnam": "quibusdam",
                                },
                                Platform: shared.GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumPlatformUnspecified.ToPointer(),
                                QuickReplies: &shared.GoogleCloudDialogflowV2beta1IntentMessageQuickReplies{
                                    QuickReplies: []string{
                                        "libero",
                                        "architecto",
                                        "voluptatibus",
                                        "quia",
                                    },
                                    Title: sdk.String("Miss"),
                                },
                                RbmCarouselRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard{
                                    CardContents: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                            Description: sdk.String("velit"),
                                            Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                                FileURI: sdk.String("illo"),
                                                Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified.ToPointer(),
                                                ThumbnailURI: sdk.String("vel"),
                                            },
                                            Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                            PhoneNumber: sdk.String("beatae"),
                                                        },
                                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                            URI: sdk.String("https://nice-homicide.biz"),
                                                        },
                                                        PostbackData: sdk.String("ut"),
                                                        ShareLocation: map[string]interface{}{
                                                            "earum": "dicta",
                                                            "impedit": "voluptatibus",
                                                            "iste": "itaque",
                                                        },
                                                        Text: sdk.String("alias"),
                                                    },
                                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                        PostbackData: sdk.String("nisi"),
                                                        Text: sdk.String("itaque"),
                                                    },
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                            PhoneNumber: sdk.String("velit"),
                                                        },
                                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                            URI: sdk.String("https://exhausted-criterion.info"),
                                                        },
                                                        PostbackData: sdk.String("sit"),
                                                        ShareLocation: map[string]interface{}{
                                                            "consequatur": "officia",
                                                        },
                                                        Text: sdk.String("recusandae"),
                                                    },
                                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                        PostbackData: sdk.String("ea"),
                                                        Text: sdk.String("quidem"),
                                                    },
                                                },
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                            Description: sdk.String("facilis"),
                                            Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                                FileURI: sdk.String("placeat"),
                                                Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumMedium.ToPointer(),
                                                ThumbnailURI: sdk.String("expedita"),
                                            },
                                            Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                            PhoneNumber: sdk.String("a"),
                                                        },
                                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                            URI: sdk.String("http://grim-noun.org"),
                                                        },
                                                        PostbackData: sdk.String("animi"),
                                                        ShareLocation: map[string]interface{}{
                                                            "ipsam": "corporis",
                                                            "est": "error",
                                                            "esse": "labore",
                                                            "veritatis": "vero",
                                                        },
                                                        Text: sdk.String("consectetur"),
                                                    },
                                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                        PostbackData: sdk.String("vitae"),
                                                        Text: sdk.String("inventore"),
                                                    },
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                            PhoneNumber: sdk.String("dolorem"),
                                                        },
                                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                            URI: sdk.String("http://delightful-opening.info"),
                                                        },
                                                        PostbackData: sdk.String("nemo"),
                                                        ShareLocation: map[string]interface{}{
                                                            "libero": "rem",
                                                            "dolorum": "odio",
                                                            "fugit": "alias",
                                                        },
                                                        Text: sdk.String("magni"),
                                                    },
                                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                        PostbackData: sdk.String("vel"),
                                                        Text: sdk.String("quae"),
                                                    },
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                            PhoneNumber: sdk.String("quae"),
                                                        },
                                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                            URI: sdk.String("http://distorted-fish.org"),
                                                        },
                                                        PostbackData: sdk.String("et"),
                                                        ShareLocation: map[string]interface{}{
                                                            "unde": "nulla",
                                                        },
                                                        Text: sdk.String("distinctio"),
                                                    },
                                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                        PostbackData: sdk.String("maxime"),
                                                        Text: sdk.String("quia"),
                                                    },
                                                },
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                    },
                                    CardWidth: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumSmall.ToPointer(),
                                },
                                RbmStandaloneRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard{
                                    CardContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                        Description: sdk.String("omnis"),
                                        Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                            FileURI: sdk.String("libero"),
                                            Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified.ToPointer(),
                                            ThumbnailURI: sdk.String("id"),
                                        },
                                        Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("fugiat"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("https://mysterious-sky.com"),
                                                    },
                                                    PostbackData: sdk.String("iusto"),
                                                    ShareLocation: map[string]interface{}{
                                                        "voluptates": "inventore",
                                                    },
                                                    Text: sdk.String("aperiam"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("totam"),
                                                    Text: sdk.String("dolore"),
                                                },
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("eligendi"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("https://anchored-hay.info"),
                                                    },
                                                    PostbackData: sdk.String("dolores"),
                                                    ShareLocation: map[string]interface{}{
                                                        "beatae": "est",
                                                        "facere": "corrupti",
                                                        "molestiae": "provident",
                                                        "accusamus": "necessitatibus",
                                                    },
                                                    Text: sdk.String("tempore"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("sint"),
                                                    Text: sdk.String("ea"),
                                                },
                                            },
                                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                        PhoneNumber: sdk.String("autem"),
                                                    },
                                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                        URI: sdk.String("http://rosy-linguistics.info"),
                                                    },
                                                    PostbackData: sdk.String("officiis"),
                                                    ShareLocation: map[string]interface{}{
                                                        "cum": "at",
                                                        "alias": "quia",
                                                        "quidem": "fuga",
                                                        "repudiandae": "accusantium",
                                                    },
                                                    Text: sdk.String("expedita"),
                                                },
                                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                    PostbackData: sdk.String("officiis"),
                                                    Text: sdk.String("eos"),
                                                },
                                            },
                                        },
                                        Title: sdk.String("Dr."),
                                    },
                                    CardOrientation: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumHorizontal.ToPointer(),
                                    ThumbnailImageAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumLeft.ToPointer(),
                                },
                                RbmText: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmText{
                                    RbmSuggestion: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                            Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                                Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                    PhoneNumber: sdk.String("explicabo"),
                                                },
                                                OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                    URI: sdk.String("http://petty-tweezers.biz"),
                                                },
                                                PostbackData: sdk.String("recusandae"),
                                                ShareLocation: map[string]interface{}{
                                                    "ut": "quidem",
                                                    "quis": "beatae",
                                                    "unde": "molestiae",
                                                },
                                                Text: sdk.String("delectus"),
                                            },
                                            Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                                PostbackData: sdk.String("cupiditate"),
                                                Text: sdk.String("fugit"),
                                            },
                                        },
                                    },
                                    Text: sdk.String("numquam"),
                                },
                                SimpleResponses: &shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses{
                                    SimpleResponses: []shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                            DisplayText: sdk.String("nesciunt"),
                                            Ssml: sdk.String("at"),
                                            TextToSpeech: sdk.String("officia"),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                            DisplayText: sdk.String("dignissimos"),
                                            Ssml: sdk.String("optio"),
                                            TextToSpeech: sdk.String("necessitatibus"),
                                        },
                                    },
                                },
                                Suggestions: &shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestions{
                                    Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                            Title: sdk.String("Mr."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                            Title: sdk.String("Miss"),
                                        },
                                    },
                                },
                                TableCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageTableCard{
                                    Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("https://generous-site.biz"),
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://staid-honeydew.biz"),
                                            },
                                            Title: sdk.String("Mrs."),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                            OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                                URI: sdk.String("http://usable-whack.net"),
                                            },
                                            Title: sdk.String("Mr."),
                                        },
                                    },
                                    ColumnProperties: []shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                            Header: sdk.String("ratione"),
                                            HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                            Header: sdk.String("totam"),
                                            HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                            Header: sdk.String("voluptas"),
                                            HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                                        },
                                    },
                                    Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                        AccessibilityText: sdk.String("velit"),
                                        ImageURI: sdk.String("minus"),
                                    },
                                    Rows: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                            Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("est"),
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("impedit"),
                                                },
                                            },
                                            DividerAfter: sdk.Bool(false),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                            Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("tempore"),
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("vero"),
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("odit"),
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("repellat"),
                                                },
                                            },
                                            DividerAfter: sdk.Bool(false),
                                        },
                                        shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                            Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("nemo"),
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("reprehenderit"),
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("aperiam"),
                                                },
                                                shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                                    Text: sdk.String("odio"),
                                                },
                                            },
                                            DividerAfter: sdk.Bool(false),
                                        },
                                    },
                                    Subtitle: sdk.String("minima"),
                                    Title: sdk.String("Ms."),
                                },
                                TelephonyPlayAudio: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio{
                                    AudioURI: sdk.String("ducimus"),
                                },
                                TelephonySynthesizeSpeech: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech{
                                    Ssml: sdk.String("excepturi"),
                                    Text: sdk.String("dolores"),
                                },
                                TelephonyTransferCall: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall{
                                    PhoneNumber: sdk.String("error"),
                                },
                                Text: &shared.GoogleCloudDialogflowV2beta1IntentMessageText{
                                    Text: []string{
                                        "ducimus",
                                    },
                                },
                            },
                        },
                        MlDisabled: sdk.Bool(false),
                        MlEnabled: sdk.Bool(false),
                        Name: sdk.String("Meredith Watsica"),
                        OutputContexts: []shared.GoogleCloudDialogflowV2beta1Context{
                            shared.GoogleCloudDialogflowV2beta1Context{
                                LifespanCount: sdk.Int(311486),
                                Name: sdk.String("Cecelia Schroeder"),
                                Parameters: map[string]interface{}{
                                    "dolorem": "modi",
                                    "ipsa": "sint",
                                },
                            },
                            shared.GoogleCloudDialogflowV2beta1Context{
                                LifespanCount: sdk.Int(876027),
                                Name: sdk.String("Dr. Elvira Robel"),
                                Parameters: map[string]interface{}{
                                    "dolores": "nam",
                                    "dicta": "consequuntur",
                                    "necessitatibus": "nobis",
                                },
                            },
                        },
                        Parameters: []shared.GoogleCloudDialogflowV2beta1IntentParameter{
                            shared.GoogleCloudDialogflowV2beta1IntentParameter{
                                DefaultValue: sdk.String("ducimus"),
                                DisplayName: sdk.String("maiores"),
                                EntityTypeDisplayName: sdk.String("veritatis"),
                                IsList: sdk.Bool(false),
                                Mandatory: sdk.Bool(false),
                                Name: sdk.String("Kristen Stracke"),
                                Prompts: []string{
                                    "nemo",
                                    "aliquam",
                                    "nostrum",
                                },
                                Value: sdk.String("doloribus"),
                            },
                        },
                        ParentFollowupIntentName: sdk.String("eligendi"),
                        Priority: sdk.Int(574032),
                        ResetContexts: sdk.Bool(false),
                        TrainingPhrases: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                            shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                                Name: sdk.String("Matt Macejkovic"),
                                Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                        Alias: sdk.String("eaque"),
                                        EntityType: sdk.String("saepe"),
                                        Text: sdk.String("architecto"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                        Alias: sdk.String("quos"),
                                        EntityType: sdk.String("iste"),
                                        Text: sdk.String("assumenda"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                },
                                TimesAddedCount: sdk.Int(731634),
                                Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                                Name: sdk.String("Sharon Windler"),
                                Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                    shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                                        Alias: sdk.String("adipisci"),
                                        EntityType: sdk.String("saepe"),
                                        Text: sdk.String("deserunt"),
                                        UserDefined: sdk.Bool(false),
                                    },
                                },
                                TimesAddedCount: sdk.Int(42924),
                                Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumExample.ToPointer(),
                            },
                        },
                        WebhookState: shared.GoogleCloudDialogflowV2beta1IntentWebhookStateEnumWebhookStateUnspecified.ToPointer(),
                    },
                },
            },
            IntentBatchURI: sdk.String("libero"),
            IntentView: shared.GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnumIntentViewUnspecified.ToPointer(),
            LanguageCode: sdk.String("cupiditate"),
            UpdateMask: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("sed"),
        Parent: "asperiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("facere"),
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
        GoogleCloudDialogflowV2beta1IntentInput: &shared.GoogleCloudDialogflowV2beta1IntentInput{
            Action: sdk.String("odit"),
            DefaultResponsePlatforms: []shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum{
                shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumSlack,
                shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumTelegram,
                shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumPlatformUnspecified,
                shared.GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnumSlack,
            },
            DisplayName: sdk.String("facilis"),
            EndInteraction: sdk.Bool(false),
            Events: []string{
                "nisi",
                "voluptatibus",
                "quaerat",
            },
            InputContextNames: []string{
                "distinctio",
                "nisi",
                "quis",
            },
            IsFallback: sdk.Bool(false),
            LiveAgentHandoff: sdk.Bool(false),
            Messages: []shared.GoogleCloudDialogflowV2beta1IntentMessage{
                shared.GoogleCloudDialogflowV2beta1IntentMessage{
                    BasicCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCard{
                        Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://sturdy-puddle.biz"),
                                },
                                Title: sdk.String("Mrs."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://winged-circle.org"),
                                },
                                Title: sdk.String("Mrs."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://definite-hummus.info"),
                                },
                                Title: sdk.String("Mrs."),
                            },
                        },
                        FormattedText: sdk.String("iusto"),
                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                            AccessibilityText: sdk.String("est"),
                            ImageURI: sdk.String("rem"),
                        },
                        Subtitle: sdk.String("eligendi"),
                        Title: sdk.String("Dr."),
                    },
                    BrowseCarouselCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard{
                        ImageDisplayOptions: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumCropped.ToPointer(),
                        Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("ducimus"),
                                Footer: sdk.String("dolor"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("dicta"),
                                    ImageURI: sdk.String("error"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("porro"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumURLTypeHintUnspecified.ToPointer(),
                                },
                                Title: sdk.String("Ms."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("esse"),
                                Footer: sdk.String("fugiat"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("ad"),
                                    ImageURI: sdk.String("aspernatur"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("enim"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                },
                                Title: sdk.String("Ms."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("dignissimos"),
                                Footer: sdk.String("libero"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("illo"),
                                    ImageURI: sdk.String("ab"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("incidunt"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                },
                                Title: sdk.String("Dr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("tempore"),
                                Footer: sdk.String("veniam"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("eos"),
                                    ImageURI: sdk.String("reiciendis"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("earum"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpAction.ToPointer(),
                                },
                                Title: sdk.String("Ms."),
                            },
                        },
                    },
                    Card: &shared.GoogleCloudDialogflowV2beta1IntentMessageCard{
                        Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                Postback: sdk.String("repellat"),
                                Text: sdk.String("quisquam"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                Postback: sdk.String("sequi"),
                                Text: sdk.String("nihil"),
                            },
                        },
                        ImageURI: sdk.String("deleniti"),
                        Subtitle: sdk.String("illo"),
                        Title: sdk.String("Mrs."),
                    },
                    CarouselSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect{
                        Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                Description: sdk.String("aliquam"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("quisquam"),
                                    ImageURI: sdk.String("provident"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("laudantium"),
                                    Synonyms: []string{
                                        "consequatur",
                                        "maxime",
                                        "aspernatur",
                                        "nam",
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                Description: sdk.String("quas"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("provident"),
                                    ImageURI: sdk.String("repudiandae"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("rerum"),
                                    Synonyms: []string{
                                        "corporis",
                                        "vero",
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                Description: sdk.String("repellendus"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("iure"),
                                    ImageURI: sdk.String("dolorem"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("commodi"),
                                    Synonyms: []string{
                                        "commodi",
                                        "aut",
                                        "voluptatem",
                                        "ad",
                                    },
                                },
                                Title: sdk.String("Mr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                Description: sdk.String("amet"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("illum"),
                                    ImageURI: sdk.String("praesentium"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("quidem"),
                                    Synonyms: []string{
                                        "amet",
                                        "quasi",
                                        "dicta",
                                    },
                                },
                                Title: sdk.String("Ms."),
                            },
                        },
                    },
                    Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                        AccessibilityText: sdk.String("doloremque"),
                        ImageURI: sdk.String("earum"),
                    },
                    LinkOutSuggestion: &shared.GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion{
                        DestinationName: sdk.String("iusto"),
                        URI: sdk.String("http://old-polyester.org"),
                    },
                    ListSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageListSelect{
                        Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                Description: sdk.String("repudiandae"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("consequatur"),
                                    ImageURI: sdk.String("nemo"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("molestiae"),
                                    Synonyms: []string{
                                        "facilis",
                                        "corrupti",
                                        "aperiam",
                                        "sint",
                                    },
                                },
                                Title: sdk.String("Dr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                Description: sdk.String("eos"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("totam"),
                                    ImageURI: sdk.String("dicta"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("voluptatem"),
                                    Synonyms: []string{
                                        "dolor",
                                    },
                                },
                                Title: sdk.String("Mr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                Description: sdk.String("a"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("dolor"),
                                    ImageURI: sdk.String("occaecati"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("atque"),
                                    Synonyms: []string{
                                        "at",
                                    },
                                },
                                Title: sdk.String("Mrs."),
                            },
                        },
                        Subtitle: sdk.String("minus"),
                        Title: sdk.String("Ms."),
                    },
                    MediaContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContent{
                        MediaObjects: []shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                ContentURL: sdk.String("perferendis"),
                                Description: sdk.String("rerum"),
                                Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("ea"),
                                    ImageURI: sdk.String("aperiam"),
                                },
                                LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("dignissimos"),
                                    ImageURI: sdk.String("repellat"),
                                },
                                Name: sdk.String("Francis McKenzie"),
                            },
                        },
                        MediaType: shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumResponseMediaTypeUnspecified.ToPointer(),
                    },
                    Payload: map[string]interface{}{
                        "soluta": "natus",
                    },
                    Platform: shared.GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumTelephony.ToPointer(),
                    QuickReplies: &shared.GoogleCloudDialogflowV2beta1IntentMessageQuickReplies{
                        QuickReplies: []string{
                            "amet",
                            "tenetur",
                            "aspernatur",
                        },
                        Title: sdk.String("Miss"),
                    },
                    RbmCarouselRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard{
                        CardContents: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("illum"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("laborum"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumShort.ToPointer(),
                                    ThumbnailURI: sdk.String("vero"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("consectetur"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://colorless-caption.info"),
                                            },
                                            PostbackData: sdk.String("nihil"),
                                            ShareLocation: map[string]interface{}{
                                                "ab": "illo",
                                                "hic": "deserunt",
                                            },
                                            Text: sdk.String("delectus"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("non"),
                                            Text: sdk.String("distinctio"),
                                        },
                                    },
                                },
                                Title: sdk.String("Ms."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("exercitationem"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("labore"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumShort.ToPointer(),
                                    ThumbnailURI: sdk.String("repudiandae"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("in"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://unacceptable-love.com"),
                                            },
                                            PostbackData: sdk.String("odit"),
                                            ShareLocation: map[string]interface{}{
                                                "enim": "voluptate",
                                                "similique": "minima",
                                                "libero": "magnam",
                                            },
                                            Text: sdk.String("sit"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("modi"),
                                            Text: sdk.String("eum"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("nesciunt"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://liquid-steward.info"),
                                            },
                                            PostbackData: sdk.String("molestiae"),
                                            ShareLocation: map[string]interface{}{
                                                "reiciendis": "ab",
                                                "modi": "aut",
                                            },
                                            Text: sdk.String("aut"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("eveniet"),
                                            Text: sdk.String("odio"),
                                        },
                                    },
                                },
                                Title: sdk.String("Ms."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("numquam"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("dolorum"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumTall.ToPointer(),
                                    ThumbnailURI: sdk.String("voluptate"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("nesciunt"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://vicious-settler.com"),
                                            },
                                            PostbackData: sdk.String("distinctio"),
                                            ShareLocation: map[string]interface{}{
                                                "quas": "et",
                                                "facilis": "amet",
                                            },
                                            Text: sdk.String("autem"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("fuga"),
                                            Text: sdk.String("alias"),
                                        },
                                    },
                                },
                                Title: sdk.String("Ms."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("aut"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("quos"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumMedium.ToPointer(),
                                    ThumbnailURI: sdk.String("repellendus"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("quae"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://untimely-waiter.name"),
                                            },
                                            PostbackData: sdk.String("nulla"),
                                            ShareLocation: map[string]interface{}{
                                                "sed": "voluptatem",
                                                "alias": "eveniet",
                                                "hic": "voluptatem",
                                            },
                                            Text: sdk.String("incidunt"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("qui"),
                                            Text: sdk.String("qui"),
                                        },
                                    },
                                },
                                Title: sdk.String("Dr."),
                            },
                        },
                        CardWidth: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumMedium.ToPointer(),
                    },
                    RbmStandaloneRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard{
                        CardContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                            Description: sdk.String("explicabo"),
                            Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                FileURI: sdk.String("beatae"),
                                Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumShort.ToPointer(),
                                ThumbnailURI: sdk.String("modi"),
                            },
                            Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                            PhoneNumber: sdk.String("voluptatibus"),
                                        },
                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                            URI: sdk.String("https://posh-redhead.name"),
                                        },
                                        PostbackData: sdk.String("sequi"),
                                        ShareLocation: map[string]interface{}{
                                            "ea": "impedit",
                                            "ducimus": "odit",
                                        },
                                        Text: sdk.String("velit"),
                                    },
                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                        PostbackData: sdk.String("reiciendis"),
                                        Text: sdk.String("repellat"),
                                    },
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                            PhoneNumber: sdk.String("nulla"),
                                        },
                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                            URI: sdk.String("https://perky-tadpole.com"),
                                        },
                                        PostbackData: sdk.String("nisi"),
                                        ShareLocation: map[string]interface{}{
                                            "recusandae": "voluptates",
                                            "non": "rem",
                                            "quia": "ullam",
                                        },
                                        Text: sdk.String("quisquam"),
                                    },
                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                        PostbackData: sdk.String("dicta"),
                                        Text: sdk.String("voluptatibus"),
                                    },
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                            PhoneNumber: sdk.String("eligendi"),
                                        },
                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                            URI: sdk.String("http://uneven-bower.com"),
                                        },
                                        PostbackData: sdk.String("enim"),
                                        ShareLocation: map[string]interface{}{
                                            "rem": "perferendis",
                                            "facilis": "reiciendis",
                                            "a": "iste",
                                            "dicta": "quos",
                                        },
                                        Text: sdk.String("ullam"),
                                    },
                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                        PostbackData: sdk.String("dolore"),
                                        Text: sdk.String("modi"),
                                    },
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                            PhoneNumber: sdk.String("itaque"),
                                        },
                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                            URI: sdk.String("https://fancy-citizenship.net"),
                                        },
                                        PostbackData: sdk.String("vero"),
                                        ShareLocation: map[string]interface{}{
                                            "impedit": "porro",
                                            "accusamus": "totam",
                                            "reiciendis": "ab",
                                            "sint": "nihil",
                                        },
                                        Text: sdk.String("esse"),
                                    },
                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                        PostbackData: sdk.String("iure"),
                                        Text: sdk.String("odio"),
                                    },
                                },
                            },
                            Title: sdk.String("Mrs."),
                        },
                        CardOrientation: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumVertical.ToPointer(),
                        ThumbnailImageAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumLeft.ToPointer(),
                    },
                    RbmText: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmText{
                        RbmSuggestion: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                        PhoneNumber: sdk.String("corporis"),
                                    },
                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                        URI: sdk.String("http://damaged-patroller.info"),
                                    },
                                    PostbackData: sdk.String("distinctio"),
                                    ShareLocation: map[string]interface{}{
                                        "ipsa": "rem",
                                        "maiores": "accusantium",
                                    },
                                    Text: sdk.String("veniam"),
                                },
                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                    PostbackData: sdk.String("saepe"),
                                    Text: sdk.String("neque"),
                                },
                            },
                        },
                        Text: sdk.String("facere"),
                    },
                    SimpleResponses: &shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses{
                        SimpleResponses: []shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                DisplayText: sdk.String("quos"),
                                Ssml: sdk.String("doloribus"),
                                TextToSpeech: sdk.String("fugiat"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                DisplayText: sdk.String("est"),
                                Ssml: sdk.String("delectus"),
                                TextToSpeech: sdk.String("velit"),
                            },
                        },
                    },
                    Suggestions: &shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestions{
                        Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                Title: sdk.String("Mrs."),
                            },
                        },
                    },
                    TableCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageTableCard{
                        Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("http://zealous-fortnight.org"),
                                },
                                Title: sdk.String("Dr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://fearful-cape.info"),
                                },
                                Title: sdk.String("Ms."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://absolute-product.biz"),
                                },
                                Title: sdk.String("Ms."),
                            },
                        },
                        ColumnProperties: []shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("consequuntur"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("debitis"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("sint"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("numquam"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing.ToPointer(),
                            },
                        },
                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                            AccessibilityText: sdk.String("adipisci"),
                            ImageURI: sdk.String("libero"),
                        },
                        Rows: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("ex"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("minus"),
                                    },
                                },
                                DividerAfter: sdk.Bool(false),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("beatae"),
                                    },
                                },
                                DividerAfter: sdk.Bool(false),
                            },
                        },
                        Subtitle: sdk.String("hic"),
                        Title: sdk.String("Mrs."),
                    },
                    TelephonyPlayAudio: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio{
                        AudioURI: sdk.String("quisquam"),
                    },
                    TelephonySynthesizeSpeech: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech{
                        Ssml: sdk.String("dolor"),
                        Text: sdk.String("ducimus"),
                    },
                    TelephonyTransferCall: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall{
                        PhoneNumber: sdk.String("fuga"),
                    },
                    Text: &shared.GoogleCloudDialogflowV2beta1IntentMessageText{
                        Text: []string{
                            "architecto",
                            "qui",
                        },
                    },
                },
                shared.GoogleCloudDialogflowV2beta1IntentMessage{
                    BasicCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCard{
                        Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("http://feisty-daughter.name"),
                                },
                                Title: sdk.String("Mrs."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("http://ruddy-pug.net"),
                                },
                                Title: sdk.String("Mr."),
                            },
                        },
                        FormattedText: sdk.String("nemo"),
                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                            AccessibilityText: sdk.String("culpa"),
                            ImageURI: sdk.String("consequuntur"),
                        },
                        Subtitle: sdk.String("amet"),
                        Title: sdk.String("Miss"),
                    },
                    BrowseCarouselCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard{
                        ImageDisplayOptions: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnumGray.ToPointer(),
                        Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("quod"),
                                Footer: sdk.String("itaque"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("a"),
                                    ImageURI: sdk.String("quisquam"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("enim"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                },
                                Title: sdk.String("Dr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem{
                                Description: sdk.String("officiis"),
                                Footer: sdk.String("architecto"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("alias"),
                                    ImageURI: sdk.String("culpa"),
                                },
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction{
                                    URL: sdk.String("ipsa"),
                                    URLTypeHint: shared.GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnumAmpContent.ToPointer(),
                                },
                                Title: sdk.String("Dr."),
                            },
                        },
                    },
                    Card: &shared.GoogleCloudDialogflowV2beta1IntentMessageCard{
                        Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCardButton{
                                Postback: sdk.String("dicta"),
                                Text: sdk.String("vel"),
                            },
                        },
                        ImageURI: sdk.String("perspiciatis"),
                        Subtitle: sdk.String("debitis"),
                        Title: sdk.String("Mrs."),
                    },
                    CarouselSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect{
                        Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem{
                                Description: sdk.String("accusantium"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("perferendis"),
                                    ImageURI: sdk.String("veritatis"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("provident"),
                                    Synonyms: []string{
                                        "iure",
                                        "quibusdam",
                                        "quod",
                                        "nemo",
                                    },
                                },
                                Title: sdk.String("Dr."),
                            },
                        },
                    },
                    Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                        AccessibilityText: sdk.String("velit"),
                        ImageURI: sdk.String("magnam"),
                    },
                    LinkOutSuggestion: &shared.GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion{
                        DestinationName: sdk.String("dignissimos"),
                        URI: sdk.String("http://creepy-kebab.name"),
                    },
                    ListSelect: &shared.GoogleCloudDialogflowV2beta1IntentMessageListSelect{
                        Items: []shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                Description: sdk.String("cum"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("doloribus"),
                                    ImageURI: sdk.String("facilis"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("quidem"),
                                    Synonyms: []string{
                                        "laboriosam",
                                        "unde",
                                        "modi",
                                        "perspiciatis",
                                    },
                                },
                                Title: sdk.String("Dr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                Description: sdk.String("cum"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("aspernatur"),
                                    ImageURI: sdk.String("libero"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("nam"),
                                    Synonyms: []string{
                                        "recusandae",
                                        "quod",
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem{
                                Description: sdk.String("saepe"),
                                Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("autem"),
                                    ImageURI: sdk.String("quo"),
                                },
                                Info: &shared.GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo{
                                    Key: sdk.String("nesciunt"),
                                    Synonyms: []string{
                                        "nemo",
                                        "illum",
                                        "facilis",
                                        "non",
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                        },
                        Subtitle: sdk.String("assumenda"),
                        Title: sdk.String("Dr."),
                    },
                    MediaContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContent{
                        MediaObjects: []shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                ContentURL: sdk.String("pariatur"),
                                Description: sdk.String("ad"),
                                Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("facere"),
                                    ImageURI: sdk.String("laborum"),
                                },
                                LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("eveniet"),
                                    ImageURI: sdk.String("laborum"),
                                },
                                Name: sdk.String("Mrs. Jody Hills"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                ContentURL: sdk.String("molestias"),
                                Description: sdk.String("laborum"),
                                Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("est"),
                                    ImageURI: sdk.String("occaecati"),
                                },
                                LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("labore"),
                                    ImageURI: sdk.String("quo"),
                                },
                                Name: sdk.String("Theresa Jacobi"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject{
                                ContentURL: sdk.String("eligendi"),
                                Description: sdk.String("hic"),
                                Icon: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("nostrum"),
                                    ImageURI: sdk.String("officiis"),
                                },
                                LargeImage: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                                    AccessibilityText: sdk.String("unde"),
                                    ImageURI: sdk.String("nulla"),
                                },
                                Name: sdk.String("Shaun Gusikowski"),
                            },
                        },
                        MediaType: shared.GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnumAudio.ToPointer(),
                    },
                    Payload: map[string]interface{}{
                        "facere": "impedit",
                        "quasi": "deserunt",
                        "quod": "laboriosam",
                    },
                    Platform: shared.GoogleCloudDialogflowV2beta1IntentMessagePlatformEnumPlatformUnspecified.ToPointer(),
                    QuickReplies: &shared.GoogleCloudDialogflowV2beta1IntentMessageQuickReplies{
                        QuickReplies: []string{
                            "facere",
                        },
                        Title: sdk.String("Dr."),
                    },
                    RbmCarouselRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard{
                        CardContents: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("consequatur"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("eaque"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumHeightUnspecified.ToPointer(),
                                    ThumbnailURI: sdk.String("similique"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("blanditiis"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://dead-tamale.com"),
                                            },
                                            PostbackData: sdk.String("necessitatibus"),
                                            ShareLocation: map[string]interface{}{
                                                "ipsa": "excepturi",
                                                "a": "maiores",
                                                "laudantium": "maiores",
                                                "alias": "asperiores",
                                            },
                                            Text: sdk.String("rem"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("dicta"),
                                            Text: sdk.String("suscipit"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("earum"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://even-diet.info"),
                                            },
                                            PostbackData: sdk.String("in"),
                                            ShareLocation: map[string]interface{}{
                                                "quasi": "neque",
                                                "vero": "excepturi",
                                                "accusantium": "qui",
                                                "impedit": "beatae",
                                            },
                                            Text: sdk.String("incidunt"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("dicta"),
                                            Text: sdk.String("odit"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("corporis"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://acceptable-pack.info"),
                                            },
                                            PostbackData: sdk.String("accusantium"),
                                            ShareLocation: map[string]interface{}{
                                                "laboriosam": "ex",
                                                "quas": "veritatis",
                                                "ullam": "quae",
                                            },
                                            Text: sdk.String("similique"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("incidunt"),
                                            Text: sdk.String("quam"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("magni"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://white-okra.com"),
                                            },
                                            PostbackData: sdk.String("nesciunt"),
                                            ShareLocation: map[string]interface{}{
                                                "quis": "cupiditate",
                                                "aliquam": "excepturi",
                                                "maiores": "laudantium",
                                                "velit": "reiciendis",
                                            },
                                            Text: sdk.String("amet"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("nemo"),
                                            Text: sdk.String("ipsa"),
                                        },
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("tenetur"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("quas"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumShort.ToPointer(),
                                    ThumbnailURI: sdk.String("aliquid"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("a"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://other-anything.com"),
                                            },
                                            PostbackData: sdk.String("minus"),
                                            ShareLocation: map[string]interface{}{
                                                "eveniet": "porro",
                                                "tempore": "quidem",
                                            },
                                            Text: sdk.String("modi"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("voluptates"),
                                            Text: sdk.String("fugit"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("eius"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://sizzling-wrinkle.info"),
                                            },
                                            PostbackData: sdk.String("blanditiis"),
                                            ShareLocation: map[string]interface{}{
                                                "repellat": "a",
                                                "animi": "maiores",
                                                "itaque": "nulla",
                                            },
                                            Text: sdk.String("deserunt"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("corporis"),
                                            Text: sdk.String("velit"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("officiis"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://portly-thongs.info"),
                                            },
                                            PostbackData: sdk.String("repudiandae"),
                                            ShareLocation: map[string]interface{}{
                                                "officia": "impedit",
                                            },
                                            Text: sdk.String("quasi"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("blanditiis"),
                                            Text: sdk.String("eius"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("quisquam"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://short-term-outrage.net"),
                                            },
                                            PostbackData: sdk.String("quia"),
                                            ShareLocation: map[string]interface{}{
                                                "reprehenderit": "quod",
                                                "quos": "corrupti",
                                            },
                                            Text: sdk.String("amet"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("molestiae"),
                                            Text: sdk.String("amet"),
                                        },
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("modi"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("perferendis"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumTall.ToPointer(),
                                    ThumbnailURI: sdk.String("architecto"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("dolore"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://worried-cookbook.com"),
                                            },
                                            PostbackData: sdk.String("earum"),
                                            ShareLocation: map[string]interface{}{
                                                "ipsam": "eaque",
                                                "exercitationem": "veniam",
                                            },
                                            Text: sdk.String("nihil"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("ad"),
                                            Text: sdk.String("nisi"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("tenetur"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://terrific-freelance.info"),
                                            },
                                            PostbackData: sdk.String("pariatur"),
                                            ShareLocation: map[string]interface{}{
                                                "quidem": "repellendus",
                                            },
                                            Text: sdk.String("perferendis"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("id"),
                                            Text: sdk.String("sapiente"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("sed"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://youthful-traffic.com"),
                                            },
                                            PostbackData: sdk.String("adipisci"),
                                            ShareLocation: map[string]interface{}{
                                                "harum": "dolore",
                                                "voluptatibus": "iure",
                                                "explicabo": "minus",
                                                "soluta": "dolorum",
                                            },
                                            Text: sdk.String("velit"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("earum"),
                                            Text: sdk.String("praesentium"),
                                        },
                                    },
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                                Description: sdk.String("non"),
                                Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                    FileURI: sdk.String("quasi"),
                                    Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumMedium.ToPointer(),
                                    ThumbnailURI: sdk.String("accusamus"),
                                },
                                Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("cumque"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://rural-mean.com"),
                                            },
                                            PostbackData: sdk.String("deserunt"),
                                            ShareLocation: map[string]interface{}{
                                                "excepturi": "magni",
                                                "tempora": "possimus",
                                            },
                                            Text: sdk.String("dolor"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("rerum"),
                                            Text: sdk.String("sed"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("accusamus"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("https://whopping-shakedown.net"),
                                            },
                                            PostbackData: sdk.String("quos"),
                                            ShareLocation: map[string]interface{}{
                                                "voluptatum": "iste",
                                                "corporis": "accusantium",
                                                "illo": "aut",
                                                "doloribus": "nostrum",
                                            },
                                            Text: sdk.String("at"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("possimus"),
                                            Text: sdk.String("neque"),
                                        },
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                        Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                            Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                                PhoneNumber: sdk.String("pariatur"),
                                            },
                                            OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                                URI: sdk.String("http://well-worn-petal.com"),
                                            },
                                            PostbackData: sdk.String("quos"),
                                            ShareLocation: map[string]interface{}{
                                                "non": "voluptates",
                                            },
                                            Text: sdk.String("ad"),
                                        },
                                        Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                            PostbackData: sdk.String("aliquam"),
                                            Text: sdk.String("quisquam"),
                                        },
                                    },
                                },
                                Title: sdk.String("Ms."),
                            },
                        },
                        CardWidth: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnumCardWidthUnspecified.ToPointer(),
                    },
                    RbmStandaloneRichCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard{
                        CardContent: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent{
                            Description: sdk.String("maiores"),
                            Media: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia{
                                FileURI: sdk.String("inventore"),
                                Height: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnumShort.ToPointer(),
                                ThumbnailURI: sdk.String("laudantium"),
                            },
                            Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                            PhoneNumber: sdk.String("dolor"),
                                        },
                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                            URI: sdk.String("http://emotional-sand.name"),
                                        },
                                        PostbackData: sdk.String("voluptatum"),
                                        ShareLocation: map[string]interface{}{
                                            "adipisci": "recusandae",
                                            "tempora": "blanditiis",
                                        },
                                        Text: sdk.String("numquam"),
                                    },
                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                        PostbackData: sdk.String("sequi"),
                                        Text: sdk.String("voluptatum"),
                                    },
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                            PhoneNumber: sdk.String("sit"),
                                        },
                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                            URI: sdk.String("https://boring-vase.info"),
                                        },
                                        PostbackData: sdk.String("quidem"),
                                        ShareLocation: map[string]interface{}{
                                            "porro": "deserunt",
                                            "magni": "nihil",
                                            "voluptas": "animi",
                                        },
                                        Text: sdk.String("commodi"),
                                    },
                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                        PostbackData: sdk.String("alias"),
                                        Text: sdk.String("fuga"),
                                    },
                                },
                                shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                    Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                        Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                            PhoneNumber: sdk.String("aut"),
                                        },
                                        OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                            URI: sdk.String("http://sticky-embassy.name"),
                                        },
                                        PostbackData: sdk.String("ullam"),
                                        ShareLocation: map[string]interface{}{
                                            "placeat": "voluptas",
                                            "occaecati": "unde",
                                            "illo": "nihil",
                                            "inventore": "libero",
                                        },
                                        Text: sdk.String("ipsam"),
                                    },
                                    Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                        PostbackData: sdk.String("quasi"),
                                        Text: sdk.String("cumque"),
                                    },
                                },
                            },
                            Title: sdk.String("Mr."),
                        },
                        CardOrientation: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnumVertical.ToPointer(),
                        ThumbnailImageAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnumRight.ToPointer(),
                    },
                    RbmText: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmText{
                        RbmSuggestion: []shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                        PhoneNumber: sdk.String("beatae"),
                                    },
                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                        URI: sdk.String("https://whispered-dud.net"),
                                    },
                                    PostbackData: sdk.String("corrupti"),
                                    ShareLocation: map[string]interface{}{
                                        "atque": "officiis",
                                        "cum": "pariatur",
                                        "sapiente": "quo",
                                    },
                                    Text: sdk.String("incidunt"),
                                },
                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                    PostbackData: sdk.String("quod"),
                                    Text: sdk.String("minus"),
                                },
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                        PhoneNumber: sdk.String("porro"),
                                    },
                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                        URI: sdk.String("https://nimble-mouse.net"),
                                    },
                                    PostbackData: sdk.String("quo"),
                                    ShareLocation: map[string]interface{}{
                                        "hic": "maxime",
                                        "accusantium": "soluta",
                                    },
                                    Text: sdk.String("fugit"),
                                },
                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                    PostbackData: sdk.String("pariatur"),
                                    Text: sdk.String("eligendi"),
                                },
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion{
                                Action: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction{
                                    Dial: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial{
                                        PhoneNumber: sdk.String("recusandae"),
                                    },
                                    OpenURL: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenURI{
                                        URI: sdk.String("http://adolescent-linkage.info"),
                                    },
                                    PostbackData: sdk.String("dolor"),
                                    ShareLocation: map[string]interface{}{
                                        "tempora": "magni",
                                        "rerum": "doloremque",
                                        "voluptatem": "eum",
                                        "at": "eum",
                                    },
                                    Text: sdk.String("reprehenderit"),
                                },
                                Reply: &shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply{
                                    PostbackData: sdk.String("voluptatum"),
                                    Text: sdk.String("blanditiis"),
                                },
                            },
                        },
                        Text: sdk.String("nihil"),
                    },
                    SimpleResponses: &shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses{
                        SimpleResponses: []shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                DisplayText: sdk.String("rerum"),
                                Ssml: sdk.String("deserunt"),
                                TextToSpeech: sdk.String("atque"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                DisplayText: sdk.String("nostrum"),
                                Ssml: sdk.String("atque"),
                                TextToSpeech: sdk.String("architecto"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse{
                                DisplayText: sdk.String("est"),
                                Ssml: sdk.String("enim"),
                                TextToSpeech: sdk.String("rem"),
                            },
                        },
                    },
                    Suggestions: &shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestions{
                        Suggestions: []shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageSuggestion{
                                Title: sdk.String("Mr."),
                            },
                        },
                    },
                    TableCard: &shared.GoogleCloudDialogflowV2beta1IntentMessageTableCard{
                        Buttons: []shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://frugal-drummer.org"),
                                },
                                Title: sdk.String("Dr."),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("https://potable-outrigger.net"),
                                },
                                Title: sdk.String("Miss"),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton{
                                OpenURIAction: &shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction{
                                    URI: sdk.String("http://worst-chimpanzee.org"),
                                },
                                Title: sdk.String("Miss"),
                            },
                        },
                        ColumnProperties: []shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("quis"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("eum"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("illum"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified.ToPointer(),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties{
                                Header: sdk.String("sit"),
                                HorizontalAlignment: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading.ToPointer(),
                            },
                        },
                        Image: &shared.GoogleCloudDialogflowV2beta1IntentMessageImage{
                            AccessibilityText: sdk.String("minus"),
                            ImageURI: sdk.String("asperiores"),
                        },
                        Rows: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("praesentium"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("dicta"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("fugit"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("sit"),
                                    },
                                },
                                DividerAfter: sdk.Bool(false),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("necessitatibus"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("sed"),
                                    },
                                },
                                DividerAfter: sdk.Bool(false),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("sunt"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("nesciunt"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("delectus"),
                                    },
                                },
                                DividerAfter: sdk.Bool(false),
                            },
                            shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow{
                                Cells: []shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("aliquam"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("deserunt"),
                                    },
                                    shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell{
                                        Text: sdk.String("modi"),
                                    },
                                },
                                DividerAfter: sdk.Bool(false),
                            },
                        },
                        Subtitle: sdk.String("sunt"),
                        Title: sdk.String("Miss"),
                    },
                    TelephonyPlayAudio: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio{
                        AudioURI: sdk.String("eius"),
                    },
                    TelephonySynthesizeSpeech: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech{
                        Ssml: sdk.String("voluptatum"),
                        Text: sdk.String("ipsa"),
                    },
                    TelephonyTransferCall: &shared.GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall{
                        PhoneNumber: sdk.String("at"),
                    },
                    Text: &shared.GoogleCloudDialogflowV2beta1IntentMessageText{
                        Text: []string{
                            "repellat",
                        },
                    },
                },
            },
            MlDisabled: sdk.Bool(false),
            MlEnabled: sdk.Bool(false),
            Name: sdk.String("Stephanie Dickinson"),
            OutputContexts: []shared.GoogleCloudDialogflowV2beta1Context{
                shared.GoogleCloudDialogflowV2beta1Context{
                    LifespanCount: sdk.Int(49499),
                    Name: sdk.String("Alice Bayer"),
                    Parameters: map[string]interface{}{
                        "illo": "magnam",
                        "delectus": "numquam",
                    },
                },
                shared.GoogleCloudDialogflowV2beta1Context{
                    LifespanCount: sdk.Int(760279),
                    Name: sdk.String("Ms. Ruben Zulauf"),
                    Parameters: map[string]interface{}{
                        "excepturi": "aliquid",
                        "sed": "beatae",
                        "similique": "ea",
                        "animi": "dolore",
                    },
                },
                shared.GoogleCloudDialogflowV2beta1Context{
                    LifespanCount: sdk.Int(945419),
                    Name: sdk.String("Tamara O'Kon"),
                    Parameters: map[string]interface{}{
                        "earum": "velit",
                        "officiis": "eius",
                        "rerum": "itaque",
                        "dignissimos": "ipsam",
                    },
                },
                shared.GoogleCloudDialogflowV2beta1Context{
                    LifespanCount: sdk.Int(131687),
                    Name: sdk.String("Gilbert Hayes"),
                    Parameters: map[string]interface{}{
                        "quaerat": "architecto",
                        "praesentium": "eveniet",
                    },
                },
            },
            Parameters: []shared.GoogleCloudDialogflowV2beta1IntentParameter{
                shared.GoogleCloudDialogflowV2beta1IntentParameter{
                    DefaultValue: sdk.String("expedita"),
                    DisplayName: sdk.String("libero"),
                    EntityTypeDisplayName: sdk.String("iste"),
                    IsList: sdk.Bool(false),
                    Mandatory: sdk.Bool(false),
                    Name: sdk.String("Brooke Lueilwitz"),
                    Prompts: []string{
                        "enim",
                        "accusamus",
                    },
                    Value: sdk.String("aperiam"),
                },
            },
            ParentFollowupIntentName: sdk.String("voluptates"),
            Priority: sdk.Int(512310),
            ResetContexts: sdk.Bool(false),
            TrainingPhrases: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                    Name: sdk.String("Guadalupe Stanton"),
                    Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                            Alias: sdk.String("modi"),
                            EntityType: sdk.String("earum"),
                            Text: sdk.String("architecto"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                            Alias: sdk.String("aliquam"),
                            EntityType: sdk.String("labore"),
                            Text: sdk.String("maiores"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                            Alias: sdk.String("sequi"),
                            EntityType: sdk.String("saepe"),
                            Text: sdk.String("consequatur"),
                            UserDefined: sdk.Bool(false),
                        },
                    },
                    TimesAddedCount: sdk.Int(458723),
                    Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumTemplate.ToPointer(),
                },
                shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrase{
                    Name: sdk.String("Devin Runte"),
                    Parts: []shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                            Alias: sdk.String("ad"),
                            EntityType: sdk.String("reiciendis"),
                            Text: sdk.String("sequi"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                            Alias: sdk.String("porro"),
                            EntityType: sdk.String("laborum"),
                            Text: sdk.String("nobis"),
                            UserDefined: sdk.Bool(false),
                        },
                        shared.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart{
                            Alias: sdk.String("quibusdam"),
                            EntityType: sdk.String("omnis"),
                            Text: sdk.String("aut"),
                            UserDefined: sdk.Bool(false),
                        },
                    },
                    TimesAddedCount: sdk.Int(369941),
                    Type: shared.GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumExample.ToPointer(),
                },
            },
            WebhookState: shared.GoogleCloudDialogflowV2beta1IntentWebhookStateEnumWebhookStateEnabled.ToPointer(),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("accusantium"),
        IntentView: operations.DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnumIntentViewUnspecified.ToPointer(),
        Key: sdk.String("nisi"),
        LanguageCode: sdk.String("molestiae"),
        OauthToken: sdk.String("quia"),
        Parent: "laudantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DialogflowProjectsLocationsAgentIntentsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Intent != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("ipsa"),
        IntentView: operations.DialogflowProjectsLocationsAgentIntentsListIntentViewEnumIntentViewFull.ToPointer(),
        Key: sdk.String("dolore"),
        LanguageCode: sdk.String("esse"),
        OauthToken: sdk.String("accusantium"),
        PageSize: sdk.Int64(718119),
        PageToken: sdk.String("sapiente"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DialogflowProjectsLocationsAgentIntentsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentIntentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListIntentsResponse != nil {
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
        GoogleCloudDialogflowV2beta1RestoreAgentRequest: &shared.GoogleCloudDialogflowV2beta1RestoreAgentRequest{
            AgentContent: sdk.String("voluptatum"),
            AgentURI: sdk.String("iusto"),
        },
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("non"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("laborum"),
        Parent: "voluptas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("recusandae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("voluptatem"),
        PageSize: sdk.Int64(759490),
        PageToken: sdk.String("sequi"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.DialogflowProjectsLocationsAgentSearchSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1SearchAgentsResponse != nil {
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
        GoogleCloudDialogflowV2beta1Context: &shared.GoogleCloudDialogflowV2beta1Context{
            LifespanCount: sdk.Int(227741),
            Name: sdk.String("Arnold Hegmann"),
            Parameters: map[string]interface{}{
                "nisi": "dignissimos",
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("est"),
        Key: sdk.String("accusantium"),
        OauthToken: sdk.String("quod"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Context != nil {
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
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("similique"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("provident"),
        PageSize: sdk.Int64(404774),
        PageToken: sdk.String("repellendus"),
        Parent: "unde",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListContextsResponse != nil {
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
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("enim"),
        Parent: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("mollitia"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1DetectIntentRequest: &shared.GoogleCloudDialogflowV2beta1DetectIntentRequest{
            InputAudio: sdk.String("accusamus"),
            OutputAudioConfig: &shared.GoogleCloudDialogflowV2beta1OutputAudioConfig{
                AudioEncoding: shared.GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingUnspecified.ToPointer(),
                SampleRateHertz: sdk.Int(555938),
                SynthesizeSpeechConfig: &shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                    EffectsProfileID: []string{
                        "cum",
                        "dicta",
                        "impedit",
                    },
                    Pitch: sdk.Float64(2740.4),
                    SpeakingRate: sdk.Float64(9082.49),
                    Voice: &shared.GoogleCloudDialogflowV2beta1VoiceSelectionParams{
                        Name: sdk.String("Jeremy Rutherford"),
                        SsmlGender: shared.GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderMale.ToPointer(),
                    },
                    VolumeGainDb: sdk.Float64(7530.87),
                },
            },
            OutputAudioConfigMask: sdk.String("recusandae"),
            QueryInput: &shared.GoogleCloudDialogflowV2beta1QueryInput{
                AudioConfig: &shared.GoogleCloudDialogflowV2beta1InputAudioConfig{
                    AudioEncoding: shared.GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingMulaw.ToPointer(),
                    BargeInConfig: &shared.GoogleCloudDialogflowV2beta1BargeInConfig{
                        NoBargeInDuration: sdk.String("beatae"),
                        TotalDuration: sdk.String("veritatis"),
                    },
                    DisableNoSpeechRecognizedEvent: sdk.Bool(false),
                    EnableAutomaticPunctuation: sdk.Bool(false),
                    EnableWordInfo: sdk.Bool(false),
                    LanguageCode: sdk.String("maiores"),
                    Model: sdk.String("itaque"),
                    ModelVariant: shared.GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnumUseEnhanced.ToPointer(),
                    PhraseHints: []string{
                        "illo",
                        "quo",
                        "dignissimos",
                    },
                    SampleRateHertz: sdk.Int(791615),
                    SingleUtterance: sdk.Bool(false),
                    SpeechContexts: []shared.GoogleCloudDialogflowV2beta1SpeechContext{
                        shared.GoogleCloudDialogflowV2beta1SpeechContext{
                            Boost: sdk.Float32(8233.41),
                            Phrases: []string{
                                "suscipit",
                                "saepe",
                                "earum",
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1SpeechContext{
                            Boost: sdk.Float32(7998.66),
                            Phrases: []string{
                                "quaerat",
                                "ipsum",
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1SpeechContext{
                            Boost: sdk.Float32(4984.35),
                            Phrases: []string{
                                "rerum",
                                "deserunt",
                                "odit",
                            },
                        },
                    },
                },
                Dtmf: &shared.GoogleCloudDialogflowV2beta1TelephonyDtmfEvents{
                    DtmfEvents: []shared.GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum{
                        shared.GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfThree,
                        shared.GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnumDtmfOne,
                    },
                },
                Event: &shared.GoogleCloudDialogflowV2beta1EventInput{
                    LanguageCode: sdk.String("iusto"),
                    Name: sdk.String("Danielle Kuhlman"),
                    Parameters: map[string]interface{}{
                        "illo": "exercitationem",
                        "laborum": "illum",
                        "fugit": "maxime",
                    },
                },
                Text: &shared.GoogleCloudDialogflowV2beta1TextInput{
                    LanguageCode: sdk.String("dolorum"),
                    Text: sdk.String("repellat"),
                },
            },
            QueryParams: &shared.GoogleCloudDialogflowV2beta1QueryParameters{
                Contexts: []shared.GoogleCloudDialogflowV2beta1Context{
                    shared.GoogleCloudDialogflowV2beta1Context{
                        LifespanCount: sdk.Int(847308),
                        Name: sdk.String("Mrs. Leslie Klocko"),
                        Parameters: map[string]interface{}{
                            "ipsa": "maiores",
                            "exercitationem": "culpa",
                            "repudiandae": "aspernatur",
                            "sapiente": "neque",
                        },
                    },
                    shared.GoogleCloudDialogflowV2beta1Context{
                        LifespanCount: sdk.Int(640565),
                        Name: sdk.String("Mr. Maryann Kunze"),
                        Parameters: map[string]interface{}{
                            "corrupti": "molestiae",
                            "quis": "iure",
                        },
                    },
                },
                GeoLocation: &shared.GoogleTypeLatLng{
                    Latitude: sdk.Float64(685.96),
                    Longitude: sdk.Float64(3086.58),
                },
                KnowledgeBaseNames: []string{
                    "sapiente",
                },
                Payload: map[string]interface{}{
                    "est": "iure",
                    "quisquam": "provident",
                },
                ResetContexts: sdk.Bool(false),
                SentimentAnalysisRequestConfig: &shared.GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig{
                    AnalyzeQueryTextSentiment: sdk.Bool(false),
                },
                SessionEntityTypes: []shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                    shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "enim",
                                    "ipsam",
                                },
                                Value: sdk.String("minima"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "perferendis",
                                    "corrupti",
                                },
                                Value: sdk.String("doloremque"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "numquam",
                                    "doloremque",
                                    "cum",
                                    "nobis",
                                },
                                Value: sdk.String("similique"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement.ToPointer(),
                        Name: sdk.String("Tyler Runte"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "enim",
                                    "maiores",
                                    "consectetur",
                                },
                                Value: sdk.String("necessitatibus"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "cupiditate",
                                    "voluptatem",
                                    "provident",
                                    "adipisci",
                                },
                                Value: sdk.String("accusantium"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified.ToPointer(),
                        Name: sdk.String("Arturo Cole"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "fugit",
                                    "ipsam",
                                    "nostrum",
                                    "sequi",
                                },
                                Value: sdk.String("voluptatum"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "error",
                                },
                                Value: sdk.String("nobis"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "voluptate",
                                    "eius",
                                },
                                Value: sdk.String("expedita"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified.ToPointer(),
                        Name: sdk.String("Dr. Woodrow Corkery"),
                    },
                },
                SubAgents: []shared.GoogleCloudDialogflowV2beta1SubAgent{
                    shared.GoogleCloudDialogflowV2beta1SubAgent{
                        Environment: sdk.String("eos"),
                        Project: sdk.String("aliquam"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SubAgent{
                        Environment: sdk.String("blanditiis"),
                        Project: sdk.String("hic"),
                    },
                },
                TimeZone: sdk.String("maiores"),
                WebhookHeaders: map[string]string{
                    "autem": "nesciunt",
                    "cupiditate": "animi",
                    "provident": "beatae",
                    "ipsa": "mollitia",
                },
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        Session: "suscipit",
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1DetectIntentResponse != nil {
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
        GoogleCloudDialogflowV2beta1SessionEntityType: &shared.GoogleCloudDialogflowV2beta1SessionEntityType{
            Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                    Synonyms: []string{
                        "accusamus",
                        "ab",
                    },
                    Value: sdk.String("itaque"),
                },
                shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                    Synonyms: []string{
                        "eaque",
                        "alias",
                        "qui",
                        "consequuntur",
                    },
                    Value: sdk.String("vitae"),
                },
                shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                    Synonyms: []string{
                        "sequi",
                        "amet",
                        "exercitationem",
                    },
                    Value: sdk.String("illum"),
                },
            },
            EntityOverrideMode: shared.GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride.ToPointer(),
            Name: sdk.String("Donnie Romaguera"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("id"),
        LanguageCode: sdk.String("atque"),
        OauthToken: sdk.String("quibusdam"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1SessionEntityType != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("doloremque"),
        PageSize: sdk.Int64(273732),
        PageToken: sdk.String("perspiciatis"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("ex"),
    }, operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "laborum": "veritatis",
            "quod": "a",
            "qui": "accusantium",
            "commodi": "atque",
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("quam"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("vitae"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("voluptate"),
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
        GoogleCloudDialogflowV2beta1VersionInput: &shared.GoogleCloudDialogflowV2beta1VersionInput{
            Description: sdk.String("facere"),
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("ex"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("maiores"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DialogflowProjectsLocationsAgentVersionsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Version != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("sapiente"),
        PageSize: sdk.Int64(242013),
        PageToken: sdk.String("adipisci"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("at"),
    }, operations.DialogflowProjectsLocationsAgentVersionsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListVersionsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("molestias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("laborum"),
        Filter: sdk.String("perspiciatis"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("eum"),
        PageSize: sdk.Int64(95123),
        PageToken: sdk.String("quas"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DialogflowProjectsLocationsAnswerRecordsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsAnswerRecordsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest: &shared.GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest{
            ParticipantRole: shared.GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnumAutomatedAgent.ToPointer(),
            SuggestionFeatureType: shared.GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnumTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magni"),
        ConversationProfile: "natus",
        Fields: sdk.String("illum"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("facere"),
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
        GoogleCloudDialogflowV2beta1ConversationProfileInput: &shared.GoogleCloudDialogflowV2beta1ConversationProfileInput{
            AutomatedAgentConfig: &shared.GoogleCloudDialogflowV2beta1AutomatedAgentConfig{
                Agent: sdk.String("doloribus"),
            },
            DisplayName: sdk.String("recusandae"),
            HumanAgentAssistantConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig{
                EndUserSuggestionConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig{
                    FeatureConfigs: []shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("facere"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(491380),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(6143.46),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("provident"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "sint",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "eaque",
                                    },
                                },
                                MaxResults: sdk.Int(431258),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumArticleSuggestion.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("laborum"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(422276),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(8284.81),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("explicabo"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "doloremque",
                                        "voluptatem",
                                        "alias",
                                        "velit",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "quis",
                                        "velit",
                                    },
                                },
                                MaxResults: sdk.Int(188732),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumFaq.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("maxime"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(923935),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(7674.66),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("doloremque"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "iure",
                                        "maiores",
                                        "est",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "veritatis",
                                    },
                                },
                                MaxResults: sdk.Int(899652),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumSmartReply.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("dicta"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(369099),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(1631.81),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("cumque"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "non",
                                        "beatae",
                                        "sunt",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "beatae",
                                        "autem",
                                        "ducimus",
                                    },
                                },
                                MaxResults: sdk.Int(728474),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumFaq.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                    },
                    GroupSuggestionResponses: sdk.Bool(false),
                },
                HumanAgentSuggestionConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig{
                    FeatureConfigs: []shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("ipsum"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(769872),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(5507.99),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("illum"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "voluptatem",
                                        "non",
                                        "quaerat",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "laudantium",
                                    },
                                },
                                MaxResults: sdk.Int(831067),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumFaq.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("quibusdam"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(231255),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(3776.8),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("quaerat"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "tenetur",
                                        "assumenda",
                                        "dolore",
                                        "enim",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "perspiciatis",
                                        "alias",
                                    },
                                },
                                MaxResults: sdk.Int(404121),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumConversationSummarization.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("dicta"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(154840),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(4124.81),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("neque"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "numquam",
                                        "rem",
                                        "officiis",
                                        "omnis",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "corporis",
                                    },
                                },
                                MaxResults: sdk.Int(797527),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumTypeUnspecified.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                        shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                            ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                                Model: sdk.String("placeat"),
                            },
                            ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                                RecentSentencesCount: sdk.Int(570039),
                            },
                            EnableEventBasedSuggestion: sdk.Bool(false),
                            QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                                ConfidenceThreshold: sdk.Float32(9270.21),
                                ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                                    DropHandoffMessages: sdk.Bool(false),
                                    DropIvrMessages: sdk.Bool(false),
                                    DropVirtualAgentMessages: sdk.Bool(false),
                                },
                                DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                                    Agent: sdk.String("quos"),
                                },
                                DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                                    Documents: []string{
                                        "sapiente",
                                    },
                                },
                                KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                                    KnowledgeBases: []string{
                                        "consequatur",
                                    },
                                },
                                MaxResults: sdk.Int(742899),
                            },
                            SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                                Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumConversationSummarization.ToPointer(),
                            },
                            SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                                NoSmallTalk: sdk.Bool(false),
                                OnlyEndUser: sdk.Bool(false),
                            },
                        },
                    },
                    GroupSuggestionResponses: sdk.Bool(false),
                },
                MessageAnalysisConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig{
                    EnableEntityExtraction: sdk.Bool(false),
                    EnableSentimentAnalysis: sdk.Bool(false),
                },
                NotificationConfig: &shared.GoogleCloudDialogflowV2beta1NotificationConfig{
                    MessageFormat: shared.GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnumMessageFormatUnspecified.ToPointer(),
                    Topic: sdk.String("recusandae"),
                },
            },
            HumanAgentHandoffConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig{
                LivePersonConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig{
                    AccountNumber: sdk.String("labore"),
                },
                SalesforceLiveAgentConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig{
                    ButtonID: sdk.String("adipisci"),
                    DeploymentID: sdk.String("magni"),
                    EndpointDomain: sdk.String("aperiam"),
                    OrganizationID: sdk.String("dolores"),
                },
            },
            LanguageCode: sdk.String("illum"),
            LoggingConfig: &shared.GoogleCloudDialogflowV2beta1LoggingConfig{
                EnableStackdriverLogging: sdk.Bool(false),
            },
            Name: sdk.String("Anne Brekke"),
            NewMessageEventNotificationConfig: &shared.GoogleCloudDialogflowV2beta1NotificationConfig{
                MessageFormat: shared.GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnumProto.ToPointer(),
                Topic: sdk.String("vel"),
            },
            NotificationConfig: &shared.GoogleCloudDialogflowV2beta1NotificationConfig{
                MessageFormat: shared.GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnumMessageFormatUnspecified.ToPointer(),
                Topic: sdk.String("sit"),
            },
            SecuritySettings: sdk.String("vel"),
            SttConfig: &shared.GoogleCloudDialogflowV2beta1SpeechToTextConfig{
                Model: sdk.String("laboriosam"),
                SpeechModelVariant: shared.GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnumUseBestAvailable.ToPointer(),
            },
            TimeZone: sdk.String("quasi"),
            TtsConfig: &shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                EffectsProfileID: []string{
                    "dignissimos",
                    "doloremque",
                    "assumenda",
                },
                Pitch: sdk.Float64(5909.69),
                SpeakingRate: sdk.Float64(8184.22),
                Voice: &shared.GoogleCloudDialogflowV2beta1VoiceSelectionParams{
                    Name: sdk.String("Stephanie Wolf"),
                    SsmlGender: shared.GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderNeutral.ToPointer(),
                },
                VolumeGainDb: sdk.Float64(79.19),
            },
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("cumque"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("id"),
    }, operations.DialogflowProjectsLocationsConversationProfilesCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ConversationProfile != nil {
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
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(32719),
        PageToken: sdk.String("suscipit"),
        Parent: "laudantium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DialogflowProjectsLocationsConversationProfilesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationProfilesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListConversationProfilesResponse != nil {
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
        GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest: &shared.GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest{
            ParticipantRole: shared.GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnumRoleUnspecified.ToPointer(),
            SuggestionFeatureConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig{
                ConversationModelConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig{
                    Model: sdk.String("officia"),
                },
                ConversationProcessConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig{
                    RecentSentencesCount: sdk.Int(312690),
                },
                EnableEventBasedSuggestion: sdk.Bool(false),
                QueryConfig: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig{
                    ConfidenceThreshold: sdk.Float32(3613.71),
                    ContextFilterSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings{
                        DropHandoffMessages: sdk.Bool(false),
                        DropIvrMessages: sdk.Bool(false),
                        DropVirtualAgentMessages: sdk.Bool(false),
                    },
                    DialogflowQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource{
                        Agent: sdk.String("accusamus"),
                    },
                    DocumentQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource{
                        Documents: []string{
                            "sapiente",
                            "esse",
                        },
                    },
                    KnowledgeBaseQuerySource: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource{
                        KnowledgeBases: []string{
                            "quidem",
                        },
                    },
                    MaxResults: sdk.Int(788469),
                },
                SuggestionFeature: &shared.GoogleCloudDialogflowV2beta1SuggestionFeature{
                    Type: shared.GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnumFaq.ToPointer(),
                },
                SuggestionTriggerSettings: &shared.GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings{
                    NoSmallTalk: sdk.Bool(false),
                    OnlyEndUser: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officiis"),
        ConversationProfile: "sequi",
        Fields: sdk.String("magni"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("error"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "rerum": "dolorum",
            "quibusdam": "earum",
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("error"),
        Name: "Ken Jacobs",
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DialogflowProjectsLocationsConversationsCompleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsCompleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Conversation != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1ConversationInput: &shared.GoogleCloudDialogflowV2beta1ConversationInput{
            ConversationProfile: sdk.String("aliquid"),
            ConversationStage: shared.GoogleCloudDialogflowV2beta1ConversationConversationStageEnumVirtualAgentStage.ToPointer(),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        ConversationID: sdk.String("illo"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("fugiat"),
        Parent: "impedit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DialogflowProjectsLocationsConversationsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Conversation != nil {
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
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("cumque"),
        Filter: sdk.String("expedita"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("cumque"),
        PageSize: sdk.Int64(368599),
        PageToken: sdk.String("occaecati"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DialogflowProjectsLocationsConversationsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListConversationsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsMessagesBatchCreate

Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.

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
    res, err := s.Projects.DialogflowProjectsLocationsConversationsMessagesBatchCreate(ctx, operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput: &shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput{
            Requests: []shared.GoogleCloudDialogflowV2beta1CreateMessageRequestInput{
                shared.GoogleCloudDialogflowV2beta1CreateMessageRequestInput{
                    Message: &shared.GoogleCloudDialogflowV2beta1MessageInput{
                        Content: sdk.String("temporibus"),
                        LanguageCode: sdk.String("mollitia"),
                        MessageAnnotation: &shared.GoogleCloudDialogflowV2beta1MessageAnnotation{
                            ContainEntities: sdk.Bool(false),
                            Parts: []shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("quibusdam"),
                                    FormattedValue: sdk.String("ipsa"),
                                    Text: sdk.String("accusamus"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("placeat"),
                                    FormattedValue: sdk.String("quam"),
                                    Text: sdk.String("similique"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("delectus"),
                                    FormattedValue: sdk.String("saepe"),
                                    Text: sdk.String("facere"),
                                },
                            },
                        },
                        Name: sdk.String("Dr. Al MacGyver"),
                        SendTime: sdk.String("incidunt"),
                        SentimentAnalysis: &shared.GoogleCloudDialogflowV2beta1SentimentAnalysisResult{
                            QueryTextSentiment: &shared.GoogleCloudDialogflowV2beta1Sentiment{
                                Magnitude: sdk.Float32(2546.48),
                                Score: sdk.Float32(5469.5),
                            },
                        },
                    },
                    Parent: sdk.String("similique"),
                },
                shared.GoogleCloudDialogflowV2beta1CreateMessageRequestInput{
                    Message: &shared.GoogleCloudDialogflowV2beta1MessageInput{
                        Content: sdk.String("dolore"),
                        LanguageCode: sdk.String("esse"),
                        MessageAnnotation: &shared.GoogleCloudDialogflowV2beta1MessageAnnotation{
                            ContainEntities: sdk.Bool(false),
                            Parts: []shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("iste"),
                                    FormattedValue: sdk.String("amet"),
                                    Text: sdk.String("occaecati"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("aut"),
                                    FormattedValue: sdk.String("impedit"),
                                    Text: sdk.String("minima"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("quos"),
                                    FormattedValue: sdk.String("blanditiis"),
                                    Text: sdk.String("quas"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("voluptatem"),
                                    FormattedValue: sdk.String("provident"),
                                    Text: sdk.String("quas"),
                                },
                            },
                        },
                        Name: sdk.String("Eula Paucek"),
                        SendTime: sdk.String("error"),
                        SentimentAnalysis: &shared.GoogleCloudDialogflowV2beta1SentimentAnalysisResult{
                            QueryTextSentiment: &shared.GoogleCloudDialogflowV2beta1Sentiment{
                                Magnitude: sdk.Float32(9261.19),
                                Score: sdk.Float32(9559.62),
                            },
                        },
                    },
                    Parent: sdk.String("consectetur"),
                },
                shared.GoogleCloudDialogflowV2beta1CreateMessageRequestInput{
                    Message: &shared.GoogleCloudDialogflowV2beta1MessageInput{
                        Content: sdk.String("sapiente"),
                        LanguageCode: sdk.String("voluptatibus"),
                        MessageAnnotation: &shared.GoogleCloudDialogflowV2beta1MessageAnnotation{
                            ContainEntities: sdk.Bool(false),
                            Parts: []shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("repellendus"),
                                    FormattedValue: sdk.String("omnis"),
                                    Text: sdk.String("delectus"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("odio"),
                                    FormattedValue: sdk.String("voluptatibus"),
                                    Text: sdk.String("aut"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("quam"),
                                    FormattedValue: sdk.String("omnis"),
                                    Text: sdk.String("similique"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("asperiores"),
                                    FormattedValue: sdk.String("modi"),
                                    Text: sdk.String("facere"),
                                },
                            },
                        },
                        Name: sdk.String("Dolores Kirlin"),
                        SendTime: sdk.String("porro"),
                        SentimentAnalysis: &shared.GoogleCloudDialogflowV2beta1SentimentAnalysisResult{
                            QueryTextSentiment: &shared.GoogleCloudDialogflowV2beta1Sentiment{
                                Magnitude: sdk.Float32(8526.1),
                                Score: sdk.Float32(7439.38),
                            },
                        },
                    },
                    Parent: sdk.String("ipsa"),
                },
                shared.GoogleCloudDialogflowV2beta1CreateMessageRequestInput{
                    Message: &shared.GoogleCloudDialogflowV2beta1MessageInput{
                        Content: sdk.String("reiciendis"),
                        LanguageCode: sdk.String("labore"),
                        MessageAnnotation: &shared.GoogleCloudDialogflowV2beta1MessageAnnotation{
                            ContainEntities: sdk.Bool(false),
                            Parts: []shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("eos"),
                                    FormattedValue: sdk.String("quas"),
                                    Text: sdk.String("quasi"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("architecto"),
                                    FormattedValue: sdk.String("praesentium"),
                                    Text: sdk.String("iusto"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("fugiat"),
                                    FormattedValue: sdk.String("enim"),
                                    Text: sdk.String("iure"),
                                },
                                shared.GoogleCloudDialogflowV2beta1AnnotatedMessagePart{
                                    EntityType: sdk.String("laudantium"),
                                    FormattedValue: sdk.String("modi"),
                                    Text: sdk.String("magnam"),
                                },
                            },
                        },
                        Name: sdk.String("Drew Waelchi"),
                        SendTime: sdk.String("enim"),
                        SentimentAnalysis: &shared.GoogleCloudDialogflowV2beta1SentimentAnalysisResult{
                            QueryTextSentiment: &shared.GoogleCloudDialogflowV2beta1Sentiment{
                                Magnitude: sdk.Float32(6581.25),
                                Score: sdk.Float32(5995.81),
                            },
                        },
                    },
                    Parent: sdk.String("quae"),
                },
            },
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eveniet"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("blanditiis"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("voluptas"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("laudantium"),
        PageSize: sdk.Int64(490549),
        PageToken: sdk.String("omnis"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.DialogflowProjectsLocationsConversationsMessagesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsMessagesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListMessagesResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1AnalyzeContentRequest: &shared.GoogleCloudDialogflowV2beta1AnalyzeContentRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2beta1AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "vitae": "dolor",
                    "ad": "atque",
                    "ut": "asperiores",
                    "reprehenderit": "deserunt",
                },
            },
            AudioInput: &shared.GoogleCloudDialogflowV2beta1AudioInput{
                Audio: sdk.String("itaque"),
                Config: &shared.GoogleCloudDialogflowV2beta1InputAudioConfig{
                    AudioEncoding: shared.GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnumAudioEncodingUnspecified.ToPointer(),
                    BargeInConfig: &shared.GoogleCloudDialogflowV2beta1BargeInConfig{
                        NoBargeInDuration: sdk.String("eos"),
                        TotalDuration: sdk.String("impedit"),
                    },
                    DisableNoSpeechRecognizedEvent: sdk.Bool(false),
                    EnableAutomaticPunctuation: sdk.Bool(false),
                    EnableWordInfo: sdk.Bool(false),
                    LanguageCode: sdk.String("ex"),
                    Model: sdk.String("praesentium"),
                    ModelVariant: shared.GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnumUseStandard.ToPointer(),
                    PhraseHints: []string{
                        "tenetur",
                    },
                    SampleRateHertz: sdk.Int(515153),
                    SingleUtterance: sdk.Bool(false),
                    SpeechContexts: []shared.GoogleCloudDialogflowV2beta1SpeechContext{
                        shared.GoogleCloudDialogflowV2beta1SpeechContext{
                            Boost: sdk.Float32(7552.4),
                            Phrases: []string{
                                "dicta",
                                "inventore",
                                "ullam",
                                "iusto",
                            },
                        },
                    },
                },
            },
            CxCurrentPage: sdk.String("inventore"),
            CxParameters: map[string]interface{}{
                "sed": "dolorem",
                "eaque": "exercitationem",
            },
            EventInput: &shared.GoogleCloudDialogflowV2beta1EventInput{
                LanguageCode: sdk.String("amet"),
                Name: sdk.String("Allison Streich"),
                Parameters: map[string]interface{}{
                    "totam": "cupiditate",
                    "at": "doloribus",
                    "omnis": "quam",
                },
            },
            MessageSendTime: sdk.String("exercitationem"),
            QueryParams: &shared.GoogleCloudDialogflowV2beta1QueryParameters{
                Contexts: []shared.GoogleCloudDialogflowV2beta1Context{
                    shared.GoogleCloudDialogflowV2beta1Context{
                        LifespanCount: sdk.Int(194194),
                        Name: sdk.String("Gertrude Kautzer"),
                        Parameters: map[string]interface{}{
                            "perspiciatis": "fugit",
                        },
                    },
                    shared.GoogleCloudDialogflowV2beta1Context{
                        LifespanCount: sdk.Int(932057),
                        Name: sdk.String("Spencer Fahey"),
                        Parameters: map[string]interface{}{
                            "minima": "a",
                            "beatae": "vitae",
                            "veritatis": "facere",
                            "earum": "laborum",
                        },
                    },
                    shared.GoogleCloudDialogflowV2beta1Context{
                        LifespanCount: sdk.Int(118020),
                        Name: sdk.String("Kathy Jacobi"),
                        Parameters: map[string]interface{}{
                            "architecto": "est",
                            "quaerat": "facere",
                        },
                    },
                    shared.GoogleCloudDialogflowV2beta1Context{
                        LifespanCount: sdk.Int(112391),
                        Name: sdk.String("John Will"),
                        Parameters: map[string]interface{}{
                            "vitae": "odio",
                        },
                    },
                },
                GeoLocation: &shared.GoogleTypeLatLng{
                    Latitude: sdk.Float64(5584.1),
                    Longitude: sdk.Float64(554.07),
                },
                KnowledgeBaseNames: []string{
                    "placeat",
                    "quod",
                    "eligendi",
                },
                Payload: map[string]interface{}{
                    "possimus": "distinctio",
                },
                ResetContexts: sdk.Bool(false),
                SentimentAnalysisRequestConfig: &shared.GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig{
                    AnalyzeQueryTextSentiment: sdk.Bool(false),
                },
                SessionEntityTypes: []shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                    shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "soluta",
                                    "magnam",
                                    "laudantium",
                                    "tempora",
                                },
                                Value: sdk.String("esse"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "corrupti",
                                },
                                Value: sdk.String("reiciendis"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "aliquam",
                                    "repudiandae",
                                    "amet",
                                },
                                Value: sdk.String("natus"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "officiis",
                                },
                                Value: sdk.String("eum"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeSupplement.ToPointer(),
                        Name: sdk.String("Andrew Hammes"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "ut",
                                    "earum",
                                    "ullam",
                                    "numquam",
                                },
                                Value: sdk.String("enim"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "occaecati",
                                    "itaque",
                                    "fuga",
                                },
                                Value: sdk.String("consectetur"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeUnspecified.ToPointer(),
                        Name: sdk.String("Dr. Rose Hoeger"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SessionEntityType{
                        Entities: []shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "accusantium",
                                },
                                Value: sdk.String("consequatur"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "recusandae",
                                    "voluptate",
                                    "deleniti",
                                    "est",
                                },
                                Value: sdk.String("et"),
                            },
                            shared.GoogleCloudDialogflowV2beta1EntityTypeEntity{
                                Synonyms: []string{
                                    "quibusdam",
                                    "quos",
                                    "maiores",
                                },
                                Value: sdk.String("quidem"),
                            },
                        },
                        EntityOverrideMode: shared.GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnumEntityOverrideModeOverride.ToPointer(),
                        Name: sdk.String("Mr. Anthony Parker"),
                    },
                },
                SubAgents: []shared.GoogleCloudDialogflowV2beta1SubAgent{
                    shared.GoogleCloudDialogflowV2beta1SubAgent{
                        Environment: sdk.String("officiis"),
                        Project: sdk.String("dignissimos"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SubAgent{
                        Environment: sdk.String("fugit"),
                        Project: sdk.String("ratione"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SubAgent{
                        Environment: sdk.String("possimus"),
                        Project: sdk.String("quaerat"),
                    },
                    shared.GoogleCloudDialogflowV2beta1SubAgent{
                        Environment: sdk.String("aut"),
                        Project: sdk.String("natus"),
                    },
                },
                TimeZone: sdk.String("esse"),
                WebhookHeaders: map[string]string{
                    "deserunt": "ratione",
                    "ipsa": "debitis",
                    "iste": "deserunt",
                    "hic": "ducimus",
                },
            },
            ReplyAudioConfig: &shared.GoogleCloudDialogflowV2beta1OutputAudioConfig{
                AudioEncoding: shared.GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingUnspecified.ToPointer(),
                SampleRateHertz: sdk.Int(370195),
                SynthesizeSpeechConfig: &shared.GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig{
                    EffectsProfileID: []string{
                        "quia",
                        "omnis",
                        "dicta",
                    },
                    Pitch: sdk.Float64(1851.16),
                    SpeakingRate: sdk.Float64(1309.34),
                    Voice: &shared.GoogleCloudDialogflowV2beta1VoiceSelectionParams{
                        Name: sdk.String("Wendy Altenwerth"),
                        SsmlGender: shared.GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified.ToPointer(),
                    },
                    VolumeGainDb: sdk.Float64(9427.8),
                },
            },
            RequestID: sdk.String("ullam"),
            TextInput: &shared.GoogleCloudDialogflowV2beta1TextInput{
                LanguageCode: sdk.String("deserunt"),
                Text: sdk.String("itaque"),
            },
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("provident"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("assumenda"),
        Participant: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1AnalyzeContentResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1Participant: &shared.GoogleCloudDialogflowV2beta1Participant{
            DocumentsMetadataFilters: map[string]string{
                "repellat": "atque",
            },
            Name: sdk.String("Erika Farrell III"),
            ObfuscatedExternalUserID: sdk.String("delectus"),
            Role: shared.GoogleCloudDialogflowV2beta1ParticipantRoleEnumEndUser.ToPointer(),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("in"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("minus"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Participant != nil {
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
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("hic"),
        PageSize: sdk.Int64(779748),
        PageToken: sdk.String("illo"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListParticipantsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles

Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.

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
        GoogleCloudDialogflowV2beta1SuggestArticlesRequest: &shared.GoogleCloudDialogflowV2beta1SuggestArticlesRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2beta1AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "reiciendis": "quos",
                },
            },
            ContextSize: sdk.Int(256310),
            LatestMessage: sdk.String("vitae"),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("eos"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("nam"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1SuggestArticlesResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest: &shared.GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2beta1AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "pariatur": "expedita",
                    "autem": "tempore",
                },
            },
            ContextSize: sdk.Int(924825),
            LatestMessage: sdk.String("nostrum"),
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("natus"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest: &shared.GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest{
            ContextSize: sdk.Int(875200),
            CurrentTextInput: &shared.GoogleCloudDialogflowV2beta1TextInput{
                LanguageCode: sdk.String("eos"),
                Text: sdk.String("voluptatem"),
            },
            LatestMessage: sdk.String("temporibus"),
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("a"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("sed"),
        Parent: "nam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("ab"),
    }, operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary

Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.

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
        GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest: &shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest{
            AssistQueryParams: &shared.GoogleCloudDialogflowV2beta1AssistQueryParameters{
                DocumentsMetadataFilters: map[string]string{
                    "blanditiis": "sint",
                },
            },
            ContextSize: sdk.Int(811519),
            LatestMessage: sdk.String("ullam"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Conversation: "nemo",
        Fields: sdk.String("non"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity{
        Option1: &operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse != nil {
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
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("commodi"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("modi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("odio"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("voluptatum"),
        Parent: "tempora",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.DialogflowProjectsLocationsGetAgentSecurity{
        Option1: &operations.DialogflowProjectsLocationsGetAgentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Agent != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesCreate

Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.

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
        GoogleCloudDialogflowV2beta1KnowledgeBase: &shared.GoogleCloudDialogflowV2beta1KnowledgeBase{
            DisplayName: sdk.String("ratione"),
            LanguageCode: sdk.String("molestiae"),
            Name: sdk.String("Mr. Bert Wunsch"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("fugiat"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("modi"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1KnowledgeBase != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1DocumentInput: &shared.GoogleCloudDialogflowV2beta1DocumentInput{
            Content: sdk.String("quae"),
            ContentURI: sdk.String("similique"),
            DisplayName: sdk.String("possimus"),
            EnableAutoReload: sdk.Bool(false),
            KnowledgeTypes: []shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum{
                shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumExtractiveQa,
                shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumExtractiveQa,
                shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumArticleSuggestion,
                shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumAgentFacingSmartReply,
            },
            LatestReloadStatus: &shared.GoogleCloudDialogflowV2beta1DocumentReloadStatus{
                Status: &shared.GoogleRPCStatus{
                    Code: sdk.Int(983556),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "deserunt": "fugit",
                        },
                        map[string]interface{}{
                            "quo": "molestiae",
                            "maxime": "facere",
                        },
                        map[string]interface{}{
                            "cupiditate": "deleniti",
                            "quasi": "maiores",
                            "voluptatem": "aliquid",
                            "laudantium": "unde",
                        },
                    },
                    Message: sdk.String("corrupti"),
                },
                Time: sdk.String("quae"),
            },
            Metadata: map[string]string{
                "ea": "libero",
                "nam": "amet",
                "adipisci": "minus",
                "hic": "similique",
            },
            MimeType: sdk.String("fuga"),
            Name: sdk.String("Clara Larson"),
            RawContent: sdk.String("veritatis"),
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("aperiam"),
        ImportGcsCustomMetadata: sdk.Bool(false),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("itaque"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("eligendi"),
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

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

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
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("aspernatur"),
        Force: sdk.Bool(false),
        Key: sdk.String("nobis"),
        Name: "Mrs. Margie Wisoky",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("excepturi"),
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

## DialogflowProjectsLocationsKnowledgeBasesDocumentsImport

Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1ImportDocumentsRequest: &shared.GoogleCloudDialogflowV2beta1ImportDocumentsRequest{
            DocumentTemplate: &shared.GoogleCloudDialogflowV2beta1ImportDocumentTemplate{
                KnowledgeTypes: []shared.GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum{
                    shared.GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumKnowledgeTypeUnspecified,
                    shared.GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumSmartReply,
                    shared.GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnumAgentFacingSmartReply,
                },
                Metadata: map[string]string{
                    "nisi": "nisi",
                    "dolor": "fugit",
                },
                MimeType: sdk.String("dolore"),
            },
            GcsSource: &shared.GoogleCloudDialogflowV2beta1GcsSources{
                Uris: []string{
                    "maxime",
                    "expedita",
                    "accusantium",
                    "ea",
                },
            },
            ImportGcsCustomMetadata: sdk.Bool(false),
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("est"),
        Key: sdk.String("inventore"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("enim"),
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

Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("alias"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("possimus"),
        PageSize: sdk.Int64(368976),
        PageToken: sdk.String("odio"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("illum"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListDocumentsResponse != nil {
        // handle response
    }
}
```

## DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2beta1DocumentInput: &shared.GoogleCloudDialogflowV2beta1DocumentInput{
            Content: sdk.String("sint"),
            ContentURI: sdk.String("exercitationem"),
            DisplayName: sdk.String("cum"),
            EnableAutoReload: sdk.Bool(false),
            KnowledgeTypes: []shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum{
                shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumAgentFacingSmartReply,
                shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumAgentFacingSmartReply,
                shared.GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnumSmartReply,
            },
            LatestReloadStatus: &shared.GoogleCloudDialogflowV2beta1DocumentReloadStatus{
                Status: &shared.GoogleRPCStatus{
                    Code: sdk.Int(170934),
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "facilis": "cupiditate",
                            "nemo": "natus",
                            "nisi": "provident",
                            "amet": "dolor",
                        },
                        map[string]interface{}{
                            "qui": "tenetur",
                            "molestiae": "dolore",
                        },
                    },
                    Message: sdk.String("ullam"),
                },
                Time: sdk.String("velit"),
            },
            Metadata: map[string]string{
                "cupiditate": "occaecati",
            },
            MimeType: sdk.String("numquam"),
            Name: sdk.String("Javier Lynch"),
            RawContent: sdk.String("amet"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("iste"),
        Key: sdk.String("nesciunt"),
        LanguageCode: sdk.String("corrupti"),
        Name: "Courtney Hermann",
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UpdateMask: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnumIntentViewFull.ToPointer(),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("commodi"),
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

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

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
        GoogleCloudDialogflowV2beta1ReloadDocumentRequest: &shared.GoogleCloudDialogflowV2beta1ReloadDocumentRequest{
            GcsSource: &shared.GoogleCloudDialogflowV2beta1GcsSource{
                URI: sdk.String("http://grizzled-arthur.net"),
            },
            ImportGcsCustomMetadata: sdk.Bool(false),
        },
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("totam"),
        Key: sdk.String("qui"),
        Name: "Colin Gorczany",
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("odit"),
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

Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("facilis"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(29270),
        PageToken: sdk.String("illo"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("quae"),
    }, operations.DialogflowProjectsLocationsKnowledgeBasesListSecurity{
        Option1: &operations.DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("asperiores"),
        Filter: sdk.String("eum"),
        Key: sdk.String("deserunt"),
        Name: "Miss Herman Mann",
        OauthToken: sdk.String("praesentium"),
        PageSize: sdk.Int64(708075),
        PageToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("ipsum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudDialogflowV2beta1Agent: &shared.GoogleCloudDialogflowV2beta1Agent{
            APIVersion: shared.GoogleCloudDialogflowV2beta1AgentAPIVersionEnumAPIVersionUnspecified.ToPointer(),
            AvatarURI: sdk.String("fugit"),
            ClassificationThreshold: sdk.Float32(7240.73),
            DefaultLanguageCode: sdk.String("ex"),
            Description: sdk.String("neque"),
            DisplayName: sdk.String("quod"),
            EnableLogging: sdk.Bool(false),
            MatchMode: shared.GoogleCloudDialogflowV2beta1AgentMatchModeEnumMatchModeUnspecified.ToPointer(),
            Parent: sdk.String("alias"),
            SupportedLanguageCodes: []string{
                "a",
                "facere",
            },
            Tier: shared.GoogleCloudDialogflowV2beta1AgentTierEnumTierEnterprise.ToPointer(),
            TimeZone: sdk.String("atque"),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("quam"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("fuga"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UpdateMask: sdk.String("officia"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DialogflowProjectsLocationsSetAgentSecurity{
        Option1: &operations.DialogflowProjectsLocationsSetAgentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowV2beta1Agent != nil {
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
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("voluptas"),
        Name: "Glen Wunsch",
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("consequatur"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("maiores"),
        IntentView: operations.DialogflowProjectsOperationsGetIntentViewEnumIntentViewUnspecified.ToPointer(),
        Key: sdk.String("numquam"),
        LanguageCode: sdk.String("non"),
        Name: "Randall Daniel",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("eos"),
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
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("quibusdam"),
        Filter: sdk.String("est"),
        Key: sdk.String("commodi"),
        Name: "Raul Carter",
        OauthToken: sdk.String("id"),
        PageSize: sdk.Int64(140917),
        PageToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("explicabo"),
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
