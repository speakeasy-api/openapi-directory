import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class AssessmentManagement {
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
   * deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId - Remove assessment document
   *
   * Removes the assessment document file for a specified assessment in an offering.
  **/
  deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId(
    req: operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/assessments/{assessmentId}/documents/{documentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId - Reset user's assessment to draft state
   *
   * Resets the user's submitted assessment to a draft state.
  **/
  deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId(
    req: operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/users/{userEmail}/assessments/{assessmentId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
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
   * getOfferingsOfferingIdActivitiesOpenresponse - Find offering's activities
   *
   * Responds with the activities in a specific offering.
  **/
  getOfferingsOfferingIdActivitiesOpenresponse(
    req: operations.GetOfferingsOfferingIdActivitiesOpenresponseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdActivitiesOpenresponseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdActivitiesOpenresponseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/activities/openresponse", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdActivitiesOpenresponseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.offeringActivitiesResponses = httpRes?.data;
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
   * getOfferingsOfferingIdAssessments - Find offering's assessments
   *
   * Responds with all assessments in an offering matching the offeringId.
  **/
  getOfferingsOfferingIdAssessments(
    req: operations.GetOfferingsOfferingIdAssessmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdAssessmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdAssessmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/assessments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdAssessmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assessmentResponses = httpRes?.data;
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
   * getOfferingsOfferingIdLearnersPendingSubmission - Find learners with assessments pending x days before due date within the specified offeringId
   *
   * Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.
  **/
  getOfferingsOfferingIdLearnersPendingSubmission(
    req: operations.GetOfferingsOfferingIdLearnersPendingSubmissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdLearnersPendingSubmissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdLearnersPendingSubmissionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/learners/pending-submission", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdLearnersPendingSubmissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assessmentPendingSubmissions = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
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
   * getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse - Find learner's open response assessment submissions
   *
   * Responds with open response assessment submissions by a learner in an offering.
  **/
  getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse(
    req: operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/users/{userEmail}/submissions/open-response", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assignments = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
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
   * patchOfferingsOfferingIdAssessmentsAssessmentId - Update assessment details
   *
   * Updates the assessment details for a specified assessment in an offering.
  **/
  patchOfferingsOfferingIdAssessmentsAssessmentId(
    req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/assessments/{assessmentId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.assessmentResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
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
   * patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail - Update the due dates for a learner's quiz attempt
   *
   * Updates the due dates for a learner's quiz attempt specified by the assessmentId.
  **/
  patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail(
    req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/offerings/{offeringId}/assessments/{assessmentId}/{userEmail}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
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
