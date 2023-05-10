# projects

### Available Operations

* [dialogflowProjectsConversationsParticipantsSuggestionsCompile](#dialogflowprojectsconversationsparticipantssuggestionscompile) - Deprecated. use SuggestArticles and SuggestFaqAnswers instead. Gets suggestions for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
* [dialogflowProjectsConversationsParticipantsSuggestionsList](#dialogflowprojectsconversationsparticipantssuggestionslist) - Deprecated: Use inline suggestion, event based suggestion or Suggestion* API instead. See HumanAgentAssistantConfig.name for more details. Removal Date: 2020-09-01. Retrieves suggestions for live agents. This method should be used by human agent client software to fetch auto generated suggestions in real-time, while the conversation with an end user is in progress. The functionality is implemented in terms of the [list pagination](https://cloud.google.com/apis/design/design_patterns#list_pagination) design pattern. The client app should use the `next_page_token` field to fetch the next batch of suggestions. `suggestions` are sorted by `create_time` in descending order. To fetch latest suggestion, just set `page_size` to 1. To fetch new suggestions without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* [dialogflowProjectsLocationsAgentEntityTypesBatchDelete](#dialogflowprojectslocationsagententitytypesbatchdelete) - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesBatchUpdate](#dialogflowprojectslocationsagententitytypesbatchupdate) - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate](#dialogflowprojectslocationsagententitytypesentitiesbatchcreate) - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete](#dialogflowprojectslocationsagententitytypesentitiesbatchdelete) - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate](#dialogflowprojectslocationsagententitytypesentitiesbatchupdate) - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [dialogflowProjectsLocationsAgentEnvironmentsCreate](#dialogflowprojectslocationsagentenvironmentscreate) - Creates an agent environment.
* [dialogflowProjectsLocationsAgentEnvironmentsGetHistory](#dialogflowprojectslocationsagentenvironmentsgethistory) - Gets the history of the specified environment.
* [dialogflowProjectsLocationsAgentEnvironmentsList](#dialogflowprojectslocationsagentenvironmentslist) - Returns the list of all non-draft environments of the specified agent.
* [dialogflowProjectsLocationsAgentExport](#dialogflowprojectslocationsagentexport) - Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
* [dialogflowProjectsLocationsAgentGetValidationResult](#dialogflowprojectslocationsagentgetvalidationresult) - Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
* [dialogflowProjectsLocationsAgentImport](#dialogflowprojectslocationsagentimport) - Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentIntentsBatchDelete](#dialogflowprojectslocationsagentintentsbatchdelete) - Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentIntentsBatchUpdate](#dialogflowprojectslocationsagentintentsbatchupdate) - Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentIntentsCreate](#dialogflowprojectslocationsagentintentscreate) - Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentIntentsList](#dialogflowprojectslocationsagentintentslist) - Returns the list of all intents in the specified agent.
* [dialogflowProjectsLocationsAgentRestore](#dialogflowprojectslocationsagentrestore) - Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentSearch](#dialogflowprojectslocationsagentsearch) - Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
* [dialogflowProjectsLocationsAgentSessionsContextsCreate](#dialogflowprojectslocationsagentsessionscontextscreate) - Creates a context. If the specified context already exists, overrides the context.
* [dialogflowProjectsLocationsAgentSessionsContextsList](#dialogflowprojectslocationsagentsessionscontextslist) - Returns the list of all contexts in the specified session.
* [dialogflowProjectsLocationsAgentSessionsDeleteContexts](#dialogflowprojectslocationsagentsessionsdeletecontexts) - Deletes all active contexts in the specified session.
* [dialogflowProjectsLocationsAgentSessionsDetectIntent](#dialogflowprojectslocationsagentsessionsdetectintent) - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* [dialogflowProjectsLocationsAgentSessionsEntityTypesCreate](#dialogflowprojectslocationsagentsessionsentitytypescreate) - Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* [dialogflowProjectsLocationsAgentSessionsEntityTypesList](#dialogflowprojectslocationsagentsessionsentitytypeslist) - Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* [dialogflowProjectsLocationsAgentTrain](#dialogflowprojectslocationsagenttrain) - Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentVersionsCreate](#dialogflowprojectslocationsagentversionscreate) - Creates an agent version. The new version points to the agent instance in the "default" environment.
* [dialogflowProjectsLocationsAgentVersionsList](#dialogflowprojectslocationsagentversionslist) - Returns the list of all versions of the specified agent.
* [dialogflowProjectsLocationsAnswerRecordsList](#dialogflowprojectslocationsanswerrecordslist) - Returns the list of all answer records in the specified project in reverse chronological order.
* [dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilesclearsuggestionfeatureconfig) - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
* [dialogflowProjectsLocationsConversationProfilesCreate](#dialogflowprojectslocationsconversationprofilescreate) - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
* [dialogflowProjectsLocationsConversationProfilesList](#dialogflowprojectslocationsconversationprofileslist) - Returns the list of all conversation profiles in the specified project.
* [dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilessetsuggestionfeatureconfig) - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
* [dialogflowProjectsLocationsConversationsComplete](#dialogflowprojectslocationsconversationscomplete) - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
* [dialogflowProjectsLocationsConversationsCreate](#dialogflowprojectslocationsconversationscreate) - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
* [dialogflowProjectsLocationsConversationsList](#dialogflowprojectslocationsconversationslist) - Returns the list of all conversations in the specified project.
* [dialogflowProjectsLocationsConversationsMessagesBatchCreate](#dialogflowprojectslocationsconversationsmessagesbatchcreate) - Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.
* [dialogflowProjectsLocationsConversationsMessagesList](#dialogflowprojectslocationsconversationsmessageslist) - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* [dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent](#dialogflowprojectslocationsconversationsparticipantsanalyzecontent) - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* [dialogflowProjectsLocationsConversationsParticipantsCreate](#dialogflowprojectslocationsconversationsparticipantscreate) - Creates a new participant in a conversation.
* [dialogflowProjectsLocationsConversationsParticipantsList](#dialogflowprojectslocationsconversationsparticipantslist) - Returns the list of all participants in the specified conversation.
* [dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestarticles) - Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
* [dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestfaqanswers) - Gets suggested faq answers for a participant based on specific historical messages.
* [dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestsmartreplies) - Gets smart replies for a participant based on specific historical messages.
* [dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary](#dialogflowprojectslocationsconversationssuggestionssuggestconversationsummary) - Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
* [dialogflowProjectsLocationsDeleteAgent](#dialogflowprojectslocationsdeleteagent) - Deletes the specified agent.
* [dialogflowProjectsLocationsGetAgent](#dialogflowprojectslocationsgetagent) - Retrieves the specified agent.
* [dialogflowProjectsLocationsKnowledgeBasesCreate](#dialogflowprojectslocationsknowledgebasescreate) - Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate](#dialogflowprojectslocationsknowledgebasesdocumentscreate) - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete](#dialogflowprojectslocationsknowledgebasesdocumentsdelete) - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsImport](#dialogflowprojectslocationsknowledgebasesdocumentsimport) - Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsList](#dialogflowprojectslocationsknowledgebasesdocumentslist) - Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch](#dialogflowprojectslocationsknowledgebasesdocumentspatch) - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsReload](#dialogflowprojectslocationsknowledgebasesdocumentsreload) - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [dialogflowProjectsLocationsKnowledgeBasesList](#dialogflowprojectslocationsknowledgebaseslist) - Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
* [dialogflowProjectsLocationsList](#dialogflowprojectslocationslist) - Lists information about the supported locations for this service.
* [dialogflowProjectsLocationsSetAgent](#dialogflowprojectslocationssetagent) - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsOperationsCancel](#dialogflowprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [dialogflowProjectsOperationsGet](#dialogflowprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [dialogflowProjectsOperationsList](#dialogflowprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## dialogflowProjectsConversationsParticipantsSuggestionsCompile

Deprecated. use SuggestArticles and SuggestFaqAnswers instead. Gets suggestions for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1CompileSuggestionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1CompileSuggestionRequest = new GoogleCloudDialogflowV2beta1CompileSuggestionRequest();
    $request->googleCloudDialogflowV2beta1CompileSuggestionRequest->contextSize = 891773;
    $request->googleCloudDialogflowV2beta1CompileSuggestionRequest->latestMessage = 'ipsa';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->oauthToken = 'placeat';
    $request->parent = 'voluptatum';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity();
    $requestSecurity->option1 = new DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsConversationsParticipantsSuggestionsCompile($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1CompileSuggestionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsConversationsParticipantsSuggestionsList

Deprecated: Use inline suggestion, event based suggestion or Suggestion* API instead. See HumanAgentAssistantConfig.name for more details. Removal Date: 2020-09-01. Retrieves suggestions for live agents. This method should be used by human agent client software to fetch auto generated suggestions in real-time, while the conversation with an end user is in progress. The functionality is implemented in terms of the [list pagination](https://cloud.google.com/apis/design/design_patterns#list_pagination) design pattern. The client app should use the `next_page_token` field to fetch the next batch of suggestions. `suggestions` are sorted by `create_time` in descending order. To fetch latest suggestion, just set `page_size` to 1. To fetch new suggestions without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsConversationsParticipantsSuggestionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->filter = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->pageSize = 832620;
    $request->pageToken = 'sapiente';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $requestSecurity = new DialogflowProjectsConversationsParticipantsSuggestionsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsConversationsParticipantsSuggestionsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListSuggestionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEntityTypesBatchDelete

Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest = new GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest();
    $request->googleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest->entityTypeNames = [
        'quod',
        'quod',
    ];
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'porro';
    $request->fields = 'dolorum';
    $request->key = 'dicta';
    $request->oauthToken = 'nam';
    $request->parent = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEntityTypesBatchDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEntityTypesBatchUpdate

Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeBatch;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest = new GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest();
    $request->googleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest->entityTypeBatchInline = new GoogleCloudDialogflowV2beta1EntityTypeBatch();
    $request->googleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest->entityTypeBatchInline->entityTypes = [
        new GoogleCloudDialogflowV2beta1EntityType(),
        new GoogleCloudDialogflowV2beta1EntityType(),
        new GoogleCloudDialogflowV2beta1EntityType(),
        new GoogleCloudDialogflowV2beta1EntityType(),
    ];
    $request->googleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest->entityTypeBatchUri = 'totam';
    $request->googleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest->languageCode = 'beatae';
    $request->googleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest->updateMask = 'commodi';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'impedit';
    $request->key = 'cum';
    $request->oauthToken = 'esse';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEntityTypesBatchUpdate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate

Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1BatchCreateEntitiesRequest = new GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest();
    $request->googleCloudDialogflowV2beta1BatchCreateEntitiesRequest->entities = [
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
    ];
    $request->googleCloudDialogflowV2beta1BatchCreateEntitiesRequest->languageCode = 'sed';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->fields = 'laboriosam';
    $request->key = 'hic';
    $request->oauthToken = 'saepe';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete

Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1BatchDeleteEntitiesRequest = new GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest();
    $request->googleCloudDialogflowV2beta1BatchDeleteEntitiesRequest->entityValues = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->googleCloudDialogflowV2beta1BatchDeleteEntitiesRequest->languageCode = 'est';
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolores';
    $request->fields = 'dolorem';
    $request->key = 'corporis';
    $request->oauthToken = 'explicabo';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1BatchUpdateEntitiesRequest = new GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest();
    $request->googleCloudDialogflowV2beta1BatchUpdateEntitiesRequest->entities = [
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
    ];
    $request->googleCloudDialogflowV2beta1BatchUpdateEntitiesRequest->languageCode = 'accusantium';
    $request->googleCloudDialogflowV2beta1BatchUpdateEntitiesRequest->updateMask = 'iure';
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEnvironmentsCreate

Creates an agent environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Fulfillment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1FulfillmentFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1FulfillmentGenericWebService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1TextToSpeechSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1TextToSpeechSettingsOutputAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1EnvironmentInput = new GoogleCloudDialogflowV2beta1EnvironmentInput();
    $request->googleCloudDialogflowV2beta1EnvironmentInput->agentVersion = 'numquam';
    $request->googleCloudDialogflowV2beta1EnvironmentInput->description = 'commodi';
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment = new GoogleCloudDialogflowV2beta1Fulfillment();
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->displayName = 'quam';
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->enabled = false;
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->features = [
        new GoogleCloudDialogflowV2beta1FulfillmentFeature(),
        new GoogleCloudDialogflowV2beta1FulfillmentFeature(),
    ];
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->genericWebService = new GoogleCloudDialogflowV2beta1FulfillmentGenericWebService();
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->genericWebService->isCloudFunction = false;
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->genericWebService->password = 'velit';
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->genericWebService->requestHeaders = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->genericWebService->uri = 'http://sophisticated-conifer.org';
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->genericWebService->username = 'Freida.Ondricka9';
    $request->googleCloudDialogflowV2beta1EnvironmentInput->fulfillment->name = 'Dr. Jake Pacocha';
    $request->googleCloudDialogflowV2beta1EnvironmentInput->textToSpeechSettings = new GoogleCloudDialogflowV2beta1TextToSpeechSettings();
    $request->googleCloudDialogflowV2beta1EnvironmentInput->textToSpeechSettings->enableTextToSpeech = false;
    $request->googleCloudDialogflowV2beta1EnvironmentInput->textToSpeechSettings->outputAudioEncoding = GoogleCloudDialogflowV2beta1TextToSpeechSettingsOutputAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_MULAW;
    $request->googleCloudDialogflowV2beta1EnvironmentInput->textToSpeechSettings->sampleRateHertz = 468651;
    $request->googleCloudDialogflowV2beta1EnvironmentInput->textToSpeechSettings->synthesizeSpeechConfigs = [
        'voluptatibus' => new GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig(),
        'ipsa' => new GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig(),
        'omnis' => new GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig(),
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->environmentId = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEnvironmentsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Environment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEnvironmentsGetHistory

Gets the history of the specified environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->pageSize = 216822;
    $request->pageToken = 'quidem';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEnvironmentsGetHistory($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1EnvironmentHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEnvironmentsList

Returns the list of all non-draft environments of the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEnvironmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 929297;
    $request->pageToken = 'incidunt';
    $request->parent = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new DialogflowProjectsLocationsAgentEnvironmentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEnvironmentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListEnvironmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentExport

Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ExportAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentExportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1ExportAgentRequest = new GoogleCloudDialogflowV2beta1ExportAgentRequest();
    $request->googleCloudDialogflowV2beta1ExportAgentRequest->agentUri = 'deserunt';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'aliquid';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new DialogflowProjectsLocationsAgentExportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentExport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentGetValidationResult

Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentGetValidationResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentGetValidationResultSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentGetValidationResultRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->key = 'excepturi';
    $request->languageCode = 'tempora';
    $request->oauthToken = 'facilis';
    $request->parent = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DialogflowProjectsLocationsAgentGetValidationResultSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentGetValidationResult($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ValidationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentImport

Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ImportAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1ImportAgentRequest = new GoogleCloudDialogflowV2beta1ImportAgentRequest();
    $request->googleCloudDialogflowV2beta1ImportAgentRequest->agentContent = 'eligendi';
    $request->googleCloudDialogflowV2beta1ImportAgentRequest->agentUri = 'sint';
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->key = 'officia';
    $request->oauthToken = 'dolor';
    $request->parent = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DialogflowProjectsLocationsAgentImportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentIntentsBatchDelete

Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCardRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCardCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput = new GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput();
    $request->googleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput->intents = [
        new GoogleCloudDialogflowV2beta1IntentInput(),
        new GoogleCloudDialogflowV2beta1IntentInput(),
        new GoogleCloudDialogflowV2beta1IntentInput(),
        new GoogleCloudDialogflowV2beta1IntentInput(),
    ];
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'magnam';
    $request->key = 'cumque';
    $request->oauthToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentIntentsBatchDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentIntentsBatchUpdate

Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentBatchInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCardRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCardCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput = new GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput();
    $request->googleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput->intentBatchInline = new GoogleCloudDialogflowV2beta1IntentBatchInput();
    $request->googleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput->intentBatchInline->intents = [
        new GoogleCloudDialogflowV2beta1IntentInput(),
        new GoogleCloudDialogflowV2beta1IntentInput(),
        new GoogleCloudDialogflowV2beta1IntentInput(),
    ];
    $request->googleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput->intentBatchUri = 'enim';
    $request->googleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput->intentView = GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum::INTENT_VIEW_FULL;
    $request->googleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput->languageCode = 'delectus';
    $request->googleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput->updateMask = 'quidem';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'blanditiis';
    $request->key = 'deleniti';
    $request->oauthToken = 'sapiente';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentIntentsBatchUpdate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentIntentsCreate

Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageListSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCardCardWidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardCardOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCardThumbnailImageAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageRbmText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCardRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTableCardCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentMessageText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentIntentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1IntentInput = new GoogleCloudDialogflowV2beta1IntentInput();
    $request->googleCloudDialogflowV2beta1IntentInput->action = 'omnis';
    $request->googleCloudDialogflowV2beta1IntentInput->defaultResponsePlatforms = [
        GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum::PLATFORM_UNSPECIFIED,
        GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum::SKYPE,
    ];
    $request->googleCloudDialogflowV2beta1IntentInput->displayName = 'magnam';
    $request->googleCloudDialogflowV2beta1IntentInput->endInteraction = false;
    $request->googleCloudDialogflowV2beta1IntentInput->events = [
        'id',
        'labore',
        'labore',
    ];
    $request->googleCloudDialogflowV2beta1IntentInput->inputContextNames = [
        'natus',
        'nobis',
    ];
    $request->googleCloudDialogflowV2beta1IntentInput->isFallback = false;
    $request->googleCloudDialogflowV2beta1IntentInput->liveAgentHandoff = false;
    $request->googleCloudDialogflowV2beta1IntentInput->messages = [
        new GoogleCloudDialogflowV2beta1IntentMessage(),
        new GoogleCloudDialogflowV2beta1IntentMessage(),
    ];
    $request->googleCloudDialogflowV2beta1IntentInput->mlDisabled = false;
    $request->googleCloudDialogflowV2beta1IntentInput->mlEnabled = false;
    $request->googleCloudDialogflowV2beta1IntentInput->name = 'Brandon Brakus V';
    $request->googleCloudDialogflowV2beta1IntentInput->outputContexts = [
        new GoogleCloudDialogflowV2beta1Context(),
        new GoogleCloudDialogflowV2beta1Context(),
    ];
    $request->googleCloudDialogflowV2beta1IntentInput->parameters = [
        new GoogleCloudDialogflowV2beta1IntentParameter(),
        new GoogleCloudDialogflowV2beta1IntentParameter(),
        new GoogleCloudDialogflowV2beta1IntentParameter(),
    ];
    $request->googleCloudDialogflowV2beta1IntentInput->parentFollowupIntentName = 'quos';
    $request->googleCloudDialogflowV2beta1IntentInput->priority = 574325;
    $request->googleCloudDialogflowV2beta1IntentInput->resetContexts = false;
    $request->googleCloudDialogflowV2beta1IntentInput->trainingPhrases = [
        new GoogleCloudDialogflowV2beta1IntentTrainingPhrase(),
    ];
    $request->googleCloudDialogflowV2beta1IntentInput->webhookState = GoogleCloudDialogflowV2beta1IntentWebhookStateEnum::WEBHOOK_STATE_ENABLED;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->intentView = DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum::INTENT_VIEW_UNSPECIFIED;
    $request->key = 'necessitatibus';
    $request->languageCode = 'odit';
    $request->oauthToken = 'nemo';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new DialogflowProjectsLocationsAgentIntentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentIntentsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Intent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentIntentsList

Returns the list of all intents in the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsListIntentViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentIntentsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'in';
    $request->intentView = DialogflowProjectsLocationsAgentIntentsListIntentViewEnum::INTENT_VIEW_UNSPECIFIED;
    $request->key = 'architecto';
    $request->languageCode = 'repudiandae';
    $request->oauthToken = 'ullam';
    $request->pageSize = 714242;
    $request->pageToken = 'nihil';
    $request->parent = 'repellat';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DialogflowProjectsLocationsAgentIntentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentIntentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentIntentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListIntentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentRestore

Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1RestoreAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentRestoreSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentRestoreSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentRestoreSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentRestoreRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1RestoreAgentRequest = new GoogleCloudDialogflowV2beta1RestoreAgentRequest();
    $request->googleCloudDialogflowV2beta1RestoreAgentRequest->agentContent = 'accusantium';
    $request->googleCloudDialogflowV2beta1RestoreAgentRequest->agentUri = 'consequuntur';
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'sunt';
    $request->key = 'quo';
    $request->oauthToken = 'illum';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new DialogflowProjectsLocationsAgentRestoreSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentRestoreSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentRestore($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentSearch

Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSearchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSearchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSearchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->pageSize = 453543;
    $request->pageToken = 'autem';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DialogflowProjectsLocationsAgentSearchSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSearch($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1SearchAgentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentSessionsContextsCreate

Creates a context. If the specified context already exists, overrides the context.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Context;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsContextsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1Context = new GoogleCloudDialogflowV2beta1Context();
    $request->googleCloudDialogflowV2beta1Context->lifespanCount = 16627;
    $request->googleCloudDialogflowV2beta1Context->name = 'Vincent Anderson';
    $request->googleCloudDialogflowV2beta1Context->parameters = [
        'libero' => 'nobis',
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->parent = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsContextsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Context !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentSessionsContextsList

Returns the list of all contexts in the specified session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsContextsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->fields = 'voluptatem';
    $request->key = 'porro';
    $request->oauthToken = 'consequuntur';
    $request->pageSize = 500026;
    $request->pageToken = 'error';
    $request->parent = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsContextsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsContextsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListContextsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentSessionsDeleteContexts

Deletes all active contexts in the specified session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'pariatur';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsDeleteContexts($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentSessionsDetectIntent

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDetectIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1DetectIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1OutputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1InputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BargeInConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1QueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeLatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SubAgent;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsDetectIntentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest = new GoogleCloudDialogflowV2beta1DetectIntentRequest();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->inputAudio = 'quos';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig = new GoogleCloudDialogflowV2beta1OutputAudioConfig();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->audioEncoding = GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_MP3;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->sampleRateHertz = 212390;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig = new GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->effectsProfileId = [
        'dolor',
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->pitch = 1861.93;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->speakingRate = 2187.49;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice = new GoogleCloudDialogflowV2beta1VoiceSelectionParams();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->name = 'Marshall Ritchie';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->ssmlGender = GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_NEUTRAL;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->volumeGainDb = 2274.14;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->outputAudioConfigMask = 'dolorum';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput = new GoogleCloudDialogflowV2beta1QueryInput();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig = new GoogleCloudDialogflowV2beta1InputAudioConfig();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->audioEncoding = GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum::AUDIO_ENCODING_FLAC;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->bargeInConfig = new GoogleCloudDialogflowV2beta1BargeInConfig();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->bargeInConfig->noBargeInDuration = 'veritatis';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->bargeInConfig->totalDuration = 'ipsa';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->disableNoSpeechRecognizedEvent = false;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->enableAutomaticPunctuation = false;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->enableWordInfo = false;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->languageCode = 'ipsa';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->model = 'iure';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->modelVariant = GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->phraseHints = [
        'accusamus',
        'quidem',
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->sampleRateHertz = 976405;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->singleUtterance = false;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->audioConfig->speechContexts = [
        new GoogleCloudDialogflowV2beta1SpeechContext(),
        new GoogleCloudDialogflowV2beta1SpeechContext(),
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->dtmf = new GoogleCloudDialogflowV2beta1TelephonyDtmfEvents();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->dtmf->dtmfEvents = [
        GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum::DTMF_THREE,
        GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum::DTMF_NINE,
        GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum::TELEPHONY_DTMF_UNSPECIFIED,
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->event = new GoogleCloudDialogflowV2beta1EventInput();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->event->languageCode = 'fugiat';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->event->name = 'Latoya Parisian';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->event->parameters = [
        'deleniti' => 'omnis',
        'necessitatibus' => 'distinctio',
        'asperiores' => 'nihil',
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->text = new GoogleCloudDialogflowV2beta1TextInput();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->text->languageCode = 'ipsum';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryInput->text->text = 'voluptate';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams = new GoogleCloudDialogflowV2beta1QueryParameters();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->contexts = [
        new GoogleCloudDialogflowV2beta1Context(),
        new GoogleCloudDialogflowV2beta1Context(),
        new GoogleCloudDialogflowV2beta1Context(),
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->geoLocation = new GoogleTypeLatLng();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->geoLocation->latitude = 9064.18;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->geoLocation->longitude = 2633.22;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->knowledgeBaseNames = [
        'perferendis',
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->payload = [
        'optio' => 'accusamus',
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->resetContexts = false;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->sentimentAnalysisRequestConfig = new GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig();
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->sentimentAnalysisRequestConfig->analyzeQueryTextSentiment = false;
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->sessionEntityTypes = [
        new GoogleCloudDialogflowV2beta1SessionEntityType(),
        new GoogleCloudDialogflowV2beta1SessionEntityType(),
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->subAgents = [
        new GoogleCloudDialogflowV2beta1SubAgent(),
        new GoogleCloudDialogflowV2beta1SubAgent(),
        new GoogleCloudDialogflowV2beta1SubAgent(),
        new GoogleCloudDialogflowV2beta1SubAgent(),
    ];
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->timeZone = 'suscipit';
    $request->googleCloudDialogflowV2beta1DetectIntentRequest->queryParams->webhookHeaders = [
        'provident' => 'minima',
        'repellendus' => 'totam',
        'similique' => 'alias',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'vel';
    $request->key = 'quod';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->session = 'dolorum';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsDetectIntent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1DetectIntentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentSessionsEntityTypesCreate

Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1SessionEntityType = new GoogleCloudDialogflowV2beta1SessionEntityType();
    $request->googleCloudDialogflowV2beta1SessionEntityType->entities = [
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
        new GoogleCloudDialogflowV2beta1EntityTypeEntity(),
    ];
    $request->googleCloudDialogflowV2beta1SessionEntityType->entityOverrideMode = GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum::ENTITY_OVERRIDE_MODE_UNSPECIFIED;
    $request->googleCloudDialogflowV2beta1SessionEntityType->name = 'Saul Fay';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'sapiente';
    $request->key = 'totam';
    $request->languageCode = 'nihil';
    $request->oauthToken = 'sit';
    $request->parent = 'expedita';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsEntityTypesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1SessionEntityType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentSessionsEntityTypesList

Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'ipsum';
    $request->key = 'incidunt';
    $request->oauthToken = 'qui';
    $request->pageSize = 586784;
    $request->pageToken = 'maxime';
    $request->parent = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsEntityTypesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListSessionEntityTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentTrain

Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentTrainRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentTrainSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentTrainSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentTrainSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentTrainRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'aspernatur' => 'dolores',
        'distinctio' => 'facilis',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestias';
    $request->fields = 'temporibus';
    $request->key = 'qui';
    $request->oauthToken = 'neque';
    $request->parent = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'magni';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new DialogflowProjectsLocationsAgentTrainSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentTrainSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentTrain($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentVersionsCreate

Creates an agent version. The new version points to the agent instance in the "default" environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VersionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1VersionInput = new GoogleCloudDialogflowV2beta1VersionInput();
    $request->googleCloudDialogflowV2beta1VersionInput->description = 'nam';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'soluta';
    $request->key = 'nobis';
    $request->oauthToken = 'et';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new DialogflowProjectsLocationsAgentVersionsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentVersionsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentVersionsList

Returns the list of all versions of the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolore';
    $request->pageSize = 286915;
    $request->pageToken = 'adipisci';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DialogflowProjectsLocationsAgentVersionsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentVersionsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAnswerRecordsList

Returns the list of all answer records in the specified project in reverse chronological order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAnswerRecordsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAnswerRecordsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAnswerRecordsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAnswerRecordsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAnswerRecordsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'repellendus';
    $request->filter = 'porro';
    $request->key = 'doloribus';
    $request->oauthToken = 'ut';
    $request->pageSize = 703495;
    $request->pageToken = 'cupiditate';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new DialogflowProjectsLocationsAnswerRecordsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAnswerRecordsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAnswerRecordsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListAnswerRecordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig

Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest = new GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest();
    $request->googleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest->participantRole = GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum::END_USER;
    $request->googleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest->suggestionFeatureType = GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum::SMART_REPLY;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quis';
    $request->conversationProfile = 'ipsum';
    $request->fields = 'delectus';
    $request->key = 'voluptate';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationProfilesCreate

Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ConversationProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AutomatedAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestionFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SpeechToTextConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput = new GoogleCloudDialogflowV2beta1ConversationProfileInput();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->automatedAgentConfig = new GoogleCloudDialogflowV2beta1AutomatedAgentConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->automatedAgentConfig->agent = 'distinctio';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->displayName = 'quod';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->endUserSuggestionConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->endUserSuggestionConfig->featureConfigs = [
        new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig(),
        new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig(),
    ];
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->endUserSuggestionConfig->groupSuggestionResponses = false;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->humanAgentSuggestionConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->humanAgentSuggestionConfig->featureConfigs = [
        new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig(),
        new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig(),
        new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig(),
    ];
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->humanAgentSuggestionConfig->groupSuggestionResponses = false;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->messageAnalysisConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->messageAnalysisConfig->enableEntityExtraction = false;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->messageAnalysisConfig->enableSentimentAnalysis = false;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->notificationConfig = new GoogleCloudDialogflowV2beta1NotificationConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->notificationConfig->messageFormat = GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum::JSON;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentAssistantConfig->notificationConfig->topic = 'vero';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig = new GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig->livePersonConfig = new GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig->livePersonConfig->accountNumber = 'ducimus';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig = new GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->buttonId = 'dolore';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->deploymentId = 'quibusdam';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->endpointDomain = 'illum';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->organizationId = 'sequi';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->languageCode = 'natus';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->loggingConfig = new GoogleCloudDialogflowV2beta1LoggingConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->loggingConfig->enableStackdriverLogging = false;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->name = 'Richard Wiza';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->newMessageEventNotificationConfig = new GoogleCloudDialogflowV2beta1NotificationConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->newMessageEventNotificationConfig->messageFormat = GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum::MESSAGE_FORMAT_UNSPECIFIED;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->newMessageEventNotificationConfig->topic = 'porro';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->notificationConfig = new GoogleCloudDialogflowV2beta1NotificationConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->notificationConfig->messageFormat = GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum::JSON;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->notificationConfig->topic = 'doloribus';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->securitySettings = 'iusto';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->sttConfig = new GoogleCloudDialogflowV2beta1SpeechToTextConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->sttConfig->model = 'eligendi';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->sttConfig->speechModelVariant = GoogleCloudDialogflowV2beta1SpeechToTextConfigSpeechModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->timeZone = 'alias';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig = new GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig->effectsProfileId = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig->pitch = 1369;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig->speakingRate = 4282.24;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig->voice = new GoogleCloudDialogflowV2beta1VoiceSelectionParams();
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig->voice->name = 'Clifford Dickens';
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig->voice->ssmlGender = GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_UNSPECIFIED;
    $request->googleCloudDialogflowV2beta1ConversationProfileInput->ttsConfig->volumeGainDb = 2243.17;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ex';
    $request->fields = 'nulla';
    $request->key = 'excepturi';
    $request->oauthToken = 'voluptatibus';
    $request->parent = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DialogflowProjectsLocationsConversationProfilesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationProfilesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ConversationProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationProfilesList

Returns the list of all conversation profiles in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationProfilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'aliquid';
    $request->key = 'inventore';
    $request->oauthToken = 'magnam';
    $request->pageSize = 407241;
    $request->pageToken = 'quo';
    $request->parent = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new DialogflowProjectsLocationsConversationProfilesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationProfilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationProfilesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListConversationProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig

Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestionFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest = new GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->participantRole = GoogleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequestParticipantRoleEnum::END_USER;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationModelConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationModelConfig->model = 'libero';
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationProcessConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationProcessConfig->recentSentencesCount = 13948;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->enableEventBasedSuggestion = false;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->confidenceThreshold = 114.27;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings->dropHandoffMessages = false;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings->dropIvrMessages = false;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings->dropVirtualAgentMessages = false;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->dialogflowQuerySource = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->dialogflowQuerySource->agent = 'deleniti';
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->documentQuerySource = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->documentQuerySource->documents = [
        'aliquam',
        'fugit',
        'accusamus',
        'inventore',
    ];
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->knowledgeBaseQuerySource = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->knowledgeBaseQuerySource->knowledgeBases = [
        'et',
        'dolorum',
    ];
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->maxResults = 672048;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionFeature = new GoogleCloudDialogflowV2beta1SuggestionFeature();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionFeature->type = GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum::CONVERSATION_SUMMARIZATION;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionTriggerSettings = new GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings();
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionTriggerSettings->noSmallTalk = false;
    $request->googleCloudDialogflowV2beta1SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionTriggerSettings->onlyEndUser = false;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->conversationProfile = 'nobis';
    $request->fields = 'quas';
    $request->key = 'assumenda';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsComplete

Completes the specified conversation. Finished conversations are purged from the database after 30 days.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCompleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCompleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCompleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsCompleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'explicabo' => 'provident',
        'ipsa' => 'molestiae',
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eius';
    $request->fields = 'esse';
    $request->key = 'esse';
    $request->name = 'Blake Kihn';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new DialogflowProjectsLocationsConversationsCompleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsCompleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsComplete($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Conversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsCreate

Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ConversationInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ConversationConversationStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1ConversationInput = new GoogleCloudDialogflowV2beta1ConversationInput();
    $request->googleCloudDialogflowV2beta1ConversationInput->conversationProfile = 'praesentium';
    $request->googleCloudDialogflowV2beta1ConversationInput->conversationStage = GoogleCloudDialogflowV2beta1ConversationConversationStageEnum::HUMAN_ASSIST_STAGE;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->conversationId = 'quidem';
    $request->fields = 'neque';
    $request->key = 'quo';
    $request->oauthToken = 'illum';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new DialogflowProjectsLocationsConversationsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Conversation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsList

Returns the list of all conversations in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'tempora';
    $request->filter = 'debitis';
    $request->key = 'ipsam';
    $request->oauthToken = 'aspernatur';
    $request->pageSize = 197054;
    $request->pageToken = 'quo';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new DialogflowProjectsLocationsConversationsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListConversationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsMessagesBatchCreate

Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1CreateMessageRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1MessageAnnotation;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AnnotatedMessagePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Sentiment;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1BatchCreateMessagesRequestInput = new GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput();
    $request->googleCloudDialogflowV2beta1BatchCreateMessagesRequestInput->requests = [
        new GoogleCloudDialogflowV2beta1CreateMessageRequestInput(),
        new GoogleCloudDialogflowV2beta1CreateMessageRequestInput(),
    ];
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'accusamus';
    $request->key = 'aliquam';
    $request->oauthToken = 'odio';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsMessagesBatchCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1BatchCreateMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsMessagesList

Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsMessagesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsMessagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'eum';
    $request->filter = 'quas';
    $request->key = 'praesentium';
    $request->oauthToken = 'consequuntur';
    $request->pageSize = 536178;
    $request->pageToken = 'fugit';
    $request->parent = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new DialogflowProjectsLocationsConversationsMessagesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsMessagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsMessagesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListMessagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent

Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AnalyzeContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AudioInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1InputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1BargeInConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1QueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeLatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SubAgent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1OutputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest = new GoogleCloudDialogflowV2beta1AnalyzeContentRequest();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->assistQueryParams = new GoogleCloudDialogflowV2beta1AssistQueryParameters();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->assistQueryParams->documentsMetadataFilters = [
        'nisi' => 'fugit',
        'sapiente' => 'consequuntur',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput = new GoogleCloudDialogflowV2beta1AudioInput();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->audio = 'ratione';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config = new GoogleCloudDialogflowV2beta1InputAudioConfig();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->audioEncoding = GoogleCloudDialogflowV2beta1InputAudioConfigAudioEncodingEnum::AUDIO_ENCODING_LINEAR16;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->bargeInConfig = new GoogleCloudDialogflowV2beta1BargeInConfig();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->bargeInConfig->noBargeInDuration = 'saepe';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->bargeInConfig->totalDuration = 'occaecati';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->disableNoSpeechRecognizedEvent = false;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->enableAutomaticPunctuation = false;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->enableWordInfo = false;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->languageCode = 'atque';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->model = 'et';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->modelVariant = GoogleCloudDialogflowV2beta1InputAudioConfigModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->phraseHints = [
        'accusamus',
        'veritatis',
        'esse',
        'quod',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->sampleRateHertz = 724168;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->singleUtterance = false;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->audioInput->config->speechContexts = [
        new GoogleCloudDialogflowV2beta1SpeechContext(),
        new GoogleCloudDialogflowV2beta1SpeechContext(),
        new GoogleCloudDialogflowV2beta1SpeechContext(),
        new GoogleCloudDialogflowV2beta1SpeechContext(),
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->cxCurrentPage = 'aliquid';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->cxParameters = [
        'saepe' => 'vel',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->eventInput = new GoogleCloudDialogflowV2beta1EventInput();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->eventInput->languageCode = 'harum';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->eventInput->name = 'Luz McClure';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->eventInput->parameters = [
        'sit' => 'culpa',
        'tempore' => 'adipisci',
        'cumque' => 'consequuntur',
        'consequatur' => 'minus',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->messageSendTime = 'quaerat';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams = new GoogleCloudDialogflowV2beta1QueryParameters();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->contexts = [
        new GoogleCloudDialogflowV2beta1Context(),
        new GoogleCloudDialogflowV2beta1Context(),
        new GoogleCloudDialogflowV2beta1Context(),
        new GoogleCloudDialogflowV2beta1Context(),
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->geoLocation = new GoogleTypeLatLng();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->geoLocation->latitude = 2328.65;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->geoLocation->longitude = 4581.39;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->knowledgeBaseNames = [
        'provident',
        'a',
        'nulla',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->payload = [
        'esse' => 'quasi',
        'a' => 'error',
        'sint' => 'pariatur',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->resetContexts = false;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->sentimentAnalysisRequestConfig = new GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->sentimentAnalysisRequestConfig->analyzeQueryTextSentiment = false;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->sessionEntityTypes = [
        new GoogleCloudDialogflowV2beta1SessionEntityType(),
        new GoogleCloudDialogflowV2beta1SessionEntityType(),
        new GoogleCloudDialogflowV2beta1SessionEntityType(),
        new GoogleCloudDialogflowV2beta1SessionEntityType(),
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->subAgents = [
        new GoogleCloudDialogflowV2beta1SubAgent(),
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->timeZone = 'eveniet';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->queryParams->webhookHeaders = [
        'facere' => 'veritatis',
        'consequuntur' => 'quasi',
        'similique' => 'culpa',
        'aliquid' => 'tenetur',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig = new GoogleCloudDialogflowV2beta1OutputAudioConfig();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->audioEncoding = GoogleCloudDialogflowV2beta1OutputAudioConfigAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_UNSPECIFIED;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->sampleRateHertz = 936747;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig = new GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->effectsProfileId = [
        'in',
        'eius',
    ];
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->pitch = 7276.97;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->speakingRate = 8490.39;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->voice = new GoogleCloudDialogflowV2beta1VoiceSelectionParams();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->voice->name = 'Kenneth Hackett II';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->voice->ssmlGender = GoogleCloudDialogflowV2beta1VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_MALE;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->volumeGainDb = 3567.07;
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->requestId = 'nisi';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->textInput = new GoogleCloudDialogflowV2beta1TextInput();
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->textInput->languageCode = 'aut';
    $request->googleCloudDialogflowV2beta1AnalyzeContentRequest->textInput->text = 'voluptatum';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->fields = 'deleniti';
    $request->key = 'itaque';
    $request->oauthToken = 'dolorum';
    $request->participant = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1AnalyzeContentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsParticipantsCreate

Creates a new participant in a conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Participant;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1Participant = new GoogleCloudDialogflowV2beta1Participant();
    $request->googleCloudDialogflowV2beta1Participant->documentsMetadataFilters = [
        'voluptate' => 'ipsa',
    ];
    $request->googleCloudDialogflowV2beta1Participant->name = 'Marie Feest';
    $request->googleCloudDialogflowV2beta1Participant->obfuscatedExternalUserId = 'temporibus';
    $request->googleCloudDialogflowV2beta1Participant->role = GoogleCloudDialogflowV2beta1ParticipantRoleEnum::ROLE_UNSPECIFIED;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'eum';
    $request->key = 'mollitia';
    $request->oauthToken = 'ab';
    $request->parent = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'dolor';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Participant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsParticipantsList

Returns the list of all participants in the specified conversation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'voluptas';
    $request->key = 'aut';
    $request->oauthToken = 'dignissimos';
    $request->pageSize = 115484;
    $request->pageToken = 'maiores';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListParticipantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles

Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestArticlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1SuggestArticlesRequest = new GoogleCloudDialogflowV2beta1SuggestArticlesRequest();
    $request->googleCloudDialogflowV2beta1SuggestArticlesRequest->assistQueryParams = new GoogleCloudDialogflowV2beta1AssistQueryParameters();
    $request->googleCloudDialogflowV2beta1SuggestArticlesRequest->assistQueryParams->documentsMetadataFilters = [
        'ea' => 'quaerat',
    ];
    $request->googleCloudDialogflowV2beta1SuggestArticlesRequest->contextSize = 162954;
    $request->googleCloudDialogflowV2beta1SuggestArticlesRequest->latestMessage = 'repellendus';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dignissimos';
    $request->fields = 'officia';
    $request->key = 'asperiores';
    $request->oauthToken = 'nemo';
    $request->parent = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1SuggestArticlesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers

Gets suggested faq answers for a participant based on specific historical messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1SuggestFaqAnswersRequest = new GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest();
    $request->googleCloudDialogflowV2beta1SuggestFaqAnswersRequest->assistQueryParams = new GoogleCloudDialogflowV2beta1AssistQueryParameters();
    $request->googleCloudDialogflowV2beta1SuggestFaqAnswersRequest->assistQueryParams->documentsMetadataFilters = [
        'adipisci' => 'fuga',
    ];
    $request->googleCloudDialogflowV2beta1SuggestFaqAnswersRequest->contextSize = 662505;
    $request->googleCloudDialogflowV2beta1SuggestFaqAnswersRequest->latestMessage = 'suscipit';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'recusandae';
    $request->key = 'totam';
    $request->oauthToken = 'fugiat';
    $request->parent = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1SuggestFaqAnswersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies

Gets smart replies for a participant based on specific historical messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1SuggestSmartRepliesRequest = new GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest();
    $request->googleCloudDialogflowV2beta1SuggestSmartRepliesRequest->contextSize = 822560;
    $request->googleCloudDialogflowV2beta1SuggestSmartRepliesRequest->currentTextInput = new GoogleCloudDialogflowV2beta1TextInput();
    $request->googleCloudDialogflowV2beta1SuggestSmartRepliesRequest->currentTextInput->languageCode = 'facilis';
    $request->googleCloudDialogflowV2beta1SuggestSmartRepliesRequest->currentTextInput->text = 'cum';
    $request->googleCloudDialogflowV2beta1SuggestSmartRepliesRequest->latestMessage = 'commodi';
    $request->accessToken = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'assumenda';
    $request->key = 'nemo';
    $request->oauthToken = 'recusandae';
    $request->parent = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'consectetur';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1SuggestSmartRepliesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary

Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1SuggestConversationSummaryRequest = new GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest();
    $request->googleCloudDialogflowV2beta1SuggestConversationSummaryRequest->assistQueryParams = new GoogleCloudDialogflowV2beta1AssistQueryParameters();
    $request->googleCloudDialogflowV2beta1SuggestConversationSummaryRequest->assistQueryParams->documentsMetadataFilters = [
        'earum' => 'facere',
        'numquam' => 'doloribus',
    ];
    $request->googleCloudDialogflowV2beta1SuggestConversationSummaryRequest->contextSize = 381760;
    $request->googleCloudDialogflowV2beta1SuggestConversationSummaryRequest->latestMessage = 'reiciendis';
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->conversation = 'dolore';
    $request->fields = 'sunt';
    $request->key = 'asperiores';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1SuggestConversationSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsDeleteAgent

Deletes the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsDeleteAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsDeleteAgentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsDeleteAgentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsDeleteAgentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsDeleteAgentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'corporis';
    $request->key = 'harum';
    $request->oauthToken = 'laboriosam';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptates';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'vitae';

    $requestSecurity = new DialogflowProjectsLocationsDeleteAgentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsDeleteAgentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsDeleteAgent($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsGetAgent

Retrieves the specified agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsGetAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsGetAgentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsGetAgentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsGetAgentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsGetAgentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'voluptas';
    $request->key = 'voluptas';
    $request->oauthToken = 'voluptas';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'adipisci';

    $requestSecurity = new DialogflowProjectsLocationsGetAgentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsGetAgentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsGetAgent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Agent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesCreate

Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1KnowledgeBase;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1KnowledgeBase = new GoogleCloudDialogflowV2beta1KnowledgeBase();
    $request->googleCloudDialogflowV2beta1KnowledgeBase->displayName = 'dolores';
    $request->googleCloudDialogflowV2beta1KnowledgeBase->languageCode = 'blanditiis';
    $request->googleCloudDialogflowV2beta1KnowledgeBase->name = 'Valerie Haag';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cum';
    $request->fields = 'blanditiis';
    $request->key = 'quas';
    $request->oauthToken = 'hic';
    $request->parent = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1KnowledgeBase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1DocumentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1DocumentReloadStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1DocumentInput = new GoogleCloudDialogflowV2beta1DocumentInput();
    $request->googleCloudDialogflowV2beta1DocumentInput->content = 'hic';
    $request->googleCloudDialogflowV2beta1DocumentInput->contentUri = 'exercitationem';
    $request->googleCloudDialogflowV2beta1DocumentInput->displayName = 'nobis';
    $request->googleCloudDialogflowV2beta1DocumentInput->enableAutoReload = false;
    $request->googleCloudDialogflowV2beta1DocumentInput->knowledgeTypes = [
        GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum::AGENT_FACING_SMART_REPLY,
    ];
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus = new GoogleCloudDialogflowV2beta1DocumentReloadStatus();
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status = new GoogleRpcStatus();
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status->code = 148829;
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status->details = [
        [
            'asperiores' => 'facilis',
        ],
        [
            'expedita' => 'ab',
            'iste' => 'dolore',
        ],
        [
            'sed' => 'in',
            'commodi' => 'quidem',
            'explicabo' => 'voluptas',
        ],
        [
            'architecto' => 'suscipit',
            'sapiente' => 'debitis',
            'illo' => 'reiciendis',
        ],
    ];
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status->message = 'perferendis';
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->time = 'corrupti';
    $request->googleCloudDialogflowV2beta1DocumentInput->metadata = [
        'incidunt' => 'sed',
        'provident' => 'eius',
        'necessitatibus' => 'ipsum',
        'ea' => 'occaecati',
    ];
    $request->googleCloudDialogflowV2beta1DocumentInput->mimeType = 'quos';
    $request->googleCloudDialogflowV2beta1DocumentInput->name = 'Eddie Goodwin';
    $request->googleCloudDialogflowV2beta1DocumentInput->rawContent = 'ex';
    $request->accessToken = 'sit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officiis';
    $request->fields = 'praesentium';
    $request->importGcsCustomMetadata = false;
    $request->key = 'facilis';
    $request->oauthToken = 'quaerat';
    $request->parent = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'minima';
    $request->force = false;
    $request->key = 'recusandae';
    $request->name = 'Dr. Jody Cummings';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'beatae';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsImport

Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ImportDocumentTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1GcsSources;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest = new GoogleCloudDialogflowV2beta1ImportDocumentsRequest();
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest->documentTemplate = new GoogleCloudDialogflowV2beta1ImportDocumentTemplate();
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest->documentTemplate->knowledgeTypes = [
        GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum::ARTICLE_SUGGESTION,
        GoogleCloudDialogflowV2beta1ImportDocumentTemplateKnowledgeTypesEnum::AGENT_FACING_SMART_REPLY,
    ];
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest->documentTemplate->metadata = [
        'dolorum' => 'voluptatum',
        'error' => 'hic',
    ];
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest->documentTemplate->mimeType = 'expedita';
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest->gcsSource = new GoogleCloudDialogflowV2beta1GcsSources();
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest->gcsSource->uris = [
        'neque',
        'dolorum',
        'nostrum',
        'officia',
    ];
    $request->googleCloudDialogflowV2beta1ImportDocumentsRequest->importGcsCustomMetadata = false;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->fields = 'tempora';
    $request->key = 'atque';
    $request->oauthToken = 'fugit';
    $request->parent = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsImport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsList

Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'esse';
    $request->fields = 'ipsam';
    $request->filter = 'sit';
    $request->key = 'voluptatum';
    $request->oauthToken = 'quas';
    $request->pageSize = 922112;
    $request->pageToken = 'corporis';
    $request->parent = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListDocumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1DocumentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1DocumentReloadStatus;
use \OpenAPI\OpenAPI\Models\Shared\GoogleRpcStatus;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1DocumentInput = new GoogleCloudDialogflowV2beta1DocumentInput();
    $request->googleCloudDialogflowV2beta1DocumentInput->content = 'vel';
    $request->googleCloudDialogflowV2beta1DocumentInput->contentUri = 'nostrum';
    $request->googleCloudDialogflowV2beta1DocumentInput->displayName = 'saepe';
    $request->googleCloudDialogflowV2beta1DocumentInput->enableAutoReload = false;
    $request->googleCloudDialogflowV2beta1DocumentInput->knowledgeTypes = [
        GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum::KNOWLEDGE_TYPE_UNSPECIFIED,
        GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum::FAQ,
        GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum::SMART_REPLY,
    ];
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus = new GoogleCloudDialogflowV2beta1DocumentReloadStatus();
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status = new GoogleRpcStatus();
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status->code = 209750;
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status->details = [
        [
            'architecto' => 'occaecati',
        ],
        [
            'quidem' => 'atque',
            'laborum' => 'nam',
        ],
        [
            'laboriosam' => 'alias',
            'amet' => 'deserunt',
            'voluptate' => 'unde',
            'reiciendis' => 'provident',
        ],
    ];
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->status->message = 'repellendus';
    $request->googleCloudDialogflowV2beta1DocumentInput->latestReloadStatus->time = 'delectus';
    $request->googleCloudDialogflowV2beta1DocumentInput->metadata = [
        'perferendis' => 'est',
        'quidem' => 'reprehenderit',
        'facere' => 'fuga',
        'praesentium' => 'mollitia',
    ];
    $request->googleCloudDialogflowV2beta1DocumentInput->mimeType = 'veniam';
    $request->googleCloudDialogflowV2beta1DocumentInput->name = 'Ms. Alexandra VonRueden';
    $request->googleCloudDialogflowV2beta1DocumentInput->rawContent = 'asperiores';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'maxime';
    $request->key = 'et';
    $request->languageCode = 'esse';
    $request->name = 'Angelina Jenkins';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->updateMask = DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum::INTENT_VIEW_FULL;
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsReload

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1ReloadDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1GcsSource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1ReloadDocumentRequest = new GoogleCloudDialogflowV2beta1ReloadDocumentRequest();
    $request->googleCloudDialogflowV2beta1ReloadDocumentRequest->gcsSource = new GoogleCloudDialogflowV2beta1GcsSource();
    $request->googleCloudDialogflowV2beta1ReloadDocumentRequest->gcsSource->uri = 'http://woozy-marten.org';
    $request->googleCloudDialogflowV2beta1ReloadDocumentRequest->importGcsCustomMetadata = false;
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'repudiandae';
    $request->key = 'atque';
    $request->name = 'Willie Walker';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsReload($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesList

Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolores';
    $request->fields = 'enim';
    $request->filter = 'laboriosam';
    $request->key = 'velit';
    $request->oauthToken = 'a';
    $request->pageSize = 562783;
    $request->pageToken = 'magnam';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'officiis';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1ListKnowledgeBasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eveniet';
    $request->fields = 'occaecati';
    $request->filter = 'consequuntur';
    $request->key = 'fugit';
    $request->name = 'Leo Kiehn II';
    $request->oauthToken = 'quidem';
    $request->pageSize = 910994;
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new DialogflowProjectsLocationsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsList($request, $requestSecurity);

    if ($response->googleCloudLocationListLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsSetAgent

Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSetAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1Agent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AgentApiVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AgentMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2beta1AgentTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSetAgentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSetAgentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSetAgentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsSetAgentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2beta1Agent = new GoogleCloudDialogflowV2beta1Agent();
    $request->googleCloudDialogflowV2beta1Agent->apiVersion = GoogleCloudDialogflowV2beta1AgentApiVersionEnum::API_VERSION_V2;
    $request->googleCloudDialogflowV2beta1Agent->avatarUri = 'quae';
    $request->googleCloudDialogflowV2beta1Agent->classificationThreshold = 4746.68;
    $request->googleCloudDialogflowV2beta1Agent->defaultLanguageCode = 'eveniet';
    $request->googleCloudDialogflowV2beta1Agent->description = 'qui';
    $request->googleCloudDialogflowV2beta1Agent->displayName = 'cum';
    $request->googleCloudDialogflowV2beta1Agent->enableLogging = false;
    $request->googleCloudDialogflowV2beta1Agent->matchMode = GoogleCloudDialogflowV2beta1AgentMatchModeEnum::MATCH_MODE_HYBRID;
    $request->googleCloudDialogflowV2beta1Agent->parent = 'necessitatibus';
    $request->googleCloudDialogflowV2beta1Agent->supportedLanguageCodes = [
        'laborum',
    ];
    $request->googleCloudDialogflowV2beta1Agent->tier = GoogleCloudDialogflowV2beta1AgentTierEnum::TIER_ENTERPRISE;
    $request->googleCloudDialogflowV2beta1Agent->timeZone = 'voluptatum';
    $request->accessToken = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'repellat';
    $request->key = 'alias';
    $request->oauthToken = 'corporis';
    $request->parent = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->updateMask = 'mollitia';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DialogflowProjectsLocationsSetAgentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsSetAgentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsSetAgent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2beta1Agent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsCancelSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'minima';
    $request->key = 'dolore';
    $request->name = 'Danny Berge';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new DialogflowProjectsOperationsCancelSecurity();
    $requestSecurity->option1 = new DialogflowProjectsOperationsCancelSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsOperationsCancel($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetIntentViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laudantium';
    $request->fields = 'eum';
    $request->intentView = DialogflowProjectsOperationsGetIntentViewEnum::INTENT_VIEW_UNSPECIFIED;
    $request->key = 'recusandae';
    $request->languageCode = 'esse';
    $request->name = 'Alvin Kemmer';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new DialogflowProjectsOperationsGetSecurity();
    $requestSecurity->option1 = new DialogflowProjectsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsOperationsGet($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsOperationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'animi';
    $request->filter = 'ex';
    $request->key = 'aliquid';
    $request->name = 'Kristie Wyman';
    $request->oauthToken = 'nam';
    $request->pageSize = 937636;
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new DialogflowProjectsOperationsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsOperationsList($request, $requestSecurity);

    if ($response->googleLongrunningListOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
