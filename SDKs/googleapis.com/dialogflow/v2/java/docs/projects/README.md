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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest req = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2BatchDeleteEntityTypesRequest = new GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest() {{
                    entityTypeNames = new String[]{{
                        add("minus"),
                        add("placeat"),
                    }};
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse res = sdk.projects.dialogflowProjectsLocationsAgentEntityTypesBatchDelete(req, new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1("deserunt", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentEntityTypesBatchUpdate

Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityType;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeBatch;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeKindEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest req = new DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2BatchUpdateEntityTypesRequest = new GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest() {{
                    entityTypeBatchInline = new GoogleCloudDialogflowV2EntityTypeBatch() {{
                        entityTypes = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityType[]{{
                            add(new GoogleCloudDialogflowV2EntityType() {{
                                autoExpansionMode = GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum.AUTO_EXPANSION_MODE_DEFAULT;
                                displayName = "odit";
                                enableFuzzyExtraction = false;
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("maiores"),
                                            add("molestiae"),
                                            add("quod"),
                                            add("quod"),
                                        }};
                                        value = "esse";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("porro"),
                                            add("dolorum"),
                                            add("dicta"),
                                        }};
                                        value = "nam";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("occaecati"),
                                            add("fugit"),
                                            add("deleniti"),
                                        }};
                                        value = "hic";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("totam"),
                                            add("beatae"),
                                            add("commodi"),
                                            add("molestiae"),
                                        }};
                                        value = "modi";
                                    }}),
                                }};
                                kind = GoogleCloudDialogflowV2EntityTypeKindEnum.KIND_UNSPECIFIED;
                                name = "Jonathon Klocko";
                            }}),
                            add(new GoogleCloudDialogflowV2EntityType() {{
                                autoExpansionMode = GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum.AUTO_EXPANSION_MODE_UNSPECIFIED;
                                displayName = "perferendis";
                                enableFuzzyExtraction = false;
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("sed"),
                                            add("iste"),
                                            add("dolor"),
                                        }};
                                        value = "natus";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        value = "fuga";
                                    }}),
                                }};
                                kind = GoogleCloudDialogflowV2EntityTypeKindEnum.KIND_MAP;
                                name = "Sheryl Kertzmann";
                            }}),
                            add(new GoogleCloudDialogflowV2EntityType() {{
                                autoExpansionMode = GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum.AUTO_EXPANSION_MODE_UNSPECIFIED;
                                displayName = "ipsa";
                                enableFuzzyExtraction = false;
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("mollitia"),
                                            add("laborum"),
                                            add("dolores"),
                                        }};
                                        value = "dolorem";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("explicabo"),
                                            add("nobis"),
                                        }};
                                        value = "enim";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("nemo"),
                                            add("minima"),
                                            add("excepturi"),
                                        }};
                                        value = "accusantium";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("culpa"),
                                            add("doloribus"),
                                        }};
                                        value = "sapiente";
                                    }}),
                                }};
                                kind = GoogleCloudDialogflowV2EntityTypeKindEnum.KIND_UNSPECIFIED;
                                name = "Mike Nicolas";
                            }}),
                            add(new GoogleCloudDialogflowV2EntityType() {{
                                autoExpansionMode = GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum.AUTO_EXPANSION_MODE_DEFAULT;
                                displayName = "occaecati";
                                enableFuzzyExtraction = false;
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("quam"),
                                            add("molestiae"),
                                        }};
                                        value = "velit";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("quia"),
                                            add("quis"),
                                            add("vitae"),
                                        }};
                                        value = "laborum";
                                    }}),
                                }};
                                kind = GoogleCloudDialogflowV2EntityTypeKindEnum.KIND_LIST;
                                name = "Christina Satterfield";
                            }}),
                        }};
                    }};;
                    entityTypeBatchUri = "ipsam";
                    languageCode = "id";
                    updateMask = "possimus";
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse res = sdk.projects.dialogflowProjectsLocationsAgentEntityTypesBatchUpdate(req, new DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEntityTypesBatchUpdateSecurityOption1("nihil", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate

Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchCreateEntitiesRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest req = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2BatchCreateEntitiesRequest = new GoogleCloudDialogflowV2BatchCreateEntitiesRequest() {{
                    entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                        add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                            synonyms = new String[]{{
                                add("cum"),
                                add("perferendis"),
                            }};
                            value = "doloremque";
                        }}),
                        add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                            synonyms = new String[]{{
                                add("ut"),
                                add("maiores"),
                            }};
                            value = "dicta";
                        }}),
                        add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                            synonyms = new String[]{{
                                add("dolore"),
                                add("iusto"),
                            }};
                            value = "dicta";
                        }}),
                    }};
                    languageCode = "harum";
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                key = "quae";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "molestias";
                uploadProtocol = "excepturi";
            }};            

            DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse res = sdk.projects.dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate(req, new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateSecurityOption1("pariatur", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete

Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchDeleteEntitiesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest req = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2BatchDeleteEntitiesRequest = new GoogleCloudDialogflowV2BatchDeleteEntitiesRequest() {{
                    entityValues = new String[]{{
                        add("quasi"),
                        add("repudiandae"),
                        add("sint"),
                        add("veritatis"),
                    }};
                    languageCode = "itaque";
                }};;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "est";
                key = "quibusdam";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "distinctio";
                uploadProtocol = "quibusdam";
            }};            

            DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse res = sdk.projects.dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete(req, new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1("labore", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchUpdateEntitiesRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest req = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2BatchUpdateEntitiesRequest = new GoogleCloudDialogflowV2BatchUpdateEntitiesRequest() {{
                    entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                        add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                            synonyms = new String[]{{
                                add("perferendis"),
                                add("magni"),
                                add("assumenda"),
                            }};
                            value = "ipsam";
                        }}),
                        add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                            synonyms = new String[]{{
                                add("fugit"),
                            }};
                            value = "dolorum";
                        }}),
                        add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                            synonyms = new String[]{{
                                add("tempora"),
                                add("facilis"),
                                add("tempore"),
                            }};
                            value = "labore";
                        }}),
                    }};
                    languageCode = "delectus";
                    updateMask = "eum";
                }};;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "aliquid";
                key = "provident";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "officia";
                uploadProtocol = "dolor";
            }};            

            DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse res = sdk.projects.dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate(req, new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateSecurityOption1("debitis", "a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentEnvironmentsCreate

Creates an agent environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EnvironmentInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Fulfillment;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2FulfillmentFeature;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2FulfillmentGenericWebService;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2TextToSpeechSettings;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParams;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEnvironmentsCreateRequest req = new DialogflowProjectsLocationsAgentEnvironmentsCreateRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2EnvironmentInput = new GoogleCloudDialogflowV2EnvironmentInput() {{
                    agentVersion = "in";
                    description = "illum";
                    fulfillment = new GoogleCloudDialogflowV2Fulfillment() {{
                        displayName = "maiores";
                        enabled = false;
                        features = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2FulfillmentFeature[]{{
                            add(new GoogleCloudDialogflowV2FulfillmentFeature() {{
                                type = GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum.TYPE_UNSPECIFIED;
                            }}),
                            add(new GoogleCloudDialogflowV2FulfillmentFeature() {{
                                type = GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum.TYPE_UNSPECIFIED;
                            }}),
                            add(new GoogleCloudDialogflowV2FulfillmentFeature() {{
                                type = GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum.SMALLTALK;
                            }}),
                        }};
                        genericWebService = new GoogleCloudDialogflowV2FulfillmentGenericWebService() {{
                            isCloudFunction = false;
                            password = "facere";
                            requestHeaders = new java.util.HashMap<String, String>() {{
                                put("aliquid", "laborum");
                                put("accusamus", "non");
                            }};
                            uri = "https://frilly-system.org";
                            username = "Matilda_McKenzie50";
                        }};;
                        name = "Timmy Feeney";
                    }};;
                    textToSpeechSettings = new GoogleCloudDialogflowV2TextToSpeechSettings() {{
                        enableTextToSpeech = false;
                        outputAudioEncoding = GoogleCloudDialogflowV2TextToSpeechSettingsOutputAudioEncodingEnum.OUTPUT_AUDIO_ENCODING_MP3;
                        sampleRateHertz = 618809;
                        synthesizeSpeechConfigs = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig>() {{
                            put("molestiae", new GoogleCloudDialogflowV2SynthesizeSpeechConfig() {{
                                effectsProfileId = new String[]{{
                                    add("nihil"),
                                }};
                                pitch = 3015.75;
                                speakingRate = 7160.75;
                                voice = new GoogleCloudDialogflowV2VoiceSelectionParams() {{
                                    name = "Leroy Greenfelder";
                                    ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum.SSML_VOICE_GENDER_FEMALE;
                                }};
                                volumeGainDb = 4287.69;
                            }});
                            put("vero", new GoogleCloudDialogflowV2SynthesizeSpeechConfig() {{
                                effectsProfileId = new String[]{{
                                    add("architecto"),
                                }};
                                pitch = 2982.82;
                                speakingRate = 923.73;
                                voice = new GoogleCloudDialogflowV2VoiceSelectionParams() {{
                                    name = "Derrick McLaughlin";
                                    ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum.SSML_VOICE_GENDER_UNSPECIFIED;
                                }};
                                volumeGainDb = 6532.01;
                            }});
                            put("reiciendis", new GoogleCloudDialogflowV2SynthesizeSpeechConfig() {{
                                effectsProfileId = new String[]{{
                                    add("ad"),
                                    add("eum"),
                                    add("dolor"),
                                }};
                                pitch = 8965.47;
                                speakingRate = 1412.64;
                                voice = new GoogleCloudDialogflowV2VoiceSelectionParams() {{
                                    name = "Joyce Kertzmann";
                                    ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum.SSML_VOICE_GENDER_MALE;
                                }};
                                volumeGainDb = 8061.94;
                            }});
                        }};
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                environmentId = "architecto";
                fields = "architecto";
                key = "repudiandae";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "nihil";
                uploadProtocol = "repellat";
            }};            

            DialogflowProjectsLocationsAgentEnvironmentsCreateResponse res = sdk.projects.dialogflowProjectsLocationsAgentEnvironmentsCreate(req, new DialogflowProjectsLocationsAgentEnvironmentsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEnvironmentsCreateSecurityOption1("quibusdam", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Environment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentEnvironmentsGetHistory

Gets the history of the specified environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest req = new DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "natus";
                key = "magni";
                oauthToken = "sunt";
                pageSize = 779051L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "maxime";
                uploadProtocol = "ea";
            }};            

            DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse res = sdk.projects.dialogflowProjectsLocationsAgentEnvironmentsGetHistory(req, new DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEnvironmentsGetHistorySecurityOption1("excepturi", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2EnvironmentHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentEnvironmentsList

Returns the list of all non-default environments of the specified agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentEnvironmentsListRequest req = new DialogflowProjectsLocationsAgentEnvironmentsListRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "ipsam";
                key = "voluptate";
                oauthToken = "autem";
                pageSize = 722056L;
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "nemo";
                uploadProtocol = "voluptatibus";
            }};            

            DialogflowProjectsLocationsAgentEnvironmentsListResponse res = sdk.projects.dialogflowProjectsLocationsAgentEnvironmentsList(req, new DialogflowProjectsLocationsAgentEnvironmentsListSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1("perferendis", "fugiat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListEnvironmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentExport

Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentExportRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentExportResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentExportSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentExportSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentExportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ExportAgentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentExportRequest req = new DialogflowProjectsLocationsAgentExportRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2ExportAgentRequest = new GoogleCloudDialogflowV2ExportAgentRequest() {{
                    agentUri = "cumque";
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "nobis";
                key = "dolores";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "eaque";
            }};            

            DialogflowProjectsLocationsAgentExportResponse res = sdk.projects.dialogflowProjectsLocationsAgentExport(req, new DialogflowProjectsLocationsAgentExportSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentExportSecurityOption1("quis", "nesciunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentGetValidationResult

Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentGetValidationResultRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentGetValidationResultResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentGetValidationResultSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentGetValidationResultRequest req = new DialogflowProjectsLocationsAgentGetValidationResultRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "dolor";
                key = "vero";
                languageCode = "nostrum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "omnis";
                uploadProtocol = "facilis";
            }};            

            DialogflowProjectsLocationsAgentGetValidationResultResponse res = sdk.projects.dialogflowProjectsLocationsAgentGetValidationResult(req, new DialogflowProjectsLocationsAgentGetValidationResultSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1("perspiciatis", "voluptatem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ValidationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentImport

Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentImportRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentImportResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentImportSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentImportSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentImportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ImportAgentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentImportRequest req = new DialogflowProjectsLocationsAgentImportRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2ImportAgentRequest = new GoogleCloudDialogflowV2ImportAgentRequest() {{
                    agentContent = "blanditiis";
                    agentUri = "error";
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "adipisci";
                key = "asperiores";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "iste";
                uploadProtocol = "dolorum";
            }};            

            DialogflowProjectsLocationsAgentImportResponse res = sdk.projects.dialogflowProjectsLocationsAgentImport(req, new DialogflowProjectsLocationsAgentImportSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentImportSecurityOption1("deleniti", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentIntentsBatchDelete

Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageImage;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelect;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContent;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessagePlatformEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageQuickReplies;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestions;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageText;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentWebhookStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest req = new DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2BatchDeleteIntentsRequestInput = new GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput() {{
                    intents = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentInput[]{{
                        add(new GoogleCloudDialogflowV2IntentInput() {{
                            action = "delectus";
                            defaultResponsePlatforms = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[]{{
                                add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.SKYPE),
                                add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.TELEGRAM),
                            }};
                            displayName = "dolorem";
                            endInteraction = false;
                            events = new String[]{{
                                add("dolor"),
                            }};
                            inputContextNames = new String[]{{
                                add("ipsum"),
                            }};
                            isFallback = false;
                            liveAgentHandoff = false;
                            messages = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage[]{{
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://jam-packed-kingdom.org";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://expensive-bite.com";
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://likely-epauliere.org";
                                                }};
                                                title = "Miss";
                                            }}),
                                        }};
                                        formattedText = "voluptatibus";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "voluptas";
                                            imageUri = "natus";
                                        }};
                                        subtitle = "eos";
                                        title = "Ms.";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.IMAGE_DISPLAY_OPTIONS_UNSPECIFIED;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "ab";
                                                footer = "soluta";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dolorum";
                                                    imageUri = "iusto";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "voluptate";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "omnis";
                                                footer = "necessitatibus";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "distinctio";
                                                    imageUri = "asperiores";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "nihil";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "id";
                                                footer = "saepe";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "eius";
                                                    imageUri = "aspernatur";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "perferendis";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "accusamus";
                                                footer = "ad";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "saepe";
                                                    imageUri = "suscipit";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "deserunt";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "totam";
                                                text = "similique";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "alias";
                                                text = "at";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "quaerat";
                                                text = "tempora";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "vel";
                                                text = "quod";
                                            }}),
                                        }};
                                        imageUri = "officiis";
                                        subtitle = "qui";
                                        title = "Miss";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "esse";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "harum";
                                                    imageUri = "iusto";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "ipsum";
                                                    synonyms = new String[]{{
                                                        add("tenetur"),
                                                        add("amet"),
                                                        add("tempore"),
                                                        add("accusamus"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "enim";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dolorem";
                                                    imageUri = "sapiente";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "totam";
                                                    synonyms = new String[]{{
                                                        add("sit"),
                                                        add("expedita"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "sed";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "vel";
                                                    imageUri = "libero";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "voluptas";
                                                    synonyms = new String[]{{
                                                        add("quam"),
                                                        add("ipsum"),
                                                        add("incidunt"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "cupiditate";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "maxime";
                                                    imageUri = "pariatur";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "soluta";
                                                    synonyms = new String[]{{
                                                        add("laborum"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "incidunt";
                                        imageUri = "aspernatur";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "dolores";
                                        uri = "https://rotten-grandfather.info";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "temporibus";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "qui";
                                                    imageUri = "neque";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "fugit";
                                                    synonyms = new String[]{{
                                                        add("odio"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "ullam";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "nam";
                                                    imageUri = "hic";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "voluptatem";
                                                    synonyms = new String[]{{
                                                        add("soluta"),
                                                        add("nobis"),
                                                        add("et"),
                                                        add("saepe"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "veritatis";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "nobis";
                                                    imageUri = "quos";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "tempore";
                                                    synonyms = new String[]{{
                                                        add("aperiam"),
                                                        add("delectus"),
                                                        add("dolorem"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                        subtitle = "labore";
                                        title = "Mrs.";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "architecto";
                                                description = "quae";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "aut";
                                                    imageUri = "quas";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "itaque";
                                                    imageUri = "consequatur";
                                                }};
                                                name = "Marcos Schaden";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "facilis";
                                                description = "cupiditate";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "qui";
                                                    imageUri = "quae";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "laudantium";
                                                    imageUri = "odio";
                                                }};
                                                name = "Jan Schaefer";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "quis";
                                                description = "ipsum";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "delectus";
                                                    imageUri = "voluptate";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "consectetur";
                                                    imageUri = "vero";
                                                }};
                                                name = "Julio Weissnat";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.RESPONSE_MEDIA_TYPE_UNSPECIFIED;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("facilis", "vero");
                                        put("ducimus", "dolore");
                                        put("quibusdam", "illum");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.FACEBOOK;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("impedit"),
                                            add("aut"),
                                            add("voluptatibus"),
                                        }};
                                        title = "Mrs.";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "fugit";
                                                ssml = "porro";
                                                textToSpeech = "maiores";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "doloribus";
                                                ssml = "iusto";
                                                textToSpeech = "eligendi";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "ducimus";
                                                ssml = "alias";
                                                textToSpeech = "officia";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "tempora";
                                                ssml = "ipsam";
                                                textToSpeech = "ea";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Ms.";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://detailed-grief.name";
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://wordy-bother.info";
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://winding-fifth.org";
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://imaginary-scent.info";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "inventore";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "ea";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.TRAILING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "consectetur";
                                            imageUri = "recusandae";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "eaque";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "a";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "libero";
                                        title = "Mr.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("deleniti"),
                                        }};
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://costly-tablet.com";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://rapid-plum.net";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://important-ring.name";
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://heavenly-receipt.com";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                        formattedText = "numquam";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "explicabo";
                                            imageUri = "provident";
                                        }};
                                        subtitle = "ipsa";
                                        title = "Ms.";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.GRAY;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "eius";
                                                footer = "esse";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "esse";
                                                    imageUri = "rem";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "fuga";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "fugiat";
                                                footer = "ut";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "eum";
                                                    imageUri = "suscipit";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "assumenda";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "veritatis";
                                                text = "ipsa";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "id";
                                                text = "quidem";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "neque";
                                                text = "quo";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "illum";
                                                text = "quo";
                                            }}),
                                        }};
                                        imageUri = "fuga";
                                        subtitle = "eius";
                                        title = "Mr.";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "ab";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "cupiditate";
                                                    imageUri = "consequatur";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "tempora";
                                                    synonyms = new String[]{{
                                                        add("ipsam"),
                                                        add("aspernatur"),
                                                        add("sequi"),
                                                        add("quo"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "recusandae";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "aperiam";
                                                    imageUri = "distinctio";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "quod";
                                                    synonyms = new String[]{{
                                                        add("inventore"),
                                                        add("nihil"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "accusamus";
                                        imageUri = "aliquam";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "odio";
                                        uri = "https://immense-virtue.biz";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "molestiae";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "accusantium";
                                                    imageUri = "porro";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "eum";
                                                    synonyms = new String[]{{
                                                        add("praesentium"),
                                                        add("consequuntur"),
                                                        add("deleniti"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "fuga";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "mollitia";
                                                    imageUri = "incidunt";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "atque";
                                                    synonyms = new String[]{{
                                                        add("minima"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "fugit";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "sapiente";
                                                    imageUri = "consequuntur";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "ratione";
                                                    synonyms = new String[]{{
                                                        add("saepe"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                        subtitle = "atque";
                                        title = "Mr.";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "eveniet";
                                                description = "accusamus";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "veritatis";
                                                    imageUri = "esse";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "quod";
                                                    imageUri = "nam";
                                                }};
                                                name = "Gene Botsford";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "harum";
                                                description = "molestiae";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "rerum";
                                                    imageUri = "occaecati";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "minima";
                                                    imageUri = "distinctio";
                                                }};
                                                name = "Mark Nicolas";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("consequatur", "minus");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.TELEGRAM;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("consectetur"),
                                            add("esse"),
                                            add("blanditiis"),
                                            add("provident"),
                                        }};
                                        title = "Dr.";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "quas";
                                                ssml = "esse";
                                                textToSpeech = "quasi";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "a";
                                                ssml = "error";
                                                textToSpeech = "sint";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "pariatur";
                                                ssml = "possimus";
                                                textToSpeech = "quia";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "eveniet";
                                                ssml = "asperiores";
                                                textToSpeech = "facere";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mr.";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://polite-grasshopper.org";
                                                }};
                                                title = "Mr.";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "vel";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "eius";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "illum";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "accusantium";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "sapiente";
                                            imageUri = "dicta";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "ullam";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "nisi";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "voluptatum";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "qui";
                                        title = "Dr.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("deleniti"),
                                            add("itaque"),
                                        }};
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://paltry-utensil.com";
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://jittery-awareness.biz";
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://enormous-orator.org";
                                                }};
                                                title = "Mr.";
                                            }}),
                                        }};
                                        formattedText = "rem";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "aut";
                                            imageUri = "laudantium";
                                        }};
                                        subtitle = "eum";
                                        title = "Miss";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.IMAGE_DISPLAY_OPTIONS_UNSPECIFIED;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "non";
                                                footer = "voluptatem";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dolor";
                                                    imageUri = "occaecati";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "numquam";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "voluptas";
                                                footer = "aut";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dignissimos";
                                                    imageUri = "dicta";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "maiores";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "voluptatibus";
                                                footer = "voluptas";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "asperiores";
                                                    imageUri = "aperiam";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "ea";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                                }};
                                                title = "Mr.";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "officia";
                                                text = "maxime";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "dignissimos";
                                                text = "officia";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "asperiores";
                                                text = "nemo";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "quae";
                                                text = "quaerat";
                                            }}),
                                        }};
                                        imageUri = "porro";
                                        subtitle = "quod";
                                        title = "Mrs.";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "adipisci";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "fuga";
                                                    imageUri = "id";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "suscipit";
                                                    synonyms = new String[]{{
                                                        add("culpa"),
                                                    }};
                                                }};
                                                title = "Miss";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "recusandae";
                                        imageUri = "totam";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "fugiat";
                                        uri = "http://lonely-mentor.info";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "possimus";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "facilis";
                                                    imageUri = "cum";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "commodi";
                                                    synonyms = new String[]{{
                                                        add("corporis"),
                                                        add("reiciendis"),
                                                    }};
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "nemo";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "recusandae";
                                                    imageUri = "aliquid";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "aperiam";
                                                    synonyms = new String[]{{
                                                        add("consectetur"),
                                                        add("in"),
                                                        add("exercitationem"),
                                                    }};
                                                }};
                                                title = "Dr.";
                                            }}),
                                        }};
                                        subtitle = "facere";
                                        title = "Mrs.";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "suscipit";
                                                description = "reiciendis";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "quidem";
                                                    imageUri = "saepe";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "necessitatibus";
                                                    imageUri = "dolore";
                                                }};
                                                name = "Ollie Flatley";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "beatae";
                                                description = "dignissimos";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "a";
                                                    imageUri = "debitis";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "consectetur";
                                                    imageUri = "corporis";
                                                }};
                                                name = "Rick Beer";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "vitae";
                                                description = "accusamus";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "similique";
                                                    imageUri = "tempora";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "aspernatur";
                                                    imageUri = "voluptas";
                                                }};
                                                name = "Melanie Hane";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "adipisci";
                                                description = "minus";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dolores";
                                                    imageUri = "blanditiis";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "in";
                                                    imageUri = "dolore";
                                                }};
                                                name = "Rochelle Smitham";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("quas", "hic");
                                        put("nesciunt", "culpa");
                                        put("corrupti", "pariatur");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.SKYPE;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("exercitationem"),
                                            add("nobis"),
                                            add("sit"),
                                            add("rerum"),
                                        }};
                                        title = "Mr.";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "explicabo";
                                                ssml = "asperiores";
                                                textToSpeech = "facilis";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "voluptate";
                                                ssml = "expedita";
                                                textToSpeech = "ab";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "iste";
                                                ssml = "dolore";
                                                textToSpeech = "laborum";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "sed";
                                                ssml = "in";
                                                textToSpeech = "commodi";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Miss";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://well-to-do-tension.com";
                                                }};
                                                title = "Dr.";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "corrupti";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.TRAILING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "incidunt";
                                            imageUri = "sed";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "necessitatibus";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "ipsum";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "occaecati";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "quos";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "tempora";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "tempora";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "voluptate";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "reiciendis";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "ex";
                                        title = "Mr.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("officiis"),
                                        }};
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://friendly-donut.info";
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://alive-ribbon.name";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://variable-wallet.org";
                                                }};
                                                title = "Mr.";
                                            }}),
                                        }};
                                        formattedText = "aperiam";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "saepe";
                                            imageUri = "numquam";
                                        }};
                                        subtitle = "veniam";
                                        title = "Ms.";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.BLURRED_BACKGROUND;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "laudantium";
                                                footer = "exercitationem";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "praesentium";
                                                    imageUri = "cum";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "laboriosam";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "hic";
                                                text = "expedita";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "debitis";
                                                text = "neque";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "dolorum";
                                                text = "nostrum";
                                            }}),
                                        }};
                                        imageUri = "officia";
                                        subtitle = "dolorum";
                                        title = "Ms.";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "tempora";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "atque";
                                                    imageUri = "fugit";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "ut";
                                                    synonyms = new String[]{{
                                                        add("voluptatem"),
                                                        add("culpa"),
                                                        add("expedita"),
                                                        add("magnam"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "esse";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "ipsam";
                                                    imageUri = "sit";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "voluptatum";
                                                    synonyms = new String[]{{
                                                        add("repudiandae"),
                                                        add("corporis"),
                                                        add("et"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "ex";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "sed";
                                                    imageUri = "sit";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "vel";
                                                    synonyms = new String[]{{
                                                        add("saepe"),
                                                        add("error"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "incidunt";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "reiciendis";
                                                    imageUri = "dolorem";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "harum";
                                                    synonyms = new String[]{{
                                                        add("architecto"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "labore";
                                        imageUri = "quidem";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "atque";
                                        uri = "https://scholarly-variation.info";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "amet";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "deserunt";
                                                    imageUri = "voluptate";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "unde";
                                                    synonyms = new String[]{{
                                                        add("provident"),
                                                        add("repellendus"),
                                                        add("delectus"),
                                                        add("voluptates"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                        }};
                                        subtitle = "est";
                                        title = "Miss";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "facere";
                                                description = "fuga";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "praesentium";
                                                    imageUri = "mollitia";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "veniam";
                                                    imageUri = "voluptatem";
                                                }};
                                                name = "Phil Boyer";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "asperiores";
                                                description = "totam";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "suscipit";
                                                    imageUri = "quidem";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "maxime";
                                                    imageUri = "et";
                                                }};
                                                name = "Grace Shields";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("officiis", "accusamus");
                                        put("natus", "minima");
                                        put("aspernatur", "ex");
                                        put("maiores", "corrupti");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.ACTIONS_ON_GOOGLE;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("blanditiis"),
                                            add("suscipit"),
                                            add("repudiandae"),
                                        }};
                                        title = "Ms.";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "sunt";
                                                ssml = "recusandae";
                                                textToSpeech = "dolorum";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "repellendus";
                                                ssml = "labore";
                                                textToSpeech = "reiciendis";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "doloremque";
                                                ssml = "repudiandae";
                                                textToSpeech = "dicta";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mr.";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://honorable-defender.org";
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "saepe";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.HORIZONTAL_ALIGNMENT_UNSPECIFIED;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "occaecati";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.TRAILING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "perspiciatis";
                                            imageUri = "in";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "occaecati";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "consequuntur";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "fugit";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "id";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "quis";
                                        title = "Ms.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("illo"),
                                            add("corporis"),
                                            add("quidem"),
                                        }};
                                    }};
                                }}),
                            }};
                            mlDisabled = false;
                            name = "Ms. Melvin Thiel IV";
                            outputContexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context[]{{
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 474668;
                                    name = "Clarence Ritchie";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("laborum", "distinctio");
                                    }};
                                }}),
                            }};
                            parameters = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter[]{{
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "rem";
                                    displayName = "aliquam";
                                    entityTypeDisplayName = "ad";
                                    isList = false;
                                    mandatory = false;
                                    name = "John Hettinger";
                                    prompts = new String[]{{
                                        add("voluptas"),
                                        add("alias"),
                                        add("maiores"),
                                    }};
                                    value = "reiciendis";
                                }}),
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "dolores";
                                    displayName = "id";
                                    entityTypeDisplayName = "minima";
                                    isList = false;
                                    mandatory = false;
                                    name = "Dr. Lee Dooley";
                                    prompts = new String[]{{
                                        add("molestiae"),
                                        add("ex"),
                                    }};
                                    value = "ut";
                                }}),
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "culpa";
                                    displayName = "adipisci";
                                    entityTypeDisplayName = "debitis";
                                    isList = false;
                                    mandatory = false;
                                    name = "Andre Hills";
                                    prompts = new String[]{{
                                        add("quis"),
                                        add("eum"),
                                        add("reiciendis"),
                                    }};
                                    value = "provident";
                                }}),
                            }};
                            parentFollowupIntentName = "aspernatur";
                            priority = 354506;
                            resetContexts = false;
                            trainingPhrases = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase[]{{
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                    name = "Gordon O'Hara";
                                    parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "ex";
                                            entityType = "aliquid";
                                            text = "accusantium";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "repellat";
                                            entityType = "doloribus";
                                            text = "ullam";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "in";
                                            entityType = "nam";
                                            text = "earum";
                                            userDefined = false;
                                        }}),
                                    }};
                                    timesAddedCount = 637583;
                                    type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TEMPLATE;
                                }}),
                            }};
                            webhookState = GoogleCloudDialogflowV2IntentWebhookStateEnum.WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING;
                        }}),
                        add(new GoogleCloudDialogflowV2IntentInput() {{
                            action = "modi";
                            defaultResponsePlatforms = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[]{{
                                add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.SKYPE),
                                add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.ACTIONS_ON_GOOGLE),
                                add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.GOOGLE_HANGOUTS),
                                add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.VIBER),
                            }};
                            displayName = "vitae";
                            endInteraction = false;
                            events = new String[]{{
                                add("tempora"),
                                add("quis"),
                                add("inventore"),
                            }};
                            inputContextNames = new String[]{{
                                add("cumque"),
                            }};
                            isFallback = false;
                            liveAgentHandoff = false;
                            messages = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage[]{{
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://concrete-homonym.biz";
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                        formattedText = "at";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "impedit";
                                            imageUri = "eos";
                                        }};
                                        subtitle = "sapiente";
                                        title = "Ms.";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.IMAGE_DISPLAY_OPTIONS_UNSPECIFIED;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "beatae";
                                                footer = "cupiditate";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "provident";
                                                    imageUri = "earum";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "soluta";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "eaque";
                                                footer = "earum";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "perspiciatis";
                                                    imageUri = "maiores";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "debitis";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                }};
                                                title = "Miss";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "dolorem";
                                                text = "fugit";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "cumque";
                                                text = "fuga";
                                            }}),
                                        }};
                                        imageUri = "ratione";
                                        subtitle = "animi";
                                        title = "Dr.";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "consequatur";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "quasi";
                                                    imageUri = "et";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "ducimus";
                                                    synonyms = new String[]{{
                                                        add("occaecati"),
                                                        add("suscipit"),
                                                        add("adipisci"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "magni";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "doloribus";
                                                    imageUri = "nulla";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "necessitatibus";
                                                    synonyms = new String[]{{
                                                        add("tempora"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "molestiae";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dicta";
                                                    imageUri = "iusto";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "esse";
                                                    synonyms = new String[]{{
                                                        add("maiores"),
                                                        add("reiciendis"),
                                                        add("vel"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "fugiat";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "doloremque";
                                                    imageUri = "dicta";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "odio";
                                                    synonyms = new String[]{{
                                                        add("esse"),
                                                        add("ex"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "aliquid";
                                        imageUri = "ipsa";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "laborum";
                                        uri = "http://grand-store.net";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "officia";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "suscipit";
                                                    imageUri = "aliquid";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "perferendis";
                                                    synonyms = new String[]{{
                                                        add("voluptas"),
                                                        add("iste"),
                                                    }};
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "ab";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "error";
                                                    imageUri = "possimus";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "voluptates";
                                                    synonyms = new String[]{{
                                                        add("laborum"),
                                                        add("libero"),
                                                        add("ad"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                        subtitle = "enim";
                                        title = "Mr.";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "ex";
                                                description = "quo";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "ex";
                                                    imageUri = "ut";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "ad";
                                                    imageUri = "expedita";
                                                }};
                                                name = "Leona Rippin IV";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "omnis";
                                                description = "veritatis";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "rerum";
                                                    imageUri = "est";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "culpa";
                                                    imageUri = "voluptatem";
                                                }};
                                                name = "Stewart Brakus";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "debitis";
                                                description = "voluptatem";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "alias";
                                                    imageUri = "deleniti";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "earum";
                                                    imageUri = "ex";
                                                }};
                                                name = "Ian Schinner";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "ratione";
                                                description = "ullam";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "perferendis";
                                                    imageUri = "illum";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "totam";
                                                    imageUri = "impedit";
                                                }};
                                                name = "Alton Hintz";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.RESPONSE_MEDIA_TYPE_UNSPECIFIED;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("deleniti", "veritatis");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.SLACK;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("consequatur"),
                                        }};
                                        title = "Mr.";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "modi";
                                                ssml = "fugit";
                                                textToSpeech = "ab";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Dr.";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://average-middleman.org";
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://jovial-terrace.com";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "expedita";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "vel";
                                            imageUri = "voluptatum";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "ab";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "porro";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "nobis";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "laboriosam";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "recusandae";
                                        title = "Mr.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("exercitationem"),
                                        }};
                                    }};
                                }}),
                            }};
                            mlDisabled = false;
                            name = "Arthur Huel";
                            outputContexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context[]{{
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 690785;
                                    name = "Ora VonRueden";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("voluptate", "blanditiis");
                                        put("officia", "voluptas");
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 254025;
                                    name = "Brandy Gibson";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("fuga", "laudantium");
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 277340;
                                    name = "Mrs. Hilda Stark";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("aperiam", "cupiditate");
                                    }};
                                }}),
                            }};
                            parameters = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter[]{{
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "soluta";
                                    displayName = "alias";
                                    entityTypeDisplayName = "omnis";
                                    isList = false;
                                    mandatory = false;
                                    name = "Kristina Moore MD";
                                    prompts = new String[]{{
                                        add("voluptatibus"),
                                        add("distinctio"),
                                        add("omnis"),
                                        add("delectus"),
                                    }};
                                    value = "minima";
                                }}),
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "praesentium";
                                    displayName = "maxime";
                                    entityTypeDisplayName = "magnam";
                                    isList = false;
                                    mandatory = false;
                                    name = "Byron Johns";
                                    prompts = new String[]{{
                                        add("earum"),
                                        add("modi"),
                                        add("nam"),
                                    }};
                                    value = "vero";
                                }}),
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "voluptatem";
                                    displayName = "ipsam";
                                    entityTypeDisplayName = "vel";
                                    isList = false;
                                    mandatory = false;
                                    name = "Frances Franey";
                                    prompts = new String[]{{
                                        add("nulla"),
                                        add("deserunt"),
                                        add("esse"),
                                    }};
                                    value = "nemo";
                                }}),
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "reprehenderit";
                                    displayName = "est";
                                    entityTypeDisplayName = "quis";
                                    isList = false;
                                    mandatory = false;
                                    name = "Tomas Ryan";
                                    prompts = new String[]{{
                                        add("ex"),
                                        add("voluptas"),
                                        add("debitis"),
                                        add("delectus"),
                                    }};
                                    value = "quae";
                                }}),
                            }};
                            parentFollowupIntentName = "minus";
                            priority = 685478;
                            resetContexts = false;
                            trainingPhrases = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase[]{{
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                    name = "Shannon Lind";
                                    parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "soluta";
                                            entityType = "repudiandae";
                                            text = "nam";
                                            userDefined = false;
                                        }}),
                                    }};
                                    timesAddedCount = 294076;
                                    type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.EXAMPLE;
                                }}),
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                    name = "Lillian Kunde";
                                    parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "quibusdam";
                                            entityType = "iure";
                                            text = "odit";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "voluptatibus";
                                            entityType = "vel";
                                            text = "magnam";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "quibusdam";
                                            entityType = "inventore";
                                            text = "facere";
                                            userDefined = false;
                                        }}),
                                    }};
                                    timesAddedCount = 726878;
                                    type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                    name = "Howard Sauer";
                                    parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "accusantium";
                                            entityType = "vel";
                                            text = "ea";
                                            userDefined = false;
                                        }}),
                                    }};
                                    timesAddedCount = 107617;
                                    type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TEMPLATE;
                                }}),
                            }};
                            webhookState = GoogleCloudDialogflowV2IntentWebhookStateEnum.WEBHOOK_STATE_ENABLED;
                        }}),
                        add(new GoogleCloudDialogflowV2IntentInput() {{
                            action = "eum";
                            defaultResponsePlatforms = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[]{{
                                add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.SLACK),
                            }};
                            displayName = "perspiciatis";
                            endInteraction = false;
                            events = new String[]{{
                                add("dicta"),
                                add("impedit"),
                                add("voluptatibus"),
                                add("iste"),
                            }};
                            inputContextNames = new String[]{{
                                add("alias"),
                                add("nisi"),
                                add("itaque"),
                                add("velit"),
                            }};
                            isFallback = false;
                            liveAgentHandoff = false;
                            messages = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage[]{{
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://left-amber.com";
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://vengeful-hair.net";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                        formattedText = "facilis";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "placeat";
                                            imageUri = "perspiciatis";
                                        }};
                                        subtitle = "expedita";
                                        title = "Ms.";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.BLURRED_BACKGROUND;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "ullam";
                                                footer = "unde";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "necessitatibus";
                                                    imageUri = "animi";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "impedit";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "est";
                                                footer = "error";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "esse";
                                                    imageUri = "labore";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "veritatis";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "inventore";
                                                text = "dolorem";
                                            }}),
                                        }};
                                        imageUri = "ad";
                                        subtitle = "qui";
                                        title = "Miss";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "nemo";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "soluta";
                                                    imageUri = "libero";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "rem";
                                                    synonyms = new String[]{{
                                                        add("odio"),
                                                        add("fugit"),
                                                        add("alias"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "vel";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "quae";
                                                    imageUri = "quae";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "modi";
                                                    synonyms = new String[]{{
                                                        add("exercitationem"),
                                                    }};
                                                }};
                                                title = "Dr.";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "et";
                                        imageUri = "ipsum";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "unde";
                                        uri = "https://safe-sick.com";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "nostrum";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "omnis";
                                                    imageUri = "libero";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "dicta";
                                                    synonyms = new String[]{{
                                                        add("libero"),
                                                        add("fugiat"),
                                                        add("officia"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                        subtitle = "placeat";
                                        title = "Mr.";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "ipsa";
                                                description = "voluptates";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "inventore";
                                                    imageUri = "aperiam";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "totam";
                                                    imageUri = "dolore";
                                                }};
                                                name = "Kelvin Bartoletti";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "dolores";
                                                description = "assumenda";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "beatae";
                                                    imageUri = "est";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "facere";
                                                    imageUri = "corrupti";
                                                }};
                                                name = "Daisy Tillman";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("autem", "ipsam");
                                        put("rerum", "laudantium");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.TELEGRAM;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("voluptatibus"),
                                            add("cum"),
                                            add("at"),
                                            add("alias"),
                                        }};
                                        title = "Mr.";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "fuga";
                                                ssml = "repudiandae";
                                                textToSpeech = "accusantium";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "expedita";
                                                ssml = "officiis";
                                                textToSpeech = "eos";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "quibusdam";
                                                ssml = "odio";
                                                textToSpeech = "praesentium";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mr.";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://vital-darkness.org";
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://required-fellow.com";
                                                }};
                                                title = "Miss";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "delectus";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "fugit";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "numquam";
                                            imageUri = "nesciunt";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "dignissimos";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "optio";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "necessitatibus";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "qui";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "expedita";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "cupiditate";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "minima";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "placeat";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "neque";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "in";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "minus";
                                        title = "Ms.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("corporis"),
                                            add("magnam"),
                                        }};
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://self-reliant-aspect.net";
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://mealy-mortise.info";
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://stable-practitioner.info";
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://whirlwind-reliability.org";
                                                }};
                                                title = "Mr.";
                                            }}),
                                        }};
                                        formattedText = "repellat";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "pariatur";
                                            imageUri = "nemo";
                                        }};
                                        subtitle = "reprehenderit";
                                        title = "Mr.";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.WHITE;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "in";
                                                footer = "ducimus";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "excepturi";
                                                    imageUri = "dolores";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "error";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "voluptate";
                                                footer = "pariatur";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "itaque";
                                                    imageUri = "similique";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "optio";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "officiis";
                                                text = "placeat";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "quidem";
                                                text = "exercitationem";
                                            }}),
                                        }};
                                        imageUri = "quam";
                                        subtitle = "dolorem";
                                        title = "Mrs.";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "sint";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "vero";
                                                    imageUri = "sequi";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "repudiandae";
                                                    synonyms = new String[]{{
                                                        add("dicta"),
                                                        add("earum"),
                                                        add("veniam"),
                                                    }};
                                                }};
                                                title = "Miss";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "dolores";
                                        imageUri = "nam";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "dicta";
                                        uri = "http://unripe-revenue.com";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "maiores";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "veritatis";
                                                    imageUri = "quasi";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "laboriosam";
                                                    synonyms = new String[]{{
                                                        add("libero"),
                                                        add("excepturi"),
                                                        add("occaecati"),
                                                        add("nemo"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "nostrum";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "doloribus";
                                                    imageUri = "eligendi";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "sint";
                                                    synonyms = new String[]{{
                                                        add("hic"),
                                                        add("animi"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                        subtitle = "totam";
                                        title = "Ms.";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "eaque";
                                                description = "saepe";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "architecto";
                                                    imageUri = "quos";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "iste";
                                                    imageUri = "assumenda";
                                                }};
                                                name = "Dr. Marco Frami";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "cum";
                                                description = "ipsum";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "adipisci";
                                                    imageUri = "saepe";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "deserunt";
                                                    imageUri = "doloremque";
                                                }};
                                                name = "Ms. Sally Rempel";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("non", "magnam");
                                        put("itaque", "sed");
                                        put("asperiores", "veniam");
                                        put("consequuntur", "facere");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.SKYPE;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("pariatur"),
                                        }};
                                        title = "Mrs.";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "ab";
                                                ssml = "velit";
                                                textToSpeech = "facilis";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "tempore";
                                                ssml = "nisi";
                                                textToSpeech = "voluptatibus";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Miss";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://horrible-recession.net";
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://each-event.org";
                                                }};
                                                title = "Dr.";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "debitis";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "rerum";
                                            imageUri = "eos";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "neque";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "iusto";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "rem";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "eligendi";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "fugiat";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "unde";
                                        title = "Dr.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("dolor"),
                                            add("dicta"),
                                        }};
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2IntentMessage() {{
                                    basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://celebrated-kitsch.info";
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://complicated-estate.org";
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://secret-bayou.com";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                        formattedText = "accusamus";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "saepe";
                                            imageUri = "tempore";
                                        }};
                                        subtitle = "veniam";
                                        title = "Mr.";
                                    }};
                                    browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                        imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.BLURRED_BACKGROUND;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "reprehenderit";
                                                footer = "praesentium";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "nemo";
                                                    imageUri = "repellat";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "quisquam";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "deleniti";
                                                footer = "illo";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "labore";
                                                    imageUri = "assumenda";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "aliquam";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "laudantium";
                                                footer = "repudiandae";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "consequatur";
                                                    imageUri = "maxime";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "aspernatur";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                }};
                                                title = "Miss";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                description = "quas";
                                                footer = "provident";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "repudiandae";
                                                    imageUri = "rerum";
                                                }};
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                    url = "dignissimos";
                                                    urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                }};
                                                title = "Dr.";
                                            }}),
                                        }};
                                    }};
                                    card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "repellendus";
                                                text = "iure";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "dolorem";
                                                text = "commodi";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                postback = "impedit";
                                                text = "commodi";
                                            }}),
                                        }};
                                        imageUri = "aut";
                                        subtitle = "voluptatem";
                                        title = "Mrs.";
                                    }};
                                    carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                description = "amet";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "illum";
                                                    imageUri = "praesentium";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "quidem";
                                                    synonyms = new String[]{{
                                                        add("amet"),
                                                        add("quasi"),
                                                        add("dicta"),
                                                    }};
                                                }};
                                                title = "Ms.";
                                            }}),
                                        }};
                                    }};
                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                        accessibilityText = "doloremque";
                                        imageUri = "earum";
                                    }};
                                    linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                        destinationName = "iusto";
                                        uri = "http://old-polyester.org";
                                    }};
                                    listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                        items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "repudiandae";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "consequatur";
                                                    imageUri = "nemo";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "molestiae";
                                                    synonyms = new String[]{{
                                                        add("facilis"),
                                                        add("corrupti"),
                                                        add("aperiam"),
                                                        add("sint"),
                                                    }};
                                                }};
                                                title = "Dr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "eos";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "totam";
                                                    imageUri = "dicta";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "voluptatem";
                                                    synonyms = new String[]{{
                                                        add("dolor"),
                                                    }};
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                description = "a";
                                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dolor";
                                                    imageUri = "occaecati";
                                                }};
                                                info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                    key = "atque";
                                                    synonyms = new String[]{{
                                                        add("at"),
                                                    }};
                                                }};
                                                title = "Mrs.";
                                            }}),
                                        }};
                                        subtitle = "minus";
                                        title = "Ms.";
                                    }};
                                    mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                        mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                contentUrl = "perferendis";
                                                description = "rerum";
                                                icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "ea";
                                                    imageUri = "aperiam";
                                                }};
                                                largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                    accessibilityText = "dignissimos";
                                                    imageUri = "repellat";
                                                }};
                                                name = "Francis McKenzie";
                                            }}),
                                        }};
                                        mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.RESPONSE_MEDIA_TYPE_UNSPECIFIED;
                                    }};
                                    payload = new java.util.HashMap<String, Object>() {{
                                        put("soluta", "natus");
                                    }};
                                    platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.ACTIONS_ON_GOOGLE;
                                    quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                        quickReplies = new String[]{{
                                            add("amet"),
                                            add("tenetur"),
                                            add("aspernatur"),
                                        }};
                                        title = "Miss";
                                    }};
                                    simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                        simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "illum";
                                                ssml = "laborum";
                                                textToSpeech = "dignissimos";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "vero";
                                                ssml = "qui";
                                                textToSpeech = "consectetur";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "repellat";
                                                ssml = "explicabo";
                                                textToSpeech = "explicabo";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                displayText = "exercitationem";
                                                ssml = "nihil";
                                                textToSpeech = "non";
                                            }}),
                                        }};
                                    }};
                                    suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                        suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                title = "Mr.";
                                            }}),
                                        }};
                                    }};
                                    tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                        buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "https://white-depth.net";
                                                }};
                                                title = "Ms.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://flashy-detail.org";
                                                }};
                                                title = "Mrs.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://cold-swordfish.name";
                                                }};
                                                title = "Mr.";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                    uri = "http://minty-estrogen.info";
                                                }};
                                                title = "Miss";
                                            }}),
                                        }};
                                        columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "libero";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                header = "sit";
                                                horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                            }}),
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "eum";
                                            imageUri = "nesciunt";
                                        }};
                                        rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "fugiat";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "nostrum";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "veniam";
                                                    }}),
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "reiciendis";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                        text = "modi";
                                                    }}),
                                                }};
                                                dividerAfter = false;
                                            }}),
                                        }};
                                        subtitle = "aut";
                                        title = "Mr.";
                                    }};
                                    text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                        text = new String[]{{
                                            add("odio"),
                                            add("commodi"),
                                            add("numquam"),
                                            add("dolorum"),
                                        }};
                                    }};
                                }}),
                            }};
                            mlDisabled = false;
                            name = "Adrian Feest";
                            outputContexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context[]{{
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 791228;
                                    name = "Lola Kshlerin MD";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("autem", "fuga");
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 5310;
                                    name = "David Lubowitz";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("quae", "eaque");
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 904827;
                                    name = "Angelo Stokes";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("alias", "eveniet");
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2Context() {{
                                    lifespanCount = 941668;
                                    name = "Eva Denesik";
                                    parameters = new java.util.HashMap<String, Object>() {{
                                        put("explicabo", "beatae");
                                        put("aliquid", "modi");
                                        put("optio", "voluptatibus");
                                    }};
                                }}),
                            }};
                            parameters = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter[]{{
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "officia";
                                    displayName = "libero";
                                    entityTypeDisplayName = "totam";
                                    isList = false;
                                    mandatory = false;
                                    name = "Beth Jenkins";
                                    prompts = new String[]{{
                                        add("velit"),
                                    }};
                                    value = "reiciendis";
                                }}),
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "repellat";
                                    displayName = "nulla";
                                    entityTypeDisplayName = "laborum";
                                    isList = false;
                                    mandatory = false;
                                    name = "Sheldon Baumbach";
                                    prompts = new String[]{{
                                        add("voluptates"),
                                        add("non"),
                                        add("rem"),
                                        add("quia"),
                                    }};
                                    value = "ullam";
                                }}),
                                add(new GoogleCloudDialogflowV2IntentParameter() {{
                                    defaultValue = "quisquam";
                                    displayName = "dicta";
                                    entityTypeDisplayName = "voluptatibus";
                                    isList = false;
                                    mandatory = false;
                                    name = "Mr. Scott Torp";
                                    prompts = new String[]{{
                                        add("rem"),
                                        add("perferendis"),
                                        add("facilis"),
                                        add("reiciendis"),
                                    }};
                                    value = "a";
                                }}),
                            }};
                            parentFollowupIntentName = "iste";
                            priority = 117819;
                            resetContexts = false;
                            trainingPhrases = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase[]{{
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                    name = "Eleanor Gleason";
                                    parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "consequuntur";
                                            entityType = "assumenda";
                                            text = "vero";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "doloribus";
                                            entityType = "impedit";
                                            text = "porro";
                                            userDefined = false;
                                        }}),
                                    }};
                                    timesAddedCount = 883819;
                                    type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.EXAMPLE;
                                }}),
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                    name = "Stephen Marvin";
                                    parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "odio";
                                            entityType = "nesciunt";
                                            text = "debitis";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "vel";
                                            entityType = "neque";
                                            text = "corporis";
                                            userDefined = false;
                                        }}),
                                    }};
                                    timesAddedCount = 375350;
                                    type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                    name = "Ron Rau IV";
                                    parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "accusantium";
                                            entityType = "veniam";
                                            text = "saepe";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "neque";
                                            entityType = "facere";
                                            text = "aliquam";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "quos";
                                            entityType = "doloribus";
                                            text = "fugiat";
                                            userDefined = false;
                                        }}),
                                        add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                            alias = "est";
                                            entityType = "delectus";
                                            text = "velit";
                                            userDefined = false;
                                        }}),
                                    }};
                                    timesAddedCount = 110522;
                                    type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TYPE_UNSPECIFIED;
                                }}),
                            }};
                            webhookState = GoogleCloudDialogflowV2IntentWebhookStateEnum.WEBHOOK_STATE_ENABLED;
                        }}),
                    }};
                }};;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "doloribus";
                key = "possimus";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "explicabo";
                uploadProtocol = "ipsam";
            }};            

            DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse res = sdk.projects.dialogflowProjectsLocationsAgentIntentsBatchDelete(req, new DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1("cupiditate", "optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentIntentsBatchUpdate

Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentBatchInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageImage;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelect;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContent;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessagePlatformEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageQuickReplies;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestions;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageText;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentWebhookStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest req = new DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2BatchUpdateIntentsRequestInput = new GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput() {{
                    intentBatchInline = new GoogleCloudDialogflowV2IntentBatchInput() {{
                        intents = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentInput[]{{
                            add(new GoogleCloudDialogflowV2IntentInput() {{
                                action = "commodi";
                                defaultResponsePlatforms = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[]{{
                                    add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.FACEBOOK),
                                    add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.TELEGRAM),
                                    add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.ACTIONS_ON_GOOGLE),
                                    add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.LINE),
                                }};
                                displayName = "sint";
                                endInteraction = false;
                                events = new String[]{{
                                    add("numquam"),
                                    add("tenetur"),
                                }};
                                inputContextNames = new String[]{{
                                    add("libero"),
                                }};
                                isFallback = false;
                                liveAgentHandoff = false;
                                messages = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessage() {{
                                        basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                            buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "http://spotted-basics.com";
                                                    }};
                                                    title = "Dr.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "http://speedy-credibility.info";
                                                    }};
                                                    title = "Miss";
                                                }}),
                                            }};
                                            formattedText = "minima";
                                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                accessibilityText = "architecto";
                                                imageUri = "qui";
                                            }};
                                            subtitle = "aliquid";
                                            title = "Mr.";
                                        }};
                                        browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                            imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.GRAY;
                                            items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                    description = "praesentium";
                                                    footer = "dolor";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "exercitationem";
                                                        imageUri = "expedita";
                                                    }};
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                        url = "facilis";
                                                        urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                            }};
                                        }};
                                        card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                            buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                    postback = "culpa";
                                                    text = "consequuntur";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                    postback = "amet";
                                                    text = "deserunt";
                                                }}),
                                            }};
                                            imageUri = "modi";
                                            subtitle = "veniam";
                                            title = "Dr.";
                                        }};
                                        carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                            items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                    description = "a";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "quisquam";
                                                        imageUri = "enim";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "doloribus";
                                                        synonyms = new String[]{{
                                                            add("officiis"),
                                                            add("architecto"),
                                                            add("alias"),
                                                            add("culpa"),
                                                        }};
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                    description = "nobis";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "necessitatibus";
                                                        imageUri = "quia";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "dicta";
                                                        synonyms = new String[]{{
                                                            add("perspiciatis"),
                                                            add("debitis"),
                                                        }};
                                                    }};
                                                    title = "Mrs.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                    description = "architecto";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "accusantium";
                                                        imageUri = "perferendis";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "veritatis";
                                                        synonyms = new String[]{{
                                                            add("cumque"),
                                                            add("iure"),
                                                            add("quibusdam"),
                                                        }};
                                                    }};
                                                    title = "Miss";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                    description = "nemo";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "recusandae";
                                                        imageUri = "velit";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "magnam";
                                                        synonyms = new String[]{{
                                                            add("laboriosam"),
                                                            add("sed"),
                                                        }};
                                                    }};
                                                    title = "Ms.";
                                                }}),
                                            }};
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "natus";
                                            imageUri = "provident";
                                        }};
                                        linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                            destinationName = "cum";
                                            uri = "https://rotating-programme.org";
                                        }};
                                        listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                            items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                    description = "unde";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "modi";
                                                        imageUri = "perspiciatis";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "hic";
                                                        synonyms = new String[]{{
                                                            add("aspernatur"),
                                                            add("libero"),
                                                            add("nam"),
                                                        }};
                                                    }};
                                                    title = "Mrs.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                    description = "recusandae";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "quod";
                                                        imageUri = "id";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "saepe";
                                                        synonyms = new String[]{{
                                                            add("quo"),
                                                            add("nesciunt"),
                                                        }};
                                                    }};
                                                    title = "Dr.";
                                                }}),
                                            }};
                                            subtitle = "nemo";
                                            title = "Dr.";
                                        }};
                                        mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                            mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                    contentUrl = "non";
                                                    description = "mollitia";
                                                    icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "assumenda";
                                                        imageUri = "recusandae";
                                                    }};
                                                    largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "distinctio";
                                                        imageUri = "pariatur";
                                                    }};
                                                    name = "Ernestine Padberg";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                    contentUrl = "incidunt";
                                                    description = "maxime";
                                                    icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "ipsam";
                                                        imageUri = "alias";
                                                    }};
                                                    largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "suscipit";
                                                        imageUri = "deserunt";
                                                    }};
                                                    name = "Neal Ortiz";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                    contentUrl = "quo";
                                                    description = "perferendis";
                                                    icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "fugit";
                                                        imageUri = "aliquid";
                                                    }};
                                                    largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "magnam";
                                                        imageUri = "quaerat";
                                                    }};
                                                    name = "Moses Heathcote";
                                                }}),
                                            }};
                                            mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                                        }};
                                        payload = new java.util.HashMap<String, Object>() {{
                                            put("mollitia", "magnam");
                                            put("nostrum", "esse");
                                            put("corrupti", "fuga");
                                        }};
                                        platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.ACTIONS_ON_GOOGLE;
                                        quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                            quickReplies = new String[]{{
                                                add("quasi"),
                                                add("deserunt"),
                                                add("quod"),
                                                add("laboriosam"),
                                            }};
                                            title = "Mr.";
                                        }};
                                        simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                            simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                    displayText = "facere";
                                                    ssml = "necessitatibus";
                                                    textToSpeech = "maxime";
                                                }}),
                                            }};
                                        }};
                                        suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                            suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                    title = "Mr.";
                                                }}),
                                            }};
                                        }};
                                        tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                            buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "https://spanish-lawn.com";
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                            }};
                                            columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                    header = "sed";
                                                    horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.TRAILING;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                    header = "impedit";
                                                    horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.HORIZONTAL_ALIGNMENT_UNSPECIFIED;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                    header = "excepturi";
                                                    horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.TRAILING;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                    header = "maiores";
                                                    horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                                }}),
                                            }};
                                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                accessibilityText = "maiores";
                                                imageUri = "alias";
                                            }};
                                            rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                    cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "dicta";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "suscipit";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "earum";
                                                        }}),
                                                    }};
                                                    dividerAfter = false;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                    cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "velit";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "eius";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "esse";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "in";
                                                        }}),
                                                    }};
                                                    dividerAfter = false;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                    cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "quasi";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "neque";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "vero";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "excepturi";
                                                        }}),
                                                    }};
                                                    dividerAfter = false;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                    cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "qui";
                                                        }}),
                                                    }};
                                                    dividerAfter = false;
                                                }}),
                                            }};
                                            subtitle = "impedit";
                                            title = "Mr.";
                                        }};
                                        text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                            text = new String[]{{
                                                add("dicta"),
                                                add("odit"),
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessage() {{
                                        basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                            buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "https://acceptable-pack.info";
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "https://homely-grip.name";
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                            }};
                                            formattedText = "ullam";
                                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                accessibilityText = "quae";
                                                imageUri = "similique";
                                            }};
                                            subtitle = "incidunt";
                                            title = "Ms.";
                                        }};
                                        browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                            imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.IMAGE_DISPLAY_OPTIONS_UNSPECIFIED;
                                            items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                    description = "delectus";
                                                    footer = "omnis";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "sed";
                                                        imageUri = "nesciunt";
                                                    }};
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                        url = "maxime";
                                                        urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                    }};
                                                    title = "Ms.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                    description = "aliquam";
                                                    footer = "excepturi";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "maiores";
                                                        imageUri = "laudantium";
                                                    }};
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                        url = "velit";
                                                        urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                                    }};
                                                    title = "Mrs.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                                    description = "nemo";
                                                    footer = "ipsa";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "quisquam";
                                                        imageUri = "tenetur";
                                                    }};
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                                        url = "quas";
                                                        urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_ACTION;
                                                    }};
                                                    title = "Mrs.";
                                                }}),
                                            }};
                                        }};
                                        card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                            buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                    postback = "a";
                                                    text = "nobis";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                    postback = "perspiciatis";
                                                    text = "accusantium";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                    postback = "dicta";
                                                    text = "minus";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                                    postback = "commodi";
                                                    text = "eveniet";
                                                }}),
                                            }};
                                            imageUri = "porro";
                                            subtitle = "tempore";
                                            title = "Miss";
                                        }};
                                        carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                            items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                    description = "voluptates";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "fugit";
                                                        imageUri = "eius";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "sequi";
                                                        synonyms = new String[]{{
                                                            add("asperiores"),
                                                            add("esse"),
                                                            add("blanditiis"),
                                                            add("sint"),
                                                        }};
                                                    }};
                                                    title = "Dr.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                                    description = "a";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "animi";
                                                        imageUri = "maiores";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "itaque";
                                                        synonyms = new String[]{{
                                                            add("deserunt"),
                                                            add("corporis"),
                                                            add("velit"),
                                                            add("officiis"),
                                                        }};
                                                    }};
                                                    title = "Mrs.";
                                                }}),
                                            }};
                                        }};
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "officia";
                                            imageUri = "saepe";
                                        }};
                                        linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                            destinationName = "eum";
                                            uri = "https://anguished-pasta.net";
                                        }};
                                        listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                            items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                                    description = "blanditiis";
                                                    image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "eius";
                                                        imageUri = "quisquam";
                                                    }};
                                                    info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                                        key = "eos";
                                                        synonyms = new String[]{{
                                                            add("natus"),
                                                            add("minus"),
                                                            add("quia"),
                                                        }};
                                                    }};
                                                    title = "Mrs.";
                                                }}),
                                            }};
                                            subtitle = "reprehenderit";
                                            title = "Dr.";
                                        }};
                                        mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                            mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                    contentUrl = "corrupti";
                                                    description = "amet";
                                                    icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "molestiae";
                                                        imageUri = "amet";
                                                    }};
                                                    largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "laborum";
                                                        imageUri = "modi";
                                                    }};
                                                    name = "Jana Brakus";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                    contentUrl = "sunt";
                                                    description = "maiores";
                                                    icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "neque";
                                                        imageUri = "odit";
                                                    }};
                                                    largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "earum";
                                                        imageUri = "veniam";
                                                    }};
                                                    name = "Jessica Heller";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                                    contentUrl = "ad";
                                                    description = "nisi";
                                                    icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "tenetur";
                                                        imageUri = "quis";
                                                    }};
                                                    largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                        accessibilityText = "quibusdam";
                                                        imageUri = "nemo";
                                                    }};
                                                    name = "Meredith Bailey";
                                                }}),
                                            }};
                                            mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.RESPONSE_MEDIA_TYPE_UNSPECIFIED;
                                        }};
                                        payload = new java.util.HashMap<String, Object>() {{
                                            put("sapiente", "sed");
                                            put("possimus", "repellat");
                                            put("repudiandae", "architecto");
                                        }};
                                        platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.SLACK;
                                        quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                            quickReplies = new String[]{{
                                                add("harum"),
                                                add("dolore"),
                                                add("voluptatibus"),
                                                add("iure"),
                                            }};
                                            title = "Mr.";
                                        }};
                                        simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                            simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                    displayText = "soluta";
                                                    ssml = "dolorum";
                                                    textToSpeech = "velit";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                    displayText = "earum";
                                                    ssml = "praesentium";
                                                    textToSpeech = "error";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                    displayText = "non";
                                                    ssml = "quasi";
                                                    textToSpeech = "mollitia";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                                    displayText = "accusamus";
                                                    ssml = "harum";
                                                    textToSpeech = "cumque";
                                                }}),
                                            }};
                                        }};
                                        suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                            suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                                    title = "Miss";
                                                }}),
                                            }};
                                        }};
                                        tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                            buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "http://powerless-grandma.name";
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "http://sunny-creche.net";
                                                    }};
                                                    title = "Mr.";
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                                    openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                                        uri = "https://skinny-walking.net";
                                                    }};
                                                    title = "Miss";
                                                }}),
                                            }};
                                            columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                    header = "asperiores";
                                                    horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                    header = "iste";
                                                    horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                                    header = "accusantium";
                                                    horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.HORIZONTAL_ALIGNMENT_UNSPECIFIED;
                                                }}),
                                            }};
                                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                                accessibilityText = "aut";
                                                imageUri = "doloribus";
                                            }};
                                            rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                                add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                    cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "possimus";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "neque";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "pariatur";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "vel";
                                                        }}),
                                                    }};
                                                    dividerAfter = false;
                                                }}),
                                                add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                                    cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "mollitia";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "quae";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "quos";
                                                        }}),
                                                        add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                            text = "aperiam";
                                                        }}),
                                                    }};
                                                    dividerAfter = false;
                                                }}),
                                            }};
                                            subtitle = "non";
                                            title = "Dr.";
                                        }};
                                        text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                            text = new String[]{{
                                                add("aliquam"),
                                                add("quisquam"),
                                            }};
                                        }};
                                    }}),
                                }};
                                mlDisabled = false;
                                name = "Ms. Russell Wunsch";
                                outputContexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context[]{{
                                    add(new GoogleCloudDialogflowV2Context() {{
                                        lifespanCount = 221329;
                                        name = "Edith Runte";
                                        parameters = new java.util.HashMap<String, Object>() {{
                                            put("adipisci", "recusandae");
                                            put("tempora", "blanditiis");
                                        }};
                                    }}),
                                    add(new GoogleCloudDialogflowV2Context() {{
                                        lifespanCount = 258059;
                                        name = "Margie Balistreri DVM";
                                        parameters = new java.util.HashMap<String, Object>() {{
                                            put("quidem", "totam");
                                            put("porro", "deserunt");
                                        }};
                                    }}),
                                    add(new GoogleCloudDialogflowV2Context() {{
                                        lifespanCount = 168926;
                                        name = "Melanie Okuneva MD";
                                        parameters = new java.util.HashMap<String, Object>() {{
                                            put("dolore", "maxime");
                                        }};
                                    }}),
                                }};
                                parameters = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter[]{{
                                    add(new GoogleCloudDialogflowV2IntentParameter() {{
                                        defaultValue = "iste";
                                        displayName = "ullam";
                                        entityTypeDisplayName = "eligendi";
                                        isList = false;
                                        mandatory = false;
                                        name = "Shane Mayert IV";
                                        prompts = new String[]{{
                                            add("libero"),
                                        }};
                                        value = "ipsam";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentParameter() {{
                                        defaultValue = "quasi";
                                        displayName = "cumque";
                                        entityTypeDisplayName = "dicta";
                                        isList = false;
                                        mandatory = false;
                                        name = "Miss Irving Quigley";
                                        prompts = new String[]{{
                                            add("expedita"),
                                            add("corrupti"),
                                        }};
                                        value = "rem";
                                    }}),
                                }};
                                parentFollowupIntentName = "atque";
                                priority = 886118;
                                resetContexts = false;
                                trainingPhrases = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase[]{{
                                    add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                        name = "Timmy Ryan";
                                        parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "porro";
                                                entityType = "id";
                                                text = "excepturi";
                                                userDefined = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "occaecati";
                                                entityType = "libero";
                                                text = "quo";
                                                userDefined = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "esse";
                                                entityType = "hic";
                                                text = "maxime";
                                                userDefined = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "accusantium";
                                                entityType = "soluta";
                                                text = "fugit";
                                                userDefined = false;
                                            }}),
                                        }};
                                        timesAddedCount = 866292;
                                        type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TEMPLATE;
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                        name = "Patrick Ankunding";
                                        parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "voluptates";
                                                entityType = "tempora";
                                                text = "magni";
                                                userDefined = false;
                                            }}),
                                        }};
                                        timesAddedCount = 701841;
                                        type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                                        name = "Natalie Swift";
                                        parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "blanditiis";
                                                entityType = "nihil";
                                                text = "atque";
                                                userDefined = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "rerum";
                                                entityType = "deserunt";
                                                text = "atque";
                                                userDefined = false;
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                                alias = "nostrum";
                                                entityType = "atque";
                                                text = "architecto";
                                                userDefined = false;
                                            }}),
                                        }};
                                        timesAddedCount = 667213;
                                        type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                webhookState = GoogleCloudDialogflowV2IntentWebhookStateEnum.WEBHOOK_STATE_ENABLED;
                            }}),
                        }};
                    }};;
                    intentBatchUri = "magni";
                    intentView = GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum.INTENT_VIEW_UNSPECIFIED;
                    languageCode = "quas";
                    updateMask = "placeat";
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "saepe";
                key = "delectus";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "cumque";
                uploadProtocol = "natus";
            }};            

            DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse res = sdk.projects.dialogflowProjectsLocationsAgentIntentsBatchUpdate(req, new DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1("quaerat", "doloribus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentIntentsCreate

Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelect;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageImage;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelect;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContent;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessagePlatformEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageQuickReplies;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponses;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestions;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCard;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageText;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentWebhookStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentIntentsCreateRequest req = new DialogflowProjectsLocationsAgentIntentsCreateRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2IntentInput = new GoogleCloudDialogflowV2IntentInput() {{
                    action = "mollitia";
                    defaultResponsePlatforms = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum[]{{
                        add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.TELEGRAM),
                        add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.TELEGRAM),
                        add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.KIK),
                        add(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum.TELEGRAM),
                    }};
                    displayName = "illum";
                    endInteraction = false;
                    events = new String[]{{
                        add("sit"),
                    }};
                    inputContextNames = new String[]{{
                        add("minus"),
                        add("asperiores"),
                    }};
                    isFallback = false;
                    liveAgentHandoff = false;
                    messages = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessage[]{{
                        add(new GoogleCloudDialogflowV2IntentMessage() {{
                            basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://classic-certainty.com";
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://crafty-manatee.com";
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://quirky-embellishment.name";
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://sneaky-dictaphone.name";
                                        }};
                                        title = "Mr.";
                                    }}),
                                }};
                                formattedText = "at";
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "dolorem";
                                    imageUri = "repellat";
                                }};
                                subtitle = "aspernatur";
                                title = "Mr.";
                            }};
                            browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.IMAGE_DISPLAY_OPTIONS_UNSPECIFIED;
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "fuga";
                                        footer = "hic";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "eaque";
                                            imageUri = "dolorem";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "architecto";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Mr.";
                                    }}),
                                }};
                            }};
                            card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "enim";
                                        text = "illo";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "magnam";
                                        text = "delectus";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "numquam";
                                        text = "optio";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "nobis";
                                        text = "ex";
                                    }}),
                                }};
                                imageUri = "repellat";
                                subtitle = "quae";
                                title = "Ms.";
                            }};
                            carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "hic";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "excepturi";
                                            imageUri = "aliquid";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "sed";
                                            synonyms = new String[]{{
                                                add("similique"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "animi";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "dolore";
                                            imageUri = "tenetur";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "dignissimos";
                                            synonyms = new String[]{{
                                                add("animi"),
                                                add("laudantium"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "eveniet";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "earum";
                                            imageUri = "velit";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "officiis";
                                            synonyms = new String[]{{
                                                add("rerum"),
                                                add("itaque"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                }};
                            }};
                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                accessibilityText = "ipsam";
                                imageUri = "explicabo";
                            }};
                            linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                destinationName = "impedit";
                                uri = "http://golden-psychoanalyst.biz";
                            }};
                            listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "quaerat";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "architecto";
                                            imageUri = "praesentium";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "eveniet";
                                            synonyms = new String[]{{
                                                add("expedita"),
                                            }};
                                        }};
                                        title = "Miss";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "iste";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "illo";
                                            imageUri = "minus";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "quos";
                                            synonyms = new String[]{{
                                                add("sint"),
                                                add("iusto"),
                                                add("enim"),
                                                add("accusamus"),
                                            }};
                                        }};
                                        title = "Mr.";
                                    }}),
                                }};
                                subtitle = "voluptates";
                                title = "Ms.";
                            }};
                            mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "quae";
                                        description = "omnis";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "illum";
                                            imageUri = "rem";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "tenetur";
                                            imageUri = "deleniti";
                                        }};
                                        name = "Lila Bradtke";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "maiores";
                                        description = "sequi";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "saepe";
                                            imageUri = "consequatur";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "esse";
                                            imageUri = "debitis";
                                        }};
                                        name = "Devin Runte";
                                    }}),
                                }};
                                mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("reiciendis", "sequi");
                                put("porro", "laborum");
                            }};
                            platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.VIBER;
                            quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                quickReplies = new String[]{{
                                    add("omnis"),
                                    add("aut"),
                                    add("ipsam"),
                                    add("officia"),
                                }};
                                title = "Ms.";
                            }};
                            simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "quia";
                                        ssml = "necessitatibus";
                                        textToSpeech = "accusantium";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "ad";
                                        ssml = "nisi";
                                        textToSpeech = "molestiae";
                                    }}),
                                }};
                            }};
                            suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Ms.";
                                    }}),
                                }};
                            }};
                            tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://lawful-question.biz";
                                        }};
                                        title = "Dr.";
                                    }}),
                                }};
                                columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                        header = "ipsa";
                                        horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                    }}),
                                }};
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "dolore";
                                    imageUri = "esse";
                                }};
                                rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                        cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "sapiente";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "quam";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "est";
                                            }}),
                                        }};
                                        dividerAfter = false;
                                    }}),
                                }};
                                subtitle = "aliquam";
                                title = "Dr.";
                            }};
                            text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                text = new String[]{{
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("quod"),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDialogflowV2IntentMessage() {{
                            basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://evil-floor.net";
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://proud-treasure.info";
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://satisfied-windage.info";
                                        }};
                                        title = "Mr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://digital-candidacy.com";
                                        }};
                                        title = "Dr.";
                                    }}),
                                }};
                                formattedText = "doloremque";
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "sed";
                                    imageUri = "amet";
                                }};
                                subtitle = "rerum";
                                title = "Ms.";
                            }};
                            browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.GRAY;
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "ratione";
                                        footer = "dolor";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "nisi";
                                            imageUri = "dignissimos";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "reiciendis";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                        }};
                                        title = "Mr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "est";
                                        footer = "accusantium";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quod";
                                            imageUri = "minus";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "quos";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                        }};
                                        title = "Dr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "odio";
                                        footer = "provident";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "sapiente";
                                            imageUri = "aperiam";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "similique";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "ex";
                                        footer = "repellendus";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "unde";
                                            imageUri = "alias";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "impedit";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Ms.";
                                    }}),
                                }};
                            }};
                            card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "expedita";
                                        text = "in";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "quisquam";
                                        text = "sunt";
                                    }}),
                                }};
                                imageUri = "enim";
                                subtitle = "nulla";
                                title = "Dr.";
                            }};
                            carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "mollitia";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "impedit";
                                            imageUri = "accusamus";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "et";
                                            synonyms = new String[]{{
                                                add("blanditiis"),
                                                add("cum"),
                                                add("dicta"),
                                            }};
                                        }};
                                        title = "Miss";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "tempora";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "eveniet";
                                            imageUri = "repudiandae";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "sed";
                                            synonyms = new String[]{{
                                                add("quas"),
                                                add("impedit"),
                                                add("vel"),
                                                add("eligendi"),
                                            }};
                                        }};
                                        title = "Dr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "ex";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "beatae";
                                            imageUri = "veritatis";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "maiores";
                                            synonyms = new String[]{{
                                                add("vero"),
                                                add("quidem"),
                                                add("illo"),
                                                add("quo"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                }};
                            }};
                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                accessibilityText = "minus";
                                imageUri = "distinctio";
                            }};
                            linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                destinationName = "possimus";
                                uri = "https://helpless-ticket.org";
                            }};
                            listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "nihil";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quaerat";
                                            imageUri = "ipsum";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "ducimus";
                                            synonyms = new String[]{{
                                                add("rerum"),
                                                add("deserunt"),
                                                add("odit"),
                                            }};
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "sequi";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "beatae";
                                            imageUri = "iusto";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "esse";
                                            synonyms = new String[]{{
                                                add("odio"),
                                                add("nulla"),
                                            }};
                                        }};
                                        title = "Miss";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "cupiditate";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "illo";
                                            imageUri = "exercitationem";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "laborum";
                                            synonyms = new String[]{{
                                                add("fugit"),
                                                add("maxime"),
                                                add("dolorum"),
                                                add("repellat"),
                                            }};
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "illum";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quibusdam";
                                            imageUri = "commodi";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "esse";
                                            synonyms = new String[]{{
                                                add("consectetur"),
                                            }};
                                        }};
                                        title = "Dr.";
                                    }}),
                                }};
                                subtitle = "optio";
                                title = "Mr.";
                            }};
                            mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "exercitationem";
                                        description = "culpa";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "repudiandae";
                                            imageUri = "aspernatur";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "sapiente";
                                            imageUri = "neque";
                                        }};
                                        name = "Shane Pfeffer Jr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "laudantium";
                                        description = "iusto";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "corrupti";
                                            imageUri = "molestiae";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quis";
                                            imageUri = "iure";
                                        }};
                                        name = "Gail Fay";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "est";
                                        description = "iure";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quisquam";
                                            imageUri = "provident";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "laudantium";
                                            imageUri = "nam";
                                        }};
                                        name = "Jill Hilpert";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "perferendis";
                                        description = "corrupti";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "doloremque";
                                            imageUri = "fugiat";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "numquam";
                                            imageUri = "doloremque";
                                        }};
                                        name = "Loren Murphy";
                                    }}),
                                }};
                                mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.RESPONSE_MEDIA_TYPE_UNSPECIFIED;
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("soluta", "fugiat");
                                put("laboriosam", "nam");
                                put("enim", "maiores");
                                put("consectetur", "necessitatibus");
                            }};
                            platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.ACTIONS_ON_GOOGLE;
                            quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                quickReplies = new String[]{{
                                    add("voluptatem"),
                                    add("provident"),
                                    add("adipisci"),
                                }};
                                title = "Mr.";
                            }};
                            simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "repellat";
                                        ssml = "omnis";
                                        textToSpeech = "explicabo";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "vel";
                                        ssml = "cum";
                                        textToSpeech = "id";
                                    }}),
                                }};
                            }};
                            suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Mr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Mr.";
                                    }}),
                                }};
                            }};
                            tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://phony-review.biz";
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://sad-ass.org";
                                        }};
                                        title = "Dr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://altruistic-toy.info";
                                        }};
                                        title = "Ms.";
                                    }}),
                                }};
                                columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                        header = "aliquam";
                                        horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                    }}),
                                }};
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "hic";
                                    imageUri = "maiores";
                                }};
                                rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                        cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "nesciunt";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "cupiditate";
                                            }}),
                                        }};
                                        dividerAfter = false;
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                        cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "provident";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "beatae";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "ipsa";
                                            }}),
                                        }};
                                        dividerAfter = false;
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                        cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "nam";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "assumenda";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "quo";
                                            }}),
                                        }};
                                        dividerAfter = false;
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                        cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "tempore";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "commodi";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "fugit";
                                            }}),
                                        }};
                                        dividerAfter = false;
                                    }}),
                                }};
                                subtitle = "suscipit";
                                title = "Ms.";
                            }};
                            text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                text = new String[]{{
                                    add("aliquid"),
                                    add("provident"),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDialogflowV2IntentMessage() {{
                            basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://bewitched-trim.net";
                                        }};
                                        title = "Mr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://delectable-cirrus.com";
                                        }};
                                        title = "Miss";
                                    }}),
                                }};
                                formattedText = "sequi";
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "amet";
                                    imageUri = "exercitationem";
                                }};
                                subtitle = "illum";
                                title = "Ms.";
                            }};
                            browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.CROPPED;
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "eligendi";
                                        footer = "tempore";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "amet";
                                            imageUri = "debitis";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "nobis";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.AMP_CONTENT;
                                        }};
                                        title = "Dr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "id";
                                        footer = "atque";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quibusdam";
                                            imageUri = "sit";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "quo";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "provident";
                                        footer = "vero";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "earum";
                                            imageUri = "doloremque";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "ipsum";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Mr.";
                                    }}),
                                }};
                            }};
                            card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "perspiciatis";
                                        text = "quam";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "atque";
                                        text = "officia";
                                    }}),
                                }};
                                imageUri = "ex";
                                subtitle = "architecto";
                                title = "Dr.";
                            }};
                            carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "veritatis";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quod";
                                            imageUri = "a";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "qui";
                                            synonyms = new String[]{{
                                                add("commodi"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "totam";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "tenetur";
                                            imageUri = "voluptate";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "quam";
                                            synonyms = new String[]{{
                                                add("vitae"),
                                                add("sapiente"),
                                                add("reiciendis"),
                                                add("quod"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "inventore";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "facere";
                                            imageUri = "maxime";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "fuga";
                                            synonyms = new String[]{{
                                                add("ex"),
                                            }};
                                        }};
                                        title = "Mrs.";
                                    }}),
                                }};
                            }};
                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                accessibilityText = "maiores";
                                imageUri = "sed";
                            }};
                            linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                destinationName = "animi";
                                uri = "http://single-lychee.com";
                            }};
                            listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "omnis";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "nihil";
                                            imageUri = "tenetur";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "sapiente";
                                            synonyms = new String[]{{
                                                add("adipisci"),
                                            }};
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "optio";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "illum";
                                            imageUri = "at";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "tenetur";
                                            synonyms = new String[]{{
                                                add("ipsam"),
                                                add("esse"),
                                                add("laborum"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "voluptates";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "eum";
                                            imageUri = "quasi";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "quas";
                                            synonyms = new String[]{{
                                                add("commodi"),
                                                add("porro"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                }};
                                subtitle = "mollitia";
                                title = "Miss";
                            }};
                            mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "et";
                                        description = "nulla";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "magni";
                                            imageUri = "natus";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "illum";
                                            imageUri = "a";
                                        }};
                                        name = "Austin Grady";
                                    }}),
                                }};
                                mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("quisquam", "facere");
                                put("dignissimos", "iste");
                                put("provident", "dolor");
                                put("sint", "aperiam");
                            }};
                            platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.PLATFORM_UNSPECIFIED;
                            quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                quickReplies = new String[]{{
                                    add("laboriosam"),
                                    add("laborum"),
                                }};
                                title = "Ms.";
                            }};
                            simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "explicabo";
                                        ssml = "fugiat";
                                        textToSpeech = "doloremque";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "voluptatem";
                                        ssml = "alias";
                                        textToSpeech = "velit";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "ullam";
                                        ssml = "quis";
                                        textToSpeech = "velit";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "ratione";
                                        ssml = "quas";
                                        textToSpeech = "maxime";
                                    }}),
                                }};
                            }};
                            suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Miss";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Mr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Ms.";
                                    }}),
                                }};
                            }};
                            tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://cooperative-birdbath.org";
                                        }};
                                        title = "Miss";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://happy-go-lucky-cirrhosis.net";
                                        }};
                                        title = "Miss";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://caring-calm.name";
                                        }};
                                        title = "Mr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://lively-recliner.name";
                                        }};
                                        title = "Dr.";
                                    }}),
                                }};
                                columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                        header = "impedit";
                                        horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.CENTER;
                                    }}),
                                }};
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "illum";
                                    imageUri = "distinctio";
                                }};
                                rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                        cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "quaerat";
                                            }}),
                                        }};
                                        dividerAfter = false;
                                    }}),
                                }};
                                subtitle = "consequatur";
                                title = "Ms.";
                            }};
                            text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                text = new String[]{{
                                    add("commodi"),
                                    add("quibusdam"),
                                    add("consectetur"),
                                    add("voluptas"),
                                }};
                            }};
                        }}),
                        add(new GoogleCloudDialogflowV2IntentMessage() {{
                            basicCard = new GoogleCloudDialogflowV2IntentMessageBasicCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://watchful-soot.biz";
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://original-accident.info";
                                        }};
                                        title = "Dr.";
                                    }}),
                                }};
                                formattedText = "dicta";
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "quia";
                                    imageUri = "commodi";
                                }};
                                subtitle = "neque";
                                title = "Dr.";
                            }};
                            browseCarouselCard = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard() {{
                                imageDisplayOptions = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardImageDisplayOptionsEnum.GRAY;
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "officiis";
                                        footer = "omnis";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "neque";
                                            imageUri = "corporis";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "quod";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Dr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "excepturi";
                                        footer = "recusandae";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quos";
                                            imageUri = "dicta";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "sapiente";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Mr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem() {{
                                        description = "soluta";
                                        footer = "necessitatibus";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "sequi";
                                            imageUri = "recusandae";
                                        }};
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction() {{
                                            url = "labore";
                                            urlTypeHint = GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum.URL_TYPE_HINT_UNSPECIFIED;
                                        }};
                                        title = "Mr.";
                                    }}),
                                }};
                            }};
                            card = new GoogleCloudDialogflowV2IntentMessageCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCardButton() {{
                                        postback = "dolores";
                                        text = "illum";
                                    }}),
                                }};
                                imageUri = "iusto";
                                subtitle = "magni";
                                title = "Mr.";
                            }};
                            carouselSelect = new GoogleCloudDialogflowV2IntentMessageCarouselSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "ad";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "voluptate";
                                            imageUri = "vel";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "minima";
                                            synonyms = new String[]{{
                                                add("vel"),
                                            }};
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageCarouselSelectItem() {{
                                        description = "quaerat";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "quasi";
                                            imageUri = "rem";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "dignissimos";
                                            synonyms = new String[]{{
                                                add("assumenda"),
                                            }};
                                        }};
                                        title = "Ms.";
                                    }}),
                                }};
                            }};
                            image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                accessibilityText = "facere";
                                imageUri = "sed";
                            }};
                            linkOutSuggestion = new GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion() {{
                                destinationName = "inventore";
                                uri = "https://outlandish-peer.org";
                            }};
                            listSelect = new GoogleCloudDialogflowV2IntentMessageListSelect() {{
                                items = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageListSelectItem[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageListSelectItem() {{
                                        description = "adipisci";
                                        image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "doloremque";
                                            imageUri = "optio";
                                        }};
                                        info = new GoogleCloudDialogflowV2IntentMessageSelectItemInfo() {{
                                            key = "tempora";
                                            synonyms = new String[]{{
                                                add("cumque"),
                                                add("maxime"),
                                                add("et"),
                                                add("beatae"),
                                            }};
                                        }};
                                        title = "Miss";
                                    }}),
                                }};
                                subtitle = "consequatur";
                                title = "Ms.";
                            }};
                            mediaContent = new GoogleCloudDialogflowV2IntentMessageMediaContent() {{
                                mediaObjects = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject() {{
                                        contentUrl = "iure";
                                        description = "tempora";
                                        icon = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "eos";
                                            imageUri = "natus";
                                        }};
                                        largeImage = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                            accessibilityText = "voluptatem";
                                            imageUri = "suscipit";
                                        }};
                                        name = "Andres Larkin Sr.";
                                    }}),
                                }};
                                mediaType = GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum.AUDIO;
                            }};
                            payload = new java.util.HashMap<String, Object>() {{
                                put("corporis", "accusamus");
                                put("iusto", "sapiente");
                            }};
                            platform = GoogleCloudDialogflowV2IntentMessagePlatformEnum.KIK;
                            quickReplies = new GoogleCloudDialogflowV2IntentMessageQuickReplies() {{
                                quickReplies = new String[]{{
                                    add("quidem"),
                                }};
                                title = "Miss";
                            }};
                            simpleResponses = new GoogleCloudDialogflowV2IntentMessageSimpleResponses() {{
                                simpleResponses = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSimpleResponse[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "tempora";
                                        ssml = "ipsam";
                                        textToSpeech = "officiis";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "sequi";
                                        ssml = "magni";
                                        textToSpeech = "voluptatem";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSimpleResponse() {{
                                        displayText = "est";
                                        ssml = "amet";
                                        textToSpeech = "veritatis";
                                    }}),
                                }};
                            }};
                            suggestions = new GoogleCloudDialogflowV2IntentMessageSuggestions() {{
                                suggestions = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageSuggestion[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Dr.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageSuggestion() {{
                                        title = "Miss";
                                    }}),
                                }};
                            }};
                            tableCard = new GoogleCloudDialogflowV2IntentMessageTableCard() {{
                                buttons = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://vivacious-misfit.biz";
                                        }};
                                        title = "Ms.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "https://petty-physical.name";
                                        }};
                                        title = "Mrs.";
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageBasicCardButton() {{
                                        openUriAction = new GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction() {{
                                            uri = "http://round-rubber.biz";
                                        }};
                                        title = "Mr.";
                                    }}),
                                }};
                                columnProperties = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageColumnProperties[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                        header = "dolores";
                                        horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                    }}),
                                    add(new GoogleCloudDialogflowV2IntentMessageColumnProperties() {{
                                        header = "eum";
                                        horizontalAlignment = GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum.LEADING;
                                    }}),
                                }};
                                image = new GoogleCloudDialogflowV2IntentMessageImage() {{
                                    accessibilityText = "ad";
                                    imageUri = "quos";
                                }};
                                rows = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardRow[]{{
                                    add(new GoogleCloudDialogflowV2IntentMessageTableCardRow() {{
                                        cells = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentMessageTableCardCell[]{{
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "quibusdam";
                                            }}),
                                            add(new GoogleCloudDialogflowV2IntentMessageTableCardCell() {{
                                                text = "fugiat";
                                            }}),
                                        }};
                                        dividerAfter = false;
                                    }}),
                                }};
                                subtitle = "impedit";
                                title = "Miss";
                            }};
                            text = new GoogleCloudDialogflowV2IntentMessageText() {{
                                text = new String[]{{
                                    add("voluptates"),
                                    add("maiores"),
                                    add("nemo"),
                                }};
                            }};
                        }}),
                    }};
                    mlDisabled = false;
                    name = "Melba Runolfsson";
                    outputContexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context[]{{
                        add(new GoogleCloudDialogflowV2Context() {{
                            lifespanCount = 368599;
                            name = "Manuel Thiel Sr.";
                            parameters = new java.util.HashMap<String, Object>() {{
                                put("temporibus", "mollitia");
                                put("id", "quibusdam");
                                put("ipsa", "accusamus");
                                put("placeat", "quam");
                            }};
                        }}),
                        add(new GoogleCloudDialogflowV2Context() {{
                            lifespanCount = 627756;
                            name = "Bert Schultz";
                            parameters = new java.util.HashMap<String, Object>() {{
                                put("aut", "temporibus");
                                put("tenetur", "incidunt");
                                put("numquam", "corrupti");
                            }};
                        }}),
                        add(new GoogleCloudDialogflowV2Context() {{
                            lifespanCount = 630237;
                            name = "Tamara Wisoky";
                            parameters = new java.util.HashMap<String, Object>() {{
                                put("aut", "impedit");
                                put("minima", "quos");
                                put("blanditiis", "quas");
                            }};
                        }}),
                        add(new GoogleCloudDialogflowV2Context() {{
                            lifespanCount = 28362;
                            name = "Willard Erdman";
                            parameters = new java.util.HashMap<String, Object>() {{
                                put("maiores", "error");
                                put("recusandae", "a");
                                put("consectetur", "sapiente");
                            }};
                        }}),
                    }};
                    parameters = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentParameter[]{{
                        add(new GoogleCloudDialogflowV2IntentParameter() {{
                            defaultValue = "assumenda";
                            displayName = "repellendus";
                            entityTypeDisplayName = "omnis";
                            isList = false;
                            mandatory = false;
                            name = "Ms. Lonnie Wolf";
                            prompts = new String[]{{
                                add("asperiores"),
                                add("modi"),
                                add("facere"),
                            }};
                            value = "neque";
                        }}),
                        add(new GoogleCloudDialogflowV2IntentParameter() {{
                            defaultValue = "quis";
                            displayName = "in";
                            entityTypeDisplayName = "sed";
                            isList = false;
                            mandatory = false;
                            name = "Francis Stehr DVM";
                            prompts = new String[]{{
                                add("vero"),
                                add("eos"),
                            }};
                            value = "quas";
                        }}),
                        add(new GoogleCloudDialogflowV2IntentParameter() {{
                            defaultValue = "quasi";
                            displayName = "architecto";
                            entityTypeDisplayName = "praesentium";
                            isList = false;
                            mandatory = false;
                            name = "Ginger Haley";
                            prompts = new String[]{{
                                add("magnam"),
                                add("accusamus"),
                            }};
                            value = "nulla";
                        }}),
                        add(new GoogleCloudDialogflowV2IntentParameter() {{
                            defaultValue = "repudiandae";
                            displayName = "quibusdam";
                            entityTypeDisplayName = "praesentium";
                            isList = false;
                            mandatory = false;
                            name = "Ms. Madeline Miller";
                            prompts = new String[]{{
                                add("laboriosam"),
                                add("ratione"),
                                add("blanditiis"),
                                add("quidem"),
                            }};
                            value = "illum";
                        }}),
                    }};
                    parentFollowupIntentName = "reiciendis";
                    priority = 809567;
                    resetContexts = false;
                    trainingPhrases = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrase[]{{
                        add(new GoogleCloudDialogflowV2IntentTrainingPhrase() {{
                            name = "Peggy Crist";
                            parts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2IntentTrainingPhrasePart[]{{
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                    alias = "laudantium";
                                    entityType = "dignissimos";
                                    text = "omnis";
                                    userDefined = false;
                                }}),
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                    alias = "omnis";
                                    entityType = "fugit";
                                    text = "dolorem";
                                    userDefined = false;
                                }}),
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                    alias = "quidem";
                                    entityType = "molestiae";
                                    text = "debitis";
                                    userDefined = false;
                                }}),
                                add(new GoogleCloudDialogflowV2IntentTrainingPhrasePart() {{
                                    alias = "vitae";
                                    entityType = "dolor";
                                    text = "ad";
                                    userDefined = false;
                                }}),
                            }};
                            timesAddedCount = 539886;
                            type = GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum.TYPE_UNSPECIFIED;
                        }}),
                    }};
                    webhookState = GoogleCloudDialogflowV2IntentWebhookStateEnum.WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING;
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "et";
                intentView = DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum.INTENT_VIEW_UNSPECIFIED;
                key = "impedit";
                languageCode = "ex";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "vitae";
                uploadProtocol = "tenetur";
            }};            

            DialogflowProjectsLocationsAgentIntentsCreateResponse res = sdk.projects.dialogflowProjectsLocationsAgentIntentsCreate(req, new DialogflowProjectsLocationsAgentIntentsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1("laudantium", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Intent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentIntentsList

Returns the list of all intents in the specified agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsListIntentViewEnum;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentIntentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentIntentsListRequest req = new DialogflowProjectsLocationsAgentIntentsListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "iusto";
                intentView = DialogflowProjectsLocationsAgentIntentsListIntentViewEnum.INTENT_VIEW_UNSPECIFIED;
                key = "voluptate";
                languageCode = "sed";
                oauthToken = "dolorem";
                pageSize = 52497L;
                pageToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "voluptate";
                uploadProtocol = "voluptate";
            }};            

            DialogflowProjectsLocationsAgentIntentsListResponse res = sdk.projects.dialogflowProjectsLocationsAgentIntentsList(req, new DialogflowProjectsLocationsAgentIntentsListSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentIntentsListSecurityOption1("pariatur", "minus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListIntentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentRestore

Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentRestoreRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentRestoreResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentRestoreSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentRestoreSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentRestoreSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2RestoreAgentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentRestoreRequest req = new DialogflowProjectsLocationsAgentRestoreRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2RestoreAgentRequest = new GoogleCloudDialogflowV2RestoreAgentRequest() {{
                    agentContent = "totam";
                    agentUri = "cupiditate";
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quam";
                key = "exercitationem";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "quis";
                uploadProtocol = "commodi";
            }};            

            DialogflowProjectsLocationsAgentRestoreResponse res = sdk.projects.dialogflowProjectsLocationsAgentRestore(req, new DialogflowProjectsLocationsAgentRestoreSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentRestoreSecurityOption1("vel", "rem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentSearch

Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSearchRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSearchResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSearchSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSearchSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentSearchRequest req = new DialogflowProjectsLocationsAgentSearchRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "unde";
                key = "cumque";
                oauthToken = "dolor";
                pageSize = 833946L;
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "minima";
                uploadProtocol = "a";
            }};            

            DialogflowProjectsLocationsAgentSearchResponse res = sdk.projects.dialogflowProjectsLocationsAgentSearch(req, new DialogflowProjectsLocationsAgentSearchSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentSearchSecurityOption1("beatae", "vitae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2SearchAgentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentSessionsContextsCreate

Creates a context. If the specified context already exists, overrides the context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentSessionsContextsCreateRequest req = new DialogflowProjectsLocationsAgentSessionsContextsCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2Context = new GoogleCloudDialogflowV2Context() {{
                    lifespanCount = 937123;
                    name = "Samuel Bartoletti";
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("enim", "numquam");
                        put("architecto", "est");
                        put("quaerat", "facere");
                        put("vitae", "omnis");
                    }};
                }};;
                accessToken = "alias";
                alt = AltEnum.PROTO;
                callback = "officiis";
                fields = "expedita";
                key = "quia";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "quas";
                uploadProtocol = "ipsa";
            }};            

            DialogflowProjectsLocationsAgentSessionsContextsCreateResponse res = sdk.projects.dialogflowProjectsLocationsAgentSessionsContextsCreate(req, new DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1("distinctio", "placeat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Context != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentSessionsContextsList

Returns the list of all contexts in the specified session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentSessionsContextsListRequest req = new DialogflowProjectsLocationsAgentSessionsContextsListRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "distinctio";
                fields = "distinctio";
                key = "assumenda";
                oauthToken = "illum";
                pageSize = 746834L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "tempora";
                uploadProtocol = "esse";
            }};            

            DialogflowProjectsLocationsAgentSessionsContextsListResponse res = sdk.projects.dialogflowProjectsLocationsAgentSessionsContextsList(req, new DialogflowProjectsLocationsAgentSessionsContextsListSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentSessionsContextsListSecurityOption1("doloremque", "corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListContextsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentSessionsDeleteContexts

Deletes all active contexts in the specified session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest req = new DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "natus";
                key = "ab";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "rerum";
                uploadProtocol = "placeat";
            }};            

            DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse res = sdk.projects.dialogflowProjectsLocationsAgentSessionsDeleteContexts(req, new DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1("ab", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentSessionsDetectIntent

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDetectIntentRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DetectIntentRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EventInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputAudioConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2OutputAudioConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2QueryInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2QueryParameters;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityType;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SpeechContext;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2TextInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParams;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
import org.openapis.openapi.models.shared.GoogleTypeLatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentSessionsDetectIntentRequest req = new DialogflowProjectsLocationsAgentSessionsDetectIntentRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2DetectIntentRequest = new GoogleCloudDialogflowV2DetectIntentRequest() {{
                    inputAudio = "labore";
                    outputAudioConfig = new GoogleCloudDialogflowV2OutputAudioConfig() {{
                        audioEncoding = GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum.OUTPUT_AUDIO_ENCODING_OGG_OPUS;
                        sampleRateHertz = 285175;
                        synthesizeSpeechConfig = new GoogleCloudDialogflowV2SynthesizeSpeechConfig() {{
                            effectsProfileId = new String[]{{
                                add("ullam"),
                                add("numquam"),
                                add("enim"),
                                add("cupiditate"),
                            }};
                            pitch = 5786.1;
                            speakingRate = 9294.43;
                            voice = new GoogleCloudDialogflowV2VoiceSelectionParams() {{
                                name = "Jeffery Glover";
                                ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum.SSML_VOICE_GENDER_MALE;
                            }};;
                            volumeGainDb = 588.08;
                        }};;
                    }};;
                    outputAudioConfigMask = "eveniet";
                    queryInput = new GoogleCloudDialogflowV2QueryInput() {{
                        audioConfig = new GoogleCloudDialogflowV2InputAudioConfig() {{
                            audioEncoding = GoogleCloudDialogflowV2InputAudioConfigAudioEncodingEnum.AUDIO_ENCODING_AMR;
                            disableNoSpeechRecognizedEvent = false;
                            enableAutomaticPunctuation = false;
                            enableWordInfo = false;
                            languageCode = "nobis";
                            model = "qui";
                            modelVariant = GoogleCloudDialogflowV2InputAudioConfigModelVariantEnum.SPEECH_MODEL_VARIANT_UNSPECIFIED;
                            phraseHints = new String[]{{
                                add("impedit"),
                            }};
                            sampleRateHertz = 927754;
                            singleUtterance = false;
                            speechContexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SpeechContext[]{{
                                add(new GoogleCloudDialogflowV2SpeechContext() {{
                                    boost = 5371.4;
                                    phrases = new String[]{{
                                        add("et"),
                                        add("expedita"),
                                        add("quibusdam"),
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2SpeechContext() {{
                                    boost = 5529.84;
                                    phrases = new String[]{{
                                        add("quidem"),
                                        add("in"),
                                        add("culpa"),
                                        add("doloremque"),
                                    }};
                                }}),
                            }};
                        }};;
                        event = new GoogleCloudDialogflowV2EventInput() {{
                            languageCode = "fuga";
                            name = "Julie Homenick";
                            parameters = new java.util.HashMap<String, Object>() {{
                                put("fugit", "ratione");
                                put("possimus", "quaerat");
                            }};
                        }};;
                        text = new GoogleCloudDialogflowV2TextInput() {{
                            languageCode = "aut";
                            text = "natus";
                        }};;
                    }};;
                    queryParams = new GoogleCloudDialogflowV2QueryParameters() {{
                        contexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context[]{{
                            add(new GoogleCloudDialogflowV2Context() {{
                                lifespanCount = 963908;
                                name = "Philip Beier";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("hic", "ducimus");
                                    put("consequuntur", "ipsam");
                                    put("libero", "quia");
                                }};
                            }}),
                            add(new GoogleCloudDialogflowV2Context() {{
                                lifespanCount = 609094;
                                name = "Mrs. Phyllis Christiansen PhD";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("velit", "hic");
                                    put("ullam", "deserunt");
                                    put("itaque", "distinctio");
                                }};
                            }}),
                        }};
                        geoLocation = new GoogleTypeLatLng() {{
                            latitude = 4802.95;
                            longitude = 4938.65;
                        }};;
                        payload = new java.util.HashMap<String, Object>() {{
                            put("occaecati", "assumenda");
                            put("sunt", "odit");
                            put("vero", "deleniti");
                        }};
                        resetContexts = false;
                        sentimentAnalysisRequestConfig = new GoogleCloudDialogflowV2SentimentAnalysisRequestConfig() {{
                            analyzeQueryTextSentiment = false;
                        }};;
                        sessionEntityTypes = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityType[]{{
                            add(new GoogleCloudDialogflowV2SessionEntityType() {{
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("atque"),
                                            add("magnam"),
                                            add("perspiciatis"),
                                            add("amet"),
                                        }};
                                        value = "corrupti";
                                    }}),
                                }};
                                entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_UNSPECIFIED;
                                name = "Marta Stanton";
                            }}),
                            add(new GoogleCloudDialogflowV2SessionEntityType() {{
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("quos"),
                                            add("in"),
                                            add("commodi"),
                                            add("maxime"),
                                        }};
                                        value = "sed";
                                    }}),
                                }};
                                entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_SUPPLEMENT;
                                name = "Marcella Windler";
                            }}),
                            add(new GoogleCloudDialogflowV2SessionEntityType() {{
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("quo"),
                                            add("illo"),
                                            add("nobis"),
                                            add("esse"),
                                        }};
                                        value = "nisi";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("sequi"),
                                        }};
                                        value = "alias";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("quos"),
                                            add("numquam"),
                                            add("vitae"),
                                            add("maiores"),
                                        }};
                                        value = "nam";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("rerum"),
                                        }};
                                        value = "assumenda";
                                    }}),
                                }};
                                entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_UNSPECIFIED;
                                name = "Darla Sipes II";
                            }}),
                            add(new GoogleCloudDialogflowV2SessionEntityType() {{
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("autem"),
                                            add("tempore"),
                                            add("recusandae"),
                                        }};
                                        value = "nostrum";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("voluptas"),
                                            add("laudantium"),
                                            add("corporis"),
                                        }};
                                        value = "excepturi";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("deleniti"),
                                            add("necessitatibus"),
                                            add("aspernatur"),
                                        }};
                                        value = "dolores";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("vero"),
                                            add("eos"),
                                            add("voluptatem"),
                                        }};
                                        value = "temporibus";
                                    }}),
                                }};
                                entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_OVERRIDE;
                                name = "Lucy Wilkinson";
                            }}),
                        }};
                        timeZone = "nam";
                        webhookHeaders = new java.util.HashMap<String, String>() {{
                            put("iusto", "ab");
                        }};
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "sint";
                key = "placeat";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "itaque";
                uploadProtocol = "rem";
            }};            

            DialogflowProjectsLocationsAgentSessionsDetectIntentResponse res = sdk.projects.dialogflowProjectsLocationsAgentSessionsDetectIntent(req, new DialogflowProjectsLocationsAgentSessionsDetectIntentSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentSessionsDetectIntentSecurityOption1("nemo", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2DetectIntentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentSessionsEntityTypesCreate

Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityType;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest req = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2SessionEntityType = new GoogleCloudDialogflowV2SessionEntityType() {{
                    entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                        add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                            synonyms = new String[]{{
                                add("dolor"),
                                add("occaecati"),
                            }};
                            value = "quibusdam";
                        }}),
                    }};
                    entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_UNSPECIFIED;
                    name = "Marilyn Gibson";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "nisi";
                key = "explicabo";
                languageCode = "modi";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "sit";
                uploadProtocol = "voluptatum";
            }};            

            DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse res = sdk.projects.dialogflowProjectsLocationsAgentSessionsEntityTypesCreate(req, new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentSessionsEntityTypesCreateSecurityOption1("tempora", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2SessionEntityType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentSessionsEntityTypesList

Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest req = new DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest("quam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "molestiae";
                fields = "optio";
                key = "saepe";
                oauthToken = "maiores";
                pageSize = 35219L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "consequuntur";
                uploadProtocol = "quis";
            }};            

            DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse res = sdk.projects.dialogflowProjectsLocationsAgentSessionsEntityTypesList(req, new DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentSessionsEntityTypesListSecurityOption1("vitae", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListSessionEntityTypesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentTrain

Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentTrainRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentTrainResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentTrainSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentTrainSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentTrainSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentTrainRequest req = new DialogflowProjectsLocationsAgentTrainRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("exercitationem", "veniam");
                    put("modi", "quasi");
                    put("quae", "similique");
                }};
                accessToken = "possimus";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "ex";
                key = "sint";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "provident";
                uploadProtocol = "alias";
            }};            

            DialogflowProjectsLocationsAgentTrainResponse res = sdk.projects.dialogflowProjectsLocationsAgentTrain(req, new DialogflowProjectsLocationsAgentTrainSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentTrainSecurityOption1("deserunt", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentVersionsCreate

Creates an agent version. The new version points to the agent instance in the "default" environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VersionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentVersionsCreateRequest req = new DialogflowProjectsLocationsAgentVersionsCreateRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2VersionInput = new GoogleCloudDialogflowV2VersionInput() {{
                    description = "molestiae";
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "cupiditate";
                key = "deleniti";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "voluptatem";
                uploadProtocol = "aliquid";
            }};            

            DialogflowProjectsLocationsAgentVersionsCreateResponse res = sdk.projects.dialogflowProjectsLocationsAgentVersionsCreate(req, new DialogflowProjectsLocationsAgentVersionsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentVersionsCreateSecurityOption1("laudantium", "unde") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAgentVersionsList

Returns the list of all versions of the specified agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAgentVersionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAgentVersionsListRequest req = new DialogflowProjectsLocationsAgentVersionsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "nam";
                key = "amet";
                oauthToken = "adipisci";
                pageSize = 793597L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "fuga";
                uploadProtocol = "consectetur";
            }};            

            DialogflowProjectsLocationsAgentVersionsListResponse res = sdk.projects.dialogflowProjectsLocationsAgentVersionsList(req, new DialogflowProjectsLocationsAgentVersionsListSecurity() {{
                option1 = new DialogflowProjectsLocationsAgentVersionsListSecurityOption1("labore", "laudantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsAnswerRecordsList

Returns the list of all answer records in the specified project in reverse chronological order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAnswerRecordsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAnswerRecordsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAnswerRecordsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAnswerRecordsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsAnswerRecordsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsAnswerRecordsListRequest req = new DialogflowProjectsLocationsAnswerRecordsListRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "magnam";
                filter = "aperiam";
                key = "ducimus";
                oauthToken = "itaque";
                pageSize = 898197L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "eligendi";
                uploadProtocol = "sapiente";
            }};            

            DialogflowProjectsLocationsAnswerRecordsListResponse res = sdk.projects.dialogflowProjectsLocationsAnswerRecordsList(req, new DialogflowProjectsLocationsAnswerRecordsListSecurity() {{
                option1 = new DialogflowProjectsLocationsAnswerRecordsListSecurityOption1("alias", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListAnswerRecordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationDatasetsCreate

Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ConversationDatasetInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ConversationInfo;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2GcsSources;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationDatasetsCreateRequest req = new DialogflowProjectsLocationsConversationDatasetsCreateRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2ConversationDatasetInput = new GoogleCloudDialogflowV2ConversationDatasetInput() {{
                    conversationInfo = new GoogleCloudDialogflowV2ConversationInfo() {{
                        languageCode = "nobis";
                    }};;
                    description = "nihil";
                    displayName = "voluptatum";
                    inputConfig = new GoogleCloudDialogflowV2InputConfig() {{
                        gcsSource = new GoogleCloudDialogflowV2GcsSources() {{
                            uris = new String[]{{
                                add("vitae"),
                                add("ullam"),
                                add("nisi"),
                                add("consequuntur"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "corrupti";
                key = "est";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "impedit";
                uploadProtocol = "ducimus";
            }};            

            DialogflowProjectsLocationsConversationDatasetsCreateResponse res = sdk.projects.dialogflowProjectsLocationsConversationDatasetsCreate(req, new DialogflowProjectsLocationsConversationDatasetsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1("nisi", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationDatasetsImportConversationData

Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2GcsSources;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ImportConversationDataRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest req = new DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2ImportConversationDataRequest = new GoogleCloudDialogflowV2ImportConversationDataRequest() {{
                    inputConfig = new GoogleCloudDialogflowV2InputConfig() {{
                        gcsSource = new GoogleCloudDialogflowV2GcsSources() {{
                            uris = new String[]{{
                                add("maxime"),
                                add("maxime"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "impedit";
                key = "totam";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "inventore";
                uploadProtocol = "consequuntur";
            }};            

            DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse res = sdk.projects.dialogflowProjectsLocationsConversationDatasetsImportConversationData(req, new DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1("repellendus", "sit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationDatasetsList

Returns the list of all conversation datasets in the specified project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationDatasetsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationDatasetsListRequest req = new DialogflowProjectsLocationsConversationDatasetsListRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "odio";
                key = "alias";
                oauthToken = "quidem";
                pageSize = 533457L;
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "odio";
                uploadProtocol = "fugit";
            }};            

            DialogflowProjectsLocationsConversationDatasetsListResponse res = sdk.projects.dialogflowProjectsLocationsConversationDatasetsList(req, new DialogflowProjectsLocationsConversationDatasetsListSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationDatasetsListSecurityOption1("aspernatur", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListConversationDatasetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationModelsCreate

Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ConversationModelInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputDataset;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SmartReplyModelMetadata;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationModelsCreateRequest req = new DialogflowProjectsLocationsConversationModelsCreateRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2ConversationModelInput = new GoogleCloudDialogflowV2ConversationModelInput() {{
                    articleSuggestionModelMetadata = new GoogleCloudDialogflowV2ArticleSuggestionModelMetadata() {{
                        trainingModelType = GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum.SMART_REPLY_DUAL_ENCODER_MODEL;
                    }};;
                    datasets = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputDataset[]{{
                        add(new GoogleCloudDialogflowV2InputDataset() {{
                            dataset = "cum";
                        }}),
                        add(new GoogleCloudDialogflowV2InputDataset() {{
                            dataset = "voluptatum";
                        }}),
                    }};
                    displayName = "facilis";
                    languageCode = "placeat";
                    name = "Ernest Grimes";
                    smartReplyModelMetadata = new GoogleCloudDialogflowV2SmartReplyModelMetadata() {{
                        trainingModelType = GoogleCloudDialogflowV2SmartReplyModelMetadataTrainingModelTypeEnum.SMART_REPLY_DUAL_ENCODER_MODEL;
                    }};;
                }};;
                accessToken = "nemo";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "provident";
                key = "amet";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "qui";
                uploadProtocol = "tenetur";
            }};            

            DialogflowProjectsLocationsConversationModelsCreateResponse res = sdk.projects.dialogflowProjectsLocationsConversationModelsCreate(req, new DialogflowProjectsLocationsConversationModelsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationModelsCreateSecurityOption1("molestiae", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationModelsDeploy

Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsDeployRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsDeployResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsDeploySecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsDeploySecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsDeploySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationModelsDeployRequest req = new DialogflowProjectsLocationsConversationModelsDeployRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("cupiditate", "occaecati");
                }};
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "quas";
                key = "repellendus";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "distinctio";
                uploadProtocol = "vel";
            }};            

            DialogflowProjectsLocationsConversationModelsDeployResponse res = sdk.projects.dialogflowProjectsLocationsConversationModelsDeploy(req, new DialogflowProjectsLocationsConversationModelsDeploySecurity() {{
                option1 = new DialogflowProjectsLocationsConversationModelsDeploySecurityOption1("necessitatibus", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationModelsEvaluationsCreate

Creates evaluation of a conversation model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ConversationModelEvaluationInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EvaluationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputDataset;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SmartReplyMetrics;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest req = new DialogflowProjectsLocationsConversationModelsEvaluationsCreateRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2CreateConversationModelEvaluationRequestInput = new GoogleCloudDialogflowV2CreateConversationModelEvaluationRequestInput() {{
                    conversationModelEvaluation = new GoogleCloudDialogflowV2ConversationModelEvaluationInput() {{
                        displayName = "cupiditate";
                        evaluationConfig = new GoogleCloudDialogflowV2EvaluationConfig() {{
                            datasets = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2InputDataset[]{{
                                add(new GoogleCloudDialogflowV2InputDataset() {{
                                    dataset = "ullam";
                                }}),
                                add(new GoogleCloudDialogflowV2InputDataset() {{
                                    dataset = "dolorum";
                                }}),
                                add(new GoogleCloudDialogflowV2InputDataset() {{
                                    dataset = "soluta";
                                }}),
                                add(new GoogleCloudDialogflowV2InputDataset() {{
                                    dataset = "cum";
                                }}),
                            }};
                            smartComposeConfig = new GoogleCloudDialogflowV2EvaluationConfigSmartComposeConfig() {{
                                allowlistDocument = "in";
                                maxResultCount = 966956;
                            }};;
                            smartReplyConfig = new GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig() {{
                                allowlistDocument = "commodi";
                                maxResultCount = 414438;
                            }};;
                        }};;
                        name = "Miss Marion Hermann";
                        smartReplyMetrics = new GoogleCloudDialogflowV2SmartReplyMetrics() {{
                            allowlistCoverage = 5087.73;
                            conversationCount = "adipisci";
                            topNMetrics = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics[]{{
                                add(new GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics() {{
                                    n = 183504;
                                    recall = 6481.66;
                                }}),
                                add(new GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics() {{
                                    n = 754784;
                                    recall = 2758.37;
                                }}),
                                add(new GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics() {{
                                    n = 535883;
                                    recall = 2207.46;
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "possimus";
                fields = "odit";
                key = "consectetur";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "facilis";
                uploadProtocol = "facilis";
            }};            

            DialogflowProjectsLocationsConversationModelsEvaluationsCreateResponse res = sdk.projects.dialogflowProjectsLocationsConversationModelsEvaluationsCreate(req, new DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationModelsEvaluationsCreateSecurityOption1("deserunt", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationModelsEvaluationsList

Lists evaluations of a conversation model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationModelsEvaluationsListRequest req = new DialogflowProjectsLocationsConversationModelsEvaluationsListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "eveniet";
                key = "quae";
                oauthToken = "ea";
                pageSize = 989122L;
                pageToken = "veniam";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "asperiores";
                uploadProtocol = "eum";
            }};            

            DialogflowProjectsLocationsConversationModelsEvaluationsListResponse res = sdk.projects.dialogflowProjectsLocationsConversationModelsEvaluationsList(req, new DialogflowProjectsLocationsConversationModelsEvaluationsListSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationModelsEvaluationsListSecurityOption1("deserunt", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListConversationModelEvaluationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationModelsList

Lists conversation models.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationModelsListRequest req = new DialogflowProjectsLocationsConversationModelsListRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "quisquam";
                fields = "praesentium";
                key = "facilis";
                oauthToken = "assumenda";
                pageSize = 921916L;
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "commodi";
                uploadProtocol = "vitae";
            }};            

            DialogflowProjectsLocationsConversationModelsListResponse res = sdk.projects.dialogflowProjectsLocationsConversationModelsList(req, new DialogflowProjectsLocationsConversationModelsListSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationModelsListSecurityOption1("fugit", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListConversationModelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationModelsUndeploy

Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsUndeployRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsUndeployResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsUndeploySecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationModelsUndeploySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationModelsUndeployRequest req = new DialogflowProjectsLocationsConversationModelsUndeployRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eos", "alias");
                    put("ad", "a");
                    put("facere", "id");
                    put("atque", "quaerat");
                }};
                accessToken = "aperiam";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "modi";
                key = "fuga";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "officia";
                uploadProtocol = "sint";
            }};            

            DialogflowProjectsLocationsConversationModelsUndeployResponse res = sdk.projects.dialogflowProjectsLocationsConversationModelsUndeploy(req, new DialogflowProjectsLocationsConversationModelsUndeploySecurity() {{
                option1 = new DialogflowProjectsLocationsConversationModelsUndeploySecurityOption1("laborum", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig

Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest req = new DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2ClearSuggestionFeatureConfigRequest = new GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest() {{
                    participantRole = GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum.ROLE_UNSPECIFIED;
                    suggestionFeatureType = GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum.FAQ;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "maiores";
                key = "ea";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "accusamus";
                uploadProtocol = "reiciendis";
            }};            

            DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse res = sdk.projects.dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig(req, new DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1("consequatur", "sed") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationProfilesCreate

Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AutomatedAgentConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ConversationProfileInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentHandoffConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2LoggingConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2NotificationConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SpeechToTextConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestionFeature;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParams;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationProfilesCreateRequest req = new DialogflowProjectsLocationsConversationProfilesCreateRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2ConversationProfileInput = new GoogleCloudDialogflowV2ConversationProfileInput() {{
                    automatedAgentConfig = new GoogleCloudDialogflowV2AutomatedAgentConfig() {{
                        agent = "provident";
                    }};;
                    displayName = "maiores";
                    humanAgentAssistantConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfig() {{
                        endUserSuggestionConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig() {{
                            featureConfigs = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig[]{{
                                add(new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig() {{
                                    conversationModelConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig() {{
                                        model = "numquam";
                                    }};
                                    conversationProcessConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig() {{
                                        recentSentencesCount = 248276;
                                    }};
                                    enableEventBasedSuggestion = false;
                                    queryConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig() {{
                                        confidenceThreshold = 7410.24;
                                        contextFilterSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings() {{
                                            dropHandoffMessages = false;
                                            dropIvrMessages = false;
                                            dropVirtualAgentMessages = false;
                                        }};
                                        dialogflowQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource() {{
                                            agent = "incidunt";
                                        }};
                                        documentQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource() {{
                                            documents = new String[]{{
                                                add("enim"),
                                            }};
                                        }};
                                        knowledgeBaseQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource() {{
                                            knowledgeBases = new String[]{{
                                                add("libero"),
                                                add("omnis"),
                                            }};
                                        }};
                                        maxResults = 569196;
                                    }};
                                    suggestionFeature = new GoogleCloudDialogflowV2SuggestionFeature() {{
                                        type = GoogleCloudDialogflowV2SuggestionFeatureTypeEnum.TYPE_UNSPECIFIED;
                                    }};
                                    suggestionTriggerSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings() {{
                                        noSmalltalk = false;
                                        onlyEndUser = false;
                                    }};
                                }}),
                                add(new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig() {{
                                    conversationModelConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig() {{
                                        model = "quisquam";
                                    }};
                                    conversationProcessConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig() {{
                                        recentSentencesCount = 547184;
                                    }};
                                    enableEventBasedSuggestion = false;
                                    queryConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig() {{
                                        confidenceThreshold = 8301.97;
                                        contextFilterSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings() {{
                                            dropHandoffMessages = false;
                                            dropIvrMessages = false;
                                            dropVirtualAgentMessages = false;
                                        }};
                                        dialogflowQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource() {{
                                            agent = "cum";
                                        }};
                                        documentQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource() {{
                                            documents = new String[]{{
                                                add("est"),
                                                add("commodi"),
                                                add("similique"),
                                                add("autem"),
                                            }};
                                        }};
                                        knowledgeBaseQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource() {{
                                            knowledgeBases = new String[]{{
                                                add("recusandae"),
                                            }};
                                        }};
                                        maxResults = 956390;
                                    }};
                                    suggestionFeature = new GoogleCloudDialogflowV2SuggestionFeature() {{
                                        type = GoogleCloudDialogflowV2SuggestionFeatureTypeEnum.FAQ;
                                    }};
                                    suggestionTriggerSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings() {{
                                        noSmalltalk = false;
                                        onlyEndUser = false;
                                    }};
                                }}),
                            }};
                            groupSuggestionResponses = false;
                        }};;
                        humanAgentSuggestionConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig() {{
                            featureConfigs = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig[]{{
                                add(new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig() {{
                                    conversationModelConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig() {{
                                        model = "inventore";
                                    }};
                                    conversationProcessConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig() {{
                                        recentSentencesCount = 612238;
                                    }};
                                    enableEventBasedSuggestion = false;
                                    queryConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig() {{
                                        confidenceThreshold = 5421.87;
                                        contextFilterSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings() {{
                                            dropHandoffMessages = false;
                                            dropIvrMessages = false;
                                            dropVirtualAgentMessages = false;
                                        }};
                                        dialogflowQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource() {{
                                            agent = "explicabo";
                                        }};
                                        documentQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource() {{
                                            documents = new String[]{{
                                                add("atque"),
                                                add("doloribus"),
                                            }};
                                        }};
                                        knowledgeBaseQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource() {{
                                            knowledgeBases = new String[]{{
                                                add("aut"),
                                                add("similique"),
                                                add("iste"),
                                                add("eveniet"),
                                            }};
                                        }};
                                        maxResults = 723623;
                                    }};
                                    suggestionFeature = new GoogleCloudDialogflowV2SuggestionFeature() {{
                                        type = GoogleCloudDialogflowV2SuggestionFeatureTypeEnum.FAQ;
                                    }};
                                    suggestionTriggerSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings() {{
                                        noSmalltalk = false;
                                        onlyEndUser = false;
                                    }};
                                }}),
                            }};
                            groupSuggestionResponses = false;
                        }};;
                        messageAnalysisConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig() {{
                            enableEntityExtraction = false;
                            enableSentimentAnalysis = false;
                        }};;
                        notificationConfig = new GoogleCloudDialogflowV2NotificationConfig() {{
                            messageFormat = GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum.MESSAGE_FORMAT_UNSPECIFIED;
                            topic = "voluptate";
                        }};;
                    }};;
                    humanAgentHandoffConfig = new GoogleCloudDialogflowV2HumanAgentHandoffConfig() {{
                        livePersonConfig = new GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig() {{
                            accountNumber = "voluptatibus";
                        }};;
                        salesforceLiveAgentConfig = new GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig() {{
                            buttonId = "quam";
                            deploymentId = "nulla";
                            endpointDomain = "dolorem";
                            organizationId = "voluptates";
                        }};;
                    }};;
                    languageCode = "a";
                    loggingConfig = new GoogleCloudDialogflowV2LoggingConfig() {{
                        enableStackdriverLogging = false;
                    }};;
                    name = "Bertha Marks";
                    newMessageEventNotificationConfig = new GoogleCloudDialogflowV2NotificationConfig() {{
                        messageFormat = GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum.MESSAGE_FORMAT_UNSPECIFIED;
                        topic = "illum";
                    }};;
                    notificationConfig = new GoogleCloudDialogflowV2NotificationConfig() {{
                        messageFormat = GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum.PROTO;
                        topic = "culpa";
                    }};;
                    securitySettings = "dicta";
                    sttConfig = new GoogleCloudDialogflowV2SpeechToTextConfig() {{
                        model = "atque";
                        speechModelVariant = GoogleCloudDialogflowV2SpeechToTextConfigSpeechModelVariantEnum.SPEECH_MODEL_VARIANT_UNSPECIFIED;
                    }};;
                    timeZone = "vitae";
                    ttsConfig = new GoogleCloudDialogflowV2SynthesizeSpeechConfig() {{
                        effectsProfileId = new String[]{{
                            add("atque"),
                            add("nihil"),
                            add("culpa"),
                            add("temporibus"),
                        }};
                        pitch = 9559.13;
                        speakingRate = 3228.49;
                        voice = new GoogleCloudDialogflowV2VoiceSelectionParams() {{
                            name = "Sam Wisoky";
                            ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum.SSML_VOICE_GENDER_UNSPECIFIED;
                        }};;
                        volumeGainDb = 6502;
                    }};;
                }};;
                accessToken = "possimus";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "quam";
                key = "animi";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "voluptatem";
                uploadProtocol = "quisquam";
            }};            

            DialogflowProjectsLocationsConversationProfilesCreateResponse res = sdk.projects.dialogflowProjectsLocationsConversationProfilesCreate(req, new DialogflowProjectsLocationsConversationProfilesCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationProfilesCreateSecurityOption1("vitae", "cumque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ConversationProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationProfilesList

Returns the list of all conversation profiles in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationProfilesListRequest req = new DialogflowProjectsLocationsConversationProfilesListRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "quis";
                fields = "tempore";
                key = "officia";
                oauthToken = "iste";
                pageSize = 603783L;
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "ducimus";
                uploadProtocol = "voluptatum";
            }};            

            DialogflowProjectsLocationsConversationProfilesListResponse res = sdk.projects.dialogflowProjectsLocationsConversationProfilesList(req, new DialogflowProjectsLocationsConversationProfilesListSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationProfilesListSecurityOption1("sapiente", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListConversationProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig

Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestionFeature;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestionFeatureTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest req = new DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2SetSuggestionFeatureConfigRequest = new GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest() {{
                    participantRole = GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum.HUMAN_AGENT;
                    suggestionFeatureConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig() {{
                        conversationModelConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig() {{
                            model = "sint";
                        }};;
                        conversationProcessConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig() {{
                            recentSentencesCount = 418787;
                        }};;
                        enableEventBasedSuggestion = false;
                        queryConfig = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig() {{
                            confidenceThreshold = 6143.68;
                            contextFilterSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings() {{
                                dropHandoffMessages = false;
                                dropIvrMessages = false;
                                dropVirtualAgentMessages = false;
                            }};;
                            dialogflowQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource() {{
                                agent = "cupiditate";
                            }};;
                            documentQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource() {{
                                documents = new String[]{{
                                    add("fuga"),
                                }};
                            }};;
                            knowledgeBaseQuerySource = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource() {{
                                knowledgeBases = new String[]{{
                                    add("dolor"),
                                    add("voluptatum"),
                                    add("molestias"),
                                    add("quod"),
                                }};
                            }};;
                            maxResults = 920389;
                        }};;
                        suggestionFeature = new GoogleCloudDialogflowV2SuggestionFeature() {{
                            type = GoogleCloudDialogflowV2SuggestionFeatureTypeEnum.TYPE_UNSPECIFIED;
                        }};;
                        suggestionTriggerSettings = new GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings() {{
                            noSmalltalk = false;
                            onlyEndUser = false;
                        }};;
                    }};;
                }};;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "numquam";
                key = "incidunt";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "minus";
                uploadProtocol = "voluptate";
            }};            

            DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse res = sdk.projects.dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig(req, new DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigSecurityOption1("error", "reprehenderit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsComplete

Completes the specified conversation. Finished conversations are purged from the database after 30 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCompleteRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCompleteResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCompleteSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCompleteSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCompleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsCompleteRequest req = new DialogflowProjectsLocationsConversationsCompleteRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("voluptates", "delectus");
                }};
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "ipsum";
                key = "laboriosam";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "voluptatum";
                uploadProtocol = "debitis";
            }};            

            DialogflowProjectsLocationsConversationsCompleteResponse res = sdk.projects.dialogflowProjectsLocationsConversationsComplete(req, new DialogflowProjectsLocationsConversationsCompleteSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsCompleteSecurityOption1("a", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Conversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsCreate

Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ConversationConversationStageEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ConversationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsCreateRequest req = new DialogflowProjectsLocationsConversationsCreateRequest("eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2ConversationInput = new GoogleCloudDialogflowV2ConversationInput() {{
                    conversationProfile = "cupiditate";
                    conversationStage = GoogleCloudDialogflowV2ConversationConversationStageEnum.CONVERSATION_STAGE_UNSPECIFIED;
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "veniam";
                conversationId = "sed";
                fields = "necessitatibus";
                key = "possimus";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "explicabo";
                uploadProtocol = "ullam";
            }};            

            DialogflowProjectsLocationsConversationsCreateResponse res = sdk.projects.dialogflowProjectsLocationsConversationsCreate(req, new DialogflowProjectsLocationsConversationsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsCreateSecurityOption1("non", "delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Conversation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsList

Returns the list of all conversations in the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsListRequest req = new DialogflowProjectsLocationsConversationsListRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "illum";
                filter = "voluptates";
                key = "officia";
                oauthToken = "est";
                pageSize = 446484L;
                pageToken = "illo";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "consequatur";
                uploadProtocol = "delectus";
            }};            

            DialogflowProjectsLocationsConversationsListResponse res = sdk.projects.dialogflowProjectsLocationsConversationsList(req, new DialogflowProjectsLocationsConversationsListSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsListSecurityOption1("incidunt", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListConversationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsMessagesList

Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsMessagesListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsMessagesListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsMessagesListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsMessagesListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsMessagesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsMessagesListRequest req = new DialogflowProjectsLocationsConversationsMessagesListRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "laboriosam";
                filter = "laboriosam";
                key = "quam";
                oauthToken = "fuga";
                pageSize = 642272L;
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "soluta";
                uploadProtocol = "tempore";
            }};            

            DialogflowProjectsLocationsConversationsMessagesListResponse res = sdk.projects.dialogflowProjectsLocationsConversationsMessagesList(req, new DialogflowProjectsLocationsConversationsMessagesListSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsMessagesListSecurityOption1("culpa", "fugiat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent

Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AnalyzeContentRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AssistQueryParameters;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EventInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2OutputAudioConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2QueryParameters;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityType;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SynthesizeSpeechConfig;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2TextInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParams;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum;
import org.openapis.openapi.models.shared.GoogleTypeLatLng;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest req = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2AnalyzeContentRequest = new GoogleCloudDialogflowV2AnalyzeContentRequest() {{
                    assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters() {{
                        documentsMetadataFilters = new java.util.HashMap<String, String>() {{
                            put("sapiente", "voluptates");
                            put("ut", "nesciunt");
                        }};
                    }};;
                    cxParameters = new java.util.HashMap<String, Object>() {{
                        put("quibusdam", "suscipit");
                    }};
                    eventInput = new GoogleCloudDialogflowV2EventInput() {{
                        languageCode = "quidem";
                        name = "Maurice Runolfsdottir";
                        parameters = new java.util.HashMap<String, Object>() {{
                            put("maiores", "expedita");
                            put("rerum", "totam");
                            put("quod", "aspernatur");
                        }};
                    }};;
                    queryParams = new GoogleCloudDialogflowV2QueryParameters() {{
                        contexts = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Context[]{{
                            add(new GoogleCloudDialogflowV2Context() {{
                                lifespanCount = 773455;
                                name = "Brett Kub";
                                parameters = new java.util.HashMap<String, Object>() {{
                                    put("distinctio", "eius");
                                    put("eos", "veniam");
                                }};
                            }}),
                        }};
                        geoLocation = new GoogleTypeLatLng() {{
                            latitude = 9187.2;
                            longitude = 5723.17;
                        }};;
                        payload = new java.util.HashMap<String, Object>() {{
                            put("debitis", "laboriosam");
                            put("eos", "amet");
                            put("incidunt", "porro");
                        }};
                        resetContexts = false;
                        sentimentAnalysisRequestConfig = new GoogleCloudDialogflowV2SentimentAnalysisRequestConfig() {{
                            analyzeQueryTextSentiment = false;
                        }};;
                        sessionEntityTypes = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SessionEntityType[]{{
                            add(new GoogleCloudDialogflowV2SessionEntityType() {{
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("tempore"),
                                            add("in"),
                                        }};
                                        value = "omnis";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("tenetur"),
                                            add("recusandae"),
                                            add("expedita"),
                                            add("iusto"),
                                        }};
                                        value = "esse";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("ad"),
                                            add("quod"),
                                            add("ratione"),
                                        }};
                                        value = "totam";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("dolore"),
                                            add("nam"),
                                            add("officia"),
                                            add("maiores"),
                                        }};
                                        value = "cupiditate";
                                    }}),
                                }};
                                entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_UNSPECIFIED;
                                name = "Ronnie Bechtelar";
                            }}),
                            add(new GoogleCloudDialogflowV2SessionEntityType() {{
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("provident"),
                                            add("aut"),
                                            add("dolorum"),
                                        }};
                                        value = "nostrum";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("nam"),
                                            add("numquam"),
                                        }};
                                        value = "odio";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("maiores"),
                                            add("veritatis"),
                                        }};
                                        value = "autem";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("minima"),
                                            add("ex"),
                                            add("possimus"),
                                            add("nesciunt"),
                                        }};
                                        value = "corrupti";
                                    }}),
                                }};
                                entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_OVERRIDE;
                                name = "Earl Schoen";
                            }}),
                            add(new GoogleCloudDialogflowV2SessionEntityType() {{
                                entities = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2EntityTypeEntity[]{{
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("adipisci"),
                                            add("sunt"),
                                        }};
                                        value = "rerum";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("provident"),
                                            add("necessitatibus"),
                                            add("fugit"),
                                        }};
                                        value = "autem";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("eveniet"),
                                            add("fugiat"),
                                            add("blanditiis"),
                                            add("a"),
                                        }};
                                        value = "natus";
                                    }}),
                                    add(new GoogleCloudDialogflowV2EntityTypeEntity() {{
                                        synonyms = new String[]{{
                                            add("repellendus"),
                                            add("facilis"),
                                            add("molestias"),
                                            add("dolore"),
                                        }};
                                        value = "et";
                                    }}),
                                }};
                                entityOverrideMode = GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum.ENTITY_OVERRIDE_MODE_UNSPECIFIED;
                                name = "Ramon Franecki";
                            }}),
                        }};
                        timeZone = "hic";
                        webhookHeaders = new java.util.HashMap<String, String>() {{
                            put("vitae", "iusto");
                            put("atque", "velit");
                            put("molestiae", "nam");
                        }};
                    }};;
                    replyAudioConfig = new GoogleCloudDialogflowV2OutputAudioConfig() {{
                        audioEncoding = GoogleCloudDialogflowV2OutputAudioConfigAudioEncodingEnum.OUTPUT_AUDIO_ENCODING_UNSPECIFIED;
                        sampleRateHertz = 112788;
                        synthesizeSpeechConfig = new GoogleCloudDialogflowV2SynthesizeSpeechConfig() {{
                            effectsProfileId = new String[]{{
                                add("asperiores"),
                                add("at"),
                                add("quibusdam"),
                            }};
                            pitch = 4618.53;
                            speakingRate = 5345.09;
                            voice = new GoogleCloudDialogflowV2VoiceSelectionParams() {{
                                name = "Chester Daugherty IV";
                                ssmlGender = GoogleCloudDialogflowV2VoiceSelectionParamsSsmlGenderEnum.SSML_VOICE_GENDER_FEMALE;
                            }};;
                            volumeGainDb = 8794.18;
                        }};;
                    }};;
                    requestId = "distinctio";
                    textInput = new GoogleCloudDialogflowV2TextInput() {{
                        languageCode = "incidunt";
                        text = "labore";
                    }};;
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "sapiente";
                key = "quis";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "consectetur";
                uploadProtocol = "asperiores";
            }};            

            DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse res = sdk.projects.dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent(req, new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1("architecto", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2AnalyzeContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsParticipantsCreate

Creates a new participant in a conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Participant;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ParticipantRoleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsParticipantsCreateRequest req = new DialogflowProjectsLocationsConversationsParticipantsCreateRequest("possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2Participant = new GoogleCloudDialogflowV2Participant() {{
                    documentsMetadataFilters = new java.util.HashMap<String, String>() {{
                        put("quasi", "consequuntur");
                        put("nemo", "nobis");
                        put("debitis", "labore");
                        put("veritatis", "minima");
                    }};
                    name = "Patti Muller";
                    obfuscatedExternalUserId = "placeat";
                    role = GoogleCloudDialogflowV2ParticipantRoleEnum.END_USER;
                    sipRecordingMediaLabel = "voluptate";
                }};;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "odit";
                key = "eius";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "dolorum";
                uploadProtocol = "alias";
            }};            

            DialogflowProjectsLocationsConversationsParticipantsCreateResponse res = sdk.projects.dialogflowProjectsLocationsConversationsParticipantsCreate(req, new DialogflowProjectsLocationsConversationsParticipantsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsParticipantsCreateSecurityOption1("itaque", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Participant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsParticipantsList

Returns the list of all participants in the specified conversation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsParticipantsListRequest req = new DialogflowProjectsLocationsConversationsParticipantsListRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "non";
                key = "esse";
                oauthToken = "vero";
                pageSize = 752919L;
                pageToken = "minima";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "recusandae";
                uploadProtocol = "architecto";
            }};            

            DialogflowProjectsLocationsConversationsParticipantsListResponse res = sdk.projects.dialogflowProjectsLocationsConversationsParticipantsList(req, new DialogflowProjectsLocationsConversationsParticipantsListSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1("voluptatibus", "autem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListParticipantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles

Gets suggested articles for a participant based on specific historical messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AssistQueryParameters;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestArticlesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest req = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest("in") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2SuggestArticlesRequest = new GoogleCloudDialogflowV2SuggestArticlesRequest() {{
                    assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters() {{
                        documentsMetadataFilters = new java.util.HashMap<String, String>() {{
                            put("cumque", "dolore");
                        }};
                    }};;
                    contextSize = 762581;
                    latestMessage = "quo";
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "libero";
                fields = "suscipit";
                key = "illum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }};            

            DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse res = sdk.projects.dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles(req, new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1("repellat", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2SuggestArticlesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers

Gets suggested faq answers for a participant based on specific historical messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AssistQueryParameters;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestFaqAnswersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest req = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest("consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2SuggestFaqAnswersRequest = new GoogleCloudDialogflowV2SuggestFaqAnswersRequest() {{
                    assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters() {{
                        documentsMetadataFilters = new java.util.HashMap<String, String>() {{
                            put("nihil", "eius");
                            put("dignissimos", "corporis");
                        }};
                    }};;
                    contextSize = 16590;
                    latestMessage = "architecto";
                }};;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "officiis";
                key = "dolore";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "ipsam";
                uploadProtocol = "dicta";
            }};            

            DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse res = sdk.projects.dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers(req, new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1("hic", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2SuggestFaqAnswersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies

Gets smart replies for a participant based on specific historical messages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestSmartRepliesRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2TextInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest req = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2SuggestSmartRepliesRequest = new GoogleCloudDialogflowV2SuggestSmartRepliesRequest() {{
                    contextSize = 516739;
                    currentTextInput = new GoogleCloudDialogflowV2TextInput() {{
                        languageCode = "tempora";
                        text = "quo";
                    }};;
                    latestMessage = "dolor";
                }};;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "officiis";
                key = "dicta";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "deserunt";
                uploadProtocol = "odit";
            }};            

            DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse res = sdk.projects.dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies(req, new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1("incidunt", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2SuggestSmartRepliesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary

Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AssistQueryParameters;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2SuggestConversationSummaryRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest req = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest("quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2SuggestConversationSummaryRequest = new GoogleCloudDialogflowV2SuggestConversationSummaryRequest() {{
                    assistQueryParams = new GoogleCloudDialogflowV2AssistQueryParameters() {{
                        documentsMetadataFilters = new java.util.HashMap<String, String>() {{
                            put("tenetur", "excepturi");
                            put("modi", "corrupti");
                        }};
                    }};;
                    contextSize = 472429;
                    latestMessage = "eius";
                }};;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "ipsam";
                key = "nobis";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "perspiciatis";
                uploadProtocol = "ducimus";
            }};            

            DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse res = sdk.projects.dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary(req, new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity() {{
                option1 = new DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1("qui", "qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2SuggestConversationSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsDeleteAgent

Deletes the specified agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsDeleteAgentRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsDeleteAgentResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsDeleteAgentSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsDeleteAgentSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsDeleteAgentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsDeleteAgentRequest req = new DialogflowProjectsLocationsDeleteAgentRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "cum";
                key = "fugiat";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "officiis";
                uploadProtocol = "corporis";
            }};            

            DialogflowProjectsLocationsDeleteAgentResponse res = sdk.projects.dialogflowProjectsLocationsDeleteAgent(req, new DialogflowProjectsLocationsDeleteAgentSecurity() {{
                option1 = new DialogflowProjectsLocationsDeleteAgentSecurityOption1("repellendus", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsGetAgent

Retrieves the specified agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsGetAgentRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsGetAgentResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsGetAgentSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsGetAgentSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsGetAgentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsGetAgentRequest req = new DialogflowProjectsLocationsGetAgentRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "officiis";
                key = "delectus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "velit";
                uploadProtocol = "voluptatum";
            }};            

            DialogflowProjectsLocationsGetAgentResponse res = sdk.projects.dialogflowProjectsLocationsGetAgent(req, new DialogflowProjectsLocationsGetAgentSecurity() {{
                option1 = new DialogflowProjectsLocationsGetAgentSecurityOption1("nihil", "neque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Agent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesCreate

Creates a knowledge base.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2KnowledgeBase;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesCreateRequest req = new DialogflowProjectsLocationsKnowledgeBasesCreateRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2KnowledgeBase = new GoogleCloudDialogflowV2KnowledgeBase() {{
                    displayName = "corporis";
                    languageCode = "cupiditate";
                    name = "Pat Schmitt Jr.";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "aperiam";
                key = "voluptatem";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "sequi";
                uploadProtocol = "rerum";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesCreateResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesCreate(req, new DialogflowProjectsLocationsKnowledgeBasesCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesCreateSecurityOption1("ipsum", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2KnowledgeBase != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentReloadStatus;
import org.openapis.openapi.models.shared.GoogleRpcStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest req = new DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2DocumentInput = new GoogleCloudDialogflowV2DocumentInput() {{
                    contentUri = "incidunt";
                    displayName = "ut";
                    enableAutoReload = false;
                    knowledgeTypes = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum[]{{
                        add(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum.FAQ),
                        add(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum.FAQ),
                        add(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum.AGENT_FACING_SMART_REPLY),
                        add(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum.AGENT_FACING_SMART_REPLY),
                    }};
                    latestReloadStatus = new GoogleCloudDialogflowV2DocumentReloadStatus() {{
                        status = new GoogleRpcStatus() {{
                            code = 442668;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("cumque", "ut");
                                    put("quae", "nihil");
                                    put("quam", "assumenda");
                                    put("consequatur", "cumque");
                                }}),
                            }};
                            message = "placeat";
                        }};;
                        time = "adipisci";
                    }};;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("non", "accusantium");
                        put("corrupti", "itaque");
                        put("earum", "impedit");
                        put("dicta", "corporis");
                    }};
                    mimeType = "impedit";
                    name = "Jonathon Gulgowski";
                    rawContent = "officiis";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "necessitatibus";
                key = "voluptatem";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "veniam";
                uploadProtocol = "fuga";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate(req, new DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateSecurityOption1("itaque", "possimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest req = new DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "distinctio";
                force = false;
                key = "corporis";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "cupiditate";
                uploadProtocol = "unde";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete(req, new DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1("et", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsExport

Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ExportDocumentRequest;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2GcsDestination;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest req = new DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest("unde") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2ExportDocumentRequest = new GoogleCloudDialogflowV2ExportDocumentRequest() {{
                    exportFullContent = false;
                    gcsDestination = new GoogleCloudDialogflowV2GcsDestination() {{
                        uri = "http://stupid-suffocation.net";
                    }};;
                    smartMessagingPartialUpdate = false;
                }};;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "eius";
                key = "vel";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "odio";
                uploadProtocol = "numquam";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesDocumentsExportResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesDocumentsExport(req, new DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1("fugit", "inventore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsImport

Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2GcsSources;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ImportDocumentTemplate;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ImportDocumentsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest req = new DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2ImportDocumentsRequest = new GoogleCloudDialogflowV2ImportDocumentsRequest() {{
                    documentTemplate = new GoogleCloudDialogflowV2ImportDocumentTemplate() {{
                        knowledgeTypes = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum[]{{
                            add(GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum.EXTRACTIVE_QA),
                            add(GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum.AGENT_FACING_SMART_REPLY),
                            add(GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum.EXTRACTIVE_QA),
                            add(GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum.FAQ),
                        }};
                        metadata = new java.util.HashMap<String, String>() {{
                            put("fugit", "a");
                        }};
                        mimeType = "consequatur";
                    }};;
                    gcsSource = new GoogleCloudDialogflowV2GcsSources() {{
                        uris = new String[]{{
                            add("id"),
                            add("error"),
                            add("ratione"),
                            add("perferendis"),
                        }};
                    }};;
                    importGcsCustomMetadata = false;
                }};;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "maiores";
                key = "nihil";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "consequuntur";
                uploadProtocol = "maiores";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesDocumentsImport(req, new DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsImportSecurityOption1("esse", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsList

Returns the list of all documents of the knowledge base.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest req = new DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "voluptatem";
                filter = "natus";
                key = "voluptatem";
                oauthToken = "tempora";
                pageSize = 577622L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ex";
                uploadProtocol = "doloremque";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesDocumentsList(req, new DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsListSecurityOption1("quas", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListDocumentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption2;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentInput;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentReloadStatus;
import org.openapis.openapi.models.shared.GoogleRpcStatus;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest req = new DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2DocumentInput = new GoogleCloudDialogflowV2DocumentInput() {{
                    contentUri = "quas";
                    displayName = "blanditiis";
                    enableAutoReload = false;
                    knowledgeTypes = new org.openapis.openapi.models.shared.GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum[]{{
                        add(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum.AGENT_FACING_SMART_REPLY),
                        add(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum.ARTICLE_SUGGESTION),
                        add(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum.EXTRACTIVE_QA),
                    }};
                    latestReloadStatus = new GoogleCloudDialogflowV2DocumentReloadStatus() {{
                        status = new GoogleRpcStatus() {{
                            code = 423550;
                            details = new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("consectetur", "soluta");
                                    put("tenetur", "necessitatibus");
                                    put("perspiciatis", "suscipit");
                                }}),
                            }};
                            message = "ullam";
                        }};;
                        time = "unde";
                    }};;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("quidem", "magnam");
                        put("doloremque", "accusamus");
                        put("quod", "sunt");
                        put("voluptas", "earum");
                    }};
                    mimeType = "est";
                    name = "Christian Hegmann MD";
                    rawContent = "ullam";
                }};;
                accessToken = "ratione";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "modi";
                key = "illum";
                languageCode = "error";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                updateMask = DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchUpdateMaskEnum.INTENT_VIEW_FULL;
                uploadType = "cum";
                uploadProtocol = "culpa";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch(req, new DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchSecurityOption1("culpa", "a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesDocumentsReload

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2ReloadDocumentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest req = new DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDialogflowV2ReloadDocumentRequest = new GoogleCloudDialogflowV2ReloadDocumentRequest() {{
                    contentUri = "ad";
                    importGcsCustomMetadata = false;
                    smartMessagingPartialUpdate = false;
                }};;
                accessToken = "quia";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "voluptatum";
                key = "numquam";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "cupiditate";
                uploadProtocol = "tempore";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesDocumentsReload(req, new DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadSecurityOption1("odit", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsKnowledgeBasesList

Returns the list of all knowledge bases of the specified agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsKnowledgeBasesListRequest req = new DialogflowProjectsLocationsKnowledgeBasesListRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "sapiente";
                filter = "necessitatibus";
                key = "voluptatum";
                oauthToken = "quasi";
                pageSize = 649373L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "sapiente";
                uploadProtocol = "ut";
            }};            

            DialogflowProjectsLocationsKnowledgeBasesListResponse res = sdk.projects.dialogflowProjectsLocationsKnowledgeBasesList(req, new DialogflowProjectsLocationsKnowledgeBasesListSecurity() {{
                option1 = new DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1("incidunt", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2ListKnowledgeBasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsListRequest req = new DialogflowProjectsLocationsListRequest("ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "saepe";
                filter = "quod";
                key = "nulla";
                oauthToken = "tempora";
                pageSize = 461639L;
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "nesciunt";
                uploadProtocol = "earum";
            }};            

            DialogflowProjectsLocationsListResponse res = sdk.projects.dialogflowProjectsLocationsList(req, new DialogflowProjectsLocationsListSecurity() {{
                option1 = new DialogflowProjectsLocationsListSecurityOption1("eum", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudLocationListLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsLocationsSetAgent

Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsSetAgentRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsSetAgentResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsSetAgentSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsSetAgentSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsLocationsSetAgentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2Agent;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AgentApiVersionEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AgentMatchModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDialogflowV2AgentTierEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsLocationsSetAgentRequest req = new DialogflowProjectsLocationsSetAgentRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDialogflowV2Agent = new GoogleCloudDialogflowV2Agent() {{
                    apiVersion = GoogleCloudDialogflowV2AgentApiVersionEnum.API_VERSION_UNSPECIFIED;
                    avatarUri = "eaque";
                    classificationThreshold = 6170.6;
                    defaultLanguageCode = "ratione";
                    description = "nihil";
                    displayName = "unde";
                    enableLogging = false;
                    matchMode = GoogleCloudDialogflowV2AgentMatchModeEnum.MATCH_MODE_HYBRID;
                    parent = "id";
                    supportedLanguageCodes = new String[]{{
                        add("occaecati"),
                        add("optio"),
                    }};
                    tier = GoogleCloudDialogflowV2AgentTierEnum.TIER_ENTERPRISE_PLUS;
                    timeZone = "ad";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "sapiente";
                key = "quam";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "repellendus";
                updateMask = "culpa";
                uploadType = "dicta";
                uploadProtocol = "rem";
            }};            

            DialogflowProjectsLocationsSetAgentResponse res = sdk.projects.dialogflowProjectsLocationsSetAgent(req, new DialogflowProjectsLocationsSetAgentSecurity() {{
                option1 = new DialogflowProjectsLocationsSetAgentSecurityOption1("fuga", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudDialogflowV2Agent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsOperationsCancelRequest req = new DialogflowProjectsOperationsCancelRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "omnis";
                key = "quis";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "aliquam";
                uploadProtocol = "vero";
            }};            

            DialogflowProjectsOperationsCancelResponse res = sdk.projects.dialogflowProjectsOperationsCancel(req, new DialogflowProjectsOperationsCancelSecurity() {{
                option1 = new DialogflowProjectsOperationsCancelSecurityOption1("nisi", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsGetIntentViewEnum;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsGetSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsOperationsGetRequest req = new DialogflowProjectsOperationsGetRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "ullam";
                intentView = DialogflowProjectsOperationsGetIntentViewEnum.INTENT_VIEW_UNSPECIFIED;
                key = "maiores";
                languageCode = "iste";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "fugiat";
                uploadProtocol = "odio";
            }};            

            DialogflowProjectsOperationsGetResponse res = sdk.projects.dialogflowProjectsOperationsGet(req, new DialogflowProjectsOperationsGetSecurity() {{
                option1 = new DialogflowProjectsOperationsGetSecurityOption1("ullam", "inventore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dialogflowProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsListSecurity;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.DialogflowProjectsOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DialogflowProjectsOperationsListRequest req = new DialogflowProjectsOperationsListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "a";
                filter = "nihil";
                key = "veniam";
                oauthToken = "aut";
                pageSize = 170126L;
                pageToken = "rerum";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "nulla";
                uploadProtocol = "quod";
            }};            

            DialogflowProjectsOperationsListResponse res = sdk.projects.dialogflowProjectsOperationsList(req, new DialogflowProjectsOperationsListSecurity() {{
                option1 = new DialogflowProjectsOperationsListSecurityOption1("non", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
