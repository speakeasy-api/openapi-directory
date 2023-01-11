import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Bioentity {
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
   * getAnatomyGeneAssociations - Returns genes associated with a given anatomy
  **/
  getAnatomyGeneAssociations(
    req: operations.GetAnatomyGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnatomyGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnatomyGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/anatomy/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetAnatomyGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAnatomyGeneByTaxonAssociations - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
   *
   * For example, + NCBITaxon:10090 (mouse)
  **/
  getAnatomyGeneByTaxonAssociations(
    req: operations.GetAnatomyGeneByTaxonAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnatomyGeneByTaxonAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnatomyGeneByTaxonAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/anatomy/{id}/genes/{taxid}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetAnatomyGeneByTaxonAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getCaseDiseaseAssociations - Returns diseases associated with a case
  **/
  getCaseDiseaseAssociations(
    req: operations.GetCaseDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCaseDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCaseDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/case/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetCaseDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCaseGenotypeAssociations - Returns genotypes associated with a case
  **/
  getCaseGenotypeAssociations(
    req: operations.GetCaseGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCaseGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCaseGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/case/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetCaseGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCaseModelAssociations - Returns models associated with a case
  **/
  getCaseModelAssociations(
    req: operations.GetCaseModelAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCaseModelAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCaseModelAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/case/{id}/models", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetCaseModelAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCasePhenotypeAssociations - Returns phenotypes associated with a case
  **/
  getCasePhenotypeAssociations(
    req: operations.GetCasePhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCasePhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCasePhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/case/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetCasePhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCaseVariantAssociations - Returns variants associated with a case
  **/
  getCaseVariantAssociations(
    req: operations.GetCaseVariantAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCaseVariantAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCaseVariantAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/case/{id}/variants", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetCaseVariantAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseaseCaseAssociations - Returns cases associated with a disease
  **/
  getDiseaseCaseAssociations(
    req: operations.GetDiseaseCaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseaseCaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseaseCaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/cases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseaseCaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseaseGeneAssociations - Returns genes associated with a disease
  **/
  getDiseaseGeneAssociations(
    req: operations.GetDiseaseGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseaseGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseaseGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseaseGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseaseGenotypeAssociations - Returns genotypes associated with a disease
  **/
  getDiseaseGenotypeAssociations(
    req: operations.GetDiseaseGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseaseGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseaseGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseaseGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseaseModelAssociations - Returns associations to models of the disease
   *
   * In the association object returned, the subject will be the disease, and the object will be the model.
   * The model may be a gene or genetic element.
   * 
   * If the query disease is a general class, the association subject may be to a specific disease.
   * 
   * In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.
   * 
   * In other cases, the association will be *indirect*, for
   * example, chaining over orthology. In these cases the chain
   * will be reflected in the *evidence graph*
   * 
   * * TODO: provide hook into owlsim for dynamic computation of models by similarity
  **/
  getDiseaseModelAssociations(
    req: operations.GetDiseaseModelAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseaseModelAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseaseModelAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/models", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseaseModelAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseaseModelTaxonAssociations - Returns associations to models of the disease constrained by taxon
   *
   * See /disease/<id>/models route for full details
  **/
  getDiseaseModelTaxonAssociations(
    req: operations.GetDiseaseModelTaxonAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseaseModelTaxonAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseaseModelTaxonAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/models/{taxon}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseaseModelTaxonAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseasePathwayAssociations - Returns pathways associated with a disease
  **/
  getDiseasePathwayAssociations(
    req: operations.GetDiseasePathwayAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseasePathwayAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseasePathwayAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/pathways", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseasePathwayAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseasePhenotypeAssociations - Returns phenotypes associated with disease
  **/
  getDiseasePhenotypeAssociations(
    req: operations.GetDiseasePhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseasePhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseasePhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseasePhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.d2PAssociationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseasePublicationAssociations - Returns publications associated with a disease
  **/
  getDiseasePublicationAssociations(
    req: operations.GetDiseasePublicationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseasePublicationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseasePublicationAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/publications", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseasePublicationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseaseSubstanceAssociations - Returns substances associated with a disease
   *
   * e.g. drugs or small molecules used to treat
  **/
  getDiseaseSubstanceAssociations(
    req: operations.GetDiseaseSubstanceAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseaseSubstanceAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseaseSubstanceAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/treatment", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseaseSubstanceAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getDiseaseVariantAssociations - Returns variants associated with a disease
  **/
  getDiseaseVariantAssociations(
    req: operations.GetDiseaseVariantAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDiseaseVariantAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDiseaseVariantAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/disease/{id}/variants", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetDiseaseVariantAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getFunctionAssociations - Returns annotations associated to a function term
  **/
  getFunctionAssociations(
    req: operations.GetFunctionAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/function/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetFunctionAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getFunctionGeneAssociations - Returns genes associated to a GO term
  **/
  getFunctionGeneAssociations(
    req: operations.GetFunctionGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/function/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetFunctionGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getFunctionPublicationAssociations - Returns publications associated to a GO term
  **/
  getFunctionPublicationAssociations(
    req: operations.GetFunctionPublicationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionPublicationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionPublicationAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/function/{id}/publications", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetFunctionPublicationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getFunctionTaxonAssociations - Returns taxons associated to a GO term
  **/
  getFunctionTaxonAssociations(
    req: operations.GetFunctionTaxonAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFunctionTaxonAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFunctionTaxonAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/function/{id}/taxons", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetFunctionTaxonAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneAnatomyAssociations - Returns anatomical entities associated with a gene
  **/
  getGeneAnatomyAssociations(
    req: operations.GetGeneAnatomyAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneAnatomyAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneAnatomyAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/anatomy", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneAnatomyAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneCaseAssociations - Returns cases associated with a gene
  **/
  getGeneCaseAssociations(
    req: operations.GetGeneCaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneCaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneCaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/cases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneCaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneDiseaseAssociations - Returns diseases associated with gene
  **/
  getGeneDiseaseAssociations(
    req: operations.GetGeneDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneExpressionAssociations - Returns expression events for a gene
  **/
  getGeneExpressionAssociations(
    req: operations.GetGeneExpressionAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneExpressionAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneExpressionAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/expression/anatomy", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneExpressionAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneFunctionAssociations - Returns function associations for a gene
   *
   * IMPLEMENTATION DETAILS
   * ----------------------
   * 
   * Note: currently this is implemented as a query to the GO/AmiGO solr instance.
   * This directly supports IDs such as:
   * 
   *  - ZFIN e.g. ZFIN:ZDB-GENE-050417-357
   * 
   * Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
   * the standard for biolink is MGI:nnnn, so you should use this (will be transparently
   * mapped to legacy ID)
   * 
   * Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
   * Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
   * mapped behind the scenes for querying.
  **/
  getGeneFunctionAssociations(
    req: operations.GetGeneFunctionAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneFunctionAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneFunctionAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/function", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneFunctionAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneGenotypeAssociations - Returns genotypes associated with a gene
  **/
  getGeneGenotypeAssociations(
    req: operations.GetGeneGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneHomologAssociations - Returns homologs for a gene
  **/
  getGeneHomologAssociations(
    req: operations.GetGeneHomologAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneHomologAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneHomologAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/homologs", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneHomologAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneInteractions - Returns interactions for a gene
  **/
  getGeneInteractions(
    req: operations.GetGeneInteractionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneInteractionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneInteractionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/interactions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneInteractionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneModelAssociations - Returns models associated with a gene
  **/
  getGeneModelAssociations(
    req: operations.GetGeneModelAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneModelAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneModelAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/models", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneModelAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneOrthologDiseaseAssociations - Return diseases associated with orthologs of a gene
  **/
  getGeneOrthologDiseaseAssociations(
    req: operations.GetGeneOrthologDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneOrthologDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneOrthologDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/ortholog/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneOrthologDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneOrthologPhenotypeAssociations - Return phenotypes associated with orthologs for a gene
  **/
  getGeneOrthologPhenotypeAssociations(
    req: operations.GetGeneOrthologPhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneOrthologPhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneOrthologPhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/ortholog/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneOrthologPhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenePathwayAssociations - Returns pathways associated with gene
  **/
  getGenePathwayAssociations(
    req: operations.GetGenePathwayAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenePathwayAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenePathwayAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/pathways", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenePathwayAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenePhenotypeAssociations - Returns phenotypes associated with gene
  **/
  getGenePhenotypeAssociations(
    req: operations.GetGenePhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenePhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenePhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenePhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenePublicationAssociations - Returns publications associated with a gene
  **/
  getGenePublicationAssociations(
    req: operations.GetGenePublicationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenePublicationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenePublicationAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/publications", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenePublicationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGeneVariantAssociations - Returns variants associated with a gene
  **/
  getGeneVariantAssociations(
    req: operations.GetGeneVariantAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneVariantAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneVariantAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/gene/{id}/variants", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGeneVariantAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenericAssociations - Returns associations for an entity regardless of the type
  **/
  getGenericAssociations(
    req: operations.GetGenericAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenericAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenericAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/{id}/associations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenericAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenericObject - Returns basic info on object of any type
  **/
  getGenericObject(
    req: operations.GetGenericObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenericObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenericObjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenericObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bioObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenericObjectByType - Return basic info on an object for a given type
  **/
  getGenericObjectByType(
    req: operations.GetGenericObjectByTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenericObjectByTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenericObjectByTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/{type}/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenericObjectByTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypeCaseAssociations - Returns cases associated with a genotype
  **/
  getGenotypeCaseAssociations(
    req: operations.GetGenotypeCaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypeCaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypeCaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/cases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypeCaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypeDiseaseAssociations - Returns diseases associated with a genotype
  **/
  getGenotypeDiseaseAssociations(
    req: operations.GetGenotypeDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypeDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypeDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypeDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypeGeneAssociations - Returns genes associated with a genotype
  **/
  getGenotypeGeneAssociations(
    req: operations.GetGenotypeGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypeGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypeGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypeGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypeGenotypeAssociations - Returns genotypes-genotype associations
   *
   * Genotypes may be related to one another according to the GENO model
  **/
  getGenotypeGenotypeAssociations(
    req: operations.GetGenotypeGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypeGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypeGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypeGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypeModelAssociations - Returns models associated with a genotype
  **/
  getGenotypeModelAssociations(
    req: operations.GetGenotypeModelAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypeModelAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypeModelAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/models", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypeModelAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypePhenotypeAssociations - Returns phenotypes associated with a genotype
  **/
  getGenotypePhenotypeAssociations(
    req: operations.GetGenotypePhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypePhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypePhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypePhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypePublicationAssociations - Returns publications associated with a genotype
  **/
  getGenotypePublicationAssociations(
    req: operations.GetGenotypePublicationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypePublicationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypePublicationAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/publications", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypePublicationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGenotypeVariantAssociations - Returns genotypes-variant associations
  **/
  getGenotypeVariantAssociations(
    req: operations.GetGenotypeVariantAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGenotypeVariantAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGenotypeVariantAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/genotype/{id}/variants", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGenotypeVariantAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getGotermGeneAssociations - Returns associations to GO terms for a gene
  **/
  getGotermGeneAssociations(
    req: operations.GetGotermGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGotermGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGotermGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/goterm/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetGotermGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelCaseAssociations - Returns cases associated with a model
  **/
  getModelCaseAssociations(
    req: operations.GetModelCaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelCaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelCaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/model/{id}/cases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetModelCaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelDiseaseAssociations - Returns diseases associated with a model
  **/
  getModelDiseaseAssociations(
    req: operations.GetModelDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/model/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetModelDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelGeneAssociations - Returns genes associated with a model
  **/
  getModelGeneAssociations(
    req: operations.GetModelGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/model/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetModelGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelGenotypeAssociations - Returns genotypes associated with a model
  **/
  getModelGenotypeAssociations(
    req: operations.GetModelGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/model/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetModelGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelPhenotypeAssociations - Returns phenotypes associated with a model
  **/
  getModelPhenotypeAssociations(
    req: operations.GetModelPhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelPhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelPhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/model/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetModelPhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelPublicationAssociations - Returns publications associated with a model
  **/
  getModelPublicationAssociations(
    req: operations.GetModelPublicationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelPublicationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelPublicationAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/model/{id}/publications", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetModelPublicationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getModelVariantAssociations - Returns variants associated with a model
  **/
  getModelVariantAssociations(
    req: operations.GetModelVariantAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelVariantAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelVariantAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/model/{id}/variants", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetModelVariantAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPathwayDiseaseAssociations - Returns diseases associated with a pathway
  **/
  getPathwayDiseaseAssociations(
    req: operations.GetPathwayDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPathwayDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPathwayDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/pathway/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPathwayDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPathwayGeneAssociations - Returns genes associated with a pathway
  **/
  getPathwayGeneAssociations(
    req: operations.GetPathwayGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPathwayGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPathwayGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/pathway/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPathwayGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPathwayPhenotypeAssociations - Returns phenotypes associated with a pathway
  **/
  getPathwayPhenotypeAssociations(
    req: operations.GetPathwayPhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPathwayPhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPathwayPhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/pathway/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPathwayPhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypeAnatomyAssociations - Returns anatomical entities associated with a phenotype
   *
   * Example IDs:
   * 
   *  * MP:0008521 abnormal Bowman membrane
  **/
  getPhenotypeAnatomyAssociations(
    req: operations.GetPhenotypeAnatomyAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypeAnatomyAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypeAnatomyAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/anatomy", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypeAnatomyAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.namedObjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypeCaseAssociations - Returns cases associated with a phenotype
  **/
  getPhenotypeCaseAssociations(
    req: operations.GetPhenotypeCaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypeCaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypeCaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/cases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypeCaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypeDiseaseAssociations - Returns diseases associated with a phenotype
  **/
  getPhenotypeDiseaseAssociations(
    req: operations.GetPhenotypeDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypeDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypeDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypeDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.d2PAssociationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypeGeneAssociations - Returns genes associated with a phenotype
  **/
  getPhenotypeGeneAssociations(
    req: operations.GetPhenotypeGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypeGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypeGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypeGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypeGeneByTaxonAssociations - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
   *
   * For example, MP:0001569 + NCBITaxon:10090 (mouse)
  **/
  getPhenotypeGeneByTaxonAssociations(
    req: operations.GetPhenotypeGeneByTaxonAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypeGeneByTaxonAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypeGeneByTaxonAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/gene/{taxid}/ids", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypeGeneByTaxonAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypeGenotypeAssociations - Returns genotypes associated with a phenotype
  **/
  getPhenotypeGenotypeAssociations(
    req: operations.GetPhenotypeGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypeGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypeGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypeGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypePathwayAssociations - Returns pathways associated with a phenotype
  **/
  getPhenotypePathwayAssociations(
    req: operations.GetPhenotypePathwayAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypePathwayAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypePathwayAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/pathways", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypePathwayAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypePublicationAssociations - Returns publications associated with a phenotype
  **/
  getPhenotypePublicationAssociations(
    req: operations.GetPhenotypePublicationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypePublicationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypePublicationAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/publications", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypePublicationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPhenotypeVariantAssociations - Returns variants associated with a phenotype
  **/
  getPhenotypeVariantAssociations(
    req: operations.GetPhenotypeVariantAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPhenotypeVariantAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPhenotypeVariantAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/phenotype/{id}/variants", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPhenotypeVariantAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPublicationDiseaseAssociations - Returns diseases associated with a publication
  **/
  getPublicationDiseaseAssociations(
    req: operations.GetPublicationDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicationDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicationDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/publication/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicationDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPublicationGeneAssociations - Returns genes associated with a publication
  **/
  getPublicationGeneAssociations(
    req: operations.GetPublicationGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicationGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicationGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/publication/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicationGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPublicationGenotypeAssociations - Returns genotypes associated with a publication
  **/
  getPublicationGenotypeAssociations(
    req: operations.GetPublicationGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicationGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicationGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/publication/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicationGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPublicationModelAssociations - Returns models associated with a publication
  **/
  getPublicationModelAssociations(
    req: operations.GetPublicationModelAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicationModelAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicationModelAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/publication/{id}/models", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicationModelAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPublicationPhenotypeAssociations - Returns phenotypes associated with a publication
  **/
  getPublicationPhenotypeAssociations(
    req: operations.GetPublicationPhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicationPhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicationPhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/publication/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicationPhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getPublicationVariantAssociations - Returns variants associated with a publication
  **/
  getPublicationVariantAssociations(
    req: operations.GetPublicationVariantAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPublicationVariantAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPublicationVariantAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/publication/{id}/variants", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetPublicationVariantAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSubstanceParticipantInAssociations - Returns associations between an activity and process and the specified substance
   *
   * Examples relationships:
   * 
   *  * substance is a metabolite of a process
   *  * substance is synthesized by a process
   *  * substance is modified by an activity
   *  * substance elicits a response program/pathway
   *  * substance is transported by activity or pathway
   * 
   * For example, CHEBI:40036 (amitrole)
  **/
  getSubstanceParticipantInAssociations(
    req: operations.GetSubstanceParticipantInAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceParticipantInAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceParticipantInAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/substance/{id}/participant_in", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetSubstanceParticipantInAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associations = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSubstanceRoleAssociations - Returns associations between given drug and roles
   *
   * Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)
  **/
  getSubstanceRoleAssociations(
    req: operations.GetSubstanceRoleAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceRoleAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceRoleAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/substance/{id}/roles", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetSubstanceRoleAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associations = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSubstanceTreatsAssociations - Returns substances associated with a disease
   *
   * e.g. drugs or small molecules used to treat
  **/
  getSubstanceTreatsAssociations(
    req: operations.GetSubstanceTreatsAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubstanceTreatsAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubstanceTreatsAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/substance/{id}/treats", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetSubstanceTreatsAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * getVariantCaseAssociations - Returns cases associated with a variant
  **/
  getVariantCaseAssociations(
    req: operations.GetVariantCaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantCaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantCaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/variant/{id}/cases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVariantCaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVariantDiseaseAssociations - Returns diseases associated with a variant
  **/
  getVariantDiseaseAssociations(
    req: operations.GetVariantDiseaseAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantDiseaseAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantDiseaseAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/variant/{id}/diseases", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVariantDiseaseAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVariantGeneAssociations - Returns genes associated with a variant
  **/
  getVariantGeneAssociations(
    req: operations.GetVariantGeneAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantGeneAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantGeneAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/variant/{id}/genes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVariantGeneAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVariantGenotypeAssociations - Returns genotypes associated with a variant
  **/
  getVariantGenotypeAssociations(
    req: operations.GetVariantGenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantGenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantGenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/variant/{id}/genotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVariantGenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVariantModelAssociations - Returns models associated with a variant
  **/
  getVariantModelAssociations(
    req: operations.GetVariantModelAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantModelAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantModelAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/variant/{id}/models", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVariantModelAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVariantPhenotypeAssociations - Returns phenotypes associated with a variant
  **/
  getVariantPhenotypeAssociations(
    req: operations.GetVariantPhenotypeAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantPhenotypeAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantPhenotypeAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/variant/{id}/phenotypes", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVariantPhenotypeAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getVariantPublicationAssociations - Returns publications associated with a variant
  **/
  getVariantPublicationAssociations(
    req: operations.GetVariantPublicationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVariantPublicationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVariantPublicationAssociationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/bioentity/variant/{id}/publications", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetVariantPublicationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.associationResults = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
