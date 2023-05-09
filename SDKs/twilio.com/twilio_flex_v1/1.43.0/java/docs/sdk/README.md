# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createChannel](#createchannel)
* [createFlexFlow](#createflexflow)
* [createInsightsAssessments](#createinsightsassessments) - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
* [createInsightsAssessmentsComment](#createinsightsassessmentscomment) - To create a comment assessment for a conversation
* [createInsightsQuestionnaires](#createinsightsquestionnaires) - To create a Questionnaire
* [createInsightsQuestionnairesCategory](#createinsightsquestionnairescategory) - To create a category for Questions
* [createInsightsQuestionnairesQuestion](#createinsightsquestionnairesquestion) - To create a question for a Category
* [createInsightsSession](#createinsightssession) - To obtain session details for fetching reports and dashboards
* [createInteraction](#createinteraction) - Create a new Interaction.
* [createInteractionChannelInvite](#createinteractionchannelinvite) - Invite an Agent or a TaskQueue to a Channel.
* [createInteractionChannelParticipant](#createinteractionchannelparticipant) - Add a Participant to a Channel.
* [createWebChannel](#createwebchannel)
* [deleteChannel](#deletechannel)
* [deleteFlexFlow](#deleteflexflow)
* [deleteInsightsQuestionnaires](#deleteinsightsquestionnaires) - To delete the questionnaire
* [deleteInsightsQuestionnairesCategory](#deleteinsightsquestionnairescategory)
* [deleteInsightsQuestionnairesQuestion](#deleteinsightsquestionnairesquestion)
* [deleteWebChannel](#deletewebchannel)
* [fetchChannel](#fetchchannel)
* [fetchConfiguration](#fetchconfiguration)
* [fetchFlexFlow](#fetchflexflow)
* [fetchInsightsQuestionnaires](#fetchinsightsquestionnaires) - To get the Questionnaire Detail
* [fetchInsightsSettingsAnswersets](#fetchinsightssettingsanswersets) - To get the Answer Set Settings for an Account
* [fetchInsightsSettingsComment](#fetchinsightssettingscomment) - To get the Comment Settings for an Account
* [fetchInsightsUserRoles](#fetchinsightsuserroles) - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
* [fetchInteraction](#fetchinteraction)
* [fetchInteractionChannel](#fetchinteractionchannel) - Fetch a Channel for an Interaction.
* [fetchWebChannel](#fetchwebchannel)
* [listChannel](#listchannel)
* [listFlexFlow](#listflexflow)
* [listInsightsAssessments](#listinsightsassessments) - Get assessments done for a conversation by logged in user
* [listInsightsAssessmentsComment](#listinsightsassessmentscomment) - To create a comment assessment for a conversation
* [listInsightsConversations](#listinsightsconversations) - To get conversation with segment id
* [listInsightsQuestionnaires](#listinsightsquestionnaires) - To get all questionnaires with questions
* [listInsightsQuestionnairesCategory](#listinsightsquestionnairescategory) - To get all the categories
* [listInsightsQuestionnairesQuestion](#listinsightsquestionnairesquestion) - To get all the question for the given categories
* [listInsightsSegments](#listinsightssegments) - To get segments for given reservation Ids
* [listInteractionChannel](#listinteractionchannel) - List all Channels for an Interaction.
* [listInteractionChannelInvite](#listinteractionchannelinvite) - List all Invites for a Channel.
* [listInteractionChannelParticipant](#listinteractionchannelparticipant) - List all Participants for a Channel.
* [listWebChannel](#listwebchannel)
* [updateFlexFlow](#updateflexflow)
* [updateInsightsAssessments](#updateinsightsassessments) - Update a specific Assessment assessed earlier
* [updateInsightsQuestionnaires](#updateinsightsquestionnaires) - To update the questionnaire
* [updateInsightsQuestionnairesCategory](#updateinsightsquestionnairescategory) - To update the category for Questions
* [updateInsightsQuestionnairesQuestion](#updateinsightsquestionnairesquestion) - To update the question
* [updateInteractionChannel](#updateinteractionchannel) - Update an existing Interaction Channel.
* [updateInteractionChannelParticipant](#updateinteractionchannelparticipant) - Update an existing Channel Participant.
* [updateWebChannel](#updatewebchannel)

## createChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.operations.CreateChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelCreateChannelRequest req = new CreateChannelCreateChannelRequest("suscipit", "iure", "magnam", "debitis") {{
                chatUniqueName = "ipsa";
                longLived = false;
                preEngagementData = "delectus";
                target = "tempora";
                taskAttributes = "suscipit";
                taskSid = "molestiae";
            }};            

            CreateChannelResponse res = sdk.sdk.createChannel(req, new CreateChannelSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1Channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFlexFlow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFlexFlowCreateFlexFlowRequest;
import org.openapis.openapi.models.operations.CreateFlexFlowResponse;
import org.openapis.openapi.models.operations.CreateFlexFlowSecurity;
import org.openapis.openapi.models.shared.FlexFlowEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.FlexFlowEnumIntegrationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFlexFlowCreateFlexFlowRequest req = new CreateFlexFlowCreateFlexFlowRequest(FlexFlowEnumChannelTypeEnum.WHATSAPP, "iusto", "excepturi") {{
                contactIdentity = "nisi";
                enabled = false;
                integrationChannel = "recusandae";
                integrationCreationOnMessage = false;
                integrationFlowSid = "temporibus";
                integrationPriority = 71036L;
                integrationRetryCount = 337396L;
                integrationTimeout = 87129L;
                integrationUrl = "https://agitated-friendship.net";
                integrationWorkflowSid = "sapiente";
                integrationWorkspaceSid = "quo";
                integrationType = FlexFlowEnumIntegrationTypeEnum.STUDIO;
                janitorEnabled = false;
                longLived = false;
            }};            

            CreateFlexFlowResponse res = sdk.sdk.createFlexFlow(req, new CreateFlexFlowSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1FlexFlow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInsightsAssessments

Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsCreateInsightsAssessmentsRequest;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsRequest;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsResponse;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInsightsAssessmentsRequest req = new CreateInsightsAssessmentsRequest() {{
                requestBody = new CreateInsightsAssessmentsCreateInsightsAssessmentsRequest("maiores", "molestiae", "quod", "quod", "esse", "totam", "porro", 6788.8, "dicta", "nam", "officia", "occaecati");;
                token = "fugit";
            }};            

            CreateInsightsAssessmentsResponse res = sdk.sdk.createInsightsAssessments(req, new CreateInsightsAssessmentsSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsAssessments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInsightsAssessmentsComment

To create a comment assessment for a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsCommentCreateInsightsAssessmentsCommentRequest;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsCommentRequest;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsCommentResponse;
import org.openapis.openapi.models.operations.CreateInsightsAssessmentsCommentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInsightsAssessmentsCommentRequest req = new CreateInsightsAssessmentsCommentRequest() {{
                requestBody = new CreateInsightsAssessmentsCommentCreateInsightsAssessmentsCommentRequest("optio", "totam", "beatae", "commodi", 4736, "modi", "qui", "impedit");;
                token = "cum";
            }};            

            CreateInsightsAssessmentsCommentResponse res = sdk.sdk.createInsightsAssessmentsComment(req, new CreateInsightsAssessmentsCommentSecurity("esse", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsAssessmentsComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInsightsQuestionnaires

To create a Questionnaire

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesCreateInsightsQuestionnairesRequest;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesRequest;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesResponse;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInsightsQuestionnairesRequest req = new CreateInsightsQuestionnairesRequest() {{
                requestBody = new CreateInsightsQuestionnairesCreateInsightsQuestionnairesRequest("excepturi") {{
                    active = false;
                    description = "aspernatur";
                    questionSids = new String[]{{
                        add("ad"),
                    }};
                }};;
                token = "natus";
            }};            

            CreateInsightsQuestionnairesResponse res = sdk.sdk.createInsightsQuestionnaires(req, new CreateInsightsQuestionnairesSecurity("sed", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsQuestionnaires != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInsightsQuestionnairesCategory

To create a category for Questions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesCategoryCreateInsightsQuestionnairesCategoryRequest;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesCategoryRequest;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesCategoryResponse;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesCategorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInsightsQuestionnairesCategoryRequest req = new CreateInsightsQuestionnairesCategoryRequest() {{
                requestBody = new CreateInsightsQuestionnairesCategoryCreateInsightsQuestionnairesCategoryRequest("dolor");;
                token = "natus";
            }};            

            CreateInsightsQuestionnairesCategoryResponse res = sdk.sdk.createInsightsQuestionnairesCategory(req, new CreateInsightsQuestionnairesCategorySecurity("laboriosam", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsQuestionnairesCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInsightsQuestionnairesQuestion

To create a question for a Category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesQuestionCreateInsightsQuestionnairesQuestionRequest;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesQuestionRequest;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesQuestionResponse;
import org.openapis.openapi.models.operations.CreateInsightsQuestionnairesQuestionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInsightsQuestionnairesQuestionRequest req = new CreateInsightsQuestionnairesQuestionRequest() {{
                requestBody = new CreateInsightsQuestionnairesQuestionCreateInsightsQuestionnairesQuestionRequest(false, "saepe", "fuga", "in") {{
                    description = "corporis";
                }};;
                token = "iste";
            }};            

            CreateInsightsQuestionnairesQuestionResponse res = sdk.sdk.createInsightsQuestionnairesQuestion(req, new CreateInsightsQuestionnairesQuestionSecurity("iure", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsQuestionnairesQuestion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInsightsSession

To obtain session details for fetching reports and dashboards

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInsightsSessionRequest;
import org.openapis.openapi.models.operations.CreateInsightsSessionResponse;
import org.openapis.openapi.models.operations.CreateInsightsSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInsightsSessionRequest req = new CreateInsightsSessionRequest() {{
                authorization = "quidem";
            }};            

            CreateInsightsSessionResponse res = sdk.sdk.createInsightsSession(req, new CreateInsightsSessionSecurity("architecto", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsSession != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInteraction

Create a new Interaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInteractionCreateInteractionRequest;
import org.openapis.openapi.models.operations.CreateInteractionResponse;
import org.openapis.openapi.models.operations.CreateInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInteractionCreateInteractionRequest req = new CreateInteractionCreateInteractionRequest("reiciendis", "est");            

            CreateInteractionResponse res = sdk.sdk.createInteraction(req, new CreateInteractionSecurity("mollitia", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1Interaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInteractionChannelInvite

Invite an Agent or a TaskQueue to a Channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInteractionChannelInviteCreateInteractionChannelInviteRequest;
import org.openapis.openapi.models.operations.CreateInteractionChannelInviteRequest;
import org.openapis.openapi.models.operations.CreateInteractionChannelInviteResponse;
import org.openapis.openapi.models.operations.CreateInteractionChannelInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInteractionChannelInviteRequest req = new CreateInteractionChannelInviteRequest("dolores", "dolorem") {{
                requestBody = new CreateInteractionChannelInviteCreateInteractionChannelInviteRequest("corporis");;
            }};            

            CreateInteractionChannelInviteResponse res = sdk.sdk.createInteractionChannelInvite(req, new CreateInteractionChannelInviteSecurity("explicabo", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InteractionInteractionChannelInteractionChannelInvite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInteractionChannelParticipant

Add a Participant to a Channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest;
import org.openapis.openapi.models.operations.CreateInteractionChannelParticipantRequest;
import org.openapis.openapi.models.operations.CreateInteractionChannelParticipantResponse;
import org.openapis.openapi.models.operations.CreateInteractionChannelParticipantSecurity;
import org.openapis.openapi.models.shared.InteractionChannelParticipantEnumTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateInteractionChannelParticipantRequest req = new CreateInteractionChannelParticipantRequest("enim", "omnis") {{
                requestBody = new CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest("nemo", InteractionChannelParticipantEnumTypeEnum.CUSTOMER);;
            }};            

            CreateInteractionChannelParticipantResponse res = sdk.sdk.createInteractionChannelParticipant(req, new CreateInteractionChannelParticipantSecurity("excepturi", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InteractionInteractionChannelInteractionChannelParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebChannelCreateWebChannelRequest;
import org.openapis.openapi.models.operations.CreateWebChannelResponse;
import org.openapis.openapi.models.operations.CreateWebChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateWebChannelCreateWebChannelRequest req = new CreateWebChannelCreateWebChannelRequest("iure", "culpa", "doloribus", "sapiente") {{
                chatUniqueName = "architecto";
                preEngagementData = "mollitia";
            }};            

            CreateWebChannelResponse res = sdk.sdk.createWebChannel(req, new CreateWebChannelSecurity("dolorem", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1WebChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChannelRequest;
import org.openapis.openapi.models.operations.DeleteChannelResponse;
import org.openapis.openapi.models.operations.DeleteChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteChannelRequest req = new DeleteChannelRequest("consequuntur");            

            DeleteChannelResponse res = sdk.sdk.deleteChannel(req, new DeleteChannelSecurity("repellat", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFlexFlow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFlexFlowRequest;
import org.openapis.openapi.models.operations.DeleteFlexFlowResponse;
import org.openapis.openapi.models.operations.DeleteFlexFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFlexFlowRequest req = new DeleteFlexFlowRequest("occaecati");            

            DeleteFlexFlowResponse res = sdk.sdk.deleteFlexFlow(req, new DeleteFlexFlowSecurity("numquam", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInsightsQuestionnaires

To delete the questionnaire

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesRequest;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesResponse;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInsightsQuestionnairesRequest req = new DeleteInsightsQuestionnairesRequest("quam") {{
                token = "molestiae";
            }};            

            DeleteInsightsQuestionnairesResponse res = sdk.sdk.deleteInsightsQuestionnaires(req, new DeleteInsightsQuestionnairesSecurity("velit", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInsightsQuestionnairesCategory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesCategoryRequest;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesCategoryResponse;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesCategorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInsightsQuestionnairesCategoryRequest req = new DeleteInsightsQuestionnairesCategoryRequest("quia") {{
                token = "quis";
            }};            

            DeleteInsightsQuestionnairesCategoryResponse res = sdk.sdk.deleteInsightsQuestionnairesCategory(req, new DeleteInsightsQuestionnairesCategorySecurity("vitae", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInsightsQuestionnairesQuestion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesQuestionRequest;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesQuestionResponse;
import org.openapis.openapi.models.operations.DeleteInsightsQuestionnairesQuestionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInsightsQuestionnairesQuestionRequest req = new DeleteInsightsQuestionnairesQuestionRequest("animi") {{
                token = "enim";
            }};            

            DeleteInsightsQuestionnairesQuestionResponse res = sdk.sdk.deleteInsightsQuestionnairesQuestion(req, new DeleteInsightsQuestionnairesQuestionSecurity("odit", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebChannelRequest;
import org.openapis.openapi.models.operations.DeleteWebChannelResponse;
import org.openapis.openapi.models.operations.DeleteWebChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebChannelRequest req = new DeleteWebChannelRequest("sequi");            

            DeleteWebChannelResponse res = sdk.sdk.deleteWebChannel(req, new DeleteWebChannelSecurity("tenetur", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchChannelRequest;
import org.openapis.openapi.models.operations.FetchChannelResponse;
import org.openapis.openapi.models.operations.FetchChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchChannelRequest req = new FetchChannelRequest("id");            

            FetchChannelResponse res = sdk.sdk.fetchChannel(req, new FetchChannelSecurity("possimus", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1Channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConfiguration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConfigurationRequest;
import org.openapis.openapi.models.operations.FetchConfigurationResponse;
import org.openapis.openapi.models.operations.FetchConfigurationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConfigurationRequest req = new FetchConfigurationRequest() {{
                uiVersion = "quasi";
            }};            

            FetchConfigurationResponse res = sdk.sdk.fetchConfiguration(req, new FetchConfigurationSecurity("error", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1Configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFlexFlow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFlexFlowRequest;
import org.openapis.openapi.models.operations.FetchFlexFlowResponse;
import org.openapis.openapi.models.operations.FetchFlexFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFlexFlowRequest req = new FetchFlexFlowRequest("laborum");            

            FetchFlexFlowResponse res = sdk.sdk.fetchFlexFlow(req, new FetchFlexFlowSecurity("quasi", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1FlexFlow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchInsightsQuestionnaires

To get the Questionnaire Detail

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInsightsQuestionnairesRequest;
import org.openapis.openapi.models.operations.FetchInsightsQuestionnairesResponse;
import org.openapis.openapi.models.operations.FetchInsightsQuestionnairesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInsightsQuestionnairesRequest req = new FetchInsightsQuestionnairesRequest("voluptatibus") {{
                token = "vero";
            }};            

            FetchInsightsQuestionnairesResponse res = sdk.sdk.fetchInsightsQuestionnaires(req, new FetchInsightsQuestionnairesSecurity("nihil", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsQuestionnaires != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchInsightsSettingsAnswersets

To get the Answer Set Settings for an Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInsightsSettingsAnswersetsRequest;
import org.openapis.openapi.models.operations.FetchInsightsSettingsAnswersetsResponse;
import org.openapis.openapi.models.operations.FetchInsightsSettingsAnswersetsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInsightsSettingsAnswersetsRequest req = new FetchInsightsSettingsAnswersetsRequest() {{
                token = "voluptatibus";
            }};            

            FetchInsightsSettingsAnswersetsResponse res = sdk.sdk.fetchInsightsSettingsAnswersets(req, new FetchInsightsSettingsAnswersetsSecurity("ipsa", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsSettingsAnswersets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchInsightsSettingsComment

To get the Comment Settings for an Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInsightsSettingsCommentRequest;
import org.openapis.openapi.models.operations.FetchInsightsSettingsCommentResponse;
import org.openapis.openapi.models.operations.FetchInsightsSettingsCommentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInsightsSettingsCommentRequest req = new FetchInsightsSettingsCommentRequest() {{
                token = "voluptate";
            }};            

            FetchInsightsSettingsCommentResponse res = sdk.sdk.fetchInsightsSettingsComment(req, new FetchInsightsSettingsCommentSecurity("cum", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsSettingsComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchInsightsUserRoles

This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInsightsUserRolesRequest;
import org.openapis.openapi.models.operations.FetchInsightsUserRolesResponse;
import org.openapis.openapi.models.operations.FetchInsightsUserRolesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInsightsUserRolesRequest req = new FetchInsightsUserRolesRequest() {{
                authorization = "doloremque";
            }};            

            FetchInsightsUserRolesResponse res = sdk.sdk.fetchInsightsUserRoles(req, new FetchInsightsUserRolesSecurity("reprehenderit", "ut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsUserRoles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchInteraction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInteractionRequest;
import org.openapis.openapi.models.operations.FetchInteractionResponse;
import org.openapis.openapi.models.operations.FetchInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInteractionRequest req = new FetchInteractionRequest("maiores");            

            FetchInteractionResponse res = sdk.sdk.fetchInteraction(req, new FetchInteractionSecurity("dicta", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1Interaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchInteractionChannel

Fetch a Channel for an Interaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInteractionChannelRequest;
import org.openapis.openapi.models.operations.FetchInteractionChannelResponse;
import org.openapis.openapi.models.operations.FetchInteractionChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInteractionChannelRequest req = new FetchInteractionChannelRequest("dolore", "iusto");            

            FetchInteractionChannelResponse res = sdk.sdk.fetchInteractionChannel(req, new FetchInteractionChannelSecurity("dicta", "harum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InteractionInteractionChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchWebChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchWebChannelRequest;
import org.openapis.openapi.models.operations.FetchWebChannelResponse;
import org.openapis.openapi.models.operations.FetchWebChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchWebChannelRequest req = new FetchWebChannelRequest("enim");            

            FetchWebChannelResponse res = sdk.sdk.fetchWebChannel(req, new FetchWebChannelSecurity("accusamus", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1WebChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChannelRequest;
import org.openapis.openapi.models.operations.ListChannelResponse;
import org.openapis.openapi.models.operations.ListChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListChannelRequest req = new ListChannelRequest() {{
                page = 918236L;
                pageSize = 64147L;
                pageToken = "ipsum";
            }};            

            ListChannelResponse res = sdk.sdk.listChannel(req, new ListChannelSecurity("quidem", "molestias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFlexFlow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFlexFlowRequest;
import org.openapis.openapi.models.operations.ListFlexFlowResponse;
import org.openapis.openapi.models.operations.ListFlexFlowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFlexFlowRequest req = new ListFlexFlowRequest() {{
                friendlyName = "excepturi";
                page = 865103L;
                pageSize = 265389L;
                pageToken = "praesentium";
            }};            

            ListFlexFlowResponse res = sdk.sdk.listFlexFlow(req, new ListFlexFlowSecurity("rem", "voluptates") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFlexFlowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsightsAssessments

Get assessments done for a conversation by logged in user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsAssessmentsRequest;
import org.openapis.openapi.models.operations.ListInsightsAssessmentsResponse;
import org.openapis.openapi.models.operations.ListInsightsAssessmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInsightsAssessmentsRequest req = new ListInsightsAssessmentsRequest() {{
                page = 93940L;
                pageSize = 921158L;
                pageToken = "sint";
                segmentId = "veritatis";
                token = "itaque";
            }};            

            ListInsightsAssessmentsResponse res = sdk.sdk.listInsightsAssessments(req, new ListInsightsAssessmentsSecurity("incidunt", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInsightsAssessmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsightsAssessmentsComment

To create a comment assessment for a conversation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsAssessmentsCommentRequest;
import org.openapis.openapi.models.operations.ListInsightsAssessmentsCommentResponse;
import org.openapis.openapi.models.operations.ListInsightsAssessmentsCommentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInsightsAssessmentsCommentRequest req = new ListInsightsAssessmentsCommentRequest() {{
                agentId = "consequatur";
                page = 667411L;
                pageSize = 842342L;
                pageToken = "explicabo";
                segmentId = "deserunt";
                token = "distinctio";
            }};            

            ListInsightsAssessmentsCommentResponse res = sdk.sdk.listInsightsAssessmentsComment(req, new ListInsightsAssessmentsCommentSecurity("quibusdam", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInsightsAssessmentsCommentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsightsConversations

To get conversation with segment id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsConversationsRequest;
import org.openapis.openapi.models.operations.ListInsightsConversationsResponse;
import org.openapis.openapi.models.operations.ListInsightsConversationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInsightsConversationsRequest req = new ListInsightsConversationsRequest() {{
                page = 264730L;
                pageSize = 183191L;
                pageToken = "aliquid";
                segmentId = "cupiditate";
                token = "quos";
            }};            

            ListInsightsConversationsResponse res = sdk.sdk.listInsightsConversations(req, new ListInsightsConversationsSecurity("perferendis", "magni") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInsightsConversationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsightsQuestionnaires

To get all questionnaires with questions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesRequest;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesResponse;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInsightsQuestionnairesRequest req = new ListInsightsQuestionnairesRequest() {{
                includeInactive = false;
                page = 828940L;
                pageSize = 369808L;
                pageToken = "alias";
                token = "fugit";
            }};            

            ListInsightsQuestionnairesResponse res = sdk.sdk.listInsightsQuestionnaires(req, new ListInsightsQuestionnairesSecurity("dolorum", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInsightsQuestionnairesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsightsQuestionnairesCategory

To get all the categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesCategoryRequest;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesCategoryResponse;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesCategorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInsightsQuestionnairesCategoryRequest req = new ListInsightsQuestionnairesCategoryRequest() {{
                page = 270008L;
                pageSize = 703737L;
                pageToken = "tempore";
                token = "labore";
            }};            

            ListInsightsQuestionnairesCategoryResponse res = sdk.sdk.listInsightsQuestionnairesCategory(req, new ListInsightsQuestionnairesCategorySecurity("delectus", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInsightsQuestionnairesCategoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsightsQuestionnairesQuestion

To get all the question for the given categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesQuestionRequest;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesQuestionResponse;
import org.openapis.openapi.models.operations.ListInsightsQuestionnairesQuestionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInsightsQuestionnairesQuestionRequest req = new ListInsightsQuestionnairesQuestionRequest() {{
                categorySid = new String[]{{
                    add("eligendi"),
                }};
                page = 576157L;
                pageSize = 396098L;
                pageToken = "provident";
                token = "necessitatibus";
            }};            

            ListInsightsQuestionnairesQuestionResponse res = sdk.sdk.listInsightsQuestionnairesQuestion(req, new ListInsightsQuestionnairesQuestionSecurity("sint", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInsightsQuestionnairesQuestionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsightsSegments

To get segments for given reservation Ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsSegmentsRequest;
import org.openapis.openapi.models.operations.ListInsightsSegmentsResponse;
import org.openapis.openapi.models.operations.ListInsightsSegmentsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInsightsSegmentsRequest req = new ListInsightsSegmentsRequest() {{
                page = 223081L;
                pageSize = 891555L;
                pageToken = "a";
                reservationId = new String[]{{
                    add("in"),
                    add("in"),
                    add("illum"),
                }};
                segmentId = "maiores";
                token = "rerum";
            }};            

            ListInsightsSegmentsResponse res = sdk.sdk.listInsightsSegments(req, new ListInsightsSegmentsSecurity("dicta", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInsightsSegmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInteractionChannel

List all Channels for an Interaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInteractionChannelRequest;
import org.openapis.openapi.models.operations.ListInteractionChannelResponse;
import org.openapis.openapi.models.operations.ListInteractionChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInteractionChannelRequest req = new ListInteractionChannelRequest("cumque") {{
                page = 813798L;
                pageSize = 411820L;
                pageToken = "aliquid";
            }};            

            ListInteractionChannelResponse res = sdk.sdk.listInteractionChannel(req, new ListInteractionChannelSecurity("laborum", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInteractionChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInteractionChannelInvite

List all Invites for a Channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInteractionChannelInviteRequest;
import org.openapis.openapi.models.operations.ListInteractionChannelInviteResponse;
import org.openapis.openapi.models.operations.ListInteractionChannelInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInteractionChannelInviteRequest req = new ListInteractionChannelInviteRequest("non", "occaecati") {{
                page = 313218L;
                pageSize = 881736L;
                pageToken = "delectus";
            }};            

            ListInteractionChannelInviteResponse res = sdk.sdk.listInteractionChannelInvite(req, new ListInteractionChannelInviteSecurity("quidem", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInteractionChannelInviteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInteractionChannelParticipant

List all Participants for a Channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInteractionChannelParticipantRequest;
import org.openapis.openapi.models.operations.ListInteractionChannelParticipantResponse;
import org.openapis.openapi.models.operations.ListInteractionChannelParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInteractionChannelParticipantRequest req = new ListInteractionChannelParticipantRequest("nam", "id") {{
                page = 501324L;
                pageSize = 533206L;
                pageToken = "sapiente";
            }};            

            ListInteractionChannelParticipantResponse res = sdk.sdk.listInteractionChannelParticipant(req, new ListInteractionChannelParticipantSecurity("amet", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInteractionChannelParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebChannelRequest;
import org.openapis.openapi.models.operations.ListWebChannelResponse;
import org.openapis.openapi.models.operations.ListWebChannelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWebChannelRequest req = new ListWebChannelRequest() {{
                page = 394869L;
                pageSize = 423855L;
                pageToken = "natus";
            }};            

            ListWebChannelResponse res = sdk.sdk.listWebChannel(req, new ListWebChannelSecurity("omnis", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listWebChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFlexFlow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFlexFlowRequest;
import org.openapis.openapi.models.operations.UpdateFlexFlowResponse;
import org.openapis.openapi.models.operations.UpdateFlexFlowSecurity;
import org.openapis.openapi.models.operations.UpdateFlexFlowUpdateFlexFlowRequest;
import org.openapis.openapi.models.shared.FlexFlowEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.FlexFlowEnumIntegrationTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFlexFlowRequest req = new UpdateFlexFlowRequest("perferendis") {{
                requestBody = new UpdateFlexFlowUpdateFlexFlowRequest() {{
                    channelType = FlexFlowEnumChannelTypeEnum.FACEBOOK;
                    chatServiceSid = "magnam";
                    contactIdentity = "distinctio";
                    enabled = false;
                    friendlyName = "id";
                    integrationChannel = "labore";
                    integrationCreationOnMessage = false;
                    integrationFlowSid = "labore";
                    integrationPriority = 383462L;
                    integrationRetryCount = 618016L;
                    integrationTimeout = 749170L;
                    integrationUrl = "http://ugly-cash.com";
                    integrationWorkflowSid = "magnam";
                    integrationWorkspaceSid = "et";
                    integrationType = FlexFlowEnumIntegrationTypeEnum.EXTERNAL;
                    janitorEnabled = false;
                    longLived = false;
                }};;
            }};            

            UpdateFlexFlowResponse res = sdk.sdk.updateFlexFlow(req, new UpdateFlexFlowSecurity("ullam", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1FlexFlow != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInsightsAssessments

Update a specific Assessment assessed earlier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInsightsAssessmentsRequest;
import org.openapis.openapi.models.operations.UpdateInsightsAssessmentsResponse;
import org.openapis.openapi.models.operations.UpdateInsightsAssessmentsSecurity;
import org.openapis.openapi.models.operations.UpdateInsightsAssessmentsUpdateInsightsAssessmentsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInsightsAssessmentsRequest req = new UpdateInsightsAssessmentsRequest("quos") {{
                requestBody = new UpdateInsightsAssessmentsUpdateInsightsAssessmentsRequest("sint", "accusantium", 6532.01);;
                token = "reiciendis";
            }};            

            UpdateInsightsAssessmentsResponse res = sdk.sdk.updateInsightsAssessments(req, new UpdateInsightsAssessmentsSecurity("mollitia", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsAssessments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInsightsQuestionnaires

To update the questionnaire

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesRequest;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesResponse;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesSecurity;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesUpdateInsightsQuestionnairesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInsightsQuestionnairesRequest req = new UpdateInsightsQuestionnairesRequest("eum") {{
                requestBody = new UpdateInsightsQuestionnairesUpdateInsightsQuestionnairesRequest(false) {{
                    description = "dolor";
                    name = "Ms. Fred Hilll";
                    questionSids = new String[]{{
                        add("eius"),
                        add("maxime"),
                        add("deleniti"),
                        add("facilis"),
                    }};
                }};;
                token = "in";
            }};            

            UpdateInsightsQuestionnairesResponse res = sdk.sdk.updateInsightsQuestionnaires(req, new UpdateInsightsQuestionnairesSecurity("architecto", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsQuestionnaires != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInsightsQuestionnairesCategory

To update the category for Questions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesCategoryRequest;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesCategoryResponse;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesCategorySecurity;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesCategoryUpdateInsightsQuestionnairesCategoryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInsightsQuestionnairesCategoryRequest req = new UpdateInsightsQuestionnairesCategoryRequest("repudiandae") {{
                requestBody = new UpdateInsightsQuestionnairesCategoryUpdateInsightsQuestionnairesCategoryRequest("ullam");;
                token = "expedita";
            }};            

            UpdateInsightsQuestionnairesCategoryResponse res = sdk.sdk.updateInsightsQuestionnairesCategory(req, new UpdateInsightsQuestionnairesCategorySecurity("nihil", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsQuestionnairesCategory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInsightsQuestionnairesQuestion

To update the question

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesQuestionRequest;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesQuestionResponse;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesQuestionSecurity;
import org.openapis.openapi.models.operations.UpdateInsightsQuestionnairesQuestionUpdateInsightsQuestionnairesQuestionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInsightsQuestionnairesQuestionRequest req = new UpdateInsightsQuestionnairesQuestionRequest("quibusdam") {{
                requestBody = new UpdateInsightsQuestionnairesQuestionUpdateInsightsQuestionnairesQuestionRequest(false) {{
                    answerSetId = "sed";
                    categorySid = "saepe";
                    description = "pariatur";
                    question = "accusantium";
                }};;
                token = "consequuntur";
            }};            

            UpdateInsightsQuestionnairesQuestionResponse res = sdk.sdk.updateInsightsQuestionnairesQuestion(req, new UpdateInsightsQuestionnairesQuestionSecurity("praesentium", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InsightsQuestionnairesQuestion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInteractionChannel

Update an existing Interaction Channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInteractionChannelRequest;
import org.openapis.openapi.models.operations.UpdateInteractionChannelResponse;
import org.openapis.openapi.models.operations.UpdateInteractionChannelSecurity;
import org.openapis.openapi.models.operations.UpdateInteractionChannelUpdateInteractionChannelRequest;
import org.openapis.openapi.models.shared.InteractionChannelEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInteractionChannelRequest req = new UpdateInteractionChannelRequest("magni", "sunt") {{
                requestBody = new UpdateInteractionChannelUpdateInteractionChannelRequest(InteractionChannelEnumStatusEnum.WRAPUP) {{
                    routing = "illum";
                }};;
            }};            

            UpdateInteractionChannelResponse res = sdk.sdk.updateInteractionChannel(req, new UpdateInteractionChannelSecurity("pariatur", "maxime") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InteractionInteractionChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateInteractionChannelParticipant

Update an existing Channel Participant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateInteractionChannelParticipantRequest;
import org.openapis.openapi.models.operations.UpdateInteractionChannelParticipantResponse;
import org.openapis.openapi.models.operations.UpdateInteractionChannelParticipantSecurity;
import org.openapis.openapi.models.operations.UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest;
import org.openapis.openapi.models.shared.InteractionChannelParticipantEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateInteractionChannelParticipantRequest req = new UpdateInteractionChannelParticipantRequest("ea", "excepturi", "odit") {{
                requestBody = new UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest(InteractionChannelParticipantEnumStatusEnum.CLOSED);;
            }};            

            UpdateInteractionChannelParticipantResponse res = sdk.sdk.updateInteractionChannelParticipant(req, new UpdateInteractionChannelParticipantSecurity("accusantium", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1InteractionInteractionChannelInteractionChannelParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebChannel

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebChannelRequest;
import org.openapis.openapi.models.operations.UpdateWebChannelResponse;
import org.openapis.openapi.models.operations.UpdateWebChannelSecurity;
import org.openapis.openapi.models.operations.UpdateWebChannelUpdateWebChannelRequest;
import org.openapis.openapi.models.shared.WebChannelEnumChatStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateWebChannelRequest req = new UpdateWebChannelRequest("maiores") {{
                requestBody = new UpdateWebChannelUpdateWebChannelRequest() {{
                    chatStatus = WebChannelEnumChatStatusEnum.INACTIVE;
                    postEngagementData = "quidem";
                }};;
            }};            

            UpdateWebChannelResponse res = sdk.sdk.updateWebChannel(req, new UpdateWebChannelSecurity("ipsam", "voluptate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.flexV1WebChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
