# projects

### Available Operations

* [dialogflowProjectsLocationsAgentEntityTypesBatchDelete](#dialogflowprojectslocationsagententitytypesbatchdelete) - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesBatchUpdate](#dialogflowprojectslocationsagententitytypesbatchupdate) - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate](#dialogflowprojectslocationsagententitytypesentitiesbatchcreate) - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete](#dialogflowprojectslocationsagententitytypesentitiesbatchdelete) - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate](#dialogflowprojectslocationsagententitytypesentitiesbatchupdate) - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 
* [dialogflowProjectsLocationsAgentEnvironmentsCreate](#dialogflowprojectslocationsagentenvironmentscreate) - Creates an agent environment.
* [dialogflowProjectsLocationsAgentEnvironmentsGetHistory](#dialogflowprojectslocationsagentenvironmentsgethistory) - Gets the history of the specified environment.
* [dialogflowProjectsLocationsAgentEnvironmentsList](#dialogflowprojectslocationsagentenvironmentslist) - Returns the list of all non-default environments of the specified agent.
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
* [dialogflowProjectsLocationsConversationDatasetsCreate](#dialogflowprojectslocationsconversationdatasetscreate) - Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset
* [dialogflowProjectsLocationsConversationDatasetsImportConversationData](#dialogflowprojectslocationsconversationdatasetsimportconversationdata) - Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
* [dialogflowProjectsLocationsConversationDatasetsList](#dialogflowprojectslocationsconversationdatasetslist) - Returns the list of all conversation datasets in the specified project and location.
* [dialogflowProjectsLocationsConversationModelsCreate](#dialogflowprojectslocationsconversationmodelscreate) - Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
* [dialogflowProjectsLocationsConversationModelsDeploy](#dialogflowprojectslocationsconversationmodelsdeploy) - Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [dialogflowProjectsLocationsConversationModelsEvaluationsCreate](#dialogflowprojectslocationsconversationmodelsevaluationscreate) - Creates evaluation of a conversation model.
* [dialogflowProjectsLocationsConversationModelsEvaluationsList](#dialogflowprojectslocationsconversationmodelsevaluationslist) - Lists evaluations of a conversation model.
* [dialogflowProjectsLocationsConversationModelsList](#dialogflowprojectslocationsconversationmodelslist) - Lists conversation models.
* [dialogflowProjectsLocationsConversationModelsUndeploy](#dialogflowprojectslocationsconversationmodelsundeploy) - Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilesclearsuggestionfeatureconfig) - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
* [dialogflowProjectsLocationsConversationProfilesCreate](#dialogflowprojectslocationsconversationprofilescreate) - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
* [dialogflowProjectsLocationsConversationProfilesList](#dialogflowprojectslocationsconversationprofileslist) - Returns the list of all conversation profiles in the specified project.
* [dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig](#dialogflowprojectslocationsconversationprofilessetsuggestionfeatureconfig) - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
* [dialogflowProjectsLocationsConversationsComplete](#dialogflowprojectslocationsconversationscomplete) - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
* [dialogflowProjectsLocationsConversationsCreate](#dialogflowprojectslocationsconversationscreate) - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
* [dialogflowProjectsLocationsConversationsList](#dialogflowprojectslocationsconversationslist) - Returns the list of all conversations in the specified project.
* [dialogflowProjectsLocationsConversationsMessagesList](#dialogflowprojectslocationsconversationsmessageslist) - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* [dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent](#dialogflowprojectslocationsconversationsparticipantsanalyzecontent) - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* [dialogflowProjectsLocationsConversationsParticipantsCreate](#dialogflowprojectslocationsconversationsparticipantscreate) - Creates a new participant in a conversation.
* [dialogflowProjectsLocationsConversationsParticipantsList](#dialogflowprojectslocationsconversationsparticipantslist) - Returns the list of all participants in the specified conversation.
* [dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestarticles) - Gets suggested articles for a participant based on specific historical messages.
* [dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestfaqanswers) - Gets suggested faq answers for a participant based on specific historical messages.
* [dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies](#dialogflowprojectslocationsconversationsparticipantssuggestionssuggestsmartreplies) - Gets smart replies for a participant based on specific historical messages.
* [dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary](#dialogflowprojectslocationsconversationssuggestionssuggestconversationsummary) - Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
* [dialogflowProjectsLocationsDeleteAgent](#dialogflowprojectslocationsdeleteagent) - Deletes the specified agent.
* [dialogflowProjectsLocationsGetAgent](#dialogflowprojectslocationsgetagent) - Retrieves the specified agent.
* [dialogflowProjectsLocationsKnowledgeBasesCreate](#dialogflowprojectslocationsknowledgebasescreate) - Creates a knowledge base.
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate](#dialogflowprojectslocationsknowledgebasesdocumentscreate) - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete](#dialogflowprojectslocationsknowledgebasesdocumentsdelete) - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsExport](#dialogflowprojectslocationsknowledgebasesdocumentsexport) - Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsImport](#dialogflowprojectslocationsknowledgebasesdocumentsimport) - Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsList](#dialogflowprojectslocationsknowledgebasesdocumentslist) - Returns the list of all documents of the knowledge base.
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch](#dialogflowprojectslocationsknowledgebasesdocumentspatch) - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* [dialogflowProjectsLocationsKnowledgeBasesDocumentsReload](#dialogflowprojectslocationsknowledgebasesdocumentsreload) - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* [dialogflowProjectsLocationsKnowledgeBasesList](#dialogflowprojectslocationsknowledgebaseslist) - Returns the list of all knowledge bases of the specified agent.
* [dialogflowProjectsLocationsList](#dialogflowprojectslocationslist) - Lists information about the supported locations for this service.
* [dialogflowProjectsLocationsSetAgent](#dialogflowprojectslocationssetagent) - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* [dialogflowProjectsOperationsCancel](#dialogflowprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [dialogflowProjectsOperationsGet](#dialogflowprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [dialogflowProjectsOperationsList](#dialogflowprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2BatchDeleteEntityTypesRequest = new GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest();
    $request->googleCloudDialogflowV2BatchDeleteEntityTypesRequest->entityTypeNames = [
        'tempora',
        'suscipit',
        'molestiae',
        'minus',
    ];
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'excepturi';
    $request->key = 'nisi';
    $request->oauthToken = 'recusandae';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeBatch;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2BatchUpdateEntityTypesRequest = new GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest();
    $request->googleCloudDialogflowV2BatchUpdateEntityTypesRequest->entityTypeBatchInline = new GoogleCloudDialogflowV2EntityTypeBatch();
    $request->googleCloudDialogflowV2BatchUpdateEntityTypesRequest->entityTypeBatchInline->entityTypes = [
        new GoogleCloudDialogflowV2EntityType(),
    ];
    $request->googleCloudDialogflowV2BatchUpdateEntityTypesRequest->entityTypeBatchUri = 'ipsam';
    $request->googleCloudDialogflowV2BatchUpdateEntityTypesRequest->languageCode = 'repellendus';
    $request->googleCloudDialogflowV2BatchUpdateEntityTypesRequest->updateMask = 'sapiente';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->oauthToken = 'molestiae';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchCreateEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2BatchCreateEntitiesRequest = new GoogleCloudDialogflowV2BatchCreateEntitiesRequest();
    $request->googleCloudDialogflowV2BatchCreateEntitiesRequest->entities = [
        new GoogleCloudDialogflowV2EntityTypeEntity(),
        new GoogleCloudDialogflowV2EntityTypeEntity(),
        new GoogleCloudDialogflowV2EntityTypeEntity(),
    ];
    $request->googleCloudDialogflowV2BatchCreateEntitiesRequest->languageCode = 'dicta';
    $request->accessToken = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->fields = 'fugit';
    $request->key = 'deleniti';
    $request->oauthToken = 'hic';
    $request->parent = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'commodi';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchDeleteEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2BatchDeleteEntitiesRequest = new GoogleCloudDialogflowV2BatchDeleteEntitiesRequest();
    $request->googleCloudDialogflowV2BatchDeleteEntitiesRequest->entityValues = [
        'qui',
        'impedit',
    ];
    $request->googleCloudDialogflowV2BatchDeleteEntitiesRequest->languageCode = 'cum';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'ad';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'dolor';

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

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchUpdateEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2BatchUpdateEntitiesRequest = new GoogleCloudDialogflowV2BatchUpdateEntitiesRequest();
    $request->googleCloudDialogflowV2BatchUpdateEntitiesRequest->entities = [
        new GoogleCloudDialogflowV2EntityTypeEntity(),
        new GoogleCloudDialogflowV2EntityTypeEntity(),
    ];
    $request->googleCloudDialogflowV2BatchUpdateEntitiesRequest->languageCode = 'hic';
    $request->googleCloudDialogflowV2BatchUpdateEntitiesRequest->updateMask = 'saepe';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EnvironmentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Fulfillment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2FulfillmentFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2FulfillmentGenericWebService;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2TextToSpeechSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentEnvironmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2EnvironmentInput = new GoogleCloudDialogflowV2EnvironmentInput();
    $request->googleCloudDialogflowV2EnvironmentInput->agentVersion = 'mollitia';
    $request->googleCloudDialogflowV2EnvironmentInput->description = 'laborum';
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment = new GoogleCloudDialogflowV2Fulfillment();
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->displayName = 'dolores';
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->enabled = false;
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->features = [
        new GoogleCloudDialogflowV2FulfillmentFeature(),
    ];
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->genericWebService = new GoogleCloudDialogflowV2FulfillmentGenericWebService();
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->genericWebService->isCloudFunction = false;
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->genericWebService->password = 'corporis';
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->genericWebService->requestHeaders = [
        'nobis' => 'enim',
    ];
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->genericWebService->uri = 'https://gummy-expedition.name';
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->genericWebService->username = 'Alisa_Kessler';
    $request->googleCloudDialogflowV2EnvironmentInput->fulfillment->name = 'Juan O'Hara';
    $request->googleCloudDialogflowV2EnvironmentInput->textToSpeechSettings = new GoogleCloudDialogflowV2TextToSpeechSettings();
    $request->googleCloudDialogflowV2EnvironmentInput->textToSpeechSettings->enableTextToSpeech = false;
    $request->googleCloudDialogflowV2EnvironmentInput->textToSpeechSettings->outputAudioEncoding = GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_UNSPECIFIED;
    $request->googleCloudDialogflowV2EnvironmentInput->textToSpeechSettings->sampleRateHertz = 995300;
    $request->googleCloudDialogflowV2EnvironmentInput->textToSpeechSettings->synthesizeSpeechConfigs = [
        'occaecati' => new GoogleCloudDialogflowV2SynthesizeSpeechConfig(),
        'numquam' => new GoogleCloudDialogflowV2SynthesizeSpeechConfig(),
        'commodi' => new GoogleCloudDialogflowV2SynthesizeSpeechConfig(),
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->environmentId = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEnvironmentsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Environment !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'id';
    $request->key = 'possimus';
    $request->oauthToken = 'aut';
    $request->pageSize = 97101;
    $request->pageToken = 'error';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEnvironmentsGetHistory($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2EnvironmentHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsAgentEnvironmentsList

Returns the list of all non-default environments of the specified agent.

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
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->pageSize = 451159;
    $request->pageToken = 'cum';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new DialogflowProjectsLocationsAgentEnvironmentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentEnvironmentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListEnvironmentsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ExportAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2ExportAgentRequest = new GoogleCloudDialogflowV2ExportAgentRequest();
    $request->googleCloudDialogflowV2ExportAgentRequest->agentUri = 'dicta';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'excepturi';
    $request->fields = 'pariatur';
    $request->key = 'modi';
    $request->languageCode = 'praesentium';
    $request->oauthToken = 'rem';
    $request->parent = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DialogflowProjectsLocationsAgentGetValidationResultSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentGetValidationResult($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ValidationResult !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ImportAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2ImportAgentRequest = new GoogleCloudDialogflowV2ImportAgentRequest();
    $request->googleCloudDialogflowV2ImportAgentRequest->agentContent = 'itaque';
    $request->googleCloudDialogflowV2ImportAgentRequest->agentUri = 'incidunt';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'quibusdam';
    $request->key = 'explicabo';
    $request->oauthToken = 'deserunt';
    $request->parent = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'modi';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCarouselSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCarouselSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageListSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageListSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessagePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageQuickReplies;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSimpleResponses;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSimpleResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSuggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCardRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCardCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentWebhookStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2BatchDeleteIntentsRequestInput = new GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput();
    $request->googleCloudDialogflowV2BatchDeleteIntentsRequestInput->intents = [
        new GoogleCloudDialogflowV2IntentInput(),
        new GoogleCloudDialogflowV2IntentInput(),
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'magni';
    $request->key = 'assumenda';
    $request->oauthToken = 'ipsam';
    $request->parent = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'excepturi';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentBatchInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCarouselSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCarouselSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageListSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageListSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessagePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageQuickReplies;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSimpleResponses;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSimpleResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSuggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCardRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCardCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentWebhookStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2BatchUpdateIntentsRequestInput = new GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput();
    $request->googleCloudDialogflowV2BatchUpdateIntentsRequestInput->intentBatchInline = new GoogleCloudDialogflowV2IntentBatchInput();
    $request->googleCloudDialogflowV2BatchUpdateIntentsRequestInput->intentBatchInline->intents = [
        new GoogleCloudDialogflowV2IntentInput(),
        new GoogleCloudDialogflowV2IntentInput(),
        new GoogleCloudDialogflowV2IntentInput(),
    ];
    $request->googleCloudDialogflowV2BatchUpdateIntentsRequestInput->intentBatchUri = 'tempore';
    $request->googleCloudDialogflowV2BatchUpdateIntentsRequestInput->intentView = GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum::INTENT_VIEW_UNSPECIFIED;
    $request->googleCloudDialogflowV2BatchUpdateIntentsRequestInput->languageCode = 'delectus';
    $request->googleCloudDialogflowV2BatchUpdateIntentsRequestInput->updateMask = 'eum';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'aliquid';
    $request->key = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageImage;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCardButton;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCarouselSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageCarouselSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageListSelect;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageListSelectItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessagePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageQuickReplies;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSimpleResponses;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSimpleResponse;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSuggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageSuggestion;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCard;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageColumnProperties;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCardRow;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageTableCardCell;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentMessageText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhrase;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhrasePart;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2IntentWebhookStateEnum;
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
    $request->googleCloudDialogflowV2IntentInput = new GoogleCloudDialogflowV2IntentInput();
    $request->googleCloudDialogflowV2IntentInput->action = 'dolorum';
    $request->googleCloudDialogflowV2IntentInput->defaultResponsePlatforms = [
        GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum::KIK,
        GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum::ACTIONS_ON_GOOGLE,
    ];
    $request->googleCloudDialogflowV2IntentInput->displayName = 'maiores';
    $request->googleCloudDialogflowV2IntentInput->endInteraction = false;
    $request->googleCloudDialogflowV2IntentInput->events = [
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->googleCloudDialogflowV2IntentInput->inputContextNames = [
        'ea',
        'aliquid',
        'laborum',
        'accusamus',
    ];
    $request->googleCloudDialogflowV2IntentInput->isFallback = false;
    $request->googleCloudDialogflowV2IntentInput->liveAgentHandoff = false;
    $request->googleCloudDialogflowV2IntentInput->messages = [
        new GoogleCloudDialogflowV2IntentMessage(),
    ];
    $request->googleCloudDialogflowV2IntentInput->mlDisabled = false;
    $request->googleCloudDialogflowV2IntentInput->name = 'Jon Tillman';
    $request->googleCloudDialogflowV2IntentInput->outputContexts = [
        new GoogleCloudDialogflowV2Context(),
        new GoogleCloudDialogflowV2Context(),
        new GoogleCloudDialogflowV2Context(),
    ];
    $request->googleCloudDialogflowV2IntentInput->parameters = [
        new GoogleCloudDialogflowV2IntentParameter(),
        new GoogleCloudDialogflowV2IntentParameter(),
        new GoogleCloudDialogflowV2IntentParameter(),
    ];
    $request->googleCloudDialogflowV2IntentInput->parentFollowupIntentName = 'id';
    $request->googleCloudDialogflowV2IntentInput->priority = 501324;
    $request->googleCloudDialogflowV2IntentInput->resetContexts = false;
    $request->googleCloudDialogflowV2IntentInput->trainingPhrases = [
        new GoogleCloudDialogflowV2IntentTrainingPhrase(),
        new GoogleCloudDialogflowV2IntentTrainingPhrase(),
        new GoogleCloudDialogflowV2IntentTrainingPhrase(),
    ];
    $request->googleCloudDialogflowV2IntentInput->webhookState = GoogleCloudDialogflowV2IntentWebhookStateEnum::WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->intentView = DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum::INTENT_VIEW_FULL;
    $request->key = 'omnis';
    $request->languageCode = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

    $requestSecurity = new DialogflowProjectsLocationsAgentIntentsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentIntentsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Intent !== null) {
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
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'nobis';
    $request->intentView = DialogflowProjectsLocationsAgentIntentsListIntentViewEnum::INTENT_VIEW_UNSPECIFIED;
    $request->key = 'vero';
    $request->languageCode = 'aspernatur';
    $request->oauthToken = 'architecto';
    $request->pageSize = 298282;
    $request->pageToken = 'et';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DialogflowProjectsLocationsAgentIntentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentIntentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentIntentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListIntentsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2RestoreAgentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentRestoreSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentRestoreSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentRestoreSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentRestoreRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2RestoreAgentRequest = new GoogleCloudDialogflowV2RestoreAgentRequest();
    $request->googleCloudDialogflowV2RestoreAgentRequest->agentContent = 'accusantium';
    $request->googleCloudDialogflowV2RestoreAgentRequest->agentUri = 'mollitia';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ad';
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->pageSize = 100226;
    $request->pageToken = 'architecto';
    $request->parent = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new DialogflowProjectsLocationsAgentSearchSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSearchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSearch($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2SearchAgentsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Context;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsContextsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2Context = new GoogleCloudDialogflowV2Context();
    $request->googleCloudDialogflowV2Context->lifespanCount = 841140;
    $request->googleCloudDialogflowV2Context->name = 'Mr. Jenna Stroman';
    $request->googleCloudDialogflowV2Context->parameters = [
        'magni' => 'sunt',
        'quo' => 'illum',
        'pariatur' => 'maxime',
    ];
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->key = 'accusantium';
    $request->oauthToken = 'ab';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsContextsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Context !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'pariatur';
    $request->fields = 'nemo';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 855804;
    $request->pageToken = 'amet';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsContextsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsContextsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListContextsResponse !== null) {
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
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'totam';
    $request->key = 'dignissimos';
    $request->oauthToken = 'eaque';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'perferendis';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2DetectIntentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2OutputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2QueryInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2InputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SpeechContext;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2QueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeLatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsDetectIntentRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2DetectIntentRequest = new GoogleCloudDialogflowV2DetectIntentRequest();
    $request->googleCloudDialogflowV2DetectIntentRequest->inputAudio = 'minus';
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig = new GoogleCloudDialogflowV2OutputAudioConfig();
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->audioEncoding = GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_MP3;
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->sampleRateHertz = 223924;
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig = new GoogleCloudDialogflowV2SynthesizeSpeechConfig();
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->effectsProfileId = [
        'nostrum',
        'hic',
        'recusandae',
        'omnis',
    ];
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->pitch = 7044.15;
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->speakingRate = 5966.56;
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice = new GoogleCloudDialogflowV2VoiceSelectionParams();
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->name = 'Robyn Cruickshank';
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->voice->ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_UNSPECIFIED;
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfig->synthesizeSpeechConfig->volumeGainDb = 5772.29;
    $request->googleCloudDialogflowV2DetectIntentRequest->outputAudioConfigMask = 'rerum';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput = new GoogleCloudDialogflowV2QueryInput();
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig = new GoogleCloudDialogflowV2InputAudioConfig();
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->audioEncoding = GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum::AUDIO_ENCODING_LINEAR16;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->disableNoSpeechRecognizedEvent = false;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->enableAutomaticPunctuation = false;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->enableWordInfo = false;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->languageCode = 'asperiores';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->model = 'earum';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->modelVariant = GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->phraseHints = [
        'dolorum',
        'deleniti',
        'pariatur',
    ];
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->sampleRateHertz = 589910;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->singleUtterance = false;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->audioConfig->speechContexts = [
        new GoogleCloudDialogflowV2SpeechContext(),
        new GoogleCloudDialogflowV2SpeechContext(),
        new GoogleCloudDialogflowV2SpeechContext(),
        new GoogleCloudDialogflowV2SpeechContext(),
    ];
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->event = new GoogleCloudDialogflowV2EventInput();
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->event->languageCode = 'libero';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->event->name = 'Alex Luettgen';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->event->parameters = [
        'dolor' => 'qui',
    ];
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->text = new GoogleCloudDialogflowV2TextInput();
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->text->languageCode = 'ipsum';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryInput->text->text = 'hic';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams = new GoogleCloudDialogflowV2QueryParameters();
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->contexts = [
        new GoogleCloudDialogflowV2Context(),
        new GoogleCloudDialogflowV2Context(),
        new GoogleCloudDialogflowV2Context(),
    ];
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->geoLocation = new GoogleTypeLatLng();
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->geoLocation->latitude = 7395.51;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->geoLocation->longitude = 4521.09;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->payload = [
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->resetContexts = false;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->sentimentAnalysisRequestConfig = new GoogleCloudDialogflowV2SentimentAnalysisRequestConfig();
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->sentimentAnalysisRequestConfig->analyzeQueryTextSentiment = false;
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->sessionEntityTypes = [
        new GoogleCloudDialogflowV2SessionEntityType(),
    ];
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->timeZone = 'ipsa';
    $request->googleCloudDialogflowV2DetectIntentRequest->queryParams->webhookHeaders = [
        'iure' => 'odio',
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'voluptatibus';
    $request->key = 'voluptas';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->session = 'atque';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsDetectIntent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2DetectIntentResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2SessionEntityType = new GoogleCloudDialogflowV2SessionEntityType();
    $request->googleCloudDialogflowV2SessionEntityType->entities = [
        new GoogleCloudDialogflowV2EntityTypeEntity(),
        new GoogleCloudDialogflowV2EntityTypeEntity(),
        new GoogleCloudDialogflowV2EntityTypeEntity(),
    ];
    $request->googleCloudDialogflowV2SessionEntityType->entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum::ENTITY_OVERRIDE_MODE_SUPPLEMENT;
    $request->googleCloudDialogflowV2SessionEntityType->name = 'Colleen Pagac';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'asperiores';
    $request->fields = 'nihil';
    $request->key = 'ipsum';
    $request->languageCode = 'voluptate';
    $request->oauthToken = 'id';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsEntityTypesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2SessionEntityType !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'optio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'saepe';
    $request->key = 'suscipit';
    $request->oauthToken = 'deserunt';
    $request->pageSize = 588317;
    $request->pageToken = 'minima';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentSessionsEntityTypesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListSessionEntityTypesResponse !== null) {
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
        'tempora' => 'vel',
        'quod' => 'officiis',
    ];
    $request->accessToken = 'qui';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'esse';
    $request->key = 'harum';
    $request->oauthToken = 'iusto';
    $request->parent = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VersionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsAgentVersionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsAgentVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2VersionInput = new GoogleCloudDialogflowV2VersionInput();
    $request->googleCloudDialogflowV2VersionInput->description = 'accusamus';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'sapiente';
    $request->key = 'totam';
    $request->oauthToken = 'nihil';
    $request->parent = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new DialogflowProjectsLocationsAgentVersionsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentVersionsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Version !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'quam';
    $request->key = 'ipsum';
    $request->oauthToken = 'incidunt';
    $request->pageSize = 186458;
    $request->pageToken = 'cupiditate';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DialogflowProjectsLocationsAgentVersionsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAgentVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAgentVersionsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListVersionsResponse !== null) {
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
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'dolores';
    $request->filter = 'distinctio';
    $request->key = 'facilis';
    $request->oauthToken = 'aliquid';
    $request->pageSize = 463150;
    $request->pageToken = 'molestias';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new DialogflowProjectsLocationsAnswerRecordsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsAnswerRecordsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsAnswerRecordsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListAnswerRecordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationDatasetsCreate

Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ConversationDatasetInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ConversationInfo;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2GcsSources;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationDatasetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2ConversationDatasetInput = new GoogleCloudDialogflowV2ConversationDatasetInput();
    $request->googleCloudDialogflowV2ConversationDatasetInput->conversationInfo = new GoogleCloudDialogflowV2ConversationInfo();
    $request->googleCloudDialogflowV2ConversationDatasetInput->conversationInfo->languageCode = 'odio';
    $request->googleCloudDialogflowV2ConversationDatasetInput->description = 'sunt';
    $request->googleCloudDialogflowV2ConversationDatasetInput->displayName = 'ullam';
    $request->googleCloudDialogflowV2ConversationDatasetInput->inputConfig = new GoogleCloudDialogflowV2InputConfig();
    $request->googleCloudDialogflowV2ConversationDatasetInput->inputConfig->gcsSource = new GoogleCloudDialogflowV2GcsSources();
    $request->googleCloudDialogflowV2ConversationDatasetInput->inputConfig->gcsSource->uris = [
        'hic',
        'voluptatem',
        'cumque',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'saepe';
    $request->key = 'ipsum';
    $request->oauthToken = 'veritatis';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DialogflowProjectsLocationsConversationDatasetsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationDatasetsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationDatasetsImportConversationData

Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ImportConversationDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2InputConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2GcsSources;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2ImportConversationDataRequest = new GoogleCloudDialogflowV2ImportConversationDataRequest();
    $request->googleCloudDialogflowV2ImportConversationDataRequest->inputConfig = new GoogleCloudDialogflowV2InputConfig();
    $request->googleCloudDialogflowV2ImportConversationDataRequest->inputConfig->gcsSource = new GoogleCloudDialogflowV2GcsSources();
    $request->googleCloudDialogflowV2ImportConversationDataRequest->inputConfig->gcsSource->uris = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'aut';
    $request->key = 'quas';
    $request->name = 'William Ortiz';
    $request->oauthToken = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ut';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationDatasetsImportConversationData($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationDatasetsList

Returns the list of all conversation datasets in the specified project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationDatasetsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationDatasetsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odio';
    $request->fields = 'occaecati';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'quisquam';
    $request->pageSize = 876506;
    $request->pageToken = 'omnis';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new DialogflowProjectsLocationsConversationDatasetsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationDatasetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationDatasetsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListConversationDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationModelsCreate

Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ConversationModelInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2InputDataset;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SmartReplyModelMetadata;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationModelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2ConversationModelInput = new GoogleCloudDialogflowV2ConversationModelInput();
    $request->googleCloudDialogflowV2ConversationModelInput->articleSuggestionModelMetadata = new GoogleCloudDialogflowV2ArticleSuggestionModelMetadata();
    $request->googleCloudDialogflowV2ConversationModelInput->articleSuggestionModelMetadata->trainingModelType = GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum::SMART_REPLY_BERT_MODEL;
    $request->googleCloudDialogflowV2ConversationModelInput->datasets = [
        new GoogleCloudDialogflowV2InputDataset(),
        new GoogleCloudDialogflowV2InputDataset(),
        new GoogleCloudDialogflowV2InputDataset(),
        new GoogleCloudDialogflowV2InputDataset(),
    ];
    $request->googleCloudDialogflowV2ConversationModelInput->displayName = 'dignissimos';
    $request->googleCloudDialogflowV2ConversationModelInput->languageCode = 'hic';
    $request->googleCloudDialogflowV2ConversationModelInput->name = 'Jermaine Kuhic';
    $request->googleCloudDialogflowV2ConversationModelInput->smartReplyModelMetadata = new GoogleCloudDialogflowV2SmartReplyModelMetadata();
    $request->googleCloudDialogflowV2ConversationModelInput->smartReplyModelMetadata->trainingModelType = GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum::SMART_REPLY_BERT_MODEL;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'illum';
    $request->key = 'sequi';
    $request->oauthToken = 'natus';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'exercitationem';

    $requestSecurity = new DialogflowProjectsLocationsConversationModelsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationModelsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationModelsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationModelsDeploy

Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsDeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsDeploySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsDeploySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsDeploySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationModelsDeployRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'porro' => 'maiores',
    ];
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'ducimus';
    $request->key = 'alias';
    $request->name = 'Don Hills';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'ratione';

    $requestSecurity = new DialogflowProjectsLocationsConversationModelsDeploySecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationModelsDeploySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationModelsDeploy($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationModelsEvaluationsCreate

Creates evaluation of a conversation model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ConversationModelEvaluationInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EvaluationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2InputDataset;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SmartReplyMetrics;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput = new GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput();
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation = new GoogleCloudDialogflowV2ConversationModelEvaluationInput();
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->displayName = 'laudantium';
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig = new GoogleCloudDialogflowV2EvaluationConfig();
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig->datasets = [
        new GoogleCloudDialogflowV2InputDataset(),
    ];
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig->smartComposeConfig = new GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig();
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig->smartComposeConfig->allowlistDocument = 'dolor';
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig->smartComposeConfig->maxResultCount = 980700;
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig->smartReplyConfig = new GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig();
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig->smartReplyConfig->allowlistDocument = 'quasi';
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->evaluationConfig->smartReplyConfig->maxResultCount = 406120;
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->name = 'Marshall Wiza';
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->smartReplyMetrics = new GoogleCloudDialogflowV2SmartReplyMetrics();
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->smartReplyMetrics->allowlistCoverage = 7888.73;
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->smartReplyMetrics->conversationCount = 'saepe';
    $request->googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput->conversationModelEvaluation->smartReplyMetrics->topNMetrics = [
        new GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics(),
        new GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics(),
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'aliquid';
    $request->key = 'inventore';
    $request->oauthToken = 'magnam';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'recusandae';

    $requestSecurity = new DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationModelsEvaluationsCreate($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationModelsEvaluationsList

Lists evaluations of a conversation model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationModelsEvaluationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'libero';
    $request->key = 'aut';
    $request->oauthToken = 'aut';
    $request->pageSize = 533466;
    $request->pageToken = 'impedit';
    $request->parent = 'aliquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'inventore';

    $requestSecurity = new DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationModelsEvaluationsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListConversationModelEvaluationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationModelsList

Lists conversation models.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationModelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'placeat';
    $request->key = 'velit';
    $request->oauthToken = 'eum';
    $request->pageSize = 420539;
    $request->pageToken = 'nobis';
    $request->parent = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new DialogflowProjectsLocationsConversationModelsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationModelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationModelsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListConversationModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationModelsUndeploy

Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsUndeployRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsUndeploySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationModelsUndeployRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'tempora' => 'numquam',
    ];
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'molestiae';
    $request->key = 'magnam';
    $request->name = 'Esther Koch';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new DialogflowProjectsLocationsConversationModelsUndeploySecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationModelsUndeploy($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2ClearSuggestionFeatureConfigRequest = new GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest();
    $request->googleCloudDialogflowV2ClearSuggestionFeatureConfigRequest->participantRole = GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum::HUMAN_AGENT;
    $request->googleCloudDialogflowV2ClearSuggestionFeatureConfigRequest->suggestionFeatureType = GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum::ARTICLE_SUGGESTION;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->conversationProfile = 'quisquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'quo';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ConversationProfileInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AutomatedAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestionFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestionFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2NotificationConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentHandoffConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2LoggingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SpeechToTextConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationProfilesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2ConversationProfileInput = new GoogleCloudDialogflowV2ConversationProfileInput();
    $request->googleCloudDialogflowV2ConversationProfileInput->automatedAgentConfig = new GoogleCloudDialogflowV2AutomatedAgentConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->automatedAgentConfig->agent = 'quo';
    $request->googleCloudDialogflowV2ConversationProfileInput->displayName = 'fuga';
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->endUserSuggestionConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->endUserSuggestionConfig->featureConfigs = [
        new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig(),
        new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig(),
    ];
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->endUserSuggestionConfig->groupSuggestionResponses = false;
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->humanAgentSuggestionConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->humanAgentSuggestionConfig->featureConfigs = [
        new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig(),
    ];
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->humanAgentSuggestionConfig->groupSuggestionResponses = false;
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->messageAnalysisConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->messageAnalysisConfig->enableEntityExtraction = false;
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->messageAnalysisConfig->enableSentimentAnalysis = false;
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->notificationConfig = new GoogleCloudDialogflowV2NotificationConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->notificationConfig->messageFormat = GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum::PROTO;
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentAssistantConfig->notificationConfig->topic = 'ab';
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig = new GoogleCloudDialogflowV2HumanAgentHandoffConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig->livePersonConfig = new GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig->livePersonConfig->accountNumber = 'cupiditate';
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig = new GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->buttonId = 'consequatur';
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->deploymentId = 'tempora';
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->endpointDomain = 'debitis';
    $request->googleCloudDialogflowV2ConversationProfileInput->humanAgentHandoffConfig->salesforceLiveAgentConfig->organizationId = 'ipsam';
    $request->googleCloudDialogflowV2ConversationProfileInput->languageCode = 'aspernatur';
    $request->googleCloudDialogflowV2ConversationProfileInput->loggingConfig = new GoogleCloudDialogflowV2LoggingConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->loggingConfig->enableStackdriverLogging = false;
    $request->googleCloudDialogflowV2ConversationProfileInput->name = 'Angelica Koelpin MD';
    $request->googleCloudDialogflowV2ConversationProfileInput->newMessageEventNotificationConfig = new GoogleCloudDialogflowV2NotificationConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->newMessageEventNotificationConfig->messageFormat = GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum::JSON;
    $request->googleCloudDialogflowV2ConversationProfileInput->newMessageEventNotificationConfig->topic = 'dignissimos';
    $request->googleCloudDialogflowV2ConversationProfileInput->notificationConfig = new GoogleCloudDialogflowV2NotificationConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->notificationConfig->messageFormat = GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum::MESSAGE_FORMAT_UNSPECIFIED;
    $request->googleCloudDialogflowV2ConversationProfileInput->notificationConfig->topic = 'nihil';
    $request->googleCloudDialogflowV2ConversationProfileInput->securitySettings = 'totam';
    $request->googleCloudDialogflowV2ConversationProfileInput->sttConfig = new GoogleCloudDialogflowV2SpeechToTextConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->sttConfig->model = 'accusamus';
    $request->googleCloudDialogflowV2ConversationProfileInput->sttConfig->speechModelVariant = GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum::USE_BEST_AVAILABLE;
    $request->googleCloudDialogflowV2ConversationProfileInput->timeZone = 'odio';
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig = new GoogleCloudDialogflowV2SynthesizeSpeechConfig();
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig->effectsProfileId = [
        'commodi',
        'sapiente',
        'dolores',
    ];
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig->pitch = 6455.7;
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig->speakingRate = 4752.89;
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig->voice = new GoogleCloudDialogflowV2VoiceSelectionParams();
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig->voice->name = 'Robyn Keeling';
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig->voice->ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_UNSPECIFIED;
    $request->googleCloudDialogflowV2ConversationProfileInput->ttsConfig->volumeGainDb = 5361.78;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'incidunt';
    $request->key = 'atque';
    $request->oauthToken = 'explicabo';
    $request->parent = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DialogflowProjectsLocationsConversationProfilesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationProfilesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ConversationProfile !== null) {
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
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'occaecati';
    $request->key = 'atque';
    $request->oauthToken = 'et';
    $request->pageSize = 456911;
    $request->pageToken = 'eveniet';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new DialogflowProjectsLocationsConversationProfilesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationProfilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationProfilesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListConversationProfilesResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestionFeature;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestionFeatureTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest = new GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->participantRole = GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum::END_USER;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationModelConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationModelConfig->model = 'aliquid';
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationProcessConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->conversationProcessConfig->recentSentencesCount = 93459;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->enableEventBasedSuggestion = false;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->confidenceThreshold = 9040.45;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings->dropHandoffMessages = false;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings->dropIvrMessages = false;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->contextFilterSettings->dropVirtualAgentMessages = false;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->dialogflowQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->dialogflowQuerySource->agent = 'vel';
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->documentQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->documentQuerySource->documents = [
        'molestiae',
        'rerum',
        'occaecati',
    ];
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->knowledgeBaseQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->knowledgeBaseQuerySource->knowledgeBases = [
        'distinctio',
        'eligendi',
    ];
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->queryConfig->maxResults = 27069;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionFeature = new GoogleCloudDialogflowV2SuggestionFeature();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionFeature->type = GoogleCloudDialogflowV2SuggestionFeatureTypeEnum::FAQ;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionTriggerSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings();
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionTriggerSettings->noSmalltalk = false;
    $request->googleCloudDialogflowV2SetSuggestionFeatureConfigRequest->suggestionFeatureConfig->suggestionTriggerSettings->onlyEndUser = false;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->conversationProfile = 'consequuntur';
    $request->fields = 'consequatur';
    $request->key = 'minus';
    $request->oauthToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'esse';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'a' => 'nulla',
        'quas' => 'esse',
        'quasi' => 'a',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->fields = 'possimus';
    $request->key = 'quia';
    $request->name = 'Mr. Marlon Schultz V';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DialogflowProjectsLocationsConversationsCompleteSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsCompleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsComplete($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Conversation !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ConversationInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ConversationConversationStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2ConversationInput = new GoogleCloudDialogflowV2ConversationInput();
    $request->googleCloudDialogflowV2ConversationInput->conversationProfile = 'vel';
    $request->googleCloudDialogflowV2ConversationInput->conversationStage = GoogleCloudDialogflowV2ConversationConversationStageEnum::VIRTUAL_AGENT_STAGE;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->conversationId = 'soluta';
    $request->fields = 'accusantium';
    $request->key = 'aliquam';
    $request->oauthToken = 'sapiente';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new DialogflowProjectsLocationsConversationsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Conversation !== null) {
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
    $request->accessToken = 'aut';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'qui';
    $request->fields = 'quibusdam';
    $request->filter = 'ex';
    $request->key = 'deleniti';
    $request->oauthToken = 'itaque';
    $request->pageSize = 680270;
    $request->pageToken = 'architecto';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'at';

    $requestSecurity = new DialogflowProjectsLocationsConversationsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListConversationsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minima';
    $request->fields = 'veritatis';
    $request->filter = 'consectetur';
    $request->key = 'adipisci';
    $request->oauthToken = 'iste';
    $request->pageSize = 839513;
    $request->pageToken = 'accusantium';
    $request->parent = 'rem';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DialogflowProjectsLocationsConversationsMessagesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsMessagesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsMessagesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListMessagesResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AnalyzeContentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EventInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2QueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Context;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeLatLng;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SessionEntityType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2EntityTypeEntity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2OutputAudioConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SynthesizeSpeechConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParams;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2TextInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2AnalyzeContentRequest = new GoogleCloudDialogflowV2AnalyzeContentRequest();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->assistQueryParams->documentsMetadataFilters = [
        'corrupti' => 'non',
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->cxParameters = [
        'dolor' => 'occaecati',
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->eventInput = new GoogleCloudDialogflowV2EventInput();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->eventInput->languageCode = 'numquam';
    $request->googleCloudDialogflowV2AnalyzeContentRequest->eventInput->name = 'Ms. Benjamin Hirthe DVM';
    $request->googleCloudDialogflowV2AnalyzeContentRequest->eventInput->parameters = [
        'velit' => 'voluptatibus',
        'voluptas' => 'asperiores',
        'aperiam' => 'ea',
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams = new GoogleCloudDialogflowV2QueryParameters();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->contexts = [
        new GoogleCloudDialogflowV2Context(),
        new GoogleCloudDialogflowV2Context(),
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->geoLocation = new GoogleTypeLatLng();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->geoLocation->latitude = 1629.54;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->geoLocation->longitude = 8315.2;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->payload = [
        'maxime' => 'dignissimos',
        'officia' => 'asperiores',
        'nemo' => 'quae',
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->resetContexts = false;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->sentimentAnalysisRequestConfig = new GoogleCloudDialogflowV2SentimentAnalysisRequestConfig();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->sentimentAnalysisRequestConfig->analyzeQueryTextSentiment = false;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->sessionEntityTypes = [
        new GoogleCloudDialogflowV2SessionEntityType(),
        new GoogleCloudDialogflowV2SessionEntityType(),
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->timeZone = 'porro';
    $request->googleCloudDialogflowV2AnalyzeContentRequest->queryParams->webhookHeaders = [
        'labore' => 'ab',
        'adipisci' => 'fuga',
        'id' => 'suscipit',
        'velit' => 'culpa',
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig = new GoogleCloudDialogflowV2OutputAudioConfig();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->audioEncoding = GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum::OUTPUT_AUDIO_ENCODING_MP364_KBPS;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->sampleRateHertz = 926880;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig = new GoogleCloudDialogflowV2SynthesizeSpeechConfig();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->effectsProfileId = [
        'fugiat',
        'vel',
        'ducimus',
    ];
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->pitch = 5546.88;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->speakingRate = 4278.34;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->voice = new GoogleCloudDialogflowV2VoiceSelectionParams();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->voice->name = 'Elena Quigley';
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->voice->ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum::SSML_VOICE_GENDER_MALE;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->replyAudioConfig->synthesizeSpeechConfig->volumeGainDb = 3605.45;
    $request->googleCloudDialogflowV2AnalyzeContentRequest->requestId = 'reiciendis';
    $request->googleCloudDialogflowV2AnalyzeContentRequest->textInput = new GoogleCloudDialogflowV2TextInput();
    $request->googleCloudDialogflowV2AnalyzeContentRequest->textInput->languageCode = 'assumenda';
    $request->googleCloudDialogflowV2AnalyzeContentRequest->textInput->text = 'nemo';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'cum';
    $request->key = 'consectetur';
    $request->oauthToken = 'in';
    $request->participant = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2AnalyzeContentResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Participant;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2Participant = new GoogleCloudDialogflowV2Participant();
    $request->googleCloudDialogflowV2Participant->documentsMetadataFilters = [
        'reiciendis' => 'quidem',
        'saepe' => 'necessitatibus',
    ];
    $request->googleCloudDialogflowV2Participant->name = 'Katherine Zemlak';
    $request->googleCloudDialogflowV2Participant->obfuscatedExternalUserId = 'amet';
    $request->googleCloudDialogflowV2Participant->role = GoogleCloudDialogflowV2ParticipantRoleEnum::ROLE_UNSPECIFIED;
    $request->googleCloudDialogflowV2Participant->sipRecordingMediaLabel = 'dignissimos';
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

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Participant !== null) {
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
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'voluptas';
    $request->key = 'voluptas';
    $request->oauthToken = 'voluptas';
    $request->pageSize = 324405;
    $request->pageToken = 'nobis';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'adipisci';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListParticipantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles

Gets suggested articles for a participant based on specific historical messages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestArticlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2SuggestArticlesRequest = new GoogleCloudDialogflowV2SuggestArticlesRequest();
    $request->googleCloudDialogflowV2SuggestArticlesRequest->assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters();
    $request->googleCloudDialogflowV2SuggestArticlesRequest->assistQueryParams->documentsMetadataFilters = [
        'dolore' => 'aliquam',
        'officiis' => 'temporibus',
    ];
    $request->googleCloudDialogflowV2SuggestArticlesRequest->contextSize = 351870;
    $request->googleCloudDialogflowV2SuggestArticlesRequest->latestMessage = 'adipisci';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->fields = 'hic';
    $request->key = 'nesciunt';
    $request->oauthToken = 'culpa';
    $request->parent = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2SuggestArticlesResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestFaqAnswersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2SuggestFaqAnswersRequest = new GoogleCloudDialogflowV2SuggestFaqAnswersRequest();
    $request->googleCloudDialogflowV2SuggestFaqAnswersRequest->assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters();
    $request->googleCloudDialogflowV2SuggestFaqAnswersRequest->assistQueryParams->documentsMetadataFilters = [
        'sit' => 'rerum',
        'sed' => 'reiciendis',
        'explicabo' => 'asperiores',
        'facilis' => 'voluptate',
    ];
    $request->googleCloudDialogflowV2SuggestFaqAnswersRequest->contextSize = 709072;
    $request->googleCloudDialogflowV2SuggestFaqAnswersRequest->latestMessage = 'ab';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'sed';
    $request->key = 'in';
    $request->oauthToken = 'commodi';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'unde';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2SuggestFaqAnswersResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestSmartRepliesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2TextInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2SuggestSmartRepliesRequest = new GoogleCloudDialogflowV2SuggestSmartRepliesRequest();
    $request->googleCloudDialogflowV2SuggestSmartRepliesRequest->contextSize = 382808;
    $request->googleCloudDialogflowV2SuggestSmartRepliesRequest->currentTextInput = new GoogleCloudDialogflowV2TextInput();
    $request->googleCloudDialogflowV2SuggestSmartRepliesRequest->currentTextInput->languageCode = 'sapiente';
    $request->googleCloudDialogflowV2SuggestSmartRepliesRequest->currentTextInput->text = 'debitis';
    $request->googleCloudDialogflowV2SuggestSmartRepliesRequest->latestMessage = 'illo';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corrupti';
    $request->fields = 'maiores';
    $request->key = 'incidunt';
    $request->oauthToken = 'sed';
    $request->parent = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2SuggestSmartRepliesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary

Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2SuggestConversationSummaryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AssistQueryParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudDialogflowV2SuggestConversationSummaryRequest = new GoogleCloudDialogflowV2SuggestConversationSummaryRequest();
    $request->googleCloudDialogflowV2SuggestConversationSummaryRequest->assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters();
    $request->googleCloudDialogflowV2SuggestConversationSummaryRequest->assistQueryParams->documentsMetadataFilters = [
        'quos' => 'voluptatibus',
        'tempora' => 'tempora',
        'voluptate' => 'reiciendis',
    ];
    $request->googleCloudDialogflowV2SuggestConversationSummaryRequest->contextSize = 401713;
    $request->googleCloudDialogflowV2SuggestConversationSummaryRequest->latestMessage = 'sit';
    $request->accessToken = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'praesentium';
    $request->conversation = 'facilis';
    $request->fields = 'quaerat';
    $request->key = 'incidunt';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2SuggestConversationSummaryResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->fields = 'recusandae';
    $request->key = 'reiciendis';
    $request->oauthToken = 'nulla';
    $request->parent = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'numquam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'laudantium';
    $request->key = 'exercitationem';
    $request->oauthToken = 'praesentium';
    $request->parent = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new DialogflowProjectsLocationsGetAgentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsGetAgentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsGetAgent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Agent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesCreate

Creates a knowledge base.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2KnowledgeBase;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2KnowledgeBase = new GoogleCloudDialogflowV2KnowledgeBase();
    $request->googleCloudDialogflowV2KnowledgeBase->displayName = 'hic';
    $request->googleCloudDialogflowV2KnowledgeBase->languageCode = 'expedita';
    $request->googleCloudDialogflowV2KnowledgeBase->name = 'Tony Pagac';
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

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesCreateSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesCreate($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2KnowledgeBase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2DocumentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2DocumentReloadStatus;
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
    $request->googleCloudDialogflowV2DocumentInput = new GoogleCloudDialogflowV2DocumentInput();
    $request->googleCloudDialogflowV2DocumentInput->contentUri = 'magnam';
    $request->googleCloudDialogflowV2DocumentInput->displayName = 'consequatur';
    $request->googleCloudDialogflowV2DocumentInput->enableAutoReload = false;
    $request->googleCloudDialogflowV2DocumentInput->knowledgeTypes = [
        GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum::FAQ,
        GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum::KNOWLEDGE_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus = new GoogleCloudDialogflowV2DocumentReloadStatus();
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status = new GoogleRpcStatus();
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status->code = 530537;
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status->details = [
        [
            'corporis' => 'et',
            'blanditiis' => 'ex',
            'sed' => 'sit',
            'vel' => 'nostrum',
        ],
        [
            'error' => 'consequatur',
            'incidunt' => 'reiciendis',
            'dolorem' => 'harum',
            'dicta' => 'architecto',
        ],
        [
            'labore' => 'quidem',
            'atque' => 'laborum',
            'nam' => 'tenetur',
        ],
    ];
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status->message = 'laboriosam';
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->time = 'alias';
    $request->googleCloudDialogflowV2DocumentInput->metadata = [
        'deserunt' => 'voluptate',
    ];
    $request->googleCloudDialogflowV2DocumentInput->mimeType = 'unde';
    $request->googleCloudDialogflowV2DocumentInput->name = 'Rene Skiles';
    $request->googleCloudDialogflowV2DocumentInput->rawContent = 'perferendis';
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reprehenderit';
    $request->fields = 'facere';
    $request->key = 'fuga';
    $request->oauthToken = 'praesentium';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'quisquam';

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

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'asperiores';
    $request->force = false;
    $request->key = 'totam';
    $request->name = 'Ms. Alison Schoen';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'error';

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

## dialogflowProjectsLocationsKnowledgeBasesDocumentsExport

Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ExportDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2GcsDestination;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2ExportDocumentRequest = new GoogleCloudDialogflowV2ExportDocumentRequest();
    $request->googleCloudDialogflowV2ExportDocumentRequest->exportFullContent = false;
    $request->googleCloudDialogflowV2ExportDocumentRequest->gcsDestination = new GoogleCloudDialogflowV2GcsDestination();
    $request->googleCloudDialogflowV2ExportDocumentRequest->gcsDestination->uri = 'https://unacceptable-outfit.biz';
    $request->googleCloudDialogflowV2ExportDocumentRequest->smartMessagingPartialUpdate = false;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'maiores';
    $request->fields = 'corrupti';
    $request->key = 'at';
    $request->name = 'Guy Hoeger';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsExport($request, $requestSecurity);

    if ($response->googleLongrunningOperation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsImport

Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ImportDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ImportDocumentTemplate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2GcsSources;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2ImportDocumentsRequest = new GoogleCloudDialogflowV2ImportDocumentsRequest();
    $request->googleCloudDialogflowV2ImportDocumentsRequest->documentTemplate = new GoogleCloudDialogflowV2ImportDocumentTemplate();
    $request->googleCloudDialogflowV2ImportDocumentsRequest->documentTemplate->knowledgeTypes = [
        GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum::AGENT_FACING_SMART_REPLY,
        GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum::KNOWLEDGE_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudDialogflowV2ImportDocumentsRequest->documentTemplate->metadata = [
        'dicta' => 'accusantium',
        'beatae' => 'dolores',
        'enim' => 'laboriosam',
        'velit' => 'a',
    ];
    $request->googleCloudDialogflowV2ImportDocumentsRequest->documentTemplate->mimeType = 'molestias';
    $request->googleCloudDialogflowV2ImportDocumentsRequest->gcsSource = new GoogleCloudDialogflowV2GcsSources();
    $request->googleCloudDialogflowV2ImportDocumentsRequest->gcsSource->uris = [
        'saepe',
        'consequuntur',
    ];
    $request->googleCloudDialogflowV2ImportDocumentsRequest->importGcsCustomMetadata = false;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perspiciatis';
    $request->fields = 'in';
    $request->key = 'adipisci';
    $request->oauthToken = 'eveniet';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'id';

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

Returns the list of all documents of the knowledge base.

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illo';
    $request->fields = 'corporis';
    $request->filter = 'quidem';
    $request->key = 'eveniet';
    $request->oauthToken = 'non';
    $request->pageSize = 878493;
    $request->pageToken = 'doloremque';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesDocumentsList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListDocumentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2DocumentInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2DocumentReloadStatus;
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
    $request->googleCloudDialogflowV2DocumentInput = new GoogleCloudDialogflowV2DocumentInput();
    $request->googleCloudDialogflowV2DocumentInput->contentUri = 'eveniet';
    $request->googleCloudDialogflowV2DocumentInput->displayName = 'qui';
    $request->googleCloudDialogflowV2DocumentInput->enableAutoReload = false;
    $request->googleCloudDialogflowV2DocumentInput->knowledgeTypes = [
        GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum::EXTRACTIVE_QA,
        GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum::AGENT_FACING_SMART_REPLY,
        GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum::KNOWLEDGE_TYPE_UNSPECIFIED,
    ];
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus = new GoogleCloudDialogflowV2DocumentReloadStatus();
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status = new GoogleRpcStatus();
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status->code = 672582;
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status->details = [
        [
            'rem' => 'aliquam',
            'ad' => 'repellat',
            'alias' => 'corporis',
        ],
        [
            'nihil' => 'mollitia',
            'voluptas' => 'alias',
            'maiores' => 'reiciendis',
        ],
        [
            'id' => 'minima',
        ],
    ];
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->status->message = 'dolore';
    $request->googleCloudDialogflowV2DocumentInput->latestReloadStatus->time = 'dolorum';
    $request->googleCloudDialogflowV2DocumentInput->metadata = [
        'quae' => 'recusandae',
    ];
    $request->googleCloudDialogflowV2DocumentInput->mimeType = 'omnis';
    $request->googleCloudDialogflowV2DocumentInput->name = 'Minnie Jacobson';
    $request->googleCloudDialogflowV2DocumentInput->rawContent = 'adipisci';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eum';
    $request->fields = 'nemo';
    $request->key = 'recusandae';
    $request->languageCode = 'esse';
    $request->name = 'Alvin Kemmer';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->updateMask = DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum::INTENT_VIEW_UNSPECIFIED;
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'nostrum';

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

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2ReloadDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2ReloadDocumentRequest = new GoogleCloudDialogflowV2ReloadDocumentRequest();
    $request->googleCloudDialogflowV2ReloadDocumentRequest->contentUri = 'provident';
    $request->googleCloudDialogflowV2ReloadDocumentRequest->importGcsCustomMetadata = false;
    $request->googleCloudDialogflowV2ReloadDocumentRequest->smartMessagingPartialUpdate = false;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ex';
    $request->fields = 'aliquid';
    $request->key = 'accusantium';
    $request->name = 'Domingo Herman';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';

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

Returns the list of all knowledge bases of the specified agent.

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
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'officiis';
    $request->fields = 'sapiente';
    $request->filter = 'cumque';
    $request->key = 'vitae';
    $request->oauthToken = 'rerum';
    $request->pageSize = 272229;
    $request->pageToken = 'quis';
    $request->parent = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DialogflowProjectsLocationsKnowledgeBasesListSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsKnowledgeBasesList($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2ListKnowledgeBasesResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'velit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'eius';
    $request->filter = 'rem';
    $request->key = 'at';
    $request->name = 'Craig Williamson II';
    $request->oauthToken = 'beatae';
    $request->pageSize = 583404;
    $request->pageToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'hic';

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
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2Agent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AgentApiVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AgentMatchModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudDialogflowV2AgentTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSetAgentSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSetAgentSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DialogflowProjectsLocationsSetAgentSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DialogflowProjectsLocationsSetAgentRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudDialogflowV2Agent = new GoogleCloudDialogflowV2Agent();
    $request->googleCloudDialogflowV2Agent->apiVersion = GoogleCloudDialogflowV2AgentApiVersionEnum::API_VERSION_UNSPECIFIED;
    $request->googleCloudDialogflowV2Agent->avatarUri = 'earum';
    $request->googleCloudDialogflowV2Agent->classificationThreshold = 5962.11;
    $request->googleCloudDialogflowV2Agent->defaultLanguageCode = 'maiores';
    $request->googleCloudDialogflowV2Agent->description = 'debitis';
    $request->googleCloudDialogflowV2Agent->displayName = 'aliquid';
    $request->googleCloudDialogflowV2Agent->enableLogging = false;
    $request->googleCloudDialogflowV2Agent->matchMode = GoogleCloudDialogflowV2AgentMatchModeEnum::MATCH_MODE_ML_ONLY;
    $request->googleCloudDialogflowV2Agent->parent = 'suscipit';
    $request->googleCloudDialogflowV2Agent->supportedLanguageCodes = [
        'fugit',
    ];
    $request->googleCloudDialogflowV2Agent->tier = GoogleCloudDialogflowV2AgentTierEnum::TIER_ENTERPRISE_PLUS;
    $request->googleCloudDialogflowV2Agent->timeZone = 'fuga';
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'nulla';
    $request->key = 'consequatur';
    $request->oauthToken = 'quasi';
    $request->parent = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->updateMask = 'natus';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DialogflowProjectsLocationsSetAgentSecurity();
    $requestSecurity->option1 = new DialogflowProjectsLocationsSetAgentSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->dialogflowProjectsLocationsSetAgent($request, $requestSecurity);

    if ($response->googleCloudDialogflowV2Agent !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloribus';
    $request->fields = 'nulla';
    $request->key = 'necessitatibus';
    $request->name = 'Anita Kovacek IV';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'reiciendis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'dicta';
    $request->intentView = DialogflowProjectsOperationsGetIntentViewEnum::INTENT_VIEW_UNSPECIFIED;
    $request->key = 'tempora';
    $request->languageCode = 'esse';
    $request->name = 'Miss Kim Jacobs II';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'officia';

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
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'voluptas';
    $request->filter = 'iste';
    $request->key = 'id';
    $request->name = 'Isabel Schuster';
    $request->oauthToken = 'laborum';
    $request->pageSize = 726343;
    $request->pageToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'vitae';

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
