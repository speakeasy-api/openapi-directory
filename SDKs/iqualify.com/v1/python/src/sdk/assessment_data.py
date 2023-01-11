import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class AssessmentData:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_offerings_offering_id_analytics_activities_responses(self, request: operations.GetOfferingsOfferingIDAnalyticsActivitiesResponsesRequest) -> operations.GetOfferingsOfferingIDAnalyticsActivitiesResponsesResponse:
        r"""Find open response activity attempts
        Responds with all learner activity attempts for open response activities in an offering matching the offeringId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/activities/responses", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsActivitiesResponsesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ActivityAttemptOpenResponse]])
                res.activity_attempt_open_responses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_offerings_offering_id_analytics_marks_assignments(self, request: operations.GetOfferingsOfferingIDAnalyticsMarksAssignmentsRequest) -> operations.GetOfferingsOfferingIDAnalyticsMarksAssignmentsResponse:
        r"""Find assessment marks
        Responds with all learner assessment marks in an offering matching the offeringId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/marks/assignments", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsMarksAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentMarkResponse]])
                res.assignment_mark_responses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_offerings_offering_id_analytics_marks_quizzes(self, request: operations.GetOfferingsOfferingIDAnalyticsMarksQuizzesRequest) -> operations.GetOfferingsOfferingIDAnalyticsMarksQuizzesResponse:
        r"""Find quiz marks
        Responds with all learner quiz marks in an offering matching the offeringId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/marks/quizzes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsMarksQuizzesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.QuizMarkResponse]])
                res.quiz_mark_responses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_offerings_offering_id_analytics_submissions_assignments(self, request: operations.GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsRequest) -> operations.GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsResponse:
        r"""Find submissions to assessments, including marks if any
        Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/submissions/assignments", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentMarkResponse]])
                res.assignment_mark_responses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_offerings_offering_id_analytics_submissions_open_response_assessment_id_(self, request: operations.GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDRequest) -> operations.GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDResponse:
        r"""Find submissions to a specified open response assessment, including marks if any
        Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/submissions/open-response/{assessmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.submission_mark_responses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_(self, request: operations.GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDRequest) -> operations.GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDResponse:
        r"""Find a learner's submission to a specified assessment, including marks if any
        Responds with the learner's assessment submission and any marks for the submission.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/offerings/{offeringId}/analytics/submissions/{userEmail}/assignments/{assessmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.submission_mark_responses = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    