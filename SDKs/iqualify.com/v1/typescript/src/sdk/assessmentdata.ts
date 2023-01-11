import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AssessmentData {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getOfferingsOfferingIdAnalyticsActivitiesResponses - Find open response activity attempts
   *
   * Responds with all learner activity attempts for open response activities in an offering matching the offeringId.
  **/
  getOfferingsOfferingIdAnalyticsActivitiesResponses(
    req: operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/activities/responses", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.activityAttemptOpenResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOfferingsOfferingIdAnalyticsMarksAssignments - Find assessment marks
   *
   * Responds with all learner assessment marks in an offering matching the offeringId.
  **/
  getOfferingsOfferingIdAnalyticsMarksAssignments(
    req: operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/marks/assignments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assignmentMarkResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOfferingsOfferingIdAnalyticsMarksQuizzes - Find quiz marks
   *
   * Responds with all learner quiz marks in an offering matching the offeringId.
  **/
  getOfferingsOfferingIdAnalyticsMarksQuizzes(
    req: operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/marks/quizzes", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.quizMarkResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOfferingsOfferingIdAnalyticsSubmissionsAssignments - Find submissions to assessments, including marks if any
   *
   * Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.
  **/
  getOfferingsOfferingIdAnalyticsSubmissionsAssignments(
    req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/submissions/assignments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assignmentMarkResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId - Find submissions to a specified open response assessment, including marks if any
   *
   * Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.
  **/
  getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId(
    req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/submissions/open-response/{assessmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.submissionMarkResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId - Find a learner's submission to a specified assessment, including marks if any
   *
   * Responds with the learner's assessment submission and any marks for the submission.
  **/
  getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId(
    req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/analytics/submissions/{userEmail}/assignments/{assessmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.submissionMarkResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
